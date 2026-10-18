import os, sys

code = '''#!/usr/bin/env python3
"""
Generator for Classification of Elements and Periodicity in Properties - Part 2 (Q126 to Q250)
Subject: Chemistry | Class: 11 | Chapter: Classification of Elements (periodic-classification)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Atomic radii: covalent, metallic, van der Waals radii, variation in periods and groups
- Ionic radii: cations vs neutral atom, anions vs neutral atom, isoelectronic species
- Effective nuclear charge (Z_eff) and screening/shielding effect
- Ionization enthalpy (Delta_i H): first, second, third IE; factors influencing IE
- Anomalous trends: Be > B, N > O, Mg > Al, P > S, second IE of O > N, alkali metals massive jump in IE2
- Transition metal contraction (Ga <= Al) and Lanthanoid contraction (Zr approx Hf)
- Authentic NEET PYQs (NEET 2019, 2020, 2021, 2022, 2023, 2024)
"""

import json
import os

questions = []

def add(q_id, q_num, question, opt_a, opt_b, opt_c, opt_d, correct_idx, difficulty, subtopic, explanation, is_pyq=False, pyq_source=None):
    opts_list = [opt_a, opt_b, opt_c, opt_d]
    ans_map = {0: "A", 1: "B", 2: "C", 3: "D"}
    correct_ans = ans_map[correct_idx]
    q = {
        "id": q_id,
        "questionNumber": q_num,
        "question": question,
        "options": {
            "A": opt_a,
            "B": opt_b,
            "C": opt_c,
            "D": opt_d
        },
        "optionsList": opts_list,
        "correctAnswer": correct_ans,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subject": "Chemistry",
        "class": "11",
        "chapter": "Classification of Elements and Periodicity",
        "chapterId": "periodic-classification",
        "topicId": "chem-periodic-trends-radii-ie",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

