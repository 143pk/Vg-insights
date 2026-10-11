# scripts/build_units_mcqs.py
import json
import os
import sys

from batch_easy import EASY_QUESTIONS
from batch_medium_1 import MEDIUM_QUESTIONS_PART1
from batch_medium_2 import MEDIUM_QUESTIONS_PART2
from batch_hard import HARD_QUESTIONS

def main():
    print("=== STARTING UNITS AND MEASUREMENTS 150 MCQS COMPILATION ===")
    
    # 1. Check counts
    print(f"Easy questions count: {len(EASY_QUESTIONS)} (Expected: 40)")
    assert len(EASY_QUESTIONS) == 40, f"Expected 40 easy questions, got {len(EASY_QUESTIONS)}"
    
    medium_all = MEDIUM_QUESTIONS_PART1 + MEDIUM_QUESTIONS_PART2
    print(f"Medium questions count: {len(medium_all)} (Expected: 75)")
    assert len(medium_all) == 75, f"Expected 75 medium questions, got {len(medium_all)}"
    
    print(f"Hard questions count: {len(HARD_QUESTIONS)} (Expected: 35)")
    assert len(HARD_QUESTIONS) == 35, f"Expected 35 hard questions, got {len(HARD_QUESTIONS)}"
    
    all_raw = EASY_QUESTIONS + medium_all + HARD_QUESTIONS
    total_count = len(all_raw)
    print(f"Total compiled questions: {total_count} (Expected: 150)")
    assert total_count == 150, f"Expected exactly 150 questions, got {total_count}"
    
    # 2. Re-index and validate each question
    processed_questions = []
    question_texts_seen = set()
    
    for idx, q in enumerate(all_raw, start=1):
        q_num = idx
        
        # Verify text
        q_text = q["question"].strip()
        assert len(q_text) > 10, f"Question {q_num} text too short"
        assert q_text not in question_texts_seen, f"Duplicate question text found at #{q_num}: {q_text[:40]}"
        question_texts_seen.add(q_text)
        
        # Options
        options = q["options"]
        assert all(k in options for k in ["A", "B", "C", "D"]), f"Missing options in #{q_num}"
        for opt_k in ["A", "B", "C", "D"]:
            assert len(str(options[opt_k]).strip()) > 0, f"Empty option {opt_k} in #{q_num}"
            
        # Correct answer
        ans = q["correctAnswer"]
        assert ans in ["A", "B", "C", "D"], f"Invalid correctAnswer {ans} in #{q_num}"
        correct_index = {"A": 0, "B": 1, "C": 2, "D": 3}[ans]
        
        # Difficulty
        diff = q["difficulty"]
        if idx <= 40:
            assert diff == "Easy", f"Question {q_num} expected Easy, got {diff}"
        elif idx <= 115:
            assert diff == "Medium", f"Question {q_num} expected Medium, got {diff}"
        else:
            assert diff == "Hard", f"Question {q_num} expected Hard, got {diff}"
            
        # Structured solution validation
        concept = q.get("concept", "").strip()
        given = q.get("given", "").strip()
        formula = q.get("formula", "").strip()
        step_by_step = q.get("stepByStep", "").strip()
        if "stepByStep_clean" in q:
            step_by_step = q["stepByStep_clean"].strip()
        if "stepByStep_revised" in q:
            step_by_step = q["stepByStep_revised"].strip()
            
        final_answer = q.get("finalAnswer", "").strip()
        why_wrong = q.get("whyOtherOptionsWrong", "").strip()
        
        assert len(concept) > 0, f"Missing concept in #{q_num}"
        assert len(given) > 0, f"Missing given in #{q_num}"
        assert len(formula) > 0, f"Missing formula in #{q_num}"
        assert len(step_by_step) > 0, f"Missing stepByStep in #{q_num}"
        assert len(final_answer) > 0, f"Missing finalAnswer in #{q_num}"
        assert len(why_wrong) > 0, f"Missing whyOtherOptionsWrong in #{q_num}"
        
        # Full formatted explanation string with all 6 required sections
        full_explanation = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. GIVEN:\n{given}\n\n"
            f"3. FORMULA / PRINCIPLE:\n{formula}\n\n"
            f"4. STEP-BY-STEP SOLUTION:\n{step_by_step}\n\n"
            f"5. FINAL ANSWER:\n{final_answer}\n\n"
            f"6. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
        )
        
        # Topic
        topic = q["topic"].strip()
        
        # PYQ tagging
        is_pyq = bool(q.get("isPYQ", False))
        source = q.get("source", "VG Insights Practice").strip()
        if is_pyq:
            assert "NEET" in source or "AIPMT" in source, f"Invalid PYQ source in #{q_num}: {source}"
        else:
            assert source == "VG Insights Practice", f"Practice question #{q_num} must have source VG Insights Practice"
            
        pyq_year = q.get("pyqYear")
        
        q_obj = {
            "id": f"um-mcq-{q_num:03d}",
            "questionNumber": q_num,
            "question": q_text,
            "options": {
                "A": str(options["A"]).strip(),
                "B": str(options["B"]).strip(),
                "C": str(options["C"]).strip(),
                "D": str(options["D"]).strip()
            },
            "optionsList": [
                str(options["A"]).strip(),
                str(options["B"]).strip(),
                str(options["C"]).strip(),
                str(options["D"]).strip()
            ],
            "correctAnswer": ans,
            "correctIndex": correct_index,
            "explanation": full_explanation,
            "solutionStructured": {
                "concept": concept,
                "given": given,
                "formula": formula,
                "stepByStep": step_by_step,
                "finalAnswer": final_answer,
                "whyOtherOptionsWrong": why_wrong
            },
            "difficulty": diff,
            "subject": "Physics",
            "class": "11",
            "chapter": "Units and Measurements",
            "chapterId": "units-measurements",
            "topic": topic,
            "source": source,
            "isPYQ": is_pyq,
            "pyqYear": pyq_year
        }
        processed_questions.append(q_obj)
        
    print(f"Successfully validated all {len(processed_questions)} questions!")
    
    # 3. Output to TypeScript file
    out_path = os.path.join("src", "data", "chapterwise", "physics", "unitsAndMeasurementsData.ts")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    ts_content = [
        "// Auto-generated verified NEET UG Question Bank",
        "// Subject: Physics | Class: 11 | Chapter: Units and Measurements",
        "// Total Questions: 150 (Easy: 40, Medium: 75, Hard: 35)",
        "import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';",
        "",
        "export const UNITS_MEASUREMENTS_MCQS: ChapterwiseMCQ[] = " + json.dumps(processed_questions, indent=2) + ";",
        "",
        "export const UNITS_MEASUREMENTS_STATS = {",
        "  chapterId: 'units-measurements',",
        "  chapterTitle: 'Units and Measurements',",
        "  subject: 'Physics',",
        "  class: '11',",
        "  totalQuestions: 150,",
        "  easyCount: 40,",
        "  mediumCount: 75,",
        "  hardCount: 35,",
        f"  pyqCount: {sum(1 for q in processed_questions if q['isPYQ'])},",
        f"  practiceCount: {sum(1 for q in processed_questions if not q['isPYQ'])},",
        "};",
        ""
    ]
    
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(ts_content))
        
    print(f"Written file successfully: {out_path}")
    print("Stats:")
    print(f"  Total: {len(processed_questions)}")
    print(f"  Easy: {sum(1 for q in processed_questions if q['difficulty'] == 'Easy')}")
    print(f"  Medium: {sum(1 for q in processed_questions if q['difficulty'] == 'Medium')}")
    print(f"  Hard: {sum(1 for q in processed_questions if q['difficulty'] == 'Hard')}")
    print(f"  Verified PYQs: {sum(1 for q in processed_questions if q['isPYQ'])}")
    print(f"  VG Insights Practice: {sum(1 for q in processed_questions if not q['isPYQ'])}")

if __name__ == "__main__":
    main()
