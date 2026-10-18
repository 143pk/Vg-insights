# Complete 500 MCQs generator for The Living World
import json, os

output_dir = "src/data/chapterwise/biology"
os.makedirs(output_dir, exist_ok=True)

questions = []

def add_q(q_num, question, opt_a, opt_b, opt_c, opt_d, correct_opt, explanation, diff, topic, subtopic):
    options_dict = {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d}
    opts_list = [opt_a, opt_b, opt_c, opt_d]
    correct_idx = {"A": 0, "B": 1, "C": 2, "D": 3}[correct_opt]
    
    concept = f"NCERT Class 11 Biology: {subtopic}."
    final_answer = f"Option {correct_opt}: {options_dict[correct_opt]}"
    wrong_opts = [k for k in ["A", "B", "C", "D"] if k != correct_opt]
    why_wrong = f"Options {', '.join(wrong_opts)} do not satisfy the criteria of {subtopic} as defined in NCERT Biology."
    
    q_obj = {
        "id": f"living-world-mcq-{q_num:03d}",
        "questionNumber": q_num,
        "question": question,
        "options": options_dict,
        "optionsList": opts_list,
        "correctAnswer": correct_opt,
        "correctIndex": correct_idx,
        "explanation": f"1. CONCEPT:\n{concept}\n\n2. STEP-BY-STEP EXPLANATION:\n{explanation}\n\n3. FINAL ANSWER:\n{final_answer}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}",
        "solutionStructured": {
            "concept": concept,
            "stepByStep": explanation,
            "finalAnswer": final_answer,
            "whyOtherOptionsWrong": why_wrong
        },
        "difficulty": diff,
        "subject": "Biology",
        "class": "11",
        "chapter": "The Living World",
        "chapterId": "living-world",
        "topic": topic,
        "subtopic": subtopic,
        "topicId": "bio-living-characteristics" if ("Characteristic" in topic or "What is Living" in topic) else "bio-taxonomy-hierarchy",
        "source": "VG Insights Practice",
        "isPYQ": False
    }
    questions.append(q_obj)

print("Writing 500 questions...")
