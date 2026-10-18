import json
import os
import sys

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

import scripts.bc_data_part1 as p1
import scripts.bc_data_part2 as p2
import scripts.bc_data_part3 as p3
import scripts.bc_data_part4 as p4

VALID_TOPIC_IDS = {
    "bio-systems-monera": "Kingdom Monera & Systems of Classification",
    "bio-kingdom-protista": "Kingdom Protista",
    "bio-kingdom-fungi": "Kingdom Fungi (Classes & Reproduction)",
    "bio-viruses-viroids-lichens": "Viruses, Viroids, Prions & Lichens"
}

def normalize_q(q):
    # Normalize monera topicId if needed
    if q.get("topicId") in ("bio-kingdom-monera", "bio-monera", "monera"):
        q["topicId"] = "bio-systems-monera"
        q["topic"] = VALID_TOPIC_IDS["bio-systems-monera"]
    elif q.get("topicId") in VALID_TOPIC_IDS:
        q["topic"] = VALID_TOPIC_IDS[q["topicId"]]
    else:
        # Fallback to monera
        q["topicId"] = "bio-systems-monera"
        q["topic"] = VALID_TOPIC_IDS["bio-systems-monera"]
        
    q["chapter"] = "Biological Classification"
    q["chapterId"] = "biological-classification"
    q["class"] = "11"
    q["subject"] = "Biology"
    return q

def write_part_file(part_num, questions, filename):
    filepath = os.path.join(OUT_DIR, filename)
    with open(filepath, "w") as f:
        f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
        f.write(f'export const BIOLOGICAL_CLASSIFICATION_PART{part_num}_MCQS: ChapterwiseMCQ[] = [\n')
        for q in questions:
            f.write(f'  {json.dumps(q, indent=2)},\n')
        f.write('];\n')
    print(f"Saved {filepath} ({len(questions)} questions)")

def write_index_file():
    filepath = os.path.join(OUT_DIR, "biologicalClassificationData.ts")
    content = """import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { BIOLOGICAL_CLASSIFICATION_PART1_MCQS } from './biologicalClassificationPart1';
import { BIOLOGICAL_CLASSIFICATION_PART2_MCQS } from './biologicalClassificationPart2';
import { BIOLOGICAL_CLASSIFICATION_PART3_MCQS } from './biologicalClassificationPart3';
import { BIOLOGICAL_CLASSIFICATION_PART4_MCQS } from './biologicalClassificationPart4';

export const BIOLOGICAL_CLASSIFICATION_MCQS: ChapterwiseMCQ[] = [
  ...BIOLOGICAL_CLASSIFICATION_PART1_MCQS,
  ...BIOLOGICAL_CLASSIFICATION_PART2_MCQS,
  ...BIOLOGICAL_CLASSIFICATION_PART3_MCQS,
  ...BIOLOGICAL_CLASSIFICATION_PART4_MCQS,
];

export const BIOLOGICAL_CLASSIFICATION_STATS = {
  chapterId: 'biological-classification',
  chapterTitle: 'Biological Classification',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
"""
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Saved {filepath}")

def main():
    qs1 = [normalize_q(q) for q in p1.get_part1_questions()]
    qs2 = [normalize_q(q) for q in p2.get_part2_questions()]
    qs3 = [normalize_q(q) for q in p3.get_part3_questions()]
    qs4 = [normalize_q(q) for q in p4.get_part4_questions()]
    
    write_part_file(1, qs1, "biologicalClassificationPart1.ts")
    write_part_file(2, qs2, "biologicalClassificationPart2.ts")
    write_part_file(3, qs3, "biologicalClassificationPart3.ts")
    write_part_file(4, qs4, "biologicalClassificationPart4.ts")
    write_index_file()
    
    print("All 5 files generated successfully.")

if __name__ == "__main__":
    main()
