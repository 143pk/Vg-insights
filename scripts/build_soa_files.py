import json
import os
import sys
from collections import Counter

from scripts.generate_soa import balance_and_format_questions
import scripts.soa_part1_gen as p1
import scripts.soa_part2_gen as p2
import scripts.soa_part3_gen as p3
import scripts.soa_part4_gen as p4

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

raw1 = p1.get_part1_raw()
raw2 = p2.get_part2_raw()
raw3 = p3.get_part3_raw()
raw4 = p4.get_part4_raw()

print(f"Loaded raw questions counts: {len(raw1)}, {len(raw2)}, {len(raw3)}, {len(raw4)}")
assert len(raw1) == 125, f"raw1 count was {len(raw1)}"
assert len(raw2) == 125, f"raw2 count was {len(raw2)}"
assert len(raw3) == 125, f"raw3 count was {len(raw3)}"
assert len(raw4) == 125, f"raw4 count was {len(raw4)}"

qs1 = balance_and_format_questions(raw1, seed_val=901)
qs2 = balance_and_format_questions(raw2, seed_val=902)
qs3 = balance_and_format_questions(raw3, seed_val=903)
qs4 = balance_and_format_questions(raw4, seed_val=904)

parts = [
    ("structuralOrganisationAnimalsPart1.ts", "STRUCTURAL_ORGANISATION_ANIMALS_PART1_MCQS", qs1),
    ("structuralOrganisationAnimalsPart2.ts", "STRUCTURAL_ORGANISATION_ANIMALS_PART2_MCQS", qs2),
    ("structuralOrganisationAnimalsPart3.ts", "STRUCTURAL_ORGANISATION_ANIMALS_PART3_MCQS", qs3),
    ("structuralOrganisationAnimalsPart4.ts", "STRUCTURAL_ORGANISATION_ANIMALS_PART4_MCQS", qs4),
]

total_counter = Counter()

for filename, var_name, qs in parts:
    filepath = os.path.join(OUT_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
        f.write(f'export const {var_name}: ChapterwiseMCQ[] = [\n')
        for q in qs:
            f.write(f'  {json.dumps(q, indent=2)},\n')
        f.write('];\n')
    c = Counter(q["correctAnswer"] for q in qs)
    total_counter.update(c)
    print(f"Wrote {filepath} ({len(qs)} questions) - Distribution: {dict(c)}")

print(f"Total distribution across 500 MCQs: {dict(total_counter)}")

master_path = os.path.join(OUT_DIR, "structuralOrganisationAnimalsData.ts")
with open(master_path, "w", encoding="utf-8") as f:
    f.write('''import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART1_MCQS } from './structuralOrganisationAnimalsPart1';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART2_MCQS } from './structuralOrganisationAnimalsPart2';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART3_MCQS } from './structuralOrganisationAnimalsPart3';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART4_MCQS } from './structuralOrganisationAnimalsPart4';

export const STRUCTURAL_ORGANISATION_ANIMALS_MCQS: ChapterwiseMCQ[] = [
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART1_MCQS,
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART2_MCQS,
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART3_MCQS,
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART4_MCQS,
];

export const STRUCTURAL_ORGANISATION_ANIMALS_STATS = {
  chapterId: 'structural-org-animals',
  chapterTitle: 'Structural Organisation in Animals',
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
