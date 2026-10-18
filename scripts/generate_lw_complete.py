import json
import os
import sys

def build_living_world_questions():
    questions = []
    
    # Helper to add a question
    def add_q(q_num, q_text, opt_a, opt_b, opt_c, opt_d, ans, concept, step, why_wrong, diff, topic_id, subtopic):
        opt_dict = {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d}
        idx = {"A": 0, "B": 1, "C": 2, "D": 3}[ans]
        topic_titles = {
            "bio-living-biodiversity": "What is Living? & Biodiversity",
            "bio-classification-taxonomy": "Need for Classification & Taxonomy",
            "bio-species-hierarchy": "Concept of Species & Taxonomical Hierarchy",
            "bio-nomenclature-systematics": "Binomial Nomenclature & Systematics"
        }
        topic_title = topic_titles[topic_id]
        
        explanation = f"1. CONCEPT:\n{concept}\n\n2. STEP-BY-STEP SOLUTION:\n{step}\n\n3. FINAL ANSWER:\nOption {ans}: {opt_dict[ans]}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
        
        q_obj = {
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
        questions.append(q_obj)

    print("Building question bank definitions...")
    return add_q, questions

if __name__ == '__main__':
    add_q, questions = build_living_world_questions()
    print("Module initialized successfully.")
