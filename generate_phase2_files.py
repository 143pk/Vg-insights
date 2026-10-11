import re
import json

with open('full_neet_2016_p2_text.txt', 'r') as f:
    text = f.read()

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

def clean_text(s):
    if not s:
        return ""
    # Replace weird unicode math symbols
    replacements = [
        ('ൌ', '='),
        ('൅', '+'),
        ('െ', '-'),
        ('ି ଵ', '⁻¹'),
        ('ି ଵ', '⁻¹'),
        ('ି', '-'),
        ('ଵ', '1'),
        ('ଶ', '2'),
        ('ଷ', '3'),
        ('ସ', '4'),
        ('ହ', '5'),
        ('଺', '6'),
        ('଻', '7'),
        ('୮', '8'),
        ('୯', '9'),
        ('଴', '0'),
        ('ୟ', 'a'),
        ('ୠ', 'b'),
        ('ୡ', 'c'),
        ('୤', 'f'),
        ('୦', 'h'),
        ('ୋ', 'G'),
        ('୲', 't'),
        ('୶', 'x'),
        ('ౌ', 'P'),
        ('్', 'Q'),
        ('୰', 'r'),
        ('஡', 'ρ'),
        ('஘', 'θ'),
        ('୥', 'g'),
        ('୭', '°'),
        ('ܽܥ', 'Ca'),
        ('ܽܰ', 'Na'),
        ('ܪܥ', 'CH'),
        ('ݎܤ', 'Br'),
        ('݁ܺ', 'Xe'),
        ('ܨ', 'F'),
        ('ܫ', 'Al'),
        ('ܱ', 'O'),
        ('ܳ', 'O'),
        ('݌', 'p'),
        ('ݍ', 'q'),
        ('ሻܽሺ', '(a)'),
        ('ሻܾሺ', '(b)'),
        ('ሻܿሺ', '(c)'),
        ('ሻ݀ሺ', '(d)'),
        ('ሻܦ– ܣሺ', '(A - D)'),
        ('ܣ', 'A'),
        ('ܤ', 'B'),
        ('ܥ', 'C'),
        ('ܦ', 'D'),
        ('ı̂', 'î'),
        ('ȷ̂', 'ĵ'),
        ('k̂', 'k̂'),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    
    # Remove lines containing page marks like '-- 7 of 65 --'
    s = re.sub(r'--\s*\d+\s*of\s*\d+\s*--', '', s)
    
    # Collapse multi spaces
    s = re.sub(r'[ \t]+', ' ', s)
    # Fix single spaced letters in Zoology if detected
    # If string contains many ' a ' or ' c o n v o l u t e d '
    return s.strip()

print("Clean text function ready.")
