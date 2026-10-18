import json
import os
import sys
from collections import Counter

from scripts.generate_plant_growth import balance_and_format_questions
import scripts.pgd_part1_gen as p1
import scripts.pgd_part2_gen as p2
import scripts.pgd_part3_gen as p3
import scripts.pgd_part4_gen as p4

raw_all = p1.get_part1_raw() + p2.get_part2_raw() + p3.get_part3_raw() + p4.get_part4_raw()
print(f"Total raw questions loaded: {len(raw_all)}")

if len(raw_all) != 500:
    print(f"Error: expected 500 questions, got {len(raw_all)}")
    sys.exit(1)

# Format and balance options
formatted = balance_and_format_questions(raw_all, seed_val=13022)

# Check question numbers and answers
q_nums = [q["questionNumber"] for q in formatted]
assert q_nums == list(range(1, 501)), f"Question numbers mismatch: {q_nums[:10]} ... {q_nums[-10:]}"

ans_dist = Counter(q["correctOption"] for q in formatted)
print(f"Balanced answer distribution: {dict(ans_dist)}")

diff_dist = Counter(q["difficulty"] for q in formatted)
print(f"Difficulty distribution: {dict(diff_dist)}")

topic_dist = Counter(q["topicTitle"] for q in formatted)
print(f"Topic distribution: {dict(topic_dist)}")

# Check options integrity
for q in formatted:
    opts = q["options"]
    assert len(opts) == 4, f"Question {q['id']} does not have 4 options"
    assert q["correctOption"] in ["A", "B", "C", "D"], f"Invalid answer for {q['id']}"
    assert opts[q["correctOption"]], f"Empty answer option for {q['id']}"
    assert len(q["explanation"]) > 10, f"Explanation too short for {q['id']}"

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

# Split into 4 parts
part1 = formatted[0:125]
part2 = formatted[125:250]
part3 = formatted[250:375]
part4 = formatted[375:500]

def write_part_ts(filepath, var_name, data, part_num, q_range):
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(f"// Part {part_num}: {q_range}\n")
        f.write("import { ChapterMcq } from '../types';\n\n")
        f.write(f"export const {var_name}: ChapterMcq[] = ")
        f.write(json.dumps(data, indent=2))
        f.write(";\n")
    print(f"Wrote {filepath} with {len(data)} questions")

write_part_ts(f"{OUT_DIR}/plantGrowthDevelopmentPart1Data.ts", "PLANT_GROWTH_DEVELOPMENT_PART1_MCQS", part1, 1, "Q1 to Q125 (Easy)")
write_part_ts(f"{OUT_DIR}/plantGrowthDevelopmentPart2Data.ts", "PLANT_GROWTH_DEVELOPMENT_PART2_MCQS", part2, 2, "Q126 to Q250 (Medium)")
write_part_ts(f"{OUT_DIR}/plantGrowthDevelopmentPart3Data.ts", "PLANT_GROWTH_DEVELOPMENT_PART3_MCQS", part3, 3, "Q251 to Q375 (Medium)")
write_part_ts(f"{OUT_DIR}/plantGrowthDevelopmentPart4Data.ts", "PLANT_GROWTH_DEVELOPMENT_PART4_MCQS", part4, 4, "Q376 to Q500 (Hard)")

# Write master index file
master_file = f"{OUT_DIR}/plantGrowthDevelopmentData.ts"
with open(master_file, "w", encoding="utf-8") as f:
    f.write("// Plant Growth and Development (Complete 500 MCQs)\n")
    f.write("import { ChapterMcq } from '../types';\n")
    f.write("import { PLANT_GROWTH_DEVELOPMENT_PART1_MCQS } from './plantGrowthDevelopmentPart1Data';\n")
    f.write("import { PLANT_GROWTH_DEVELOPMENT_PART2_MCQS } from './plantGrowthDevelopmentPart2Data';\n")
    f.write("import { PLANT_GROWTH_DEVELOPMENT_PART3_MCQS } from './plantGrowthDevelopmentPart3Data';\n")
    f.write("import { PLANT_GROWTH_DEVELOPMENT_PART4_MCQS } from './plantGrowthDevelopmentPart4Data';\n\n")
    f.write("export const PLANT_GROWTH_DEVELOPMENT_MCQS: ChapterMcq[] = [\n")
    f.write("  ...PLANT_GROWTH_DEVELOPMENT_PART1_MCQS,\n")
    f.write("  ...PLANT_GROWTH_DEVELOPMENT_PART2_MCQS,\n")
    f.write("  ...PLANT_GROWTH_DEVELOPMENT_PART3_MCQS,\n")
    f.write("  ...PLANT_GROWTH_DEVELOPMENT_PART4_MCQS,\n")
    f.write("];\n")

print(f"Wrote {master_file} successfully")
