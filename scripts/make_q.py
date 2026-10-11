import json

def make_q(num, question, options, correct_opt, difficulty, topic, concept, given, formula, steps, tip, why_wrong):
    opt_map = {'A': 0, 'B': 1, 'C': 2, 'D': 3}
    ans_text = options[correct_opt]
    exp = f"""1. CONCEPT:
{concept}

2. GIVEN:
{given}

3. FORMULA / PRINCIPLE:
{formula}

4. STEP-BY-STEP SOLUTION:
{steps}

5. FINAL ANSWER:
Option {correct_opt}: {ans_text}

6. QUICK TIP:
{tip}"""

    sol = {
        "concept": concept,
        "given": given,
        "formula": formula,
        "stepByStep": steps,
        "finalAnswer": f"Option {correct_opt}: {ans_text}",
        "whyOtherOptionsWrong": why_wrong
    }

    return {
        "id": f"um-mcq-{num:03d}",
        "questionNumber": num,
        "question": question,
        "options": options,
        "optionsList": [options['A'], options['B'], options['C'], options['D']],
        "correctAnswer": correct_opt,
        "correctIndex": opt_map[correct_opt],
        "explanation": exp,
        "solutionStructured": sol,
        "difficulty": difficulty,
        "subject": "Physics",
        "class": "11",
        "chapter": "Units and Measurements",
        "chapterId": "units-measurements",
        "topic": topic,
        "source": "VG Insights Practice",
        "isPYQ": False,
        "pyqYear": None
    }
