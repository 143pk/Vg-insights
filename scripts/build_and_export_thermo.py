#!/usr/bin/env python3
"""
Master Builder and Exporter for Thermodynamics (500 MCQs)
Generates the four TypeScript part files and dataset aggregator:
- src/data/chapterwise/physics/thermodynamicsPart1.ts
- src/data/chapterwise/physics/thermodynamicsPart2.ts
- src/data/chapterwise/physics/thermodynamicsPart3.ts
- src/data/chapterwise/physics/thermodynamicsPart4.ts
- src/data/chapterwise/physics/thermodynamicsData.ts
"""

import os
import sys
import json
from gen_thermo_p1 import get_part1_questions
from gen_thermo_p2 import get_part2_questions
from gen_thermo_p3 import get_part3_questions
from gen_thermo_p4 import get_part4_questions

def build():
    p1 = get_part1_questions()
    p2 = get_part2_questions()
    p3 = get_part3_questions()
    p4 = get_part4_questions()

    all_qs = p1 + p2 + p3 + p4
    print(f"Total collected questions: {len(all_qs)}")
    assert len(all_qs) == 500, f"Expected 500 questions, got {len(all_qs)}"

    # Validate distribution
    easy = [q for q in all_qs if q["difficulty"] == "Easy"]
    med = [q for q in all_qs if q["difficulty"] == "Medium"]
    hard = [q for q in all_qs if q["difficulty"] == "Hard"]

    print(f"Difficulty breakdown: Easy={len(easy)}, Medium={len(med)}, Hard={len(hard)}")
    assert len(easy) == 125, f"Expected 125 Easy, got {len(easy)}"
    assert len(med) == 250, f"Expected 250 Medium, got {len(med)}"
    assert len(hard) == 125, f"Expected 125 Hard, got {len(hard)}"

    # Validate IDs and questions uniqueness
    seen_ids = set()
    seen_texts = set()
    for q in all_qs:
        qid = q["id"]
        qtext = q["question"].strip()
        if qid in seen_ids:
            raise ValueError(f"Duplicate ID: {qid}")
        seen_ids.add(qid)
        if qtext in seen_texts:
            raise ValueError(f"Duplicate Question Text: {qtext[:80]}...")
        seen_texts.add(qtext)
        assert len(q["optionsList"]) == 4, f"Question {qid} must have 4 options"
        assert q["correctAnswer"] in ["A", "B", "C", "D"], f"Question {qid} invalid answer"

    pyq_count = sum(1 for q in all_qs if q.get("isPYQ"))
    practice_count = len(all_qs) - pyq_count
    print(f"All 500 MCQs verified unique! PYQs={pyq_count}, Practice={practice_count}")

    # Target directory
    out_dir = "src/data/chapterwise/physics"
    os.makedirs(out_dir, exist_ok=True)

    parts_data = [
        (1, p1, "THERMODYNAMICS_PART1_MCQS", "thermodynamicsPart1.ts"),
        (2, p2, "THERMODYNAMICS_PART2_MCQS", "thermodynamicsPart2.ts"),
        (3, p3, "THERMODYNAMICS_PART3_MCQS", "thermodynamicsPart3.ts"),
        (4, p4, "THERMODYNAMICS_PART4_MCQS", "thermodynamicsPart4.ts"),
    ]

    for part_num, q_list, const_name, filename in parts_data:
        file_path = os.path.join(out_dir, filename)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(f"""// Auto-generated verified NEET UG Question Bank
// Chapter: Thermodynamics | Physics | Class 11 | Part {part_num}
// Target: Exactly 125 MCQs with comprehensive step-by-step solutions
import {{ ChapterwiseMCQ }} from "../../../types/chapterwiseMcq";

export const {const_name}: ChapterwiseMCQ[] = """)
            # Dump JSON array formatted
            json_str = json.dumps(q_list, indent=2, ensure_ascii=False)
            f.write(json_str)
            f.write(";\n")
        print(f"Wrote {len(q_list)} questions to {file_path}")

    # Generate aggregator data file
    agg_path = os.path.join(out_dir, "thermodynamicsData.ts")
    with open(agg_path, "w", encoding="utf-8") as f:
        f.write(f"""// Auto-generated verified NEET UG Question Bank
// Subject: Physics | Class: 11 | Chapter: Thermodynamics
// Target: Exactly 500 MCQs (Easy: 125, Medium: 250, Hard: 125)
// Topics Covered: All 3 NEET core topics with exhaustive step-by-step solutions

import {{ ChapterwiseMCQ }} from '../../../types/chapterwiseMcq';
import {{ THERMODYNAMICS_PART1_MCQS }} from './thermodynamicsPart1';
import {{ THERMODYNAMICS_PART2_MCQS }} from './thermodynamicsPart2';
import {{ THERMODYNAMICS_PART3_MCQS }} from './thermodynamicsPart3';
import {{ THERMODYNAMICS_PART4_MCQS }} from './thermodynamicsPart4';

export const THERMODYNAMICS_MCQS: ChapterwiseMCQ[] = [
  ...THERMODYNAMICS_PART1_MCQS,
  ...THERMODYNAMICS_PART2_MCQS,
  ...THERMODYNAMICS_PART3_MCQS,
  ...THERMODYNAMICS_PART4_MCQS,
];

export const THERMODYNAMICS_STATS = {{
  chapterId: 'thermodynamics-ch',
  chapterTitle: 'Thermodynamics',
  subject: 'Physics',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: {pyq_count},
  practiceCount: {practice_count},
}};
""")
    print(f"Wrote aggregator to {agg_path}")
    print("Thermodynamics generation and export complete!")

if __name__ == "__main__":
    build()
