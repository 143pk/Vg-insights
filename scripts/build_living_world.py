import json
import os
import sys

# Script to build pristine Living World 500 MCQs
print("Starting Living World Question Generator...")

def make_q(q_id, q_num, question, options_dict, correct_opt, explanation, diff, topic, subtopic):
    opts_list = [options_dict["A"], options_dict["B"], options_dict["C"], options_dict["D"]]
    correct_idx = {"A": 0, "B": 1, "C": 2, "D": 3}[correct_opt]
    
    # Generate structured solution
    concept = f"NCERT Biology: {subtopic} in {topic}."
    step_by_step = explanation
    final_answer = f"Option {correct_opt}: {options_dict[correct_opt]}"
    wrong_opts = [k for k in ["A", "B", "C", "D"] if k != correct_opt]
    why_wrong = f"Options {', '.join(wrong_opts)} are incorrect because they contradict specific NCERT rules or facts regarding {subtopic}."
    
    return {
        "id": q_id,
        "questionNumber": q_num,
        "question": question,
        "options": options_dict,
        "optionsList": opts_list,
        "correctAnswer": correct_opt,
        "correctIndex": correct_idx,
        "explanation": f"1. CONCEPT:\n{concept}\n\n2. STEP-BY-STEP EXPLANATION:\n{step_by_step}\n\n3. FINAL ANSWER:\n{final_answer}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}",
        "solutionStructured": {
            "concept": concept,
            "stepByStep": step_by_step,
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
        "topicId": "bio-living-characteristics" if "Characteristic" in topic or "What is Living" in topic else "bio-taxonomy-hierarchy",
        "source": "VG Insights Practice",
        "isPYQ": False
    }

print("Helper ready.")
