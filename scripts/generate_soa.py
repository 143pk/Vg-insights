import json
import os
import random
import re
from collections import Counter

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

TOPICS = {
    "tissues": ("bio-animal-tissues", "Animal Tissues (Epithelial, Connective, Muscular, Neural)"),
    "cockroach": ("bio-cockroach-frog-anatomy", "Morphology & Anatomy of Cockroach"),
    "frog": ("bio-cockroach-frog-anatomy", "Morphology & Anatomy of Frog"),
}

LETTERS = ["A", "B", "C", "D"]

def balance_and_format_questions(raw_questions, seed_val=5001):
    rng = random.Random(seed_val)
    n = len(raw_questions)
    base = n // 4
    rem = n % 4
    targets = ["A"] * base + ["B"] * base + ["C"] * base + ["D"] * base
    targets.extend(["A", "B", "C", "D"][:rem])
    rng.shuffle(targets)

    formatted = []
    for i, item in enumerate(raw_questions):
        q_num = item["q_num"]
        q_id = f"soa-mcq-{q_num:03d}"
        target_ans = targets[i]
        curr_ans = item["ans"]
        opts = dict(item["opts"])
        correct_text = opts[curr_ans]

        curr_wrong_letters = [k for k in LETTERS if k != curr_ans]
        target_wrong_letters = [k for k in LETTERS if k != target_ans]

        mapping = {curr_ans: target_ans}
        rng.shuffle(curr_wrong_letters)
        for old_w, new_w in zip(curr_wrong_letters, target_wrong_letters):
            mapping[old_w] = new_w

        new_opts = {}
        for old_k, old_val in opts.items():
            new_opts[mapping[old_k]] = old_val

        formatted_options = [
            f"A. {new_opts['A']}",
            f"B. {new_opts['B']}",
            f"C. {new_opts['C']}",
            f"D. {new_opts['D']}",
        ]

        topic_code = item.get("topic_key", "tissues")
        topic_id, topic_name = TOPICS.get(topic_code, TOPICS["tissues"])

        q_obj = {
            "id": q_id,
            "question": item["q"],
            "options": formatted_options,
            "correctAnswer": target_ans,
            "explanation": item["exp"],
            "difficulty": item["diff"],
            "topicId": topic_id,
            "topicName": topic_name,
            "subtopic": item.get("subtopic", topic_name),
            "questionType": item.get("q_type", "Standard MCQ"),
            "year": None,
            "source": "VG Insights Practice",
        }
        formatted.append(q_obj)

    return formatted

print("Structural Organisation in Animals helper loaded.")
