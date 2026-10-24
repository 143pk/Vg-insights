import json
import os
import random

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

CHAPTER_ID = "sexual-repro-flowering-plants"
CHAPTER_TITLE = "Sexual Reproduction in Flowering Plants"
SUBJECT = "Biology"
CLASS_LEVEL = "12"

T1 = {"topic": "Microsporogenesis & Megasporogenesis", "topicId": "bio-microsporogenesis-megasporogenesis"}
T2 = {"topic": "Pollination & Double Fertilization", "topicId": "bio-pollination-double-fertilization"}
T3 = {"topic": "Endosperm, Seed & Apomixis", "topicId": "bio-endosperm-apomixis"}

# We'll create exactly 500 questions:
# 1-125: Easy
# 126-250: Medium Part 1
# 251-375: Medium Part 2
# 376-500: Hard

def format_q(q_num, diff, q_text, options, ans_idx, topic_meta, subtopic, concept, step, why_wrong):
    letters = ['A', 'B', 'C', 'D']
    ans_letter = letters[ans_idx]
    options_obj = {
        'A': options[0],
        'B': options[1],
        'C': options[2],
        'D': options[3]
    }
    explanation = f"1. CONCEPT:\n{concept}\n\n2. STEP-BY-STEP SOLUTION:\n{step}\n\n3. FINAL ANSWER:\nOption {ans_letter}: {options_obj[ans_letter]}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
    
    return {
        "id": f"{CHAPTER_ID}-mcq-{str(q_num).zfill(3)}",
        "questionNumber": q_num,
        "question": q_text,
        "options": options_obj,
        "optionsList": options,
        "correctAnswer": ans_letter,
        "correctOption": ans_letter,
        "correctIndex": ans_idx,
        "explanation": explanation,
        "solutionStructured": {
            "concept": concept,
            "stepByStep": step,
            "finalAnswer": f"Option {ans_letter}: {options_obj[ans_letter]}",
            "whyOtherOptionsWrong": why_wrong
        },
        "difficulty": diff,
        "subject": SUBJECT,
        "class": CLASS_LEVEL,
        "chapter": CHAPTER_TITLE,
        "chapterId": CHAPTER_ID,
        "topic": topic_meta["topic"],
        "topicId": topic_meta["topicId"],
        "subtopic": subtopic,
        "source": "VG Insights Practice",
        "isPYQ": False
    }

print("Loaded base module.")
