#!/usr/bin/env python3
"""
Master Builder and Exporter for Mechanical Properties of Solids (500 MCQs)
Generates the four TypeScript part files and data file:
- src/data/chapterwise/physics/mechanicalPropertiesSolidsPart1.ts
- src/data/chapterwise/physics/mechanicalPropertiesSolidsPart2.ts
- src/data/chapterwise/physics/mechanicalPropertiesSolidsPart3.ts
- src/data/chapterwise/physics/mechanicalPropertiesSolidsPart4.ts
- src/data/chapterwise/physics/mechanicalPropertiesSolidsData.ts
"""

import os
import json
from gen_solids_p1 import get_part1_questions
from gen_solids_p2 import get_part2_questions
from gen_solids_p3 import get_part3_questions
from gen_solids_p4 import get_part4_questions

def serialize_ts_part(part_num, questions):
    header = f"""// Auto-generated verified NEET UG Question Bank
// Chapter: Mechanical Properties of Solids | Physics | Class 11 | Part {part_num}
// Target: Exactly 125 MCQs with comprehensive step-by-step solutions
import {{ ChapterwiseMCQ }} from "../../../types/chapterwiseMcq";

export const MECHANICAL_PROPERTIES_SOLIDS_PART{part_num}_MCQS: ChapterwiseMCQ[] = """
    
    body = json.dumps(questions, indent=2, ensure_ascii=False)
    footer = ";\n"
    return header + body + footer

def serialize_data_file(stats):
    content = f"""// Auto-generated verified NEET UG Question Bank
// Subject: Physics | Class: 11 | Chapter: Mechanical Properties of Solids
// Target: Exactly 500 MCQs (Easy: 125, Medium: 250, Hard: 125)
// Topics Covered: All NMC NEET UG 2026 Core Syllabus Topics with exhaustive step-by-step solutions

import {{ ChapterwiseMCQ }} from '../../../types/chapterwiseMcq';
import {{ MECHANICAL_PROPERTIES_SOLIDS_PART1_MCQS }} from './mechanicalPropertiesSolidsPart1';
import {{ MECHANICAL_PROPERTIES_SOLIDS_PART2_MCQS }} from './mechanicalPropertiesSolidsPart2';
import {{ MECHANICAL_PROPERTIES_SOLIDS_PART3_MCQS }} from './mechanicalPropertiesSolidsPart3';
import {{ MECHANICAL_PROPERTIES_SOLIDS_PART4_MCQS }} from './mechanicalPropertiesSolidsPart4';

export const MECHANICAL_PROPERTIES_SOLIDS_MCQS: ChapterwiseMCQ[] = [
  ...MECHANICAL_PROPERTIES_SOLIDS_PART1_MCQS,
  ...MECHANICAL_PROPERTIES_SOLIDS_PART2_MCQS,
  ...MECHANICAL_PROPERTIES_SOLIDS_PART3_MCQS,
  ...MECHANICAL_PROPERTIES_SOLIDS_PART4_MCQS,
];

export const MECHANICAL_PROPERTIES_SOLIDS_STATS = {{
  chapterId: 'mechanical-properties-solids',
  chapterTitle: 'Mechanical Properties of Solids',
  subject: 'Physics',
  class: '11',
  totalQuestions: 500,
  easyCount: {stats['easy']},
  mediumCount: {stats['medium']},
  hardCount: {stats['hard']},
  pyqCount: {stats['pyq']},
  practiceCount: {500 - stats['pyq']},
}};
"""
    return content

def main():
    p1 = get_part1_questions()
    p2 = get_part2_questions()
    p3 = get_part3_questions()
    p4 = get_part4_questions()

    all_qs = p1 + p2 + p3 + p4
    print(f"Total questions generated: {len(all_qs)}")
    assert len(all_qs) == 500, f"Expected 500 questions, got {len(all_qs)}"

    # Validation
    ids = set()
    qnums = set()
    qtexts = set()
    easy = 0
    med = 0
    hard = 0
    pyq = 0

    for q in all_qs:
        assert q['id'] not in ids, f"Duplicate ID: {q['id']}"
        ids.add(q['id'])

        assert q['questionNumber'] not in qnums, f"Duplicate questionNumber: {q['questionNumber']}"
        qnums.add(q['questionNumber'])

        assert q['question'] not in qtexts, f"Duplicate question text: {q['question']}"
        qtexts.add(q['question'])

        assert len(q['optionsList']) == 4, f"Options count != 4 for {q['id']}"
        assert q['correctAnswer'] in ['A', 'B', 'C', 'D'], f"Invalid correctAnswer for {q['id']}"
        assert q['correctIndex'] in [0, 1, 2, 3], f"Invalid correctIndex for {q['id']}"

        # verify explanation and solutionStructured
        assert len(q['explanation']) > 50
        assert q['solutionStructured']['concept']
        assert q['solutionStructured']['formula']
        assert q['solutionStructured']['stepByStep']
        assert q['solutionStructured']['finalAnswer']

        if q['difficulty'] == 'Easy':
            easy += 1
        elif q['difficulty'] == 'Medium':
            med += 1
        elif q['difficulty'] == 'Hard':
            hard += 1

        if q.get('isPYQ'):
            pyq += 1

    print(f"Distribution: Easy={easy}, Medium={med}, Hard={hard}, PYQ={pyq}")
    assert easy == 125, f"Expected 125 Easy, got {easy}"
    assert med == 250, f"Expected 250 Medium, got {med}"
    assert hard == 125, f"Expected 125 Hard, got {hard}"

    stats = {'easy': easy, 'medium': med, 'hard': hard, 'pyq': pyq}

    target_dir = "src/data/chapterwise/physics"
    os.makedirs(target_dir, exist_ok=True)

    # Write Part 1
    p1_file = os.path.join(target_dir, "mechanicalPropertiesSolidsPart1.ts")
    with open(p1_file, "w") as f:
        f.write(serialize_ts_part(1, p1))
    print(f"Written: {p1_file} ({len(p1)} questions)")

    # Write Part 2
    p2_file = os.path.join(target_dir, "mechanicalPropertiesSolidsPart2.ts")
    with open(p2_file, "w") as f:
        f.write(serialize_ts_part(2, p2))
    print(f"Written: {p2_file} ({len(p2)} questions)")

    # Write Part 3
    p3_file = os.path.join(target_dir, "mechanicalPropertiesSolidsPart3.ts")
    with open(p3_file, "w") as f:
        f.write(serialize_ts_part(3, p3))
    print(f"Written: {p3_file} ({len(p3)} questions)")

    # Write Part 4
    p4_file = os.path.join(target_dir, "mechanicalPropertiesSolidsPart4.ts")
    with open(p4_file, "w") as f:
        f.write(serialize_ts_part(4, p4))
    print(f"Written: {p4_file} ({len(p4)} questions)")

    # Write Data file
    data_file = os.path.join(target_dir, "mechanicalPropertiesSolidsData.ts")
    with open(data_file, "w") as f:
        f.write(serialize_data_file(stats))
    print(f"Written: {data_file}")

    print("\nSUCCESS! All 500 MCQs generated and validated successfully.")

if __name__ == "__main__":
    main()
