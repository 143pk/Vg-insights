import json, os
from generate_chemistry_chapters import save_chapter

def make_mcq(qid, num, q_text, opts, correct_letter, exp, diff, topic, topic_id, subtopic, is_pyq=False, source=None):
    correct_idx = {"A": 0, "B": 1, "C": 2, "D": 3}[correct_letter]
    return {
        "id": qid,
        "questionNumber": num,
        "question": q_text,
        "options": opts,
        "optionsList": [opts["A"], opts["B"], opts["C"], opts["D"]],
        "correctAnswer": correct_letter,
        "correctIndex": correct_idx,
        "explanation": exp,
        "solutionStructured": {
            "concept": f"Testing fundamental principles of {subtopic} in NEET Chemistry.",
            "formula": "Oxidation state rules / Ion-electron balance / n-factor relation",
            "stepByStep": exp,
            "finalAnswer": f"Option {correct_letter}: {opts[correct_letter]}",
            "whyOtherOptionsWrong": "Other options violate standard NCERT rules for oxidation states, stoichiometry, or electron balance."
        },
        "difficulty": diff,
        "subject": "Chemistry",
        "class": "11",
        "chapter": "Redox Reactions",
        "chapterId": "redox-reactions",
        "topic": topic,
        "topicId": topic_id,
        "subtopic": subtopic,
        "isPYQ": is_pyq,
        "source": source if source else ("NEET Verified PYQ" if is_pyq else "VG Insights Practice")
    }

questions = []

# Part 1: Q1 to 125 (Oxidation states, rules, peroxides, superoxides, interhalogens)
# Target: 40 Easy, 65 Medium, 20 Hard
print("Generating Redox Part 1...")
