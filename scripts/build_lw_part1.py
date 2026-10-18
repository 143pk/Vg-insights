import json
import os

OUT_FILE = "src/data/chapterwise/biology/livingWorldPart1.ts"
os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)

TOPIC_TITLES = {
    "bio-living-biodiversity": "What is Living? & Biodiversity",
    "bio-classification-taxonomy": "Need for Classification & Taxonomy",
    "bio-species-hierarchy": "Concept of Species & Taxonomical Hierarchy",
    "bio-nomenclature-systematics": "Binomial Nomenclature & Systematics"
}

questions = []

def add(q_num, q_text, a, b, c, d, ans, concept, step, why_wrong, topic_id, subtopic):
    opts = {"A": a, "B": b, "C": c, "D": d}
    idx = {"A": 0, "B": 1, "C": 2, "D": 3}[ans]
    explanation = (
        f"1. CONCEPT:\n{concept}\n\n"
        f"2. STEP-BY-STEP SOLUTION:\n{step}\n\n"
        f"3. FINAL ANSWER:\nOption {ans}: {opts[ans]}\n\n"
        f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
    )
    questions.append({
        "id": f"living-world-mcq-{q_num:03d}",
        "questionNumber": q_num,
        "question": q_text,
        "options": opts,
        "optionsList": [a, b, c, d],
        "correctAnswer": ans,
        "correctIndex": idx,
        "explanation": explanation,
        "solutionStructured": {
            "concept": concept,
            "stepByStep": step,
            "finalAnswer": f"Option {ans}: {opts[ans]}",
            "whyOtherOptionsWrong": why_wrong
        },
        "difficulty": "Easy",
        "subject": "Biology",
        "class": "11",
        "chapter": "The Living World",
        "chapterId": "living-world",
        "topic": TOPIC_TITLES[topic_id],
        "topicId": topic_id,
        "subtopic": subtopic,
        "source": "VG Insights Practice",
        "isPYQ": False
    })

print("Builder part 1 ready.")
