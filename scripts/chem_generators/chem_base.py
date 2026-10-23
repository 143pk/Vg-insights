import os
import json

ANS_KEYS = ['A', 'B', 'C', 'D']

def assign_options(options_array, target_idx):
    """
    options_array is [correct_option_text, distractor_1, distractor_2, distractor_3]
    target_idx is 0, 1, 2, or 3
    Places correct_option_text at target_idx and others around it deterministically.
    """
    target_key = ANS_KEYS[target_idx]
    correct_text = options_array[0]
    distractors = options_array[1:]

    opts = {}
    d_idx = 0
    for i in range(4):
        key = ANS_KEYS[i]
        if i == target_idx:
            opts[key] = correct_text
        else:
            opts[key] = distractors[d_idx]
            d_idx += 1

    options_list = [opts['A'], opts['B'], opts['C'], opts['D']]
    return opts, options_list, target_key, target_idx

def build_mcq(
    q_num,
    id_prefix,
    chapter_id,
    chapter_title,
    topic_id,
    topic_title,
    subtopic,
    question,
    options_array,
    explanation_dict,
    difficulty,
    is_pyq=False,
    pyq_source=None
):
    target_idx = (q_num - 1) % 4
    opts, opts_list, correct_ans, correct_idx = assign_options(options_array, target_idx)

    # Format structured explanation
    concept = explanation_dict.get('concept', '')
    given = explanation_dict.get('given', '')
    formula = explanation_dict.get('formula', '')
    step_by_step = explanation_dict.get('step_by_step', '')
    final_ans = explanation_dict.get('final_ans', f"Option {correct_ans}: {opts[correct_ans]}")
    why_wrong = explanation_dict.get('why_wrong', '')

    full_exp_parts = [
        f"1. CONCEPT & PRINCIPLE:\n{concept}",
    ]
    if given:
        full_exp_parts.append(f"2. GIVEN INFORMATION / DATA:\n{given}")
    if formula:
        full_exp_parts.append(f"3. FORMULA / EQUATION:\n{formula}")
    
    full_exp_parts.append(f"4. STEP-BY-STEP REASONING & CALCULATION:\n{step_by_step}")
    full_exp_parts.append(f"5. FINAL CONCLUSION:\n{final_ans}")
    if why_wrong:
        full_exp_parts.append(f"6. OPTION ANALYSIS & COMMON TRAPS:\n{why_wrong}")

    full_explanation = "\n\n".join(full_exp_parts)

    q_data = {
        "id": f"{id_prefix}-mcq-{q_num:03d}",
        "questionNumber": q_num,
        "question": question.strip(),
        "options": opts,
        "optionsList": opts_list,
        "correctAnswer": correct_ans,
        "correctIndex": correct_idx,
        "explanation": full_explanation.strip(),
        "solutionStructured": {
            "concept": concept.strip(),
            "given": given.strip() if given else None,
            "formula": formula.strip() if formula else None,
            "stepByStep": step_by_step.strip(),
            "finalAnswer": final_ans.strip(),
            "whyOtherOptionsWrong": why_wrong.strip() if why_wrong else None
        },
        "difficulty": difficulty,
        "subject": "Chemistry",
        "class": "12",
        "chapter": chapter_title,
        "chapterId": chapter_id,
        "topic": topic_title,
        "topicId": topic_id,
        "subtopic": subtopic,
        "source": pyq_source or "NEET UG Chapterwise Bank",
        "isPYQ": is_pyq,
        "isPyq": is_pyq
    }

    if is_pyq and pyq_source:
        q_data["pyqDetails"] = {
            "exam": "NEET UG",
            "year": pyq_source
        }

    return q_data

