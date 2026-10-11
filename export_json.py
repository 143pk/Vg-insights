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

def clean_replacements(s):
    replacements = [
        ('ൌ', '='),
        ('൅', '+'),
        ('െ', '-'),
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
        ('ሾ', '['),
        ('ሿ', ']'),
        ('ቀ', '('),
        ('ቁ', ')'),
        ('ሺ', '('),
        ('ሻ', ')'),
        ('ൈ', '×'),
        ('⇒', '⇒'),
        ('∝', '∝'),
        ('√', '√'),
        ('ట', '√'),
        ('ට', '√'),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    s = re.sub(r'--\s*\d+\s*of\s*\d+\s*--', '', s)
    return s

def unspace_zoology(s):
    # Fix words that have single spaces between letters
    # E.g. 'c o c k r o a c h e s' -> 'cockroaches'
    # We unspace runs of single letters separated by space
    def repl(m):
        run = m.group(0)
        # remove spaces between letters
        return re.sub(r'\s+', '', run)
    
    # Run of 3 or more single letters separated by single space
    s = re.sub(r'\b[a-zA-Z](?: [a-zA-Z]){2,}\b', repl, s)
    # Also 2 letters if common: 'i n' -> 'in', 'o f' -> 'of', 't o' -> 'to', 'i s' -> 'is', 'd u e' -> 'due'
    two_letter_words = ['in', 'of', 'to', 'is', 'as', 'at', 'by', 'on', 'an', 'or', 'so', 'no', 'if', 'he', 'we', 'do', 'up']
    for w in two_letter_words:
        s = re.sub(rf'\b{w[0]} {w[1]}\b', w, s, flags=re.IGNORECASE)
    return s

parsed_questions = []

for q in range(1, 181):
    chunk = q_chunks[q]
    chunk = clean_replacements(chunk)
    
    # Extract solution
    sol_m = re.search(r'S\s*o\s*l\s*u\s*t\s*i\s*o\s*n\s*:\s*\(?\s*([A-D])\s*\)?', chunk, re.IGNORECASE)
    ans = sol_m.group(1).upper() if sol_m else None
    
    if sol_m:
        before_sol = chunk[:sol_m.start()].strip()
        explanation = chunk[sol_m.end():].strip()
        explanation = re.sub(r'^[\s:\.-]+', '', explanation).strip()
    else:
        before_sol = chunk
        explanation = ''
        
    opt_pat = re.compile(r'(?:^|\n)\s*(?:\(\s*([A-D])\s*[\)]?|([A-D])\s*\))\s*')
    opt_matches = list(opt_pat.finditer(before_sol))
    
    seq_matches = []
    expected = ['A', 'B', 'C', 'D']
    exp_idx = 0
    for m in opt_matches:
        letter = (m.group(1) or m.group(2)).upper()
        if exp_idx < 4 and letter == expected[exp_idx]:
            seq_matches.append((letter, m.start(), m.end()))
            exp_idx += 1
            
    if len(seq_matches) == 4:
        q_text = before_sol[:seq_matches[0][1]].strip()
        optA = before_sol[seq_matches[0][2]:seq_matches[1][1]].strip()
        optB = before_sol[seq_matches[1][2]:seq_matches[2][1]].strip()
        optC = before_sol[seq_matches[2][2]:seq_matches[3][1]].strip()
        optD = before_sol[seq_matches[3][2]:].strip()
    else:
        q_text = before_sol
        optA, optB, optC, optD = "", "", "", ""
        
    if q >= 136:
        q_text = unspace_zoology(q_text)
        optA = unspace_zoology(optA)
        optB = unspace_zoology(optB)
        optC = unspace_zoology(optC)
        optD = unspace_zoology(optD)
        explanation = unspace_zoology(explanation)
        
    parsed_questions.append({
        'questionNumber': q,
        'question': q_text,
        'options': [optA, optB, optC, optD],
        'correctAnswer': ans,
        'correctIndex': {'A': 0, 'B': 1, 'C': 2, 'D': 3}.get(ans, 0),
        'explanation': explanation
    })

with open('parsed_180.json', 'w') as f:
    json.dump(parsed_questions, f, indent=2)

print('Exported 180 questions to parsed_180.json.')
