import json
import os
import sys

# Import the 4 part generators
sys.path.append(os.path.dirname(__file__))
from lw_data_part1 import get_part1_questions
from lw_data_part2 import get_part2_questions
from lw_data_part3 import get_part3_questions
from lw_data_part4 import get_part4_questions

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

def assemble():
    print("Gathering questions from all 4 parts...")
    p1 = get_part1_questions()
    p2 = get_part2_questions()
    p3 = get_part3_questions()
    p4 = get_part4_questions()
    
    assert len(p1) == 125, f"Part 1 length: {len(p1)}"
    assert len(p2) == 125, f"Part 2 length: {len(p2)}"
    assert len(p3) == 125, f"Part 3 length: {len(p3)}"
    assert len(p4) == 125, f"Part 4 length: {len(p4)}"
    
    all_qs = p1 + p2 + p3 + p4
    assert len(all_qs) == 500, f"Total length: {len(all_qs)}"
    
    # Audit IDs, question numbers, options, topics
    ids = set()
    nums = set()
    easy_count = 0
    medium_count = 0
    hard_count = 0
    
    for i, q in enumerate(all_qs, start=1):
        assert q["id"] not in ids, f"Duplicate ID: {q['id']}"
        ids.add(q["id"])
        
        assert q["questionNumber"] == i, f"Expected questionNumber {i}, got {q['questionNumber']}"
        nums.add(q["questionNumber"])
        
        assert set(q["options"].keys()) == {"A", "B", "C", "D"}, f"Invalid options keys for Q{i}"
        assert len(q["optionsList"]) == 4, f"Invalid optionsList for Q{i}"
        assert q["correctAnswer"] in {"A", "B", "C", "D"}, f"Invalid correctAnswer for Q{i}"
        assert q["correctIndex"] in {0, 1, 2, 3}, f"Invalid correctIndex for Q{i}"
        assert q["topic"] and "undefined" not in q["topic"].lower(), f"Invalid topic for Q{i}"
        assert q["topicId"] in {
            "bio-living-biodiversity",
            "bio-classification-taxonomy",
            "bio-species-hierarchy",
            "bio-nomenclature-systematics"
        }, f"Invalid topicId for Q{i}: {q['topicId']}"
        assert len(q["explanation"].strip()) > 30, f"Empty explanation for Q{i}"
        
        if q["difficulty"] == "Easy":
            easy_count += 1
        elif q["difficulty"] == "Medium":
            medium_count += 1
        elif q["difficulty"] == "Hard":
            hard_count += 1
        else:
            raise ValueError(f"Unknown difficulty {q['difficulty']} for Q{i}")

    print(f"Validation successful: Total={len(all_qs)}, Easy={easy_count}, Medium={medium_count}, Hard={hard_count}")
    assert easy_count == 125, f"Expected 125 Easy, got {easy_count}"
    assert medium_count == 250, f"Expected 250 Medium, got {medium_count}"
    assert hard_count == 125, f"Expected 125 Hard, got {hard_count}"

    # Write TypeScript part files
    parts = [(1, p1), (2, p2), (3, p3), (4, p4)]
    for part_num, p_qs in parts:
        filepath = os.path.join(OUT_DIR, f"livingWorldPart{part_num}.ts")
        print(f"Writing {filepath}...")
        with open(filepath, "w") as f:
            f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
            f.write(f'export const LIVING_WORLD_PART{part_num}_MCQS: ChapterwiseMCQ[] = [\n')
            for q in p_qs:
                f.write(f'  {json.dumps(q, indent=2)},\n')
            f.write('];\n')

    # Write livingWorldData.ts
    data_filepath = os.path.join(OUT_DIR, "livingWorldData.ts")
    print(f"Writing {data_filepath}...")
    with open(data_filepath, "w") as f:
        f.write('''import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { LIVING_WORLD_PART1_MCQS } from './livingWorldPart1';
import { LIVING_WORLD_PART2_MCQS } from './livingWorldPart2';
import { LIVING_WORLD_PART3_MCQS } from './livingWorldPart3';
import { LIVING_WORLD_PART4_MCQS } from './livingWorldPart4';

export const LIVING_WORLD_MCQS: ChapterwiseMCQ[] = [
  ...LIVING_WORLD_PART1_MCQS,
  ...LIVING_WORLD_PART2_MCQS,
  ...LIVING_WORLD_PART3_MCQS,
  ...LIVING_WORLD_PART4_MCQS,
];

export const LIVING_WORLD_STATS = {
  chapterId: 'living-world',
  chapterTitle: 'The Living World',
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

    # Write progress file
    progress_filepath = os.path.join(OUT_DIR, "progress.json")
    print(f"Writing {progress_filepath}...")
    progress_data = {
        "class": "11",
        "subject": "Biology",
        "targetChapters": 19,
        "completedChapters": [
            {
                "id": "living-world",
                "title": "The Living World",
                "unit": "Diversity in Living World",
                "classificationId": "bio-11-diversity",
                "totalSaved": 500,
                "easyCount": 125,
                "mediumCount": 250,
                "hardCount": 125,
                "files": [
                    "src/data/chapterwise/biology/livingWorldPart1.ts",
                    "src/data/chapterwise/biology/livingWorldPart2.ts",
                    "src/data/chapterwise/biology/livingWorldPart3.ts",
                    "src/data/chapterwise/biology/livingWorldPart4.ts",
                    "src/data/chapterwise/biology/livingWorldData.ts"
                ],
                "status": "COMPLETED"
            }
        ],
        "nextChapter": {
            "id": "biological-classification",
            "title": "Biological Classification",
            "unit": "Diversity in Living World",
            "classificationId": "bio-11-diversity",
            "nextBatch": "Part 1 (Q1-Q125, Easy)"
        },
        "lastUpdated": "2026-10-15T00:33:00Z"
    }
    with open(progress_filepath, "w") as f:
        json.dump(progress_data, f, indent=2)

    print("All Living World files written successfully!")

if __name__ == '__main__':
    assemble()
