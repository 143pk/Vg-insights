import json
import os
import random
import re
from collections import Counter

LETTERS = ["A", "B", "C", "D"]

def balance_questions(questions, seed=101):
    rng = random.Random(seed)
    n = len(questions)
    
    # Generate balanced distribution
    base = n // 4
    rem = n % 4
    target_letters = ["A"] * base + ["B"] * base + ["C"] * base + ["D"] * base
    extra = ["A", "B", "C", "D"][:rem]
    target_letters.extend(extra)
    rng.shuffle(target_letters)
    
    balanced = []
    
    for i, q in enumerate(questions):
        old_ans = q["correctAnswer"]
        new_ans = target_letters[i]
        
        old_opts = q["options"]
        correct_text = old_opts[old_ans]
        
        # Collect incorrect options
        old_wrong_letters = [k for k in LETTERS if k != old_ans]
        new_wrong_letters = [k for k in LETTERS if k != new_ans]
        
        # Map old letters to new letters
        mapping = {old_ans: new_ans}
        for ow, nw in zip(old_wrong_letters, new_wrong_letters):
            mapping[ow] = nw
            
        # Reconstruct new options dictionary
        new_opts = {}
        for old_k, text in old_opts.items():
            new_k = mapping[old_k]
            new_opts[new_k] = text
            
        # Ensure alphabetical key ordering
        sorted_opts = {k: new_opts[k] for k in LETTERS}
        new_options_list = [sorted_opts[k] for k in LETTERS]
        new_idx = LETTERS.index(new_ans)
        
        # Remap references to Option X in explanation
        old_structured = q.get("solutionStructured", {})
        old_why_wrong = old_structured.get("whyOtherOptionsWrong", "")
        
        def remap_text(text):
            if not text:
                return ""
            for old_k in LETTERS:
                text = re.sub(r'\bOption ' + old_k + r'\b', f'__OPT_{old_k}__', text)
                text = re.sub(r'\bOptions ' + old_k + r'\b', f'__OPTS_{old_k}__', text)
            for old_k in LETTERS:
                nw_k = mapping[old_k]
                text = text.replace(f'__OPT_{old_k}__', f'Option {nw_k}')
                text = text.replace(f'__OPTS_{old_k}__', f'Options {nw_k}')
            return text
            
        new_why_wrong = remap_text(old_why_wrong)
        concept = old_structured.get("concept", "")
        step_by_step = old_structured.get("stepByStep", "")
        final_answer = f"Option {new_ans}: {correct_text}"
        
        new_explanation = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. STEP-BY-STEP SOLUTION:\n{step_by_step}\n\n"
            f"3. FINAL ANSWER:\n{final_answer}\n\n"
            f"4. WHY OTHER OPTIONS ARE WRONG:\n{new_why_wrong}"
        )
        
        new_q = dict(q)
        new_q["options"] = sorted_opts
        new_q["optionsList"] = new_options_list
        new_q["correctAnswer"] = new_ans
        new_q["correctIndex"] = new_idx
        new_q["explanation"] = new_explanation
        new_q["solutionStructured"] = {
            "concept": concept,
            "stepByStep": step_by_step,
            "finalAnswer": final_answer,
            "whyOtherOptionsWrong": new_why_wrong
        }
        balanced.append(new_q)
        
    return balanced

def extract_questions_from_ts(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    # Find JSON-like array
    match = re.search(r'export const \w+:\s*ChapterwiseMCQ\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not parse array in {filepath}")
    array_str = match.group(1).strip()
    array_str = re.sub(r',\s*\]$', ']', array_str)
    return json.loads(array_str)

def write_questions_to_ts(filepath, var_name, questions):
    with open(filepath, "w") as f:
        f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
        f.write(f'export const {var_name}: ChapterwiseMCQ[] = [\n')
        for q in questions:
            f.write(f'  {json.dumps(q, indent=2)},\n')
        f.write('];\n')
    print(f"Updated {filepath} ({len(questions)} questions)")

def process_chapter(ch_slug, var_prefix, seeds):
    total_counts = Counter()
    for p in range(1, 5):
        fn = f"src/data/chapterwise/biology/{ch_slug}Part{p}.ts"
        var_name = f"{var_prefix}_PART{p}_MCQS"
        qs = extract_questions_from_ts(fn)
        balanced_qs = balance_questions(qs, seed=seeds[p-1])
        c = Counter(q["correctAnswer"] for q in balanced_qs)
        total_counts.update(c)
        print(f"{ch_slug} Part {p} distribution: {dict(c)}")
        write_questions_to_ts(fn, var_name, balanced_qs)
    print(f"TOTAL {ch_slug} distribution across 500 MCQs: {dict(total_counts)}\n")

print("--- REBALANCING BIOLOGICAL CLASSIFICATION ---")
process_chapter("biologicalClassification", "BIOLOGICAL_CLASSIFICATION", [101, 202, 303, 404])

print("--- REBALANCING LIVING WORLD ---")
process_chapter("livingWorld", "LIVING_WORLD", [505, 606, 707, 808])

print("REBALANCING COMPLETE!")
