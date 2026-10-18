import json
import os
import random
import re
from collections import Counter

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

TOPICS = {
    "pigments_light": ("bio-photosynthetic-pigments-light-rxn", "Photosynthetic Pigments, Light Reaction & Photophosphorylation"),
    "c3_c4": ("bio-c3-c4-pathways", "Dark Reactions: Calvin C3 Cycle, Hatch-Slack C4 Pathway & Photorespiration"),
    "factors": ("bio-limiting-factors-photosynthesis", "Factors Affecting Photosynthesis & Blackman's Law of Limiting Factors"),
}

LETTERS = ["A", "B", "C", "D"]

def balance_and_format_questions(raw_questions, seed_val=11011):
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
        q_id = f"php-mcq-{q_num:03d}"
        target_ans = targets[i]
        curr_ans = item["ans"]
        opts = dict(item["opts"])
        correct_text = opts[curr_ans]
        
        curr_wrong_letters = [k for k in LETTERS if k != curr_ans]
        target_wrong_letters = [k for k in LETTERS if k != target_ans]
        mapping = {curr_ans: target_ans}
        rng.shuffle(curr_wrong_letters)
        for w_curr, w_target in zip(curr_wrong_letters, target_wrong_letters):
            mapping[w_curr] = w_target
            
        new_opts = {}
        for old_k, v in opts.items():
            new_opts[mapping[old_k]] = v
            
        sorted_opts = {k: new_opts[k] for k in LETTERS}
        
        topic_key = item["topic"]
        if topic_key in TOPICS:
            top_id, top_name = TOPICS[topic_key]
        else:
            top_id, top_name = ("bio-photosynthetic-pigments-light-rxn", "Photosynthetic Pigments & Light Reaction")
            
        diff = item.get("diff", "Medium")
        subtopic = item.get("sub", top_name)
        qtype = item.get("qtype", "Single Correct MCQ")
        
        formatted.append({
            "id": q_id,
            "questionNumber": q_num,
            "chapterId": "photosynthesis-higher-plants",
            "chapterTitle": "Photosynthesis in Higher Plants",
            "subject": "Biology",
            "class": "11",
            "topicId": top_id,
            "topicTitle": top_name,
            "subtopic": subtopic,
            "question": item["q"],
            "options": sorted_opts,
            "correctOption": target_ans,
            "explanation": item["exp"],
            "difficulty": diff,
            "questionType": qtype,
            "source": "VG Insights Practice",
            "isFlagged": False,
        })
    return formatted

print("generate_photosynthesis.py created successfully")
