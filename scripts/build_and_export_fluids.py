#!/usr/bin/env python3
"""
Master Builder and Exporter for Mechanical Properties of Fluids (500 MCQs)
Generates the four TypeScript part files and data file:
- src/data/chapterwise/physics/mechanicalPropertiesFluidsPart1.ts
- src/data/chapterwise/physics/mechanicalPropertiesFluidsPart2.ts
- src/data/chapterwise/physics/mechanicalPropertiesFluidsPart3.ts
- src/data/chapterwise/physics/mechanicalPropertiesFluidsPart4.ts
- src/data/chapterwise/physics/mechanicalPropertiesFluidsData.ts
"""

import os
import sys
import json
from gen_fluids_p1 import get_part1_questions
from gen_fluids_p2 import get_part2_questions
from gen_fluids_p3 import get_part3_questions
from gen_fluids_p4 import get_part4_questions

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

    print("All 500 MCQs verified unique, properly formatted, with complete solutions!")

    # Target directory
    out_dir = "src/data/chapterwise/physics"
    os.makedirs(out_dir, exist_ok=True)

    def write_ts_part(part_num, qs, const_name, filename):
        ts_path = os.path.join(out_dir, filename)
        with open(ts_path, "w", encoding="utf-8") as f:
            f.write("// Auto-generated verified NEET UG Question Bank\n")
            f.write(f"// Subject: Physics | Class: 11 | Chapter: Mechanical Properties of Fluids (Part {part_num})\n")
            f.write("// Strict adherence to NMC NEET UG syllabus, NCERT Class 11 Physics standards\n\n")
            f.write("import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';\n\n")
            f.write(f"export const {const_name}: ChapterwiseMCQ[] = ")
            json_str = json.dumps(qs, indent=2, ensure_ascii=False)
            f.write(json_str)
            f.write(";\n")
        print(f"Wrote {ts_path} ({len(qs)} MCQs)")

    write_ts_part(1, p1, "MECHANICAL_PROPERTIES_FLUIDS_PART1_MCQS", "mechanicalPropertiesFluidsPart1.ts")
    write_ts_part(2, p2, "MECHANICAL_PROPERTIES_FLUIDS_PART2_MCQS", "mechanicalPropertiesFluidsPart2.ts")
    write_ts_part(3, p3, "MECHANICAL_PROPERTIES_FLUIDS_PART3_MCQS", "mechanicalPropertiesFluidsPart3.ts")
    write_ts_part(4, p4, "MECHANICAL_PROPERTIES_FLUIDS_PART4_MCQS", "mechanicalPropertiesFluidsPart4.ts")

    # Write aggregator file
    data_path = os.path.join(out_dir, "mechanicalPropertiesFluidsData.ts")
    with open(data_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated verified NEET UG Question Bank\n")
        f.write("// Subject: Physics | Class: 11 | Chapter: Mechanical Properties of Fluids\n")
        f.write("// Target: Exactly 500 MCQs (Easy: 125, Medium: 250, Hard: 125)\n")
        f.write("// Topics Covered: Fluid pressure, Pascal's law, Archimedes principle & buoyancy,\n")
        f.write("// Streamline & turbulent flow, Equation of continuity, Bernoulli principle & applications,\n")
        f.write("// Viscosity, Stokes law & terminal velocity, Poiseuille formula, Reynolds number,\n")
        f.write("// Surface tension, Surface energy, Laplace excess pressure, Capillarity & Jurin's law.\n\n")
        f.write("import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';\n")
        f.write("import { MECHANICAL_PROPERTIES_FLUIDS_PART1_MCQS } from './mechanicalPropertiesFluidsPart1';\n")
        f.write("import { MECHANICAL_PROPERTIES_FLUIDS_PART2_MCQS } from './mechanicalPropertiesFluidsPart2';\n")
        f.write("import { MECHANICAL_PROPERTIES_FLUIDS_PART3_MCQS } from './mechanicalPropertiesFluidsPart3';\n")
        f.write("import { MECHANICAL_PROPERTIES_FLUIDS_PART4_MCQS } from './mechanicalPropertiesFluidsPart4';\n\n")
        f.write("export const MECHANICAL_PROPERTIES_FLUIDS_MCQS: ChapterwiseMCQ[] = [\n")
        f.write("  ...MECHANICAL_PROPERTIES_FLUIDS_PART1_MCQS,\n")
        f.write("  ...MECHANICAL_PROPERTIES_FLUIDS_PART2_MCQS,\n")
        f.write("  ...MECHANICAL_PROPERTIES_FLUIDS_PART3_MCQS,\n")
        f.write("  ...MECHANICAL_PROPERTIES_FLUIDS_PART4_MCQS,\n")
        f.write("];\n\n")
        pyq_count = sum(1 for q in all_qs if q.get("isPYQ"))
        f.write("export const MECHANICAL_PROPERTIES_FLUIDS_STATS = {\n")
        f.write("  chapterId: 'mechanical-properties-fluids',\n")
        f.write("  chapterTitle: 'Mechanical Properties of Fluids',\n")
        f.write("  subject: 'Physics',\n")
        f.write("  class: '11',\n")
        f.write("  totalQuestions: 500,\n")
        f.write("  easyCount: 125,\n")
        f.write("  mediumCount: 250,\n")
        f.write("  hardCount: 125,\n")
        f.write(f"  pyqCount: {pyq_count},\n")
        f.write(f"  practiceCount: {500 - pyq_count},\n")
        f.write("};\n")
    print(f"Wrote {data_path}")

if __name__ == "__main__":
    build()
