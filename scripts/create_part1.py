#!/usr/bin/env python3
import json

def generate_part1():
    qs = []
    
    # helper
    def add_q(qid, qtext, a, b, c, d, correct, concept, given, formula, step, final, tip, why_wrong, diff, topic, source="NEET UG Practice", is_pyq=False, pyq_year=None):
        opts = {"A": a, "B": b, "C": c, "D": d}
        c_idx = {"A":0, "B":1, "C":2, "D":3}[correct]
        expl = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. GIVEN:\n{given}\n\n"
            f"3. FORMULA / PRINCIPLE:\n{formula}\n\n"
            f"4. STEP-BY-STEP SOLUTION:\n{step}\n\n"
            f"5. FINAL ANSWER:\n{final}\n\n"
            f"6. QUICK TIP:\n{tip}"
        )
        item = {
            "id": f"solids-mcq-{qid:03d}",
            "questionNumber": qid,
            "question": qtext,
            "options": opts,
            "optionsList": [a, b, c, d],
            "correctAnswer": correct,
            "correctIndex": c_idx,
            "explanation": expl,
            "solutionStructured": {
                "concept": concept,
                "given": given,
                "formula": formula,
                "stepByStep": step,
                "finalAnswer": final,
                "whyOtherOptionsWrong": why_wrong
            },
            "difficulty": diff,
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
        qs.append(item)

    # Let's write the first 10 questions
    add_q(1,
        "A wire of length $L$, area of cross-section $A$ is hanging from a fixed support. The length of the wire changes to $L_1$ when mass $M$ is suspended from its free end. The expression for Young's modulus is:",
        "$\\frac{Mg(L_1 - L)}{AL}$",
        "$\\frac{MgL}{A L_1}$",
        "$\\frac{MgL}{A(L_1 - L)}$",
        "$\\frac{MgL_1}{AL}$",
        "C",
        "Young's modulus $Y$ is defined as the ratio of longitudinal stress to longitudinal strain: $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{\\Delta L / L}$.",
        "Original length $= L$, new length $= L_1$, elongation $\\Delta L = L_1 - L$, stretching force $F = Mg$, cross-sectional area $= A$.",
        "Y = \\frac{F L}{A \\Delta L} = \\frac{MgL}{A(L_1 - L)}",
        "1. Longitudinal stress $= \\frac{F}{A} = \\frac{Mg}{A}$.\n2. Longitudinal strain $= \\frac{\\Delta L}{L} = \\frac{L_1 - L}{L}$.\n3. Dividing stress by strain: $Y = \\frac{Mg/A}{(L_1 - L)/L} = \\frac{MgL}{A(L_1 - L)}$.",
        "Option C: $\\frac{MgL}{A(L_1 - L)}$",
        "Strain is change in length divided by original length: $\\frac{L_1 - L}{L}$. Thus elongation $(L_1 - L)$ stays in the denominator.",
        "Option A inverted the strain ratio. Option B omitted subtracting the original length $L$. Option D used $L_1$ instead of elongation.",
        "Easy",
        "Young's Modulus & Hooke's Law",
        "NEET 2020",
        True,
        2020
    )
    return qs

print("create_part1 helper ready")
