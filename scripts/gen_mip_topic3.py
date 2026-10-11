import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 3: Magnitude and direction of vectors (Q036 to Q053, 18 questions)
# Difficulties: 4 Easy, 9 Medium, 5 Hard
# ==============================================================================

# Q036 - Easy
qs.append(make_plane_q(
    num=36,
    question="What is the magnitude of the vector $\\vec{A} = 6\\hat{i} + 8\\hat{j}$?",
    options={
        "A": "10",
        "B": "14",
        "C": "48",
        "D": "2"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Magnitude and direction of vectors",
    concept="The magnitude of a two-dimensional vector $\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$ is given by the Pythagorean formula: $|\\vec{A}| = \\sqrt{A_x^2 + A_y^2}$.",
    given="Vector $\\vec{A} = 6\\hat{i} + 8\\hat{j}$.",
    formula="$|\\vec{A}| = \\sqrt{A_x^2 + A_y^2}$",
    steps=(
        "1. Identify the components: $A_x = 6$, $A_y = 8$.\n"
        "2. Apply the magnitude formula: $|\\vec{A}| = \\sqrt{6^2 + 8^2}$.\n"
        "3. Compute the squares: $6^2 = 36$, $8^2 = 64$.\n"
        "4. Sum: $36 + 64 = 100$.\n"
        "5. Square root: $\\sqrt{100} = 10$."
    ),
    tip="Pythagorean triples to memorize for NEET: (3, 4, 5), (6, 8, 10), (5, 12, 13), (7, 24, 25), (8, 15, 17).",
    why_wrong="14 is the simple arithmetic sum $6 + 8$, which ignores vector orthogonality."
))

# Q037 - Easy
qs.append(make_plane_q(
    num=37,
    question="What angle does the vector $\\vec{A} = 4\\hat{i} + 4\\hat{j}$ make with the positive x-axis?",
    options={
        "A": "45°",
        "B": "30°",
        "C": "60°",
        "D": "90°"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Magnitude and direction of vectors",
    concept="The angle $\\theta$ made by a vector $\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$ with the positive x-axis is given by $\\tan\\theta = \\frac{A_y}{A_x}$.",
    given="$A_x = 4$, $A_y = 4$.",
    formula="$\\tan\\theta = \\frac{A_y}{A_x} \\implies \\theta = \\tan^{-1}\\left(\\frac{A_y}{A_x}\\right)$",
    steps=(
        "1. Find the ratio of components: $\\tan\\theta = \\frac{A_y}{A_x} = \\frac{4}{4} = 1$.\n"
        "2. Since both $A_x > 0$ and $A_y > 0$, the vector lies in the first quadrant.\n"
        "3. The angle whose tangent is 1 in the first quadrant is $45^\\circ$.\n"
        "4. Therefore, $\\theta = 45^\\circ$."
    ),
    tip="Whenever $A_x = A_y > 0$, the angle with the x-axis is always exactly $45^\\circ$!",
    why_wrong="30° would require $\\tan\\theta = 1/\\sqrt{3} \\approx 0.577$."
))

# Q038 - Easy
qs.append(make_plane_q(
    num=38,
    question="The magnitude of the position vector $\\vec{r} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ is:",
    options={
        "A": "7",
        "B": "11",
        "C": "49",
        "D": "5"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Magnitude and direction of vectors",
    concept="For a 3D vector $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$, the magnitude is $|\\vec{r}| = \\sqrt{x^2 + y^2 + z^2}$.",
    given="$\\vec{r} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$.",
    formula="$|\\vec{r}| = \\sqrt{x^2 + y^2 + z^2}$",
    steps=(
        "1. Extract components: $x = 2$, $y = 3$, $z = 6$.\n"
        "2. Compute squares: $2^2 = 4$, $3^2 = 9$, $6^2 = 36$.\n"
        "3. Sum: $4 + 9 + 36 = 49$.\n"
        "4. Take square root: $\\sqrt{49} = 7$.\n"
        "5. The magnitude is 7 units."
    ),
    tip="Classic NEET 3D Pythagorean triple: $(2, 3, 6) \\implies \\sqrt{4+9+36} = \\sqrt{49} = 7$!",
    why_wrong="11 is the sum of magnitudes $2 + 3 + 6$, not Euclidean vector magnitude."
))

# Q039 - Easy
qs.append(make_plane_q(
    num=39,
    question="A vector $\\vec{A}$ has a magnitude of 20 units and makes an angle of 30° with the positive x-axis. What are its horizontal and vertical components, respectively?",
    options={
        "A": "10√3 units and 10 units",
        "B": "10 units and 10√3 units",
        "C": "10√2 units and 10√2 units",
        "D": "20 units and 10 units"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Magnitude and direction of vectors",
    concept="A vector of magnitude $A$ making angle $\\theta$ with the positive x-axis resolves into $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$.",
    given="$A = 20$, $\\theta = 30^\\circ$.",
    formula="$A_x = A\\cos(30^\\circ)$; $A_y = A\\sin(30^\\circ)$",
    steps=(
        "1. Horizontal component: $A_x = 20\\cos 30^\\circ = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$ units.\n"
        "2. Vertical component: $A_y = 20\\sin 30^\\circ = 20 \\times \\frac{1}{2} = 10$ units.\n"
        "3. Thus, components are $10\\sqrt{3}$ and $10$."
    ),
    tip="Side adjacent to angle $\\theta$ takes $\\cos\\theta$; side opposite takes $\\sin\\theta$.",
    why_wrong="Option B swaps the horizontal and vertical components."
))

# Q040 - Medium
qs.append(make_plane_q(
    num=40,
    question="A vector $\\vec{B}$ has components $B_x = -3$ and $B_y = 4$. What angle does $\\vec{B}$ make with the positive x-axis?",
    options={
        "A": "127°",
        "B": "53°",
        "C": "143°",
        "D": "37°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="When $B_x < 0$ and $B_y > 0$, the vector lies in the second quadrant. The angle with the negative x-axis is $\\phi = \\tan^{-1}(|B_y|/|B_x|) = \\tan^{-1}(4/3) \\approx 53^\\circ$. The angle with the positive x-axis is $\\theta = 180^\\circ - \\phi = 180^\\circ - 53^\\circ = 127^\\circ$.",
    given="$B_x = -3$, $B_y = 4$.",
    formula="$\\theta = 180^\\circ - \\tan^{-1}\\left(\\frac{|B_y|}{|B_x|}\\right)$ in Quadrant II.",
    steps=(
        "1. Identify the quadrant: $B_x = -3 < 0$, $B_y = +4 > 0 \\implies$ Second Quadrant.\n"
        "2. Find the reference angle $\\alpha$ with the negative x-axis: $\\tan\\alpha = \\frac{|B_y|}{|B_x|} = \\frac{4}{3}$.\n"
        "3. For a 3-4-5 right triangle, $\\tan 53^\\circ = \\frac{4}{3} \\approx 1.33$.\n"
        "4. Angle measured counterclockwise from the positive x-axis is $\\theta = 180^\\circ - 53^\\circ = 127^\\circ$."
    ),
    tip="Standard NEET triangle values: $\\tan 37^\\circ = 3/4 = 0.75$; $\\tan 53^\\circ = 4/3 = 1.33$.",
    why_wrong="53° is the angle with the negative x-axis, not the positive x-axis."
))

# Q041 - Medium
qs.append(make_plane_q(
    num=41,
    question="What is the unit vector in the direction of $\\vec{A} = 5\\hat{i} + 12\\hat{j}$?",
    options={
        "A": "(5/13) î + (12/13) ĵ",
        "B": "(5/17) î + (12/17) ĵ",
        "C": "(12/13) î + (5/13) ĵ",
        "D": "5 î + 12 ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="A unit vector $\\hat{A}$ has a magnitude of 1 and is defined by dividing the vector by its magnitude: $\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|}$.",
    given="$\\vec{A} = 5\\hat{i} + 12\\hat{j}$.",
    formula="$\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|} = \\frac{A_x\\hat{i} + A_y\\hat{j}}{\\sqrt{A_x^2 + A_y^2}}$",
    steps=(
        "1. Calculate magnitude: $|\\vec{A}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n"
        "2. Divide each component by 13: $\\hat{A} = \\frac{5}{13}\\hat{i} + \\frac{12}{13}\\hat{j}$.\n"
        "3. Verify magnitude: $\\sqrt{(5/13)^2 + (12/13)^2} = \\sqrt{(25 + 144)/169} = \\sqrt{169/169} = 1$."
    ),
    tip="Pythagorean triple (5, 12, 13) makes the magnitude 13 immediately without pencil calculation.",
    why_wrong="Option B divides by $5 + 12 = 17$, which is a common beginner error."
))

# Q042 - Medium
qs.append(make_plane_q(
    num=42,
    question="If $\\vec{A} = 0.6\\hat{i} + c\\hat{j}$ is a unit vector, what is the value of the constant c?",
    options={
        "A": "± 0.8",
        "B": "± 0.4",
        "C": "± 0.64",
        "D": "± 0.16"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="For a unit vector, the sum of squares of its components must equal 1: $A_x^2 + A_y^2 = 1$.",
    given="$\\vec{A} = 0.6\\hat{i} + c\\hat{j}$ with $|\\vec{A}| = 1$.",
    formula="$A_x^2 + A_y^2 = 1 \\implies (0.6)^2 + c^2 = 1$",
    steps=(
        "1. Write the condition for a unit vector: $|\\vec{A}|^2 = 1$.\n"
        "2. $(0.6)^2 + c^2 = 1$.\n"
        "3. $0.36 + c^2 = 1 \\implies c^2 = 1 - 0.36 = 0.64$.\n"
        "4. Taking square root: $c = \\pm \\sqrt{0.64} = \\pm 0.8$."
    ),
    tip="Familiar 0.6 and 0.8: $\\sin^2\\theta + \\cos^2\\theta = 1$ where $\\cos 37^\\circ = 0.8, \\sin 37^\\circ = 0.6$.",
    why_wrong="0.64 is $c^2$, not $c$."
))

# Q043 - Medium
qs.append(make_plane_q(
    num=43,
    question="If a unit vector is represented by $\\vec{u} = 0.4\\hat{i} + 0.8\\hat{j} + c\\hat{k}$, what is the value of c?",
    options={
        "A": "√0.2",
        "B": "√0.8",
        "C": "0.2",
        "D": "√0.4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="For a 3D unit vector: $u_x^2 + u_y^2 + u_z^2 = 1$.",
    given="$\\vec{u} = 0.4\\hat{i} + 0.8\\hat{j} + c\\hat{k}$, $|\\vec{u}| = 1$.",
    formula="$u_x^2 + u_y^2 + u_z^2 = 1 \\implies (0.4)^2 + (0.8)^2 + c^2 = 1$",
    steps=(
        "1. Square each component: $(0.4)^2 = 0.16$, $(0.8)^2 = 0.64$.\n"
        "2. Sum: $0.16 + 0.64 = 0.80$.\n"
        "3. Substitute into unit vector condition: $0.80 + c^2 = 1$.\n"
        "4. $c^2 = 1 - 0.80 = 0.20$.\n"
        "5. Therefore, $c = \\sqrt{0.2}$ (or $\\sqrt{1/5}$)."
    ),
    tip="NEET past question pattern: Always square all terms first: $0.16 + 0.64 + c^2 = 1 \\implies c = \\sqrt{0.2}$.",
    why_wrong="0.2 is $c^2$, forgetting to take the square root."
))

# Q044 - Medium
qs.append(make_plane_q(
    num=44,
    question="What is the angle between the vector $\\vec{A} = \\hat{i} + \\hat{j} + \\hat{k}$ and the positive x-axis?",
    options={
        "A": "cos⁻¹(1 / √3)",
        "B": "cos⁻¹(1 / 3)",
        "C": "45°",
        "D": "60°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="The direction cosine of a vector $\\vec{A}$ with the x-axis is given by $\\cos\\alpha = \\frac{A_x}{|\\vec{A}|}$.",
    given="$\\vec{A} = 1\\hat{i} + 1\\hat{j} + 1\\hat{k}$.",
    formula="$\\cos\\alpha = \\frac{A_x}{\\sqrt{A_x^2 + A_y^2 + A_z^2}}$",
    steps=(
        "1. Identify the x-component: $A_x = 1$.\n"
        "2. Compute the full magnitude of $\\vec{A}$: $|\\vec{A}| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$.\n"
        "3. Direction cosine with the x-axis: $\\cos\\alpha = \\frac{A_x}{|\\vec{A}|} = \\frac{1}{\\sqrt{3}}$.\n"
        "4. Thus, $\\alpha = \\cos^{-1}(1 / \\sqrt{3}) \\approx 54.7^\\circ$."
    ),
    tip="Direction cosines property: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$. Here $(1/\\sqrt{3})^2 + (1/\\sqrt{3})^2 + (1/\\sqrt{3})^2 = 3/3 = 1$.",
    why_wrong="45° is the angle with the x-axis in 2D $(\\hat{i} + \\hat{j})$, not 3D."
))

# Q045 - Medium
qs.append(make_plane_q(
    num=45,
    question="The direction cosines of a vector are $l, m, n$. Which of the following fundamental relations must always be satisfied?",
    options={
        "A": "l² + m² + n² = 1",
        "B": "l + m + n = 1",
        "C": "l² + m² + n² = 0",
        "D": "l² + m² = n²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="Direction cosines are defined as $l = \\cos\\alpha = A_x/A, m = \\cos\\beta = A_y/A, n = \\cos\\gamma = A_z/A$. Their squares sum to 1.",
    given="Direction cosines $l = \\cos\\alpha$, $m = \\cos\\beta$, $n = \\cos\\gamma$.",
    formula="$l^2 + m^2 + n^2 = \\frac{A_x^2 + A_y^2 + A_z^2}{A^2} = \\frac{A^2}{A^2} = 1$",
    steps=(
        "1. By definition: $l = A_x/A$, $m = A_y/A$, $n = A_z/A$.\n"
        "2. Sum of squares: $l^2 + m^2 + n^2 = (A_x/A)^2 + (A_y/A)^2 + (A_z/A)^2$.\n"
        "3. Combine denominators: $\\frac{A_x^2 + A_y^2 + A_z^2}{A^2}$.\n"
        "4. Since $A^2 = A_x^2 + A_y^2 + A_z^2$, the fraction equals $A^2/A^2 = 1$.\n"
        "5. Also, $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$."
    ),
    tip="Memory anchor: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$, and $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$. Both are frequently asked in NEET!",
    why_wrong="Option B linearly sums them, which is mathematically false."
))

# Q046 - Medium
qs.append(make_plane_q(
    num=46,
    question="If a vector makes angles $\\alpha = 60^\\circ$ and $\\beta = 60^\\circ$ with the positive x- and y-axes respectively, what angle $\\gamma$ does it make with the positive z-axis?",
    options={
        "A": "45° or 135°",
        "B": "60° or 120°",
        "C": "30° or 150°",
        "D": "90°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="Use $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    given="$\\alpha = 60^\\circ$, $\\beta = 60^\\circ$.",
    formula="$\\cos^2(60^\\circ) + \\cos^2(60^\\circ) + \\cos^2\\gamma = 1$",
    steps=(
        "1. Calculate known direction cosines: $\\cos 60^\\circ = 1/2$.\n"
        "2. $\\cos^2\\alpha = (1/2)^2 = 1/4$; $\\cos^2\\beta = (1/2)^2 = 1/4$.\n"
        "3. Substitute: $1/4 + 1/4 + \\cos^2\\gamma = 1$.\n"
        "4. $1/2 + \\cos^2\\gamma = 1 \\implies \\cos^2\\gamma = 1/2$.\n"
        "5. $\\cos\\gamma = \\pm 1/\\sqrt{2} \\implies \\gamma = 45^\\circ$ or $135^\\circ$."
    ),
    tip="Direct check: $(1/2)^2 + (1/2)^2 + (1/\\sqrt{2})^2 = 1/4 + 1/4 + 1/2 = 1$.",
    why_wrong="60° would give $1/4 + 1/4 + 1/4 = 3/4 \\neq 1$."
))

# Q047 - Medium
qs.append(make_plane_q(
    num=47,
    question="A vector $\\vec{A}$ has a magnitude of 10 units. Its component along the x-axis is 6 units. What are the possible values for its component along the y-axis?",
    options={
        "A": "± 8 units",
        "B": "± 4 units",
        "C": "± 16 units",
        "D": "8 units only"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="In two dimensions, $A^2 = A_x^2 + A_y^2 \\implies A_y = \\pm \\sqrt{A^2 - A_x^2}$.",
    given="$A = 10$, $A_x = 6$.",
    formula="$A_y = \\pm \\sqrt{A^2 - A_x^2}$",
    steps=(
        "1. Write the Pythagorean equation: $A^2 = A_x^2 + A_y^2$.\n"
        "2. Substitute: $10^2 = 6^2 + A_y^2 \\implies 100 = 36 + A_y^2$.\n"
        "3. $A_y^2 = 100 - 36 = 64$.\n"
        "4. Taking square root: $A_y = \\pm \\sqrt{64} = \\pm 8$ units.\n"
        "5. The vector could lie in Quadrant I ($+8$) or Quadrant IV ($-8$)."
    ),
    tip="Vectors with $A_x = 6$ and $A = 10$ can point into either Quadrant I or Quadrant IV!",
    why_wrong="Option D forgets the negative root in Quadrant IV."
))

# Q048 - Hard
qs.append(make_plane_q(
    num=48,
    question="The magnitude of the vector product of two vectors is $\\sqrt{3}$ times their scalar product: $|\\vec{A} \\times \\vec{B}| = \\sqrt{3} (\\vec{A} \\cdot \\vec{B})$. What is the magnitude of their sum $|\\vec{A} + \\vec{B}|$?",
    options={
        "A": "(A² + B² + AB)¹ᐟ²",
        "B": "(A² + B² + AB√3)¹ᐟ²",
        "C": "A + B",
        "D": "(A² + B²)¹ᐟ²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Magnitude and direction of vectors",
    concept="Use $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$ and $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$ to find $\\theta$, then calculate $|\\vec{A} + \\vec{B}|$.",
    given="$|\\vec{A} \\times \\vec{B}| = \\sqrt{3} (\\vec{A} \\cdot \\vec{B})$.",
    formula="$\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$; $|\\vec{A} + \\vec{B}| = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$",
    steps=(
        "1. Express both products: $AB \\sin\\theta = \\sqrt{3} AB \\cos\\theta$.\n"
        "2. Divide by $AB \\cos\\theta$: $\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$.\n"
        "3. Now calculate the magnitude of the vector sum:\n"
        "   $|\\vec{A} + \\vec{B}| = \\sqrt{A^2 + B^2 + 2AB\\cos 60^\\circ}$.\n"
        "4. Since $\\cos 60^\\circ = 1/2$, the term $2AB\\cos 60^\\circ = 2AB(1/2) = AB$.\n"
        "5. Thus, $|\\vec{A} + \\vec{B}| = (A^2 + B^2 + AB)^{1/2}$."
    ),
    tip="Classic NEET frequent question: $\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ \\implies R = \\sqrt{A^2 + B^2 + AB}$.",
    why_wrong="Option B leaves $\\sqrt{3}$ inside the cosine expansion."
))

# Q049 - Hard
qs.append(make_plane_q(
    num=49,
    question="A vector $\\vec{A}$ has magnitude 5 and makes an angle of 30° with the positive x-axis. Another vector $\\vec{B}$ has magnitude 5 and makes an angle of 150° with the positive x-axis. What is the magnitude and direction of their resultant $\\vec{R} = \\vec{A} + \\vec{B}$?",
    options={
        "A": "Magnitude 5, along positive y-axis (90°)",
        "B": "Magnitude 5√3, along positive y-axis (90°)",
        "C": "Magnitude 10, along positive x-axis (0°)",
        "D": "Magnitude 0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Magnitude and direction of vectors",
    concept="Angle between $\\vec{A}$ and $\\vec{B}$ is $150^\\circ - 30^\\circ = 120^\\circ$. The resultant of two equal vectors of magnitude $F$ inclined at $120^\\circ$ is also of magnitude $F$, bisecting the angle between them.",
    given="$A = 5$ at $30^\\circ$, $B = 5$ at $150^\\circ$.",
    formula="Angle $\\theta = 120^\\circ$; $R = 2F\\cos(\\theta/2) = 2(5)\\cos(60^\\circ) = 5$; bisector $= (30^\\circ + 150^\\circ)/2 = 90^\\circ$.",
    steps=(
        "1. Write components of $\\vec{A}$:\n"
        "   $A_x = 5\\cos 30^\\circ = 5\\sqrt{3}/2$, $A_y = 5\\sin 30^\\circ = 5/2$.\n"
        "2. Write components of $\\vec{B}$:\n"
        "   $B_x = 5\\cos 150^\\circ = -5\\sqrt{3}/2$, $B_y = 5\\sin 150^\\circ = 5/2$.\n"
        "3. Add components to find resultant $\\vec{R}$:\n"
        "   $R_x = A_x + B_x = 5\\sqrt{3}/2 - 5\\sqrt{3}/2 = 0$.\n"
        "   $R_y = A_y + B_y = 5/2 + 5/2 = 5$.\n"
        "4. Since $R_x = 0$ and $R_y = 5$, the resultant has magnitude 5 and points purely along the positive y-axis ($90^\\circ$)."
    ),
    tip="NEET Golden Rule: Resultant of two equal vectors at $120^\\circ$ has the SAME magnitude as each vector and bisects their angle!",
    why_wrong="5√3 would correspond to an angle of 60° between the vectors."
))

# Q050 - Hard
qs.append(make_plane_q(
    num=50,
    question="The position vector of a particle is given by $\\vec{r}(t) = 3\\cos(\\omega t)\\hat{i} + 3\\sin(\\omega t)\\hat{j}$. What is the magnitude of the velocity vector and its angle with the position vector $\\vec{r}$ at any instant t?",
    options={
        "A": "Speed = 3ω, angle = 90°",
        "B": "Speed = 3ω², angle = 0°",
        "C": "Speed = 3ω, angle = 180°",
        "D": "Speed = 3, angle = 90°"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Magnitude and direction of vectors",
    concept="Differentiate position vector to find velocity vector: $\\vec{v} = \\frac{d\\vec{r}}{dt}$. Check dot product $\\vec{r} \\cdot \\vec{v} = 0$ to verify orthogonality.",
    given="$\\vec{r}(t) = 3\\cos(\\omega t)\\hat{i} + 3\\sin(\\omega t)\\hat{j}$.",
    formula="$\\vec{v} = -3\\omega\\sin(\\omega t)\\hat{i} + 3\\omega\\cos(\\omega t)\\hat{j}$; $|\\vec{v}| = 3\\omega$; $\\vec{r} \\cdot \\vec{v} = 0$.",
    steps=(
        "1. Differentiate components with respect to time $t$:\n"
        "   $v_x = \\frac{d}{dt}[3\\cos(\\omega t)] = -3\\omega\\sin(\\omega t)$\n"
        "   $v_y = \\frac{d}{dt}[3\\sin(\\omega t)] = 3\\omega\\cos(\\omega t)$\n"
        "2. Compute speed (magnitude of velocity):\n"
        "   $|\\vec{v}| = \\sqrt{(-3\\omega\\sin\\omega t)^2 + (3\\omega\\cos\\omega t)^2} = \\sqrt{9\\omega^2(\\sin^2\\omega t + \\cos^2\\omega t)} = 3\\omega$.\n"
        "3. Compute dot product $\\vec{r} \\cdot \\vec{v}$:\n"
        "   $\\vec{r} \\cdot \\vec{v} = [3\\cos\\omega t][-3\\omega\\sin\\omega t] + [3\\sin\\omega t][3\\omega\\cos\\omega t] = -9\\omega\\sin\\omega t\\cos\\omega t + 9\\omega\\sin\\omega t\\cos\\omega t = 0$.\n"
        "4. Since $\\vec{r} \\cdot \\vec{v} = 0$, the velocity vector is perpendicular to the position vector (angle = $90^\\circ$)."
    ),
    tip="This describes uniform circular motion where velocity is always tangential (perpendicular to radius vector).",
    why_wrong="Angle is 90° (perpendicular), not 0° or 180°."
))

# Q051 - Hard
qs.append(make_plane_q(
    num=51,
    question="In the previous question, what is the acceleration vector $\\vec{a}(t)$ and its relation to the position vector $\\vec{r}(t)$?",
    options={
        "A": "a⃗ = -ω² r⃗ (directed radially inward towards origin)",
        "B": "a⃗ = +ω² r⃗ (directed radially outward)",
        "C": "a⃗ = -ω r⃗",
        "D": "a⃗ = 0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Magnitude and direction of vectors",
    concept="Acceleration is the second time derivative of position: $\\vec{a} = \\frac{d\\vec{v}}{dt} = -\\omega^2\\vec{r}$. The negative sign indicates it points radially inward towards the origin (centripetal).",
    given="$\\vec{v} = -3\\omega\\sin(\\omega t)\\hat{i} + 3\\omega\\cos(\\omega t)\\hat{j}$.",
    formula="$\\vec{a} = \\frac{d\\vec{v}}{dt} = -3\\omega^2\\cos(\\omega t)\\hat{i} - 3\\omega^2\\sin(\\omega t)\\hat{j} = -\\omega^2\\vec{r}$",
    steps=(
        "1. Differentiate velocity with respect to time:\n"
        "   $a_x = \\frac{d}{dt}[-3\\omega\\sin\\omega t] = -3\\omega^2\\cos\\omega t$\n"
        "   $a_y = \\frac{d}{dt}[3\\omega\\cos\\omega t] = -3\\omega^2\\sin\\omega t$\n"
        "2. Factor out $-\\omega^2$:\n"
        "   $\\vec{a} = -\\omega^2 [3\\cos(\\omega t)\\hat{i} + 3\\sin(\\omega t)\\hat{j}] = -\\omega^2 \\vec{r}$.\n"
        "3. The minus sign shows that acceleration points directly opposite to the position vector $\\vec{r}$ (i.e. toward the origin).\n"
        "4. This is the centripetal acceleration vector."
    ),
    tip="$\\vec{a} = -\\omega^2\\vec{r}$ is the signature of both Simple Harmonic Motion (1D) and Uniform Circular Motion (2D)!",
    why_wrong="Option B misses the negative sign, which would mean outward acceleration."
))

# Q052 - Medium
qs.append(make_plane_q(
    num=52,
    question="A vector $\\vec{A}$ has magnitude 13 and makes an angle with the z-axis whose cosine is 12/13. What is the magnitude of the projection of $\\vec{A}$ on the xy-plane?",
    options={
        "A": "5",
        "B": "12",
        "C": "1",
        "D": "√313"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="The component of $\\vec{A}$ along the z-axis is $A_z = A\\cos\\gamma$. The projection on the xy-plane is $A_{xy} = \\sqrt{A_x^2 + A_y^2} = \\sqrt{A^2 - A_z^2} = A\\sin\\gamma$.",
    given="$A = 13$, $\\cos\\gamma = 12/13$.",
    formula="$A_{xy} = \\sqrt{A^2 - A_z^2}$",
    steps=(
        "1. Component along z-axis: $A_z = A\\cos\\gamma = 13 \\times \\frac{12}{13} = 12$.\n"
        "2. By 3D vector magnitude: $A^2 = A_x^2 + A_y^2 + A_z^2 = A_{xy}^2 + A_z^2$.\n"
        "3. Therefore, $A_{xy}^2 = A^2 - A_z^2 = 13^2 - 12^2 = 169 - 144 = 25$.\n"
        "4. Taking square root: $A_{xy} = \\sqrt{25} = 5$.\n"
        "5. The projection of $\\vec{A}$ on the xy-plane is 5 units."
    ),
    tip="Projection on a plane perpendicular to an axis: $\\text{Projection on } xy\\text{-plane} = \\sqrt{A^2 - A_z^2}$.",
    why_wrong="12 is the projection onto the z-axis, not the xy-plane."
))

# Q053 - Medium
qs.append(make_plane_q(
    num=53,
    question="If the sum of two unit vectors is also a unit vector ($|\\hat{a} + \\hat{b}| = 1$), what is the magnitude of their difference $|\\hat{a} - \\hat{b}|$?",
    options={
        "A": "√3",
        "B": "1",
        "C": "2",
        "D": "1 / √3"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Magnitude and direction of vectors",
    concept="For two unit vectors ($a = b = 1$), $|\\hat{a} + \\hat{b}| = 2\\cos(\\theta/2) = 1 \\implies \\theta = 120^\\circ$. Then $|\\hat{a} - \\hat{b}| = 2\\sin(\\theta/2) = 2\\sin 60^\\circ = \\sqrt{3}$.",
    given="$|\\hat{a}| = 1$, $|\\hat{b}| = 1$, $|\\hat{a} + \\hat{b}| = 1$.",
    formula="$|\\hat{a} + \\hat{b}|^2 + |\\hat{a} - \\hat{b}|^2 = 2(a^2 + b^2) = 2(1 + 1) = 4$",
    steps=(
        "1. Use the parallelogram identity: $|\\vec{u} + \\vec{v}|^2 + |\\vec{u} - \\vec{v}|^2 = 2(|\\vec{u}|^2 + |\\vec{v}|^2)$.\n"
        "2. Here $|\\hat{a}| = 1$ and $|\\hat{b}| = 1$, so the right-hand side is $2(1^2 + 1^2) = 4$.\n"
        "3. Substitute the given $|\\hat{a} + \\hat{b}| = 1$ into the identity:\n"
        "   $1^2 + |\\hat{a} - \\hat{b}|^2 = 4$.\n"
        "4. $|\\hat{a} - \\hat{b}|^2 = 4 - 1 = 3$.\n"
        "5. Taking square root: $|\\hat{a} - \\hat{b}| = \\sqrt{3}$."
    ),
    tip="One of the most repeated questions in NEET! If sum of two unit vectors is a unit vector $\\implies$ difference is $\\sqrt{3}$!",
    why_wrong="1 is the magnitude of the sum, not the difference."
))

# Save Topic 3
with open('scripts/mip_topic3.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 3 generated successfully:", len(qs))
