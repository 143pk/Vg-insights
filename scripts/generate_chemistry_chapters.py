import json
import os
import re

def save_chapter(chapter_id, chapter_title, file_base, var_prefix, questions):
    assert len(questions) == 500, f"Expected 500 questions, got {len(questions)}"
    
    # Check difficulty counts
    easy = sum(1 for q in questions if q['difficulty'] == 'Easy')
    med = sum(1 for q in questions if q['difficulty'] == 'Medium')
    hard = sum(1 for q in questions if q['difficulty'] == 'Hard')
    print(f"[{chapter_id}] Distribution: Easy={easy}, Medium={med}, Hard={hard}")
    assert easy == 125 and med == 250 and hard == 125, f"Invalid distribution: Easy={easy}, Medium={med}, Hard={hard}"
    
    # Check IDs unique
    ids = set(q['id'] for q in questions)
    assert len(ids) == 500, f"Duplicate IDs detected in {chapter_id}"

    # Split into 4 parts
    p1 = questions[0:125]
    p2 = questions[125:250]
    p3 = questions[250:375]
    p4 = questions[375:500]

    out_dir = "src/data/chapterwise/chemistry"
    os.makedirs(out_dir, exist_ok=True)

    for idx, part_qs in enumerate([p1, p2, p3, p4], 1):
        p_filename = os.path.join(out_dir, f"{file_base}Part{idx}.ts")
        with open(p_filename, 'w') as f:
            f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
            f.write(f'export const {var_prefix}_PART{idx}_MCQS: ChapterwiseMCQ[] = [\n')
            for i, q in enumerate(part_qs):
                f.write("  " + json.dumps(q, indent=2).replace("\n", "\n  "))
                if i < len(part_qs) - 1:
                    f.write(",\n")
                else:
                    f.write("\n")
            f.write("];\n")
        print(f"  Wrote {p_filename}")

    # Master data file
    m_filename = os.path.join(out_dir, f"{file_base}Data.ts")
    with open(m_filename, 'w') as f:
        f.write(f'// Verified NEET UG Question Bank: {chapter_title} ({chapter_id})\n')
        f.write('// Exactly 500 MCQs (Easy: 125, Medium: 250, Hard: 125)\n\n')
        f.write("import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';\n")
        for i in range(1, 5):
            f.write(f"import {{ {var_prefix}_PART{i}_MCQS }} from './{file_base}Part{i}';\n")
        f.write(f"\nexport const {var_prefix}_MCQS: ChapterwiseMCQ[] = [\n")
        for i in range(1, 5):
            f.write(f"  ...{var_prefix}_PART{i}_MCQS,\n")
        f.write("];\n\n")
        pyq_count = sum(1 for q in questions if q.get('isPYQ'))
        f.write(f"export const {var_prefix}_STATS = {{\n")
        f.write(f"  chapterId: '{chapter_id}',\n")
        f.write(f"  chapterTitle: '{chapter_title}',\n")
        f.write("  subject: 'Chemistry',\n")
        f.write("  class: '11',\n")
        f.write("  totalQuestions: 500,\n")
        f.write(f"  easyCount: {easy},\n")
        f.write(f"  mediumCount: {med},\n")
        f.write(f"  hardCount: {hard},\n")
        f.write(f"  pyqCount: {pyq_count},\n")
        f.write(f"  practiceCount: {500 - pyq_count},\n")
        f.write("};\n")
    print(f"  Wrote {m_filename}")

print("Framework ready.")
