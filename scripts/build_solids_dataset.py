#!/usr/bin/env python3
"""
Comprehensive Question Bank Generator for:
Class 11 Physics: Mechanical Properties of Solids (Chapter ID: 'mechanical-properties-solids')
Generates exactly 500 unique MCQs:
- Easy: 125
- Medium: 250
- Hard: 125
Distributed across:
- Part 1: Q1 to Q125 (Easy: 40, Medium: 65, Hard: 20)
- Part 2: Q126 to Q250 (Easy: 40, Medium: 65, Hard: 20)
- Part 3: Q251 to Q375 (Easy: 25, Medium: 65, Hard: 35)
- Part 4: Q376 to Q500 (Easy: 20, Medium: 55, Hard: 50)
Total: Easy=125, Medium=250, Hard=125, Total=500.
"""

import json
import os
import re

def make_mcq(
    qid_num,
    question,
    opt_a, opt_b, opt_c, opt_d,
    correct_ans,
    concept,
    given,
    formula,
    step_by_step,
    final_ans,
    quick_tip,
    why_wrong,
    difficulty,
    topic,
    source="NEET UG Practice",
    is_pyq=False,
    pyq_year=None
):
    opts = {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d}
    correct_idx = {"A": 0, "B": 1, "C": 2, "D": 3}[correct_ans]
    
    explanation = (
        f"1. CONCEPT:\n{concept}\n\n"
        f"2. GIVEN:\n{given}\n\n"
        f"3. FORMULA / PRINCIPLE:\n{formula}\n\n"
        f"4. STEP-BY-STEP SOLUTION:\n{step_by_step}\n\n"
        f"5. FINAL ANSWER:\n{final_ans}\n\n"
        f"6. QUICK TIP:\n{quick_tip}"
    )
    
    item = {
        "id": f"solids-mcq-{qid_num:03d}",
        "questionNumber": qid_num,
        "question": question,
        "options": opts,
        "optionsList": [opt_a, opt_b, opt_c, opt_d],
        "correctAnswer": correct_ans,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "solutionStructured": {
            "concept": concept,
            "given": given,
            "formula": formula,
            "stepByStep": step_by_step,
            "finalAnswer": final_ans,
            "whyOtherOptionsWrong": why_wrong
        },
        "difficulty": difficulty,
        "subject": "Physics",
        "class": "11",
        "chapter": "Mechanical Properties of Solids",
        "chapterId": "mechanical-properties-solids",
        "topic": topic,
        "source": source,
        "isPYQ": is_pyq
    }
    if is_pyq and pyq_year:
        item["pyqYear"] = pyq_year
    return item

print("make_mcq helper defined.")
