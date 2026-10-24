#!/usr/bin/env python3
import json
import os

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

CHAPTER_ID = "sexual-repro-flowering-plants"
CHAPTER_TITLE = "Sexual Reproduction in Flowering Plants"
SUBJECT = "Biology"
CLASS_LEVEL = "12"

T1 = {"topic": "Microsporogenesis & Megasporogenesis", "topicId": "bio-microsporogenesis-megasporogenesis"}
T2 = {"topic": "Pollination & Double Fertilization", "topicId": "bio-pollination-double-fertilization"}
T3 = {"topic": "Endosperm, Seed & Apomixis", "topicId": "bio-endosperm-apomixis"}

# We will generate 500 unique questions
questions = []

def make_q(num, diff, q_text, options, ans, topic_meta, subtopic, concept, step, why_wrong):
    letters = ['A', 'B', 'C', 'D']
    correct_idx = letters.index(ans)
    options_obj = {
        'A': options[0],
        'B': options[1],
        'C': options[2],
        'D': options[3]
    }
    explanation = f"1. CONCEPT:\n{concept}\n\n2. STEP-BY-STEP SOLUTION:\n{step}\n\n3. FINAL ANSWER:\nOption {ans}: {options_obj[ans]}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
    
    return {
        "id": f"{CHAPTER_ID}-mcq-{str(num).zfill(3)}",
        "questionNumber": num,
        "question": q_text,
        "options": options_obj,
        "optionsList": options,
        "correctAnswer": ans,
        "correctOption": ans,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "solutionStructured": {
            "concept": concept,
            "stepByStep": step,
            "finalAnswer": f"Option {ans}: {options_obj[ans]}",
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

print("Generator module ready.")
