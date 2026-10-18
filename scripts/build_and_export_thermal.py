#!/usr/bin/env python3
"""
Master Builder and Exporter for Thermal Properties of Matter (500 MCQs)
Generates the four TypeScript part files and dataset aggregator:
- src/data/chapterwise/physics/thermalPropertiesMatterPart1.ts
- src/data/chapterwise/physics/thermalPropertiesMatterPart2.ts
- src/data/chapterwise/physics/thermalPropertiesMatterPart3.ts
- src/data/chapterwise/physics/thermalPropertiesMatterPart4.ts
- src/data/chapterwise/physics/thermalPropertiesMatterData.ts
"""

import os
import sys
import json
from gen_thermal_p1 import get_part1_questions
from gen_thermal_p2 import get_part2_questions
from gen_thermal_p3 import get_part3_questions
from gen_thermal_p4 import get_part4_questions

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

    parts = [
        ("Part 1", "thermalPropertiesMatterPart1.ts", "THERMAL_PROPERTIES_MATTER_PART1_MCQS", p1),
        ("Part 2", "thermalPropertiesMatterPart2.ts", "THERMAL_PROPERTIES_MATTER_PART2_MCQS", p2),
        ("Part 3", "thermalPropertiesMatterPart3.ts", "THERMAL_PROPERTIES_MATTER_PART3_MCQS", p3),
        ("Part 4", "thermalPropertiesMatterPart4.ts", "THERMAL_PROPERTIES_MATTER_PART4_MCQS", p4),
    ]

    for part_title, filename, var_name, q_list in parts:
        filepath = os.path.join(out_dir, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"// Auto-generated verified NEET UG Question Bank\n")
            f.write(f"// Subject: Physics | Class: 11 | Chapter: Thermal Properties of Matter ({part_title})\n")
            f.write(f"// Strict adherence to NMC NEET UG syllabus, NCERT Class 11 Physics standards\n\n")
            f.write("import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';\n\n")
            f.write(f"export const {var_name}: ChapterwiseMCQ[] = ")
            f.write(json.dumps(q_list, indent=2, ensure_ascii=False))
            f.write(";\n")
        print(f"Exported {filepath} with {len(q_list)} MCQs.")

    # Generate aggregator data file
    agg_path = os.path.join(out_dir, "thermalPropertiesMatterData.ts")
    with open(agg_path, "w", encoding="utf-8") as f:
        f.write(f"""// Auto-generated verified NEET UG Question Bank
// Subject: Physics | Class: 11 | Chapter: Thermal Properties of Matter
// Target: Exactly 500 MCQs (Easy: 125, Medium: 250, Hard: 125)
// Topics Covered: All NMC NEET UG 2026 Core Syllabus Topics with exhaustive step-by-step solutions

import {{ ChapterwiseMCQ }} from '../../../types/chapterwiseMcq';
import {{ THERMAL_PROPERTIES_MATTER_PART1_MCQS }} from './thermalPropertiesMatterPart1';
import {{ THERMAL_PROPERTIES_MATTER_PART2_MCQS }} from './thermalPropertiesMatterPart2';
import {{ THERMAL_PROPERTIES_MATTER_PART3_MCQS }} from './thermalPropertiesMatterPart3';
import {{ THERMAL_PROPERTIES_MATTER_PART4_MCQS }} from './thermalPropertiesMatterPart4';

export const THERMAL_PROPERTIES_MATTER_MCQS: ChapterwiseMCQ[] = [
  ...THERMAL_PROPERTIES_MATTER_PART1_MCQS,
  ...THERMAL_PROPERTIES_MATTER_PART2_MCQS,
  ...THERMAL_PROPERTIES_MATTER_PART3_MCQS,
  ...THERMAL_PROPERTIES_MATTER_PART4_MCQS,
];

export const THERMAL_PROPERTIES_MATTER_STATS = {{
  chapterId: 'thermal-properties-matter',
  chapterTitle: 'Thermal Properties of Matter',
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
    print(f"Exported aggregator {agg_path}.")

if __name__ == "__main__":
    build()
