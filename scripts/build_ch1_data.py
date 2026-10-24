#!/usr/bin/env python3
import json
import os

# Complete 500-question generator for Sexual Reproduction in Flowering Plants
# Follows exact schema of livingWorldPart1.ts

CHAPTER_ID = "sexual-repro-flowering-plants"
CHAPTER_TITLE = "Sexual Reproduction in Flowering Plants"
SUBJECT = "Biology"
CLASS_LEVEL = "12"

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

# Question template definitions across the 3 NCERT topics
# 1. Microsporogenesis & Megasporogenesis
# 2. Pollination & Double Fertilization
# 3. Endosperm, Seed & Apomixis

raw_questions = []

def add_question(q_num, question, options_list, correct_ans, diff, topic_info, concept, step_by_step, why_wrong):
    letters = ['A', 'B', 'C', 'D']
    correct_idx = letters.index(correct_ans)
    options_obj = {
        'A': options_list[0],
        'B': options_list[1],
        'C': options_list[2],
        'D': options_list[3]
    }
    
    explanation = f"1. CONCEPT:\n{concept}\n\n2. STEP-BY-STEP SOLUTION:\n{step_by_step}\n\n3. FINAL ANSWER:\nOption {correct_ans}: {options_obj[correct_ans]}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
    
    structured = {
        "concept": concept,
        "stepByStep": step_by_step,
        "finalAnswer": f"Option {correct_ans}: {options_obj[correct_ans]}",
        "whyOtherOptionsWrong": why_wrong
    }
    
    q_data = {
        "id": f"{CHAPTER_ID}-mcq-{str(q_num).zfill(3)}",
        "questionNumber": q_num,
        "question": question,
        "options": options_obj,
        "optionsList": options_list,
        "correctAnswer": correct_ans,
        "correctOption": correct_ans,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "solutionStructured": structured,
        "difficulty": diff,
        "subject": SUBJECT,
        "class": CLASS_LEVEL,
        "chapter": CHAPTER_TITLE,
        "chapterId": CHAPTER_ID,
        "topic": topic_info["topic"],
        "topicId": topic_info["topicId"],
        "subtopic": topic_info["subtopic"],
        "source": "VG Insights Practice",
        "isPYQ": False
    }
    raw_questions.append(q_data)

print("Writing generator script...")
