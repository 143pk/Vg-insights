import json
import os

def build_redox_questions():
    questions = []
    
    # 500 unique question definitions
    # We will generate:
    # Q1 - Q125: Easy
    # Q126 - Q250: Medium (Part 2)
    # Q251 - Q375: Medium (Part 3)
    # Q376 - Q500: Hard (Part 4)
