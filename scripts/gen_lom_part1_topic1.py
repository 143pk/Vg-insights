import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# PART 1: Topics 1 to 8 (Q001 to Q125, Exactly 125 Questions)
# Target Difficulty: 31 Easy, 63 Medium, 31 Hard
# ==============================================================================

# ==============================================================================
# Topic 1: Force and interactions (Q001 to Q016, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q001 - Easy
qs.append(make_lom_q(
    num=1,
    question="Which of the following fundamental interactions in nature is the weakest in terms of relative strength between elementary particles?",
    options={
        "A": "Gravitational force",
        "B": "Weak nuclear force",
        "C": "Electromagnetic force",
        "D": "Strong nuclear force"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Force and interactions",
    concept="In fundamental physics, the four interactions in order of increasing strength are Gravitational force ($10^{-39}$), Weak nuclear force ($10^{-13}$), Electromagnetic force ($10^{-2}$), and Strong nuclear force ($1$).",
    given="Four fundamental forces of nature.",
    formula="F_g : F_w : F_{em} : F_s \\approx 10^{-39} : 10^{-13} : 10^{-2} : 1",
    steps="1. Gravity acts between all masses and has infinite range, but its coupling constant is extraordinarily small.\n2. Between two protons, the ratio of electrostatic repulsion to gravitational attraction is approximately $10^{36}$.\n3. Therefore, gravitation is by far the weakest fundamental force in nature.",
    tip="Order of strengths: Strong > Electromagnetic > Weak > Gravitational. Gravity dominates large-scale cosmological structures only because masses are positive and add up, while electric charges cancel!",
    why_wrong="Option D is the strongest force. Option B is stronger than gravity by roughly 26 orders of magnitude."
))

# Q002 - Easy
qs.append(make_lom_q(
    num=2,
    question="Which of the following is an example of a non-contact (field) force?",
    options={
        "A": "Electrostatic force",
        "B": "Tension in a rope",
        "C": "Normal contact force",
        "D": "Friction between surfaces"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Force and interactions",
    concept="Forces can be classified as contact forces (which require physical touching between objects, such as tension, normal reaction, and friction) or action-at-a-distance / field forces (such as gravitational, electrostatic, and magnetic forces).",
    given="Four common forces.",
    formula="\\text{Field forces act through spacetime without mechanical contact.}",
    steps="1. Tension, normal force, and friction all arise due to microscopic electromagnetic interactions at the points of physical contact.\n2. Electrostatic force acts across space through the electric field without requiring physical contact between charges.\n3. Hence, electrostatic force is a non-contact force.",
    tip="Field forces = Gravitational, Electrostatic, Magnetic. All mechanical forces (Tension, Friction, Normal, Viscosity) are contact forces!",
    why_wrong="Options B, C, and D all require direct macroscopic contact between surfaces or objects."
))

# Q003 - Easy
qs.append(make_lom_q(
    num=3,
    question="The dimensional formula of force in the SI system is:",
    options={
        "A": "[M L T^-2]",
        "B": "[M L^2 T^-2]",
        "C": "[M L T^-1]",
        "D": "[M L^2 T^-3]"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Force and interactions",
    concept="Force is defined as the product of mass and acceleration according to Newton's second law: $F = ma$.",
    given="Mass has dimension $[M]$, acceleration has dimension $[L T^{-2}]$.",
    formula="[F] = [m][a] = [M][L T^{-2}] = [M L T^{-2}]",
    steps="1. Mass $[m] = M$.\n2. Acceleration $[a] = \\frac{\\Delta v}{\\Delta t} = \\frac{L T^{-1}}{T} = L T^{-2}$.\n3. Therefore, $[F] = [M][L T^{-2}] = [M L T^{-2}]$.",
    tip="Don't confuse force $[M L T^{-2}]$ with work/energy $[M L^2 T^{-2}]$ or momentum $[M L T^{-1}]$!",
    why_wrong="Option B is energy/work. Option C is linear momentum/impulse. Option D is power."
))

# Q004 - Easy
qs.append(make_lom_q(
    num=4,
    question="One newton (1 N) is defined in CGS units as:",
    options={
        "A": "10^5 dyne",
        "B": "10^7 dyne",
        "C": "10^3 dyne",
        "D": "10^6 dyne"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Force and interactions",
    concept="Conversion between SI and CGS units of force utilizes $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$ and $1\\text{ dyne} = 1\\text{ g}\\cdot\\text{cm/s}^2$.",
    given="$1\\text{ kg} = 10^3\\text{ g}$, $1\\text{ m} = 10^2\\text{ cm}$.",
    formula="1\\text{ N} = (10^3\\text{ g}) \\times (10^2\\text{ cm/s}^2) = 10^5\\text{ dyne}",
    steps="1. Express $1\\text{ N}$ in fundamental SI units: $1\\text{ N} = 1\\text{ kg}\\text{ m}\\text{ s}^{-2}$.\n2. Convert mass and length to CGS: $1\\text{ kg} = 1000\\text{ g}$, $1\\text{ m} = 100\\text{ cm}$.\n3. Multiply: $10^3 \\times 10^2 = 10^5\\text{ g}\\text{ cm}\\text{ s}^{-2} = 10^5\\text{ dyne}$.",
    tip="Force: $1\\text{ N} = 10^5\\text{ dyne}$. Work: $1\\text{ J} = 10^7\\text{ erg}$. Common NEET mix-up!",
    why_wrong="Option B ($10^7$) is the conversion factor between Joules and ergs."
))

# Q005 - Medium
qs.append(make_lom_q(
    num=5,
    question="Two concurrent forces of magnitudes $6\\text{ N}$ and $8\\text{ N}$ act on a particle at right angles to each other. What is the magnitude of the third force required to keep the particle in equilibrium?",
    options={
        "A": "10 N",
        "B": "14 N",
        "C": "2 N",
        "D": "48 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="For a particle to be in equilibrium under three forces, the third force (equilibrant) must be equal in magnitude and opposite in direction to the vector resultant of the first two forces: $\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$.",
    given="$F_1 = 6\\text{ N}$, $F_2 = 8\\text{ N}$, angle $\\theta = 90^\\circ$.",
    formula="R = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos 90^\\circ} = \\sqrt{F_1^2 + F_2^2}",
    steps="1. The resultant of the two perpendicular forces is $R = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$.\n2. To produce equilibrium, the third force $\\vec{F}_3$ must balance this resultant: $|\vec{F}_3| = R = 10\\text{ N}$.",
    tip="The equilibrant force always has the exact same magnitude as the resultant of all other forces acting on the particle!",
    why_wrong="Option B ($14\\text{ N}$) is the scalar sum $6 + 8$. Option C ($2\\text{ N}$) is the scalar difference $8 - 6$."
))

# Q006 - Medium
qs.append(make_lom_q(
    num=6,
    question="Three forces of magnitudes $3\\text{ N}$, $4\\text{ N}$, and $12\\text{ N}$ act concurrently along the positive x, y, and z axes respectively on a point mass. The magnitude of the net force is:",
    options={
        "A": "13 N",
        "B": "19 N",
        "C": "7 N",
        "D": "5 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="The net force from mutually perpendicular 3D components is given by the Euclidean norm: $F_{\\text{net}} = \\sqrt{F_x^2 + F_y^2 + F_z^2}$.",
    given="$\\vec{F} = (3\\hat{i} + 4\\hat{j} + 12\\hat{k})\\text{ N}$.",
    formula="F = \\sqrt{F_x^2 + F_y^2 + F_z^2}",
    steps="1. Sum the squares of components: $3^2 + 4^2 + 12^2 = 9 + 16 + 144 = 169$.\n2. Take the square root: $F = \\sqrt{169} = 13\\text{ N}$.",
    tip="$(3, 4, 12, 13)$ is a classic Pythagorean quadruple: $\\sqrt{3^2 + 4^2} = 5$, and then $\\sqrt{5^2 + 12^2} = 13$!",
    why_wrong="Option B is the scalar sum $3 + 4 + 12 = 19\\text{ N}$."
))

# Q007 - Medium
qs.append(make_lom_q(
    num=7,
    question="A body of mass $2\\text{ kg}$ is subjected to two forces: $\\vec{F}_1 = (4\\hat{i} - 2\\hat{j})\\text{ N}$ and $\\vec{F}_2 = (2\\hat{i} + 10\\hat{j})\\text{ N}$. What is the magnitude of the acceleration produced in the body?",
    options={
        "A": "5 m/s^2",
        "B": "10 m/s^2",
        "C": "2.5 m/s^2",
        "D": "7 m/s^2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="According to Newton's second law, acceleration is the net force vector divided by mass: $\\vec{a} = \\frac{\\sum \\vec{F}}{m}$.",
    given="$m = 2\\text{ kg}$, $\\vec{F}_1 = 4\\hat{i} - 2\\hat{j}\\text{ N}$, $\\vec{F}_2 = 2\\hat{i} + 10\\hat{j}\\text{ N}$.",
    formula="\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2,\\quad \\vec{a} = \\frac{\\vec{F}_{\\text{net}}}{m}",
    steps="1. Find the net force vector:\n   $$\\vec{F}_{\\text{net}} = (4+2)\\hat{i} + (-2+10)\\hat{j} = 6\\hat{i} + 8\\hat{j}\\text{ N}$$\n2. Find acceleration vector:\n   $$\\vec{a} = \\frac{6\\hat{i} + 8\\hat{j}}{2} = 3\\hat{i} + 4\\hat{j}\\text{ m/s}^2$$\n3. Magnitude of acceleration: $a = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5\\text{ m/s}^2$.",
    tip="First sum the vector forces component by component, divide by mass, then take the magnitude!",
    why_wrong="Option B is the magnitude of the net force ($10\\text{ N}$) before dividing by the mass $2\\text{ kg}$."
))

# Q008 - Medium
qs.append(make_lom_q(
    num=8,
    question="The maximum and minimum resultant of two forces acting on a body are $16\\text{ N}$ and $4\\text{ N}$ respectively. If these two forces act on the body at an angle of $90^\\circ$, the magnitude of their resultant will be:",
    options={
        "A": "2\\sqrt{34} N (approx 11.66 N)",
        "B": "10 N",
        "C": "12 N",
        "D": "8 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="For two forces $P$ and $Q$: $R_{\\max} = P + Q$ and $R_{\\min} = P - Q$. When at $90^\\circ$, $R = \\sqrt{P^2 + Q^2}$.",
    given="$P + Q = 16\\text{ N}$, $P - Q = 4\\text{ N}$.",
    formula="P = \\frac{R_{\\max} + R_{\\min}}{2},\\quad Q = \\frac{R_{\\max} - R_{\\min}}{2},\\quad R_{90} = \\sqrt{P^2 + Q^2}",
    steps="1. Solve for $P$ and $Q$: $P = (16+4)/2 = 10\\text{ N}$, $Q = (16-4)/2 = 6\\text{ N}$.\n2. At $\\theta = 90^\\circ$:\n   $$R = \\sqrt{10^2 + 6^2} = \\sqrt{100 + 36} = \\sqrt{136} = 2\\sqrt{34} \\approx 11.66\\text{ N}$$.",
    tip="Shortcut: $R_{90}^2 = \\frac{R_{\\max}^2 + R_{\\min}^2}{2} = \\frac{16^2 + 4^2}{2} = \\frac{256 + 16}{2} = 136 \\implies R = \\sqrt{136}$!",
    why_wrong="Option B is the larger force $P = 10\\text{ N}$, not the resultant."
))

# Q009 - Medium
qs.append(make_lom_q(
    num=9,
    question="A gravitational force between two point masses of $1\\text{ kg}$ each separated by $1\\text{ m}$ is denoted by $F_G$. The electrostatic repulsion between two point charges of $1\\text{ C}$ each separated by $1\\text{ m}$ is denoted by $F_E$. The ratio $F_E / F_G$ is of the order of:",
    options={
        "A": "10^20",
        "B": "10^10",
        "C": "10^30",
        "D": "1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="Gravitational force constant $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, while electrostatic constant $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.",
    given="$m = 1\\text{ kg}$, $q = 1\\text{ C}$, $r = 1\\text{ m}$.",
    formula="F_G = \\frac{G m_1 m_2}{r^2} = 6.67 \\times 10^{-11}\\text{ N},\\quad F_E = \\frac{k q_1 q_2}{r^2} = 9 \\times 10^9\\text{ N}",
    steps="1. Compute the ratio: $\\frac{F_E}{F_G} = \\frac{9 \\times 10^9}{6.67 \\times 10^{-11}} \\approx 1.35 \\times 10^{20}$.\n2. The order of magnitude is $10^{20}$.",
    tip="Comparing unit SI quantities ($1\\text{ kg}$ vs $1\\text{ C}$) shows electrostatics is $10^{20}$ times stronger; for two protons it is $10^{36}$, and for two electrons $10^{42}$!",
    why_wrong="Option C ($10^{30}$) would apply to subatomic particles, but here $1\\text{ kg}$ and $1\\text{ C}$ were specified."
))

# Q010 - Medium
qs.append(make_lom_q(
    num=10,
    question="A body is at rest on a rough horizontal table. How many distinct mechanical forces act on the body?",
    options={
        "A": "2 forces (Earth's gravitational pull downwards and normal reaction upwards)",
        "B": "3 forces (Gravity, normal force, and static friction)",
        "C": "1 force (Net contact force)",
        "D": "0 forces (Because velocity is zero)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="Static friction is an impending force of reaction: it only exists when there is an applied force attempting to cause relative motion. If no horizontal force is applied, static friction is strictly zero.",
    given="Body resting on a rough horizontal surface with no applied external horizontal forces.",
    formula="f_s = 0\\text{ when } F_{\\text{applied}} = 0",
    steps="1. Downward gravitational force from the Earth: $W = mg$.\n2. Upward normal reaction from the tabletop: $N = mg$.\n3. Because there is no tendency of relative sliding along the horizontal, static friction is zero.\n4. Therefore, exactly 2 distinct mechanical forces act on the body.",
    tip="NEET Trap: Rough surfaces do NOT exert friction automatically! Static friction only arises when an applied force attempts to produce sliding.",
    why_wrong="Option B incorrectly assumes friction exists even without any lateral applied force."
))

# Q011 - Medium
qs.append(make_lom_q(
    num=11,
    question="The angle between two forces $\\vec{A}$ and $\\vec{B}$ of equal magnitude $F$ is $\\theta$. If the magnitude of their resultant is also $F$, the angle $\\theta$ must be:",
    options={
        "A": "120^\\circ",
        "B": "60^\\circ",
        "C": "90^\\circ",
        "D": "180^\\circ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="When two vectors of equal magnitude produce a resultant equal to each vector's magnitude, they form an equilateral triangle in vector addition, meaning the exterior angle between them is $120^\\circ$.",
    given="$A = B = R = F$.",
    formula="R^2 = A^2 + B^2 + 2AB\\cos\\theta \\implies F^2 = F^2 + F^2 + 2F^2\\cos\\theta",
    steps="1. $F^2 = 2F^2(1 + \\cos\\theta)$.\n2. Divide by $F^2$: $1 = 2 + 2\\cos\\theta \\implies 2\\cos\\theta = -1 \\implies \\cos\\theta = -\\frac{1}{2}$.\n3. Therefore, $\\theta = 120^\\circ$.",
    tip="NEET Gold Rule: Two equal forces at $120^\\circ$ always yield a resultant of the same magnitude!",
    why_wrong="Option B ($60^\\circ$) yields $R = \\sqrt{3}F$. Option C ($90^\\circ$) yields $R = \\sqrt{2}F$."
))

# Q012 - Medium
qs.append(make_lom_q(
    num=12,
    question="A force $\\vec{F} = (6\\hat{i} - 8\\hat{j} + 10\\hat{k})\\text{ N}$ produces an acceleration of $1\\text{ m/s}^2$ in a body. The mass of the body is:",
    options={
        "A": "10\\sqrt{2} kg (approx 14.14 kg)",
        "B": "20 kg",
        "C": "10 kg",
        "D": "14 kg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Force and interactions",
    concept="Mass is the scalar ratio of net force magnitude to acceleration: $m = \\frac{|\\vec{F}|}{a}$.",
    given="$\\vec{F} = 6\\hat{i} - 8\\hat{j} + 10\\hat{k}\\text{ N}$, $a = 1\\text{ m/s}^2$.",
    formula="|\\vec{F}| = \\sqrt{F_x^2 + F_y^2 + F_z^2},\\quad m = \\frac{|\\vec{F}|}{a}",
    steps="1. Magnitude of force:\n   $$|\\vec{F}| = \\sqrt{6^2 + (-8)^2 + 10^2} = \\sqrt{36 + 64 + 100} = \\sqrt{200} = 10\\sqrt{2}\\text{ N}$$\n2. Mass: $m = \\frac{10\\sqrt{2}\\text{ N}}{1\\text{ m/s}^2} = 10\\sqrt{2}\\text{ kg} \\approx 14.14\\text{ kg}$.",
    tip="Always calculate the vector magnitude $|\\vec{F}|$ before applying $m = F/a$!",
    why_wrong="Option C ($10\\text{ kg}$) only considers the z-component or forgets the $\\sqrt{2}$ factor."
))

# Q013 - Hard
qs.append(make_lom_q(
    num=13,
    question="Three forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ are acting concurrently on a particle such that $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$. If $|\\vec{F}_1| = 20\\text{ N}$, $|\\vec{F}_2| = 15\\text{ N}$, and $|\\vec{F}_3| = 25\\text{ N}$, what is the angle between $\\vec{F}_1$ and $\\vec{F}_2$?",
    options={
        "A": "90^\\circ",
        "B": "60^\\circ",
        "C": "120^\\circ",
        "D": "45^\\circ"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Force and interactions",
    concept="If three vectors sum to zero, $\\vec{F}_1 + \\vec{F}_2 = -\\vec{F}_3$. Squaring both sides relates the magnitudes to the cosine of the angle between $\\vec{F}_1$ and $\\vec{F}_2$.",
    given="$F_1 = 20\\text{ N}$, $F_2 = 15\\text{ N}$, $F_3 = 25\\text{ N}$.",
    formula="|\\vec{F}_1 + \\vec{F}_2|^2 = |-\\vec{F}_3|^2 = F_3^2",
    steps="1. $F_1^2 + F_2^2 + 2F_1F_2\\cos\\theta = F_3^2$.\n2. Substitute values: $20^2 + 15^2 + 2(20)(15)\\cos\\theta = 25^2$.\n3. $400 + 225 + 600\\cos\\theta = 625$.\n4. $625 + 600\\cos\\theta = 625 \\implies 600\\cos\\theta = 0 \\implies \\cos\\theta = 0$.\n5. Therefore, $\\theta = 90^\\circ$.",
    tip="Check if the magnitudes form a Pythagorean triplet! $(15, 20, 25)$ is $5 \\times (3, 4, 5)$, so the two legs must be perpendicular ($90^\\circ$)!",
    why_wrong="Option B ($60^\\circ$) would require $F_3^2 = F_1^2 + F_2^2 + F_1 F_2$."
))

# Q014 - Hard
qs.append(make_lom_q(
    num=14,
    question="A body is acted upon by $n$ forces simultaneously such that the body is in equilibrium. If one force of magnitude $\\vec{F}_k$ is suddenly removed, what is the instantaneous acceleration of the body of mass $m$?",
    options={
        "A": "-\\frac{\\vec{F}_k}{m}",
        "B": "\\frac{\\vec{F}_k}{m}",
        "C": "0",
        "D": "-\\frac{n\\vec{F}_k}{m}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Force and interactions",
    concept="In equilibrium, the vector sum of all forces is zero: $\\sum_{i=1}^n \\vec{F}_i = 0$. Hence the sum of all remaining forces equals $-\\vec{F}_k$.",
    given="$\\sum_{i=1}^n \\vec{F}_i = 0$, force $\\vec{F}_k$ is removed.",
    formula="\\vec{F}_{\\text{remaining}} = -\\vec{F}_k,\\quad \\vec{a} = \\frac{\\vec{F}_{\\text{remaining}}}{m} = -\\frac{\\vec{F}_k}{m}",
    steps="1. Given $\\vec{F}_1 + \\dots + \\vec{F}_k + \\dots + \\vec{F}_n = 0$.\n2. Upon removing $\\vec{F}_k$, the new net force is $\\sum_{i \\neq k} \\vec{F}_i = -\\vec{F}_k$.\n3. The acceleration produced is $\\vec{a} = \\frac{-\\vec{F}_k}{m}$.",
    tip="Removing a force $\\vec{F}_k$ is equivalent to adding a force $-\\vec{F}_k$ to the system!",
    why_wrong="Option B misses the minus sign; the net force is opposite to the removed force."
))

# Q015 - Hard
qs.append(make_lom_q(
    num=15,
    question="The resultant of two forces $P$ and $Q$ is $R$. If $Q$ is doubled, the new resultant is perpendicular to $P$. Which of the following relations is correct?",
    options={
        "A": "Q = R",
        "B": "P = Q",
        "C": "P = R",
        "D": "P = 2Q"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Force and interactions",
    concept="For the new resultant $\\vec{R}' = \\vec{P} + 2\\vec{Q}$ to be perpendicular to $\\vec{P}$, the dot product $\\vec{P} \\cdot (\\vec{P} + 2\\vec{Q}) = 0$, giving $P^2 + 2PQ\\cos\\theta = 0$.",
    given="$\\vec{R} = \\vec{P} + \\vec{Q}$, and $\\vec{R}' = \\vec{P} + 2\\vec{Q} \\perp \\vec{P}$.",
    formula="\\tan 90^\\circ = \\frac{2Q\\sin\\theta}{P + 2Q\\cos\\theta} \\implies P + 2Q\\cos\\theta = 0 \\implies 2PQ\\cos\\theta = -P^2",
    steps="1. Magnitude of original resultant squared:\n   $$R^2 = P^2 + Q^2 + 2PQ\\cos\\theta$$\n2. From perpendicularity condition: $2PQ\\cos\\theta = -P^2$.\n3. Substitute into $R^2$:\n   $$R^2 = P^2 + Q^2 + (-P^2) = Q^2$$\n4. Taking square root: $R = Q$.",
    tip="Classic NEET problem: $P + 2Q\\cos\\theta = 0 \\implies 2PQ\\cos\\theta = -P^2$. Substituting into $R^2 = P^2 + Q^2 + 2PQ\\cos\\theta$ yields $R^2 = Q^2$, so $Q = R$!",
    why_wrong="Option B and C do not satisfy the angle condition $\\cos\\theta = -P/(2Q)$."
))

# Q016 - Hard
qs.append(make_lom_q(
    num=16,
    question="A particle of mass $m$ moves in the xy-plane under the action of a force $\\vec{F} = -k(y\\hat{i} + x\\hat{j})$. What is the work done by this force along a closed path?",
    options={
        "A": "Zero, because the force is conservative",
        "B": "Non-zero, because the force is non-conservative",
        "C": "Always positive",
        "D": "Infinite"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Force and interactions",
    concept="A 2D force $\\vec{F} = F_x\\hat{i} + F_y\\hat{j}$ is conservative if and only if $\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial F_x}{\\partial y}$.",
    given="$\\vec{F} = -ky\\hat{i} - kx\\hat{j}$, so $F_x = -ky$ and $F_y = -kx$.",
    formula="\\frac{\\partial F_y}{\\partial x} = -k,\\quad \\frac{\\partial F_x}{\\partial y} = -k",
    steps="1. Calculate $\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial}{\\partial x}(-kx) = -k$.\n2. Calculate $\\frac{\\partial F_x}{\\partial y} = \\frac{\\partial}{\\partial y}(-ky) = -k$.\n3. Since $\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial F_x}{\\partial y} = -k$, the curl is zero ($\\nabla \\times \\vec{F} = 0$).\n4. However, note that if $\\vec{F} = -k(y\\hat{i} - x\\hat{j})$, it is non-conservative! Here with $\\vec{F} = -k(y\\hat{i} + x\\hat{j})$, the potential energy function is $U = kxy$, because $\\vec{F} = -\\nabla(kxy) = -ky\\hat{i} - kx\\hat{j}$.\n5. Since it is the gradient of a potential, the force IS conservative, and work done along ANY closed path is exactly zero!",
    tip="Check if $\\vec{F} = -\\nabla U$: For $U = kxy$, $-\\nabla U = -k(y\\hat{i} + x\\hat{j}) = \\vec{F}$. A gradient field is conservative, so work over any closed loop $\\oint \\vec{F} \\cdot d\\vec{r} = 0$!",
    why_wrong="Option B incorrectly confuses $-k(y\\hat{i}+x\\hat{j})$ with the rotational vortex field $-k(y\\hat{i}-x\\hat{j})$."
))
# Wait, let's fix Q016 options/correct answer to match explanation!
qs[-1]["correctAnswer"] = "A"
qs[-1]["correctIndex"] = 0
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: Zero, because the force is conservative"

print("Topic 1 done: 16 questions.")
