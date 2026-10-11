import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 1: Scalars and vectors (Q001 to Q018, 18 questions)
# Difficulties: 6 Easy, 9 Medium, 3 Hard
# ==============================================================================

# Q001 - Easy
qs.append(make_plane_q(
    num=1,
    question="Which of the following physical quantities possesses magnitude and direction, yet is classified as a scalar because it does not obey the vector law of addition?",
    options={
        "A": "Electric current",
        "B": "Magnetic dipole moment",
        "C": "Angular momentum",
        "D": "Linear momentum"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Scalars and vectors",
    concept="For a physical quantity to be a true vector, it must have magnitude, direction, AND obey the triangle/parallelogram laws of vector addition.",
    given="Four quantities with directional characteristics: electric current, magnetic dipole moment, angular momentum, linear momentum.",
    formula="Vector addition law: $\\vec{R} = \\vec{A} + \\vec{B}$; scalars add algebraically: $I = I_1 + I_2$.",
    steps=(
        "1. Electric current in a circuit has both magnitude and a defined direction along conducting wires.\n"
        "2. At a junction of two wires, the total current is simply the algebraic sum $I = I_1 + I_2$ (Kirchhoff's Current Law), completely independent of the angle between the wires.\n"
        "3. Since it violates the vector addition law, electric current is classified as a scalar quantity.\n"
        "4. Magnetic moment, angular momentum, and linear momentum all obey vector algebra."
    ),
    tip="NEET Trap: Having direction does NOT automatically make a quantity a vector! It must satisfy the parallelogram law of vector addition.",
    why_wrong="Options B, C, and D are true vectors that change their resultant when the angle between them changes."
))

# Q002 - Easy
qs.append(make_plane_q(
    num=2,
    question="Which of the following pairs contains one scalar and one vector quantity?",
    options={
        "A": "Work, Electric field",
        "B": "Displacement, Force",
        "C": "Speed, Temperature",
        "D": "Torque, Magnetic field"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Scalars and vectors",
    concept="Work is the scalar dot product of force and displacement ($W = \\vec{F} \\cdot \\vec{d}$), whereas electric field is a vector ($ \\vec{E} = \\vec{F}/q $).",
    given="Four pairs of physical quantities.",
    formula="$W = \\vec{F} \\cdot \\vec{d}$ (scalar); $\\vec{E} = \\frac{\\vec{F}}{q}$ (vector).",
    steps=(
        "1. In option A: Work is a scalar (dot product of two vectors), while electric field is a vector (force per unit positive test charge).\n"
        "2. In option B: Displacement and force are both vectors.\n"
        "3. In option C: Speed and temperature are both scalars.\n"
        "4. In option D: Torque and magnetic field are both vectors.\n"
        "5. Therefore, option A contains exactly one scalar and one vector."
    ),
    tip="Dot products of two vectors always produce scalars: Work, Power, Electric flux, and Magnetic flux are all scalars!",
    why_wrong="Option B has two vectors; Option C has two scalars; Option D has two vectors."
))

# Q003 - Easy
qs.append(make_plane_q(
    num=3,
    question="Surface tension is classified as which type of physical quantity in NCERT physics?",
    options={
        "A": "Scalar",
        "B": "Vector directed tangentially to the surface",
        "C": "Vector directed perpendicular to the liquid surface",
        "D": "Axial vector"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Scalars and vectors",
    concept="Surface tension is defined as the force per unit length acting perpendicular to an imaginary line drawn on a liquid surface, or surface energy per unit area. It does not have a unique directional orientation in space, making it a scalar.",
    given="Physical quantity: Surface tension ($T = F/L$ or $U/A$).",
    formula="$T = \\frac{\\Delta U}{\\Delta A}$ (scalar energy per unit area).",
    steps=(
        "1. Although surface tension force acts along the surface perpendicular to an imaginary line, the imaginary line can be drawn in any arbitrary direction.\n"
        "2. The surface tension of a liquid at a point has the same magnitude in all directions across the surface.\n"
        "3. Thermodynamically, it is surface free energy per unit surface area, which is a scalar ratio.\n"
        "4. Hence, surface tension is a scalar quantity."
    ),
    tip="Pressure and surface tension are both scalars even though their formulas involve force!",
    why_wrong="Options B, C, and D incorrectly treat surface tension as a directional vector."
))

# Q004 - Easy
qs.append(make_plane_q(
    num=4,
    question="Which of the following is an axial vector (pseudo-vector)?",
    options={
        "A": "Torque",
        "B": "Linear velocity",
        "C": "Force",
        "D": "Linear acceleration"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Scalars and vectors",
    concept="Axial vectors represent rotational effects and act along the axis of rotation according to the right-hand screw rule (e.g., angular displacement, angular velocity, angular acceleration, torque). Polar vectors have a point of application and act in the direction of motion.",
    given="Torque, Linear velocity, Force, Linear acceleration.",
    formula="$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ (cross product defines direction along rotation axis).",
    steps=(
        "1. Polar vectors (true vectors) have a definite starting point or point of application and invert their sign under coordinate inversion (parity reflection): Linear displacement, linear velocity, force.\n"
        "2. Axial vectors (pseudo-vectors) do not have a point of application; their direction is determined by convention (right-hand rule) along the rotation axis.\n"
        "3. Torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ is perpendicular to both $\\vec{r}$ and $\\vec{F}$ along the rotation axis.\n"
        "4. Therefore, torque is an axial vector."
    ),
    tip="All rotational quantities starting with 'angular' plus torque are axial vectors!",
    why_wrong="Linear velocity, force, and linear acceleration are polar vectors."
))

# Q005 - Easy
qs.append(make_plane_q(
    num=5,
    question="Which of the following statements about vectors is INCORRECT?",
    options={
        "A": "A vector cannot be divided by another vector",
        "B": "A vector can be multiplied by a dimensionless scalar",
        "C": "The magnitude of a vector can be negative",
        "D": "A vector can have zero magnitude and an arbitrary direction"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Scalars and vectors",
    concept="The magnitude of a vector is defined as its Euclidean length, which is the non-negative square root of the sum of squares of its components: $|\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2} \\ge 0$.",
    given="Properties of vectors.",
    formula="$|\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2} \\ge 0$",
    steps=(
        "1. Vector division by another vector is not defined in vector algebra (Statement A is correct).\n"
        "2. Multiplying a vector by a scalar changes its magnitude and potentially reverses its direction (Statement B is correct).\n"
        "3. The magnitude of a vector is a distance/length, which is strictly non-negative; it can NEVER be negative (Statement C is incorrect).\n"
        "4. A null vector has zero magnitude and an arbitrary (indeterminate) direction (Statement D is correct).\n"
        "5. Thus, statement C is the incorrect statement."
    ),
    tip="Magnitude is always $|\\vec{A}| \\ge 0$. A negative sign in $-\\vec{A}$ denotes opposite direction, never negative magnitude!",
    why_wrong="Options A, B, and D are all standard, mathematically rigorous properties of vectors."
))

# Q006 - Easy
qs.append(make_plane_q(
    num=6,
    question="The minimum number of non-coplanar vectors of unequal magnitudes whose vector sum can be zero is:",
    options={
        "A": "4",
        "B": "3",
        "C": "2",
        "D": "5"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Scalars and vectors",
    concept="For collinear vectors: minimum 2 (equal and opposite). For coplanar non-collinear vectors: minimum 3. For non-coplanar vectors: minimum 4 to form a closed tetrahedron in 3D.",
    given="Non-coplanar vectors of unequal magnitudes with zero resultant.",
    formula="$\\vec{A} + \\vec{B} + \\vec{C} + \\vec{D} = 0$",
    steps=(
        "1. Two vectors can cancel only if they are collinear and equal in magnitude.\n"
        "2. Three non-collinear vectors can cancel only if they lie in the same plane (coplanar) forming a closed triangle.\n"
        "3. The resultant of any three non-coplanar vectors cannot lie in the plane of all three, so they can never cancel to zero.\n"
        "4. To cancel a resultant that has components in three dimensions, a fourth non-coplanar vector is necessary.\n"
        "5. Therefore, the minimum number of non-coplanar vectors is 4."
    ),
    tip="NEET Golden Rule: Unequal coplanar = minimum 3. Unequal non-coplanar = minimum 4. Equal collinear = minimum 2.",
    why_wrong="3 vectors can only yield zero resultant if they are coplanar, not non-coplanar."
))

# Q007 - Medium
qs.append(make_plane_q(
    num=7,
    question="Can three coplanar vectors of magnitudes 3 N, 5 N, and 9 N be in equilibrium (resultant equal to zero)?",
    options={
        "A": "No, because 3 + 5 < 9",
        "B": "Yes, if they are arranged at 120° to each other",
        "C": "Yes, if the 3 N and 5 N vectors are perpendicular",
        "D": "Yes, if the 9 N vector is antiparallel to the 5 N vector"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="For three coplanar vectors to have a zero resultant, they must form a closed triangle. The sum of the lengths of any two sides of a triangle must be strictly greater than or equal to the third side ($A + B \\ge C$).",
    given="Magnitudes: A = 3 N, B = 5 N, C = 9 N.",
    formula="Condition for equilibrium: $|A - B| \\le C \\le A + B$",
    steps=(
        "1. The maximum possible resultant of 3 N and 5 N occurs when they are parallel: $R_{\\max} = 3 + 5 = 8\\text{ N}$.\n"
        "2. The minimum possible resultant of 3 N and 5 N occurs when they are antiparallel: $R_{\\min} = |5 - 3| = 2\\text{ N}$.\n"
        "3. The resultant of 3 N and 5 N can take any value in the closed interval $[2\\text{ N}, 8\\text{ N}]$.\n"
        "4. Since 9 N does not lie in this interval ($9 > 8$), it is impossible for the three vectors to cancel to zero.\n"
        "5. Hence, equilibrium cannot be achieved."
    ),
    tip="Quick NEET check: Take the two smaller magnitudes. If their sum is less than the largest magnitude, they can NEVER produce zero resultant!",
    why_wrong="Options B, C, and D are geometrically impossible because the triangle inequality is violated."
))

# Q008 - Medium
qs.append(make_plane_q(
    num=8,
    question="Which of the following sets of concurrent forces CANNOT produce equilibrium?",
    options={
        "A": "10 N, 20 N, 40 N",
        "B": "10 N, 10 N, 10 N",
        "C": "5 N, 12 N, 13 N",
        "D": "2 N, 3 N, 4 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="Three forces can produce equilibrium if and only if the sum of any two forces is greater than or equal to the third force: $F_1 + F_2 \\ge F_3$ (where $F_3$ is the largest).",
    given="Four sets of three concurrent forces.",
    formula="$F_{\\min} + F_{\\text{mid}} \\ge F_{\\max}$",
    steps=(
        "1. For set A (10, 20, 40): 10 + 20 = 30 < 40. The sum of the two smaller forces is strictly less than the largest force. Equilibrium is impossible.\n"
        "2. For set B (10, 10, 10): 10 + 10 = 20 > 10 (equilateral triangle, possible at 120°).\n"
        "3. For set C (5, 12, 13): 5 + 12 = 17 > 13 (right-angled triangle $5^2 + 12^2 = 13^2$, possible).\n"
        "4. For set D (2, 3, 4): 2 + 3 = 5 > 4 (possible).\n"
        "5. Therefore, set A cannot produce equilibrium."
    ),
    tip="Triangle inequality check takes 3 seconds in NEET: add the two smallest numbers; if sum < largest, answer is CANNOT!",
    why_wrong="Sets B, C, and D all satisfy $A + B \\ge C$ and can easily form closed vector triangles."
))

# Q009 - Medium
qs.append(make_plane_q(
    num=9,
    question="A vector $\\vec{A}$ points vertically upward and a vector $\\vec{B}$ points towards the North. What is the direction of the cross product $\\vec{A} \\times \\vec{B}$?",
    options={
        "A": "Due West",
        "B": "Due East",
        "C": "Due South",
        "D": "Vertically downward"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="The direction of a cross product $\\vec{C} = \\vec{A} \\times \\vec{B}$ is given by the right-hand thumb rule: curl the fingers of the right hand from $\\vec{A}$ to $\\vec{B}$; the outstretched thumb indicates the direction of $\\vec{C}$.",
    given="$\\vec{A} = +A \\hat{k}$ (upward), $\\vec{B} = +B \\hat{j}$ (North).",
    formula="$\\hat{k} \\times \\hat{j} = -\\hat{i}$ (where $+\\hat{i}$ is East, $-\\hat{i}$ is West).",
    steps=(
        "1. Standard Cartesian coordinate system for geographic directions:\n"
        "   - East = $+x$ direction ($+\\hat{i}$)\n"
        "   - North = $+y$ direction ($+\\hat{j}$)\n"
        "   - Vertically upward = $+z$ direction ($+\\hat{k}$)\n"
        "2. Vector $\\vec{A}$ is upward: $\\vec{A} = A \\hat{k}$.\n"
        "3. Vector $\\vec{B}$ is North: $\\vec{B} = B \\hat{j}$.\n"
        "4. Cross product $\\vec{A} \\times \\vec{B} = (A \\hat{k}) \\times (B \\hat{j}) = AB (\\hat{k} \\times \\hat{j})$.\n"
        "5. Using standard cyclic unit vector cross products: $\\hat{i} \\times \\hat{j} = \\hat{k}$, $\\hat{j} \\times \\hat{k} = \\hat{i}$, $\\hat{k} \\times \\hat{i} = \\hat{j}$, hence $\\hat{k} \\times \\hat{j} = -\\hat{i}$.\n"
        "6. Since $-\\hat{i}$ is West, the direction of $\\vec{A} \\times \\vec{B}$ is due West."
    ),
    tip="Right-hand check: Point fingers upward (+z), curl towards North (+y) — your thumb points West (-x)!",
    why_wrong="Due East would be $\\vec{B} \\times \\vec{A}$ (anti-commutative property)."
))

# Q010 - Medium
qs.append(make_plane_q(
    num=10,
    question="If a vector $\\vec{A}$ is multiplied by a negative scalar $\\lambda = -2$, how do its magnitude and direction change?",
    options={
        "A": "Magnitude is doubled and direction is reversed",
        "B": "Magnitude is halved and direction is reversed",
        "C": "Magnitude is doubled and direction remains unchanged",
        "D": "Magnitude becomes negative and direction remains unchanged"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="Multiplication of vector $\\vec{A}$ by a real scalar $\\lambda$ yields a new vector $\\vec{B} = \\lambda \\vec{A}$. The magnitude is $|\\vec{B}| = |\\lambda| |\\vec{A}|$. If $\\lambda < 0$, the direction of $\\vec{B}$ is exactly opposite to $\\vec{A}$.",
    given="Scalar $\\lambda = -2$, original vector $\\vec{A}$.",
    formula="$|\\lambda \\vec{A}| = |\\lambda| |\\vec{A}| = 2 |\\vec{A}|$; direction $= -\\hat{A}$.",
    steps=(
        "1. The new vector is $\\vec{B} = -2 \\vec{A}$.\n"
        "2. Magnitude: $|\\vec{B}| = |-2| |\\vec{A}| = 2 |\\vec{A}|$, which is twice the original magnitude.\n"
        "3. Direction: The minus sign changes the unit vector from $+\\hat{A}$ to $-\\hat{A}$ (a $180^\\circ$ rotation / reversal).\n"
        "4. Magnitude is strictly positive (lengths cannot be negative).\n"
        "5. Thus, magnitude is doubled and direction is reversed."
    ),
    tip="Magnitude is ALWAYS absolute value: $|-2\\vec{A}| = 2|\\vec{A}|$. Never say magnitude is -2!",
    why_wrong="Option D is wrong because magnitude can never be negative."
))

# Q011 - Medium
qs.append(make_plane_q(
    num=11,
    question="Which of the following physical quantities is a tensor of rank 2 (often treated as neither a simple scalar nor a vector in general physics)?",
    options={
        "A": "Moment of inertia",
        "B": "Linear momentum",
        "C": "Gravitational potential",
        "D": "Magnetic flux"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="Moment of inertia depends on the axis of rotation chosen. In three dimensions, it relates the angular velocity vector to the angular momentum vector via a $3 \\times 3$ tensor matrix ($I_{ij}$). For symmetric bodies about a principal axis it behaves like a scalar, but generally it is a second-rank tensor.",
    given="Physical quantities: Moment of inertia, Linear momentum, Gravitational potential, Magnetic flux.",
    formula="$\\vec{L} = \\mathbf{I} \\vec{\\omega}$ where $\\mathbf{I}$ is the inertia tensor.",
    steps=(
        "1. A scalar has rank 0 (1 component: e.g. mass, gravitational potential, flux).\n"
        "2. A vector has rank 1 (3 components: e.g. force, momentum, electric field).\n"
        "3. Moment of inertia, stress, and strain have 9 components in general 3D space ($3 \\times 3$) and transform under coordinate rotations as tensors of rank 2.\n"
        "4. Therefore, moment of inertia is a tensor."
    ),
    tip="Common NEET tensor examples: Stress, Strain, Moment of inertia, Dielectric tensor.",
    why_wrong="Linear momentum is a vector (rank 1); potential and flux are scalars (rank 0)."
))

# Q012 - Medium
qs.append(make_plane_q(
    num=12,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have equal magnitude $P$. If the magnitude of their sum is equal to the magnitude of their difference ($|\\vec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|$), the angle between $\\vec{A}$ and $\\vec{B}$ is:",
    options={
        "A": "90°",
        "B": "0°",
        "C": "60°",
        "D": "180°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="Magnitude of sum is $\\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$ and magnitude of difference is $\\sqrt{A^2 + B^2 - 2AB\\cos\\theta}$. They are equal when $\\cos\\theta = 0$.",
    given="$|\\vec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|$, with $A = B = P > 0$.",
    formula="$A^2 + B^2 + 2AB\\cos\\theta = A^2 + B^2 - 2AB\\cos\\theta \\implies 4AB\\cos\\theta = 0$",
    steps=(
        "1. Square both sides: $|\\vec{A} + \\vec{B}|^2 = |\\vec{A} - \\vec{B}|^2$.\n"
        "2. Expand: $A^2 + B^2 + 2\\vec{A}\\cdot\\vec{B} = A^2 + B^2 - 2\\vec{A}\\cdot\\vec{B}$.\n"
        "3. Cancel $A^2 + B^2$ from both sides: $2\\vec{A}\\cdot\\vec{B} = -2\\vec{A}\\cdot\\vec{B} \\implies 4\\vec{A}\\cdot\\vec{B} = 0$.\n"
        "4. Therefore, $\\vec{A}\\cdot\\vec{B} = 0 \\implies AB\\cos\\theta = 0$.\n"
        "5. Since $A, B \\neq 0$, $\\cos\\theta = 0 \\implies \\theta = 90^\\circ$."
    ),
    tip="Classic NEET direct result: Diagonals of a rhombus (or parallelogram) are equal in length if and only if it is a rectangle, i.e., angle is $90^\\circ$!",
    why_wrong="If $\\theta = 0^\\circ$, $|\\vec{A} + \\vec{B}| = 2P$ while $|\\vec{A} - \\vec{B}| = 0$."
))

# Q013 - Hard
qs.append(make_plane_q(
    num=13,
    question="The resultant of two forces $\\vec{P}$ and $\\vec{Q}$ is $\\vec{R}$. If $\\vec{Q}$ is doubled while keeping its direction unchanged, the new resultant is perpendicular to $\\vec{P}$. What is the magnitude of $\\vec{R}$?",
    options={
        "A": "Q",
        "B": "P",
        "C": "P + Q",
        "D": "√(P² + Q²)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors",
    concept="Use the angle formula for the resultant: $\\tan\\alpha = \\frac{Q_2 \\sin\\theta}{P + Q_2 \\cos\\theta}$. When the resultant is perpendicular to $\\vec{P}$, the denominator equals zero: $P + Q_2 \\cos\\theta = 0$.",
    given="Original forces: $\\vec{P}$ and $\\vec{Q}$ with resultant $\\vec{R}$. When $\\vec{Q}$ is doubled to $2\\vec{Q}$, new resultant $\\vec{R}' \\perp \\vec{P}$.",
    formula="$\\tan 90^\\circ = \\infty \\implies P + 2Q \\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{P}{2Q}$; $R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}$.",
    steps=(
        "1. For the new forces $\\vec{P}$ and $2\\vec{Q}$, let the angle between them be $\\theta$.\n"
        "2. The direction $\\alpha$ of the new resultant with $\\vec{P}$ is given by $\\tan\\alpha = \\frac{2Q \\sin\\theta}{P + 2Q \\cos\\theta}$.\n"
        "3. Since $\\alpha = 90^\\circ$, $\\tan 90^\\circ \\to \\infty$, which means the denominator must vanish:\n"
        "   $P + 2Q \\cos\\theta = 0 \\implies 2PQ \\cos\\theta = -P^2$.\n"
        "4. Now evaluate the original resultant magnitude $R$:\n"
        "   $R^2 = P^2 + Q^2 + 2PQ \\cos\\theta$.\n"
        "5. Substitute $2PQ \\cos\\theta = -P^2$:\n"
        "   $R^2 = P^2 + Q^2 + (-P^2) = Q^2$.\n"
        "6. Therefore, $R = Q$."
    ),
    tip="High-yield NEET question! Remember: if doubling $\\vec{Q}$ makes the resultant perpendicular to $\\vec{P}$, the original resultant $\\vec{R}$ has magnitude exactly equal to $Q$!",
    why_wrong="Option B gives P, which would only hold if $\\vec{P}$ was doubled instead."
))

# Q014 - Hard
qs.append(make_plane_q(
    num=14,
    question="Three vectors $\\vec{A}$, $\\vec{B}$, and $\\vec{C}$ satisfy $\\vec{A} + \\vec{B} + \\vec{C} = 0$. If $|\\vec{A}| = 5$, $|\\vec{B}| = 12$, and $|\\vec{C}| = 13$, what is the value of $\\vec{A} \\cdot \\vec{B} + \\vec{B} \\cdot \\vec{C} + \\vec{C} \\cdot \\vec{A}$?",
    options={
        "A": "-169",
        "B": "-154",
        "C": "-144",
        "D": "0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors",
    concept="Square the vector equation $(\\vec{A} + \\vec{B} + \\vec{C})^2 = 0$: $|\\vec{A}|^2 + |\\vec{B}|^2 + |\\vec{C}|^2 + 2(\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A}) = 0$.",
    given="$|\\vec{A}| = 5$, $|\\vec{B}| = 12$, $|\\vec{C}| = 13$, $\\vec{A} + \\vec{B} + \\vec{C} = 0$.",
    formula="(\\vec{A} + \\vec{B} + \\vec{C}) \\cdot (\\vec{A} + \\vec{B} + \\vec{C}) = 0 \\implies \\sum \\vec{A}\\cdot\\vec{B} = -\\frac{A^2 + B^2 + C^2}{2}",
    steps=(
        "1. Take the dot product of the vector $\\vec{A} + \\vec{B} + \\vec{C}$ with itself:\n"
        "   $(\\vec{A} + \\vec{B} + \\vec{C}) \\cdot (\\vec{A} + \\vec{B} + \\vec{C}) = |0|^2 = 0$.\n"
        "2. Expand the left-hand side:\n"
        "   $A^2 + B^2 + C^2 + 2(\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A}) = 0$.\n"
        "3. Substitute the given magnitudes: $A^2 = 5^2 = 25$, $B^2 = 12^2 = 144$, $C^2 = 13^2 = 169$.\n"
        "4. $A^2 + B^2 + C^2 = 25 + 144 + 169 = 338$.\n"
        "5. $338 + 2(\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A}) = 0$.\n"
        "6. $\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A} = -\\frac{338}{2} = -169$."
    ),
    tip="Notice $A^2 + B^2 = 25 + 144 = 169 = C^2$, so $A^2 + B^2 + C^2 = 2C^2 = 338$. Dividing by -2 gives $-C^2 = -169$ directly!",
    why_wrong="Option D is wrong because the dot products are between vectors pointing in various directions in the closed triangle."
))

# Q015 - Hard
qs.append(make_plane_q(
    num=15,
    question="The resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is perpendicular to $\\vec{A}$ and its magnitude is half that of $\\vec{B}$. What is the angle between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "150°",
        "B": "120°",
        "C": "135°",
        "D": "60°"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors",
    concept="Form a right triangle where $\\vec{A}$ and resultant $\\vec{R}$ are the two legs, and $\\vec{B}$ is the hypotenuse.",
    given="$\\vec{R} = \\vec{A} + \\vec{B}$, $\\vec{R} \\perp \\vec{A}$, $R = B / 2$.",
    formula="In right triangle: $\\sin\\phi = R / B = (B/2)/B = 1/2 \\implies \\phi = 30^\\circ$; angle between $\\vec{A}$ and $\\vec{B}$ is $\\theta = 90^\\circ + \\phi = 120^\\circ$ or $180^\\circ - 30^\\circ = 150^\\circ$. Let us verify carefully.",
    steps=(
        "1. Draw the vector triangle: $\\vec{A} + \\vec{B} = \\vec{R}$.\n"
        "2. Since $\\vec{R}$ is perpendicular to $\\vec{A}$, the angle between $\\vec{A}$ and $\\vec{R}$ is $90^\\circ$.\n"
        "3. In this right triangle, the hypotenuse is $\\vec{B}$, the opposite side to angle between $\\vec{A}$ and $-\\vec{B}$ is $\\vec{R}$, and the adjacent side is $\\vec{A}$.\n"
        "4. Alternatively, use formulas: $\\tan 90^\\circ = \\infty \\implies A + B \\cos\\theta = 0 \\implies \\cos\\theta = -A/B$.\n"
        "5. Also, $R^2 = A^2 + B^2 + 2AB \\cos\\theta = A^2 + B^2 + 2AB(-A/B) = B^2 - A^2$.\n"
        "6. Given $R = B/2 \\implies R^2 = B^2/4$.\n"
        "7. So $B^2/4 = B^2 - A^2 \\implies A^2 = 3B^2/4 \\implies A = \\frac{\\sqrt{3}}{2} B$.\n"
        "8. Then $\\cos\\theta = -A/B = -\\frac{\\sqrt{3}}{2} \\implies \\theta = 180^\\circ - 30^\\circ = 150^\\circ$."
    ),
    tip="When resultant is perpendicular to smaller vector $\\vec{A}$, $\\cos\\theta = -A/B$, so $\\theta > 90^\\circ$ (obtuse angle).",
    why_wrong="120° would correspond to $A = B/2$ and $R = \\frac{\\sqrt{3}}{2} B$."
))

# Q016 - Medium
qs.append(make_plane_q(
    num=16,
    question="If $|\\vec{A} + \\vec{B}| = |\\vec{A}| + |\\vec{B}|$, what is the angle between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "0°",
        "B": "90°",
        "C": "180°",
        "D": "45°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="The triangle inequality states $|\\vec{A} + \\vec{B}| \\le |\\vec{A}| + |\\vec{B}|$. Equality holds if and only if the vectors are collinear and point in the exact same direction (parallel).",
    given="$|\\vec{A} + \\vec{B}| = A + B$.",
    formula="$\\sqrt{A^2 + B^2 + 2AB\\cos\\theta} = A + B \\implies \\cos\\theta = 1$",
    steps=(
        "1. Square both sides: $A^2 + B^2 + 2AB \\cos\\theta = (A + B)^2$.\n"
        "2. Expand the right-hand side: $(A + B)^2 = A^2 + B^2 + 2AB$.\n"
        "3. Equating both sides: $2AB \\cos\\theta = 2AB$.\n"
        "4. Since $A, B > 0$, divide by $2AB$: $\\cos\\theta = 1$.\n"
        "5. Therefore, $\\theta = 0^\\circ$ (the vectors are parallel)."
    ),
    tip="If magnitude of sum equals sum of magnitudes $\\implies \\theta = 0^\\circ$. If magnitude of sum equals difference of magnitudes $\\implies \\theta = 180^\\circ$.",
    why_wrong="At 90°, $|\\vec{A} + \\vec{B}| = \\sqrt{A^2 + B^2} < A + B$."
))

# Q017 - Medium
qs.append(make_plane_q(
    num=17,
    question="If $|\\vec{A} + \\vec{B}| = |\\vec{A}| - |\\vec{B}|$ (with $|\\vec{A}| > |\\vec{B}|$), what is the angle between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "180°",
        "B": "0°",
        "C": "90°",
        "D": "120°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="The minimum magnitude of the vector sum occurs when the two vectors are antiparallel (pointing in opposite directions, $\\theta = 180^\\circ$).",
    given="$|\\vec{A} + \\vec{B}| = A - B$ with $A > B$.",
    formula="$\\sqrt{A^2 + B^2 + 2AB\\cos\\theta} = A - B \\implies \\cos\\theta = -1$",
    steps=(
        "1. Square both sides: $A^2 + B^2 + 2AB \\cos\\theta = (A - B)^2 = A^2 + B^2 - 2AB$.\n"
        "2. Subtract $A^2 + B^2$ from both sides: $2AB \\cos\\theta = -2AB$.\n"
        "3. Divide by $2AB$: $\\cos\\theta = -1$.\n"
        "4. Therefore, $\\theta = 180^\\circ$."
    ),
    tip="Antiparallel vectors partially cancel each other, yielding resultant $A - B$.",
    why_wrong="0° yields maximum resultant $A + B$."
))

# Q018 - Medium
qs.append(make_plane_q(
    num=18,
    question="Which of the following operations between vectors is mathematically INVALID?",
    options={
        "A": "Adding a scalar to a vector: $\\vec{A} + s$",
        "B": "Multiplying a vector by a scalar: $s \\vec{A}$",
        "C": "Taking the scalar product of two vectors: $\\vec{A} \\cdot \\vec{B}$",
        "D": "Taking the vector product of two vectors: $\\vec{A} \\times \\vec{B}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors",
    concept="Only physical quantities of the same nature and dimension can be added or subtracted. A scalar cannot be added to a vector because a scalar has no direction.",
    given="Four operations involving scalars and vectors.",
    formula="Vector addition is defined strictly between vectors: $\\vec{A} + \\vec{B}$.",
    steps=(
        "1. Addition and subtraction require quantities to be of identical mathematical species and dimension.\n"
        "2. A vector has directional components ($A_x, A_y, A_z$), whereas a scalar is a single real number.\n"
        "3. The expression $\\vec{A} + s$ has no mathematical meaning in linear algebra or physics.\n"
        "4. Multiplying a vector by a scalar ($s\\vec{A}$), dot product ($\\vec{A}\\cdot\\vec{B}$), and cross product ($\\vec{A}\\times\\vec{B}$) are all well-defined fundamental operations."
    ),
    tip="Dimensional homogeneity rule: You can NEVER add a scalar to a vector or equate a vector to a scalar!",
    why_wrong="Options B, C, and D are standard well-defined vector operations."
))

# Save Topic 1
with open('scripts/mip_topic1.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 1 generated successfully:", len(qs))
