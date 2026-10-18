import json
import os
import sys
from collections import Counter

from scripts.generate_plant_kingdom import balance_and_format_questions
import scripts.pk_part1_gen as p1
import scripts.pk_part2_gen as p2
import scripts.pk_part3_gen as p3
import scripts.pk_part4_gen as p4

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

raw1 = p1.get_part1_raw()
raw2 = p2.get_part2_raw()
raw3 = p3.get_part3_raw()
raw4 = p4.get_part4_raw()

print(f"Loaded raw questions: Part 1={len(raw1)}, Part 2={len(raw2)}, Part 3={len(raw3)}, Part 4={len(raw4)}")

qs1 = balance_and_format_questions(raw1, seed_val=111)
qs2 = balance_and_format_questions(raw2, seed_val=222)
qs3 = balance_and_format_questions(raw3, seed_val=333)
qs4 = balance_and_format_questions(raw4, seed_val=444)

parts = [
    ("plantKingdomPart1.ts", "PLANT_KINGDOM_PART1_MCQS", qs1),
    ("plantKingdomPart2.ts", "PLANT_KINGDOM_PART2_MCQS", qs2),
    ("plantKingdomPart3.ts", "PLANT_KINGDOM_PART3_MCQS", qs3),
    ("plantKingdomPart4.ts", "PLANT_KINGDOM_PART4_MCQS", qs4),
]

total_counter = Counter()

for filename, var_name, qs in parts:
    filepath = os.path.join(OUT_DIR, filename)
    with open(filepath, "w") as f:
        f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
        f.write(f'export const {var_name}: ChapterwiseMCQ[] = [\n')
        for q in qs:
            f.write(f'  {json.dumps(q, indent=2)},\n')
        f.write('];\n')
    c = Counter(q["correctAnswer"] for q in qs)
    total_counter.update(c)
    print(f"Wrote {filepath} ({len(qs)} questions) - Distribution: {dict(c)}")

print(f"Total distribution across 500 MCQs: {dict(total_counter)}")

# Master Data file
master_path = os.path.join(OUT_DIR, "plantKingdomData.ts")
with open(master_path, "w") as f:
    f.write('''import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { PLANT_KINGDOM_PART1_MCQS } from './plantKingdomPart1';
import { PLANT_KINGDOM_PART2_MCQS } from './plantKingdomPart2';
import { PLANT_KINGDOM_PART3_MCQS } from './plantKingdomPart3';
import { PLANT_KINGDOM_PART4_MCQS } from './plantKingdomPart4';

export const PLANT_KINGDOM_MCQS: ChapterwiseMCQ[] = [
  ...PLANT_KINGDOM_PART1_MCQS,
  ...PLANT_KINGDOM_PART2_MCQS,
  ...PLANT_KINGDOM_PART3_MCQS,
  ...PLANT_KINGDOM_PART4_MCQS,
];

export const PLANT_KINGDOM_STATS = {
  chapterId: 'plant-kingdom',
  chapterTitle: 'Plant Kingdom',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
''')

print(f"Wrote {master_path}")
