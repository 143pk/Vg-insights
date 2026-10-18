import json
import os

OUT_DIR = "/app/applet/src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

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
        "id": f"biological-classification-mcq-{q_num:03d}",
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

print("create_bc_part3 scaffold ready.")
