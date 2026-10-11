import json
import sys
sys.path.append('scripts')

from gen_lom_part1_topic1 import qs as t1
from build_lom_part1_topics1_2 import all_qs as t1_2
from build_lom_part1_topic3 import qs as t3
from build_lom_part1_topic4 import qs as t4
from build_lom_part1_topic5 import qs as t5
from build_lom_part1_topic6 import qs as t6
from build_lom_part1_topic7 import qs as t7
from build_lom_part1_topic8 import qs as t8

# t1_2 already contains t1 (16) + t2 (15) = 31 questions
part1_qs = t1_2 + t3 + t4 + t5 + t6 + t7 + t8

print(f"Total in Part 1: {len(part1_qs)}")
assert len(part1_qs) == 125, f"Expected 125, got {len(part1_qs)}"

diffs = {'Easy': 0, 'Medium': 0, 'Hard': 0}
ids = set()
q_texts = set()

for q in part1_qs:
    assert q['id'] not in ids, f"Duplicate ID: {q['id']}"
    ids.add(q['id'])
    
    clean_txt = ' '.join(q['question'].lower().split())
    assert clean_txt not in q_texts, f"Duplicate question text: {clean_txt[:50]}"
    q_texts.add(clean_txt)
    
    diffs[q['difficulty']] += 1
    assert len(q['options']) == 4
    assert q['correctAnswer'] in ['A', 'B', 'C', 'D']
    assert q['optionsList'] == [q['options']['A'], q['options']['B'], q['options']['C'], q['options']['D']]

print("Part 1 difficulties:", diffs)
assert diffs['Easy'] == 31, f"Expected 31 Easy, got {diffs['Easy']}"
assert diffs['Medium'] == 63, f"Expected 63 Medium, got {diffs['Medium']}"
assert diffs['Hard'] == 31, f"Expected 31 Hard, got {diffs['Hard']}"

with open('scripts/lom_part1_qs.json', 'w') as f:
    json.dump(part1_qs, f, indent=2)

print("Saved scripts/lom_part1_qs.json successfully!")
