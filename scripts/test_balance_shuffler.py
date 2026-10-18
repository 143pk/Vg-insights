import json
import random
import re

LETTERS = ["A", "B", "C", "D"]

def balance_question_bank(questions, seed=42):
    rng = random.Random(seed)
    n = len(questions)
    
    # Create an evenly balanced target answer list
    base_counts = n // 4
    remainder = n % 4
    target_answers = ["A"] * base_counts + ["B"] * base_counts + ["C"] * base_counts + ["D"] * base_counts
    rem_letters = ["A", "B", "C", "D"][:remainder]
    target_answers.extend(rem_letters)
    rng.shuffle(target_answers)
    
    balanced_qs = []
    
    for idx, q in enumerate(questions):
        old_ans = q["correctAnswer"] # e.g. "A"
        new_ans = target_answers[idx] # target letter e.g. "C"
        
        old_opts = q["options"] # {"A": tA, "B": tB, "C": tC, "D": tD}
        correct_text = old_opts[old_ans]
        
        # Other 3 letters and texts
        old_wrong_letters = [k for k in LETTERS if k != old_ans]
        old_wrong_texts = [old_opts[k] for k in old_wrong_letters]
        
        # New wrong letters
        new_wrong_letters = [k for k in LETTERS if k != new_ans]
        # Shuffle wrong texts slightly or keep in relative order
        # To maintain natural order of distractors:
        new_opts = {}
        new_opts[new_ans] = correct_text
        mapping = {old_ans: new_ans}
        
        for ow_k, nw_k in zip(old_wrong_letters, new_wrong_letters):
            new_opts[nw_k] = old_opts[ow_k]
            mapping[ow_k] = nw_k
            
        new_options_list = [new_opts["A"], new_opts["B"], new_opts["C"], new_opts["D"]]
        new_idx = LETTERS.index(new_ans)
        
        # Remap explanation and whyOtherOptionsWrong
        old_explanation = q.get("explanation", "")
        old_structured = q.get("solutionStructured", {})
        old_why_wrong = old_structured.get("whyOtherOptionsWrong", "")
        
        def remap_text(text):
            if not text:
                return ""
            # Placeholder replacement
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
        new_q["options"] = new_opts
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
        
        balanced_qs.append(new_q)
        
    return balanced_qs

print("Testing on sample questions...")
from scripts.bc_data_part1 import get_part1_questions
qs = get_part1_questions()[:10]
res = balance_question_bank(qs, seed=100)
for r in res[:5]:
    print(r["id"], "-> Answer:", r["correctAnswer"], "| Option text:", r["options"][r["correctAnswer"]][:40])
    print("   Options:", {k: v[:20] for k, v in r["options"].items()})
