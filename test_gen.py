import json

with open('parsed_180.json') as f:
    raw_qs = json.load(f)

print(f"Loaded {len(raw_qs)} questions from parsed_180.json")
