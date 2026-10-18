import json
import os
import random
import re
from collections import Counter

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

TOPICS = {
    "non_chordates_1": ("bio-non-chordates-porifera-annelida", "Non-Chordates I - Basis of Classification & Porifera to Annelida"),
    "non_chordates_2": ("bio-non-chordates-arthropoda-hemichordata", "Non-Chordates II - Arthropoda to Hemichordata"),
    "chordates": ("bio-chordates-classes", "Chordates & Vertebrate Classes"),
}

LETTERS = ["A", "B", "C", "D"]

def balance_and_format_questions(raw_questions, seed_val=2001):
    rng = random.Random(seed_val)
    n = len(raw_questions)
    base = n // 4
    rem = n % 4
    targets = ["A"] * base + ["B"] * base + ["C"] * base + ["D"] * base
    targets.extend(["A", "B", "C", "D"][:rem])
    rng.shuffle(targets)

    formatted = []
    for i, item in enumerate(raw_questions):
        q_num = item["q_num"]
        q_id = f"animal-mcq-{q_num:03d}"
        target_ans = targets[i]

        curr_ans = item["ans"]
        opts = dict(item["opts"])
        correct_text = opts[curr_ans]

        curr_wrong_letters = [k for k in LETTERS if k != curr_ans]
        target_wrong_letters = [k for k in LETTERS if k != target_ans]

        mapping = {curr_ans: target_ans}
        for cw, tw in zip(curr_wrong_letters, target_wrong_letters):
            mapping[cw] = tw

        new_opts = {}
        for old_k, val in opts.items():
            new_opts[mapping[old_k]] = val

        sorted_opts = {k: new_opts[k] for k in LETTERS}
        options_list = [sorted_opts[k] for k in LETTERS]

        def remap_text(text):
            if not text:
                return ""
            for old_k in LETTERS:
                text = re.sub(r'\bOption ' + old_k + r'\b', f'__OPT_{old_k}__', text)
                text = re.sub(r'\bOptions ' + old_k + r'\b', f'__OPTS_{old_k}__', text)
            for old_k in LETTERS:
                nw_k = mapping[old_k]
                text = text.replace(f'__OPT_{old_k}__', f'Option {nw_k}')
                text = text.replace(f'__OPTS_{old_k}__', f'Options {nw_k}')
            return text

        why_wrong = remap_text(item.get("why_wrong", ""))
        concept = item.get("concept", "")
        step_by_step = item.get("step_by_step", "")
        final_answer = f"Option {target_ans}: {correct_text}"

        explanation = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. STEP-BY-STEP SOLUTION:\n{step_by_step}\n\n"
            f"3. FINAL ANSWER:\n{final_answer}\n\n"
            f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
        )

        formatted.append({
            "id": q_id,
            "questionNumber": q_num,
            "question": item["question"],
            "options": sorted_opts,
            "optionsList": options_list,
            "correctAnswer": target_ans,
            "correctIndex": LETTERS.index(target_ans),
            "explanation": explanation,
            "solutionStructured": {
                "concept": concept,
                "stepByStep": step_by_step,
                "finalAnswer": final_answer,
                "whyOtherOptionsWrong": why_wrong
            },
            "difficulty": item["difficulty"],
            "subject": "Biology",
            "class": "11",
            "chapter": "Animal Kingdom",
            "chapterId": "animal-kingdom",
            "topic": item["topic_title"],
            "topicId": item["topic_id"],
            "subtopic": item["subtopic"],
            "source": "VG Insights Practice",
            "isPYQ": False
        })
    return formatted

print("Animal Kingdom generator helper loaded.")
