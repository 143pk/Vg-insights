import json
import os
import sys

OUT_DIR = "/app/applet/src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

TOPIC_TITLES = {
    "bio-living-biodiversity": "What is Living? & Biodiversity",
    "bio-classification-taxonomy": "Need for Classification & Taxonomy",
    "bio-species-hierarchy": "Concept of Species & Taxonomical Hierarchy",
    "bio-nomenclature-systematics": "Binomial Nomenclature & Systematics"
}

def make_q(q_num, q_text, opt_a, opt_b, opt_c, opt_d, ans, concept, step, why_wrong, diff, topic_id, subtopic):
    opt_dict = {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d}
    idx = {"A": 0, "B": 1, "C": 2, "D": 3}[ans]
    topic_title = TOPIC_TITLES[topic_id]
    
    explanation = (
        f"1. CONCEPT:\n{concept}\n\n"
        f"2. STEP-BY-STEP SOLUTION:\n{step}\n\n"
        f"3. FINAL ANSWER:\nOption {ans}: {opt_dict[ans]}\n\n"
        f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
    )
    
    return {
        "id": f"living-world-mcq-{q_num:03d}",
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
        "chapter": "The Living World",
        "chapterId": "living-world",
        "topic": topic_title,
        "topicId": topic_id,
        "subtopic": subtopic,
        "source": "VG Insights Practice",
        "isPYQ": False
    }

def format_ts_file(part_num, questions):
    content = 'import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n'
    content += f'export const LIVING_WORLD_PART{part_num}_MCQS: ChapterwiseMCQ[] = [\n'
    for q in questions:
        content += f'  {json.dumps(q, indent=2)},\n'
    content += '];\n'
    return content

print("Base setup ready.")