def validate_chapter(mcqs, chapter_id):
    if len(mcqs) != 500:
        raise ValueError(f"Chapter {chapter_id} has {len(mcqs)} questions, expected 500")

    seen_ids = set()
    counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
    diff_counts = {'Easy': 0, 'Medium': 0, 'Hard': 0}

    for q in mcqs:
        qid = q['id']
        if qid in seen_ids:
            raise ValueError(f"Duplicate ID found: {qid}")
        seen_ids.add(qid)

        ans = q['correctAnswer']
        if ans not in counts:
            raise ValueError(f"Invalid answer {ans} in {qid}")
        counts[ans] += 1

        diff = q['difficulty']
        if diff not in diff_counts:
            raise ValueError(f"Invalid difficulty {diff} in {qid}")
        diff_counts[diff] += 1

        if not q['options']['A'] or not q['options']['B'] or not q['options']['C'] or not q['options']['D']:
            raise ValueError(f"Empty option in {qid}")

        if len(q['explanation']) < 40:
            raise ValueError(f"Explanation too short in {qid}")

    print(f"[{chapter_id}] Validation SUCCESS: 500 MCQs.")
    print(f"  Difficulties: {diff_counts['Easy']} Easy, {diff_counts['Medium']} Medium, {diff_counts['Hard']} Hard")
    print(f"  Option distribution: A={counts['A']}, B={counts['B']}, C={counts['C']}, D={counts['D']}")

def save_chapter_files(file_base_name, export_prefix, chapter_id, chapter_title, part1, part2, part3, part4):
    out_dir = "src/data/chapterwise/chemistry"
    os.makedirs(out_dir, exist_ok=True)

    parts = [
        (part1, f"{file_base_name}Part1.ts", f"{export_prefix}_PART1_MCQS", "Part 1: Q1 to Q125 (Easy: 125 MCQs)"),
        (part2, f"{file_base_name}Part2.ts", f"{export_prefix}_PART2_MCQS", "Part 2: Q126 to Q250 (Medium: 125 MCQs)"),
        (part3, f"{file_base_name}Part3.ts", f"{export_prefix}_PART3_MCQS", "Part 3: Q251 to Q375 (Medium: 125 MCQs)"),
        (part4, f"{file_base_name}Part4.ts", f"{export_prefix}_PART4_MCQS", "Part 4: Q376 to Q500 (Hard: 125 MCQs)"),
    ]

    for p_mcqs, filename, export_var, comment in parts:
        filepath = os.path.join(out_dir, filename)
        content = f"""// {comment}
// Chapter: {chapter_title} (ID: {chapter_id}) | Class 12 Chemistry
import {{ ChapterwiseMCQ }} from "../../../types/chapterwiseMcq";

export const {export_var}: ChapterwiseMCQ[] = {json.dumps(p_mcqs, indent=2)};
"""
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  Wrote {filepath} ({len(p_mcqs)} MCQs)")

    # Master index file
    master_file = os.path.join(out_dir, f"{file_base_name}Data.ts")
    master_content = f"""// Complete 500 MCQs for {chapter_title} (Class 12 Chemistry)
import {{ ChapterwiseMCQ }} from '../../../types/chapterwiseMcq';
import {{ {export_prefix}_PART1_MCQS }} from './{file_base_name}Part1';
import {{ {export_prefix}_PART2_MCQS }} from './{file_base_name}Part2';
import {{ {export_prefix}_PART3_MCQS }} from './{file_base_name}Part3';
import {{ {export_prefix}_PART4_MCQS }} from './{file_base_name}Part4';

export const {export_prefix}_MCQS: ChapterwiseMCQ[] = [
  ...{export_prefix}_PART1_MCQS,
  ...{export_prefix}_PART2_MCQS,
  ...{export_prefix}_PART3_MCQS,
  ...{export_prefix}_PART4_MCQS,
];

export const {export_prefix}_STATS = {{
  chapterId: '{chapter_id}',
  chapterTitle: '{chapter_title}',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
}};
"""
    with open(master_file, "w", encoding="utf-8") as f:
        f.write(master_content)
    print(f"  Wrote master file {master_file}")
