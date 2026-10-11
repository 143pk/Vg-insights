import re
import json

with open('full_neet_2016_p2_text.txt', 'r') as f:
    text = f.read()

# Locate questions 1 to 180
q_positions = []
for q in range(1, 181):
    q_spaced = r'\s*'.join(list(str(q)))
    pat = rf'(?:^|\n)\s*{q_spaced}\s*\.\s*'
    matches = list(re.finditer(pat, text))
    prev_pos = q_positions[-1][1] if q_positions else 0
    best_match = None
    for m in matches:
        if m.start() >= prev_pos:
            best_match = m
            break
    if not best_match:
        best_match = matches[-1]
    q_positions.append((q, best_match.start(), best_match.end()))

q_chunks = {}
for i in range(len(q_positions)):
    q_num = q_positions[i][0]
    start = q_positions[i][2]
    end = q_positions[i+1][1] if i+1 < len(q_positions) else len(text)
    chunk = text[start:end].strip()
    q_chunks[q_num] = chunk

print("All 180 chunks extracted.")
