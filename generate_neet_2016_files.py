import json
import re

with open('parsed_180.json', 'r', encoding='utf-8') as f:
    raw_data = json.load(f)

print(f"Loaded {len(raw_data)} questions.")
