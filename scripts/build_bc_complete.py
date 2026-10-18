import json
import os
import sys

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

import scripts.bc_data_part1 as p1
import scripts.bc_data_part2 as p2

TOPIC_MAP = {
    "monera": ("bio-systems-monera", "Kingdom Monera & Systems of Classification"),
    "protista": ("bio-kingdom-protista", "Kingdom Protista"),
    "fungi": ("bio-kingdom-fungi", "Kingdom Fungi (Classes & Reproduction)"),
    "acellular": ("bio-viruses-viroids-lichens", "Viruses, Viroids, Prions & Lichens")
}

def make_q(q_num, q_text, opt_a, opt_b, opt_c, opt_d, ans, concept, step, why_wrong, diff, cat, subtopic):
    topic_id, topic_title = TOPIC_MAP[cat]
    opt_dict = {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d}
    idx = {"A": 0, "B": 1, "C": 2, "D": 3}[ans]
    
    explanation = (
        f"1. CONCEPT:\n{concept}\n\n"
        f"2. STEP-BY-STEP SOLUTION:\n{step}\n\n"
        f"3. FINAL ANSWER:\nOption {ans}: {opt_dict[ans]}\n\n"
        f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
    )
    
    return {
        "id": f"bio-class-mcq-{q_num:03d}",
        "questionNumber": q_num,
        "question": q_text,
        "options": opt_dict,
        "optionsList": [opt_a, opt_b, opt_c, opt_d],
        "correctAnswer": ans,
        "correctIndex": idx,
        "explanation": explanation,
        "solutionStructured": {
            "concept": concept,
            "stepByStep": step,
            "finalAnswer": f"Option {ans}: {opt_dict[ans]}",
            "whyOtherOptionsWrong": why_wrong
        },
        "difficulty": diff,
        "subject": "Biology",
        "class": "11",
        "chapter": "Biological Classification",
        "chapterId": "biological-classification",
        "topic": topic_title,
        "topicId": topic_id,
        "subtopic": subtopic,
        "source": "VG Insights Practice",
        "isPYQ": False
    }

print("Testing loading p1 and p2...")
qs1 = p1.get_part1_questions()
qs2 = p2.get_part2_questions()
# Fix topicId in p1 and p2 if it is 'bio-kingdom-monera' -> 'bio-systems-monera'
for q in qs1:
    if q.get("topicId") == "bio-kingdom-monera":
        q["topicId"] = "bio-systems-monera"
        q["topic"] = "Kingdom Monera & Systems of Classification"
for q in qs2:
    if q.get("topicId") == "bio-kingdom-monera":
        q["topicId"] = "bio-systems-monera"
        q["topic"] = "Kingdom Monera & Systems of Classification"

print(f"Loaded {len(qs1)} in Part 1 and {len(qs2)} in Part 2 successfully.")
