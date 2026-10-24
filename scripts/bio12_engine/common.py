import json
import os
import random
from typing import List, Dict, Any

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

LETTERS = ["A", "B", "C", "D"]

def balance_and_build_parts(
    chapter_id: str,
    chapter_title: str,
    raw_questions: List[Dict[str, Any]],
    file_prefix: str,
    var_prefix: str,
    seed: int = 42
):
    """
    Takes 500 questions, balances answer distribution (A, B, C, D ~ 125 each),
    verifies consistency, and writes out:
      <file_prefix>Part1Data.ts (Q1-125, Easy)
      <file_prefix>Part2Data.ts (Q126-250, Medium)
      <file_prefix>Part3Data.ts (Q251-375, Medium)
      <file_prefix>Part4Data.ts (Q376-500, Hard)
      <file_prefix>Data.ts (aggregating all 4 parts)
    """
    assert len(raw_questions) == 500, f"Expected 500 questions for {chapter_id}, got {len(raw_questions)}"
    rng = random.Random(seed)

    # Balance each 125-question batch to have 31, 31, 31, 32 of A, B, C, D
    processed_all: List[Dict[str, Any]] = []

    for batch_idx in range(4):
        batch_start = batch_idx * 125
        batch_end = batch_start + 125
        batch = raw_questions[batch_start:batch_end]
        
        # Determine target answer letters
        base = 125 // 4 # 31
        rem = 125 % 4  # 1
        targets = ["A"] * base + ["B"] * base + ["C"] * base + ["D"] * base
        targets.extend(["A", "B", "C", "D"][:rem])
        rng.shuffle(targets)

        for i, q in enumerate(batch):
            q_num = batch_start + i + 1
            diff = "Easy" if batch_idx == 0 else ("Medium" if batch_idx in (1, 2) else "Hard")
            
            orig_ans = q["ans"] # 'A', 'B', 'C', or 'D'
            target_ans = targets[i]
            orig_opts = dict(q["opts"])

            # Map the options so that the correct answer is moved to target_ans
            curr_wrong_letters = [k for k in LETTERS if k != orig_ans]
            target_wrong_letters = [k for k in LETTERS if k != target_ans]
            rng.shuffle(curr_wrong_letters)

            letter_map = {orig_ans: target_ans}
            for w_curr, w_target in zip(curr_wrong_letters, target_wrong_letters):
                letter_map[w_curr] = w_target

            new_opts = {}
            for old_letter, text in orig_opts.items():
                new_opts[letter_map[old_letter]] = text

            sorted_opts = {k: new_opts[k] for k in LETTERS}
            ans_letter = target_ans
            ans_idx = LETTERS.index(ans_letter)
            ans_text = sorted_opts[ans_letter]

            concept = q["concept"].strip()
            step = q["step"].strip()
            why_wrong = q["why_wrong"].strip()

            explanation = (
                f"1. CONCEPT:\n{concept}\n\n"
                f"2. STEP-BY-STEP SOLUTION:\n{step}\n\n"
                f"3. FINAL ANSWER:\nOption {ans_letter}: {ans_text}\n\n"
                f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
            )

            processed_q = {
                "id": f"{chapter_id}-mcq-{q_num:03d}",
                "questionNumber": q_num,
                "question": q["question"].strip(),
                "options": sorted_opts,
                "optionsList": [sorted_opts["A"], sorted_opts["B"], sorted_opts["C"], sorted_opts["D"]],
                "correctAnswer": ans_letter,
                "correctOption": ans_letter,
                "correctIndex": ans_idx,
                "explanation": explanation,
                "solutionStructured": {
                    "concept": concept,
                    "stepByStep": step,
                    "finalAnswer": f"Option {ans_letter}: {ans_text}",
                    "whyOtherOptionsWrong": why_wrong
                },
                "difficulty": diff,
                "subject": "Biology",
                "class": "12",
                "chapter": chapter_title,
                "chapterId": chapter_id,
                "topic": q["topic"].strip(),
                "topicId": q["topicId"].strip(),
                "subtopic": q["subtopic"].strip(),
                "source": "VG Insights Practice",
                "isPYQ": False
            }
            processed_all.append(processed_q)

    # Write the 4 part files
    parts = [
        (processed_all[0:125], 1, "Easy"),
        (processed_all[125:250], 2, "Medium"),
        (processed_all[250:375], 3, "Medium"),
        (processed_all[376-1:500], 4, "Hard")
    ]

    for part_qs, p_num, p_diff in parts:
        filename = f"{OUT_DIR}/{file_prefix}Part{p_num}Data.ts"
        var_name = f"{var_prefix}_PART{p_num}_MCQS"
        
        with open(filename, "w", encoding="utf-8") as f:
            f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
            f.write(f'export const {var_name}: ChapterwiseMCQ[] = ')
            json.dump(part_qs, f, indent=2, ensure_ascii=False)
            f.write(';\n')
        print(f"Wrote {len(part_qs)} MCQs to {filename}")

    # Write the main data file aggregating all 4 parts
    main_filename = f"{OUT_DIR}/{file_prefix}Data.ts"
    with open(main_filename, "w", encoding="utf-8") as f:
        f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n')
        for p in range(1, 5):
            f.write(f'import {{ {var_prefix}_PART{p}_MCQS }} from "./{file_prefix}Part{p}Data";\n')
        f.write('\n')
        f.write(f'export const {var_prefix}_MCQS: ChapterwiseMCQ[] = [\n')
        for p in range(1, 5):
            f.write(f'  ...{var_prefix}_PART{p}_MCQS,\n')
        f.write('];\n\n')
        f.write(f'export const {var_prefix}_STATS = {{\n')
        f.write(f'  chapterId: "{chapter_id}",\n')
        f.write(f'  chapterTitle: "{chapter_title}",\n')
        f.write('  subject: "Biology",\n')
        f.write('  class: "12",\n')
        f.write('  totalQuestions: 500,\n')
        f.write('  easyCount: 125,\n')
        f.write('  mediumCount: 250,\n')
        f.write('  hardCount: 125,\n')
        f.write('  pyqCount: 0,\n')
        f.write('  practiceCount: 500,\n')
        f.write('};\n')
    print(f"Wrote main aggregator to {main_filename}")

    # Calculate answer distribution
    ans_counts = {"A": 0, "B": 0, "C": 0, "D": 0}
    for q in processed_all:
        ans_counts[q["correctAnswer"]] += 1
    print(f"Done {chapter_id}: Answer distribution = {ans_counts}")

    return processed_all, ans_counts
