import json

with open('parsed_180.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Read {len(questions)} questions.")
