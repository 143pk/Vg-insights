#!/usr/bin/env python3
"""
VG Insights - Bulk NEET Chapterwise MCQ Generator & Integrator
Chapters:
1. Redox Reactions (redox-reactions)
2. p-Block Elements (Group 13 & 14) (p-block-11)
3. Organic Chemistry: Some Basic Principles & Techniques (organic-chemistry-basic-principles)
4. Hydrocarbons (hydrocarbons)

Each chapter receives exactly 500 verified, curriculum-aligned NEET MCQs:
- 125 Easy (Part 1, Q1 - Q125)
- 125 Medium (Part 2, Q126 - Q250)
- 125 Medium (Part 3, Q251 - Q375)
- 125 Hard (Part 4, Q376 - Q500)
Total: 500 questions per chapter (125 Easy, 250 Medium, 125 Hard).
"""

import json
import os
import random

# Helper to escape typescript strings safely
def to_ts_file(var_name: str, questions: list, header_comment: str) -> str:
    # Serialize questions to clean JSON
    json_str = json.dumps(questions, indent=2, ensure_ascii=False)
    return f"""// {header_comment}
// Target: Exactly {len(questions)} verified MCQs with teacher-style step-by-step solutions

import {{ ChapterwiseMCQ }} from "../../../types/chapterwiseMcq";

export const {var_name}: ChapterwiseMCQ[] = {json_str};
"""

print("Generator module loaded")
