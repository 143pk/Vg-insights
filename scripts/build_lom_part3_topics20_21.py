import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 20: Laws of friction and their limitations (Q314 to Q328: 4 Easy, 7 Medium, 4 Hard)
# ==============================================================================

# Q314: Easy
qs.append(make_lom_q(
    num=314,
    question="Which of the following is NOT one of Coulomb's classical laws of dry friction?",
    options={
        "A": "Friction force is directly proportional to the apparent area of contact",
        "B": "Limiting friction is directly proportional to the normal reaction",
        "C": "Friction always opposes relative motion or tendency of relative motion",
        "D": "Kinetic friction is approximately independent of the sliding velocity over moderate speed ranges"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Laws of friction and their limitations",
    concept="Coulomb's laws of dry friction state that friction is independent of the apparent macroscopic area of contact, directly proportional to the normal reaction, opposes relative motion, and is nearly independent of sliding speed for moderate speeds.",
    given="Laws of friction.",
    formula="$f \\propto N$, independent of apparent area $A$.",
    steps="1. Coulomb's first law: $f_{\\text{lim}} = \\mu_s N$ (proportional to normal reaction).\n2. Coulomb's second law: Friction is independent of apparent area of contact.\n3. Coulomb's third law: Kinetic friction is independent of relative speed for ordinary speeds.\n4. Therefore, stating that friction is proportional to apparent area is false, making option A the correct answer.",
    tip="Friction is independent of APPARENT area of contact, but proportional to TRUE microscopic contact area!",
    why_wrong="Options B, C, and D are all valid classical laws of friction."
))

# Q315: Easy
qs.append(make_lom_q(
    num=315,
    question="The modern explanation of friction is based primarily on:",
    options={
        "A": "Intermolecular attractive forces and cold welding at microscopic contact points (asperities)",
        "B": "The roughness of macroscopic surface textures creating mechanical gears",
        "C": "Gravitational attraction between the atoms of the two bodies",
        "D": "Magnetic poles created on the surface"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Laws of friction and their limitations",
    concept="Modern contact mechanics attributes dry friction primarily to adhesive bonding (cold welding) at microscopic asperities where true atomic contact occurs, along with deformation (shearing and plowing) of these contact points.",
    given="Physical origin of friction.",
    formula="True contact area $A_{\\text{true}} = \\frac{N}{P_{\\text{yield}}}$; Friction $f = \\tau_{\\text{shear}} A_{\\text{true}}$.",
    steps="1. Even highly polished surfaces are microscopically jagged with peaks (asperities) and valleys.\n2. When two surfaces meet, they touch only at the tips of these asperities.\n3. The local pressure at these tips is enormous, causing plastic flow and atomic cold welding.\n4. Moving the surfaces requires shearing these welded junctions.\n5. Therefore, intermolecular adhesion is the primary cause of friction.",
    tip="Friction is fundamentally an ELECTROMAGNETIC interaction between the atoms of the two surfaces at microscopic asperities!",
    why_wrong="Option B is the old 18th-century interlocking hypothesis, which fails to explain why polished surfaces stick. Option C and D are completely wrong physical forces."
))

# Q316: Easy
qs.append(make_lom_q(
    num=316,
    question="Which of the following is a key limitation of the classical laws of friction?",
    options={
        "A": "They fail at extremely high speeds, very high loads, and for atomically smooth surfaces",
        "B": "They apply only to fluids, not solids",
        "C": "They are valid only in vacuum",
        "D": "They predict zero friction for all metals"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Laws of friction and their limitations",
    concept="Coulomb's laws of dry friction are empirical approximations. They break down: (1) at very high speeds (where frictional heating melts surfaces), (2) at immense loads (where surfaces seize), and (3) for atomically smooth surfaces (where cold welding dominates).",
    given="Limitations of classical friction laws.",
    formula="Empirical nature: valid only for ordinary loads, moderate speeds, and typical roughness.",
    steps="1. Coulomb's laws are empirical approximations, not fundamental laws of nature.\n2. At very high speeds, kinetic friction decreases significantly due to thermal softening.\n3. Under extremely high normal pressures, the actual contact area saturates, and $\\mu$ decreases.\n4. For ultra-clean or atomically flat surfaces, strong adhesion produces huge friction defying $\\mu N$.\n5. Hence, option A describes the genuine limitations.",
    tip="Friction laws are empirical approximations! Unlike Newton's laws or conservation laws, they are not exact fundamental laws.",
    why_wrong="Option B: Friction laws apply to solids, while viscosity applies to fluids. Option C and D are completely incorrect."
))

# Q317: Easy
qs.append(make_lom_q(
    num=317,
    question="Why are ball bearings used in bicycle wheels and rotating machinery?",
    options={
        "A": "To convert sliding friction into rolling friction, which is much smaller",
        "B": "To increase the normal reaction on the axle",
        "C": "To eliminate the need for lubricants entirely",
        "D": "To increase static friction for better grip"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Laws of friction and their limitations",
    concept="Rolling friction is orders of magnitude smaller than sliding friction because rolling involves little or no relative tangential slip, only slight deformation of the contact surfaces.",
    given="Purpose of ball bearings.",
    formula="$\\mu_{\\text{rolling}} \\ll \\mu_{\\text{sliding}}$.",
    steps="1. In sliding contact, surfaces rub directly against each other, continuously shearing cold welds.\n2. In rolling contact, ball bearings roll over the raceway with negligible sliding.\n3. The rolling resistance coefficient is typically $10^{-3}$ to $10^{-2}$, roughly 100 times smaller than sliding friction.\n4. This dramatically minimizes energy dissipation and wear.",
    tip="Hierarchy of friction: $f_{\\text{limiting}} > f_{\\text{kinetic}} \\gg f_{\\text{rolling}}$! Rolling friction is the smallest by far.",
    why_wrong="Option B would increase resistance. Option C is false; ball bearings are still greased. Option D increases friction rather than decreasing it."
))

# Q318: Medium
qs.append(make_lom_q(
    num=318,
    question="A heavy uniform box is pulled across a floor. If a lubricant (such as oil or grease) is applied between the box and the floor, the coefficient of friction decreases because the lubricant:",
    options={
        "A": "Forms a thin fluid film separating the microscopic asperities, replacing solid friction with viscous shear",
        "B": "Increases the normal reaction force between the surfaces",
        "C": "Destroys the gravitational attraction between the box and Earth",
        "D": "Reduces the mass of the box"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="Lubricants form a hydrodynamic or boundary film between the surfaces, preventing direct solid-solid contact of microscopic asperities. The shear resistance of a fluid film is much smaller than the force required to shear solid cold welds.",
    given="Action of lubricants.",
    formula="Replaces dry Coulomb friction with fluid viscosity.",
    steps="1. Without lubricant, microscopic peaks come into intimate contact, cold-welding under pressure.\n2. When lubricant is introduced, oil molecules fill the microscopic valleys and form a protective boundary layer.\n3. The solid surfaces no longer touch directly.\n4. Motion occurs by shearing fluid layers, where resistance (viscosity) is vastly lower than solid shear strength.\n5. Consequently, friction is greatly reduced.",
    tip="Lubrication replaces solid-solid cold welding with fluid viscous shearing, reducing $\\mu$ by a factor of 10 or more!",
    why_wrong="Option B would increase friction. Option C and D violate fundamental physics (gravity and mass are unaffected)."
))

# Q319: Medium
qs.append(make_lom_q(
    num=319,
    question="Rolling friction between a wheel and a flat track is primarily caused by:",
    options={
        "A": "Deformation of the surfaces in contact, creating an asymmetric normal pressure distribution",
        "B": "Sliding of the wheel at its point of contact",
        "C": "Air resistance pushing against the front of the wheel",
        "D": "Electromagnetic radiation from the wheel"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="When a cylinder or sphere rolls on a real surface, both undergo slight elastic/plastic deformation. As the wheel rolls forward, the normal reaction shifts slightly ahead of the wheel's center of mass, producing a counter-torque that opposes rolling.",
    given="Origin of rolling friction.",
    formula="Rolling resistance moment $M_r = N \\cdot b$, where $b$ is the rolling resistance coefficient (length).",
    steps="1. A perfectly rigid wheel on a perfectly rigid surface would have zero rolling friction.\n2. In reality, surfaces deform, creating a flattened contact patch.\n3. Due to material hysteresis (energy loss during loading and unloading), pressure on the leading half of the contact patch exceeds pressure on the trailing half.\n4. The resultant normal reaction acts slightly forward of the vertical center line.\n5. This offset produces a counteracting torque that retards the rolling motion.",
    tip="Rolling friction is caused by SURFACE DEFORMATION and elastic hysteresis, NOT by tangential sliding!",
    why_wrong="Option B: Pure rolling has ZERO instantaneous sliding at the contact point. Option C is aerodynamic drag, not rolling friction."
))

# Q320: Medium
qs.append(make_lom_q(
    num=320,
    question="The coefficient of rolling friction $\\mu_r$ has dimensions of:",
    options={
        "A": "Length $[L]$ when defined as rolling resistance distance $b$, or dimensionless $[M^0 L^0 T^0]$ when defined as force ratio $F_r/N$",
        "B": "Force $[M L T^{-2}]$",
        "C": "Velocity $[L T^{-1}]$",
        "D": "Time $[T]$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="In engineering, rolling resistance is often expressed as $F_r = \\frac{b}{R} N$, where $b$ is a length (in meters) representing the contact shift. When expressed as the dimensionless ratio $F_r / N$, it is dimensionless. Both definitions appear in standard mechanics texts.",
    given="Dimensions of rolling friction coefficient.",
    formula="$F_r = \\mu_r N \\implies [\\mu_r] = [1]$; or $F_r = \\frac{b}{R}N \\implies [b] = [L]$.",
    steps="1. If rolling friction is defined analogously to sliding friction as $F_r = \\mu_r N$, then $\\mu_r = F_r / N$, which is purely dimensionless $[M^0 L^0 T^0]$.\n2. In advanced physics/engineering, it is defined as $F_r = \\frac{\\mu_r}{R} N$, where $\\mu_r$ has dimensions of length (meters).\n3. Option A correctly acknowledges both standard definitions used in curriculum texts.",
    tip="NCERT NEET convention: If asked about the force ratio $\\mu_r = F_r/N$, it is dimensionless, but keep in mind that rolling resistance arm $b$ has units of meters!",
    why_wrong="Option B, C, and D are never correct for friction coefficients."
))

# Q321: Medium
qs.append(make_lom_q(
    num=321,
    question="Why do race cars use wide, treadless 'slick' tires on dry asphalt, while ordinary road cars use narrower, treaded tires?",
    options={
        "A": "Wide tires increase the true contact area under adhesive bonding without tearing the rubber compound, providing higher traction",
        "B": "Wide tires reduce the normal force from the track",
        "C": "Wide tires eliminate rolling resistance entirely",
        "D": "Wide tires obey Coulomb's area-independence law more strictly"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="Soft rubber compounds on racing tires experience molecular adhesion and viscoelastic mechanical interlocking with the road surface. Spreading the high normal load over a larger area prevents the rubber from overheating and tearing, maximizing usable traction (an exception to simple Coulomb friction).",
    given="Racing slick tires vs normal tires.",
    formula="Tire grip involves adhesion and mechanical interlocking of viscoelastic polymers.",
    steps="1. Ordinary Coulomb's law assumes hard, non-deformable solids where true area $\\propto N$ independent of apparent area.\n2. Rubber is a soft elastomer; under intense acceleration, localized shear stress can tear the rubber.\n3. Wider tires distribute high frictional work over a greater volume of rubber, keeping temperatures optimal and maximizing molecular adhesion.\n4. Thus, wide tires offer much greater traction for high-performance cars.",
    tip="Real-world physics: Soft rubber violates simple Coulomb friction! Its friction DOES depend on surface area and temperature.",
    why_wrong="Option B: Normal force equals car weight (plus aerodynamic downforce), not reduced. Option C is impossible. Option D misunderstands Coulomb's law."
))

# Q322: Medium
qs.append(make_lom_q(
    num=322,
    question="Which of the following methods CANNOT be used to reduce friction between moving machine parts?",
    options={
        "A": "Sand-blasting the surfaces to make them rougher",
        "B": "Using lubricants like oil or grease",
        "C": "Using ball bearings to replace sliding with rolling",
        "D": "Using streamlined shapes or air cushions"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="Sand-blasting creates large, jagged macroscopic roughness, which drastically increases mechanical interlocking and abrasive wear, thus increasing friction rather than reducing it.",
    given="Methods of controlling friction.",
    formula="Increasing roughness increases friction.",
    steps="1. Lubricants separate surfaces, reducing friction.\n2. Ball bearings substitute rolling friction for sliding friction, reducing friction.\n3. Air cushions eliminate solid contact completely, reducing friction.\n4. Sand-blasting increases surface roughness and mechanical asperities, increasing friction.\n5. Therefore, sand-blasting is NOT a method to reduce friction.",
    tip="To reduce friction: lubricate, use ball bearings, polish, streamline, or use air cushions. To increase friction: add sand/tread (e.g., throwing sand on icy railway tracks)!",
    why_wrong="Options B, C, and D are all valid, widely used friction-reduction techniques."
))

# Q323: Medium
qs.append(make_lom_q(
    num=323,
    question="When sand is sprinkled on railway tracks during winter or wet weather, the primary purpose is to:",
    options={
        "A": "Increase the coefficient of static friction to prevent the drive wheels from slipping",
        "B": "Reduce the weight of the locomotive",
        "C": "Clean the steel tracks of oil",
        "D": "Increase the kinetic energy of the train"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="Steel-on-steel contact has a low coefficient of friction (especially when wet or iced over). Sprinkling rough sand particles increases the friction coefficient, providing the necessary static friction for the locomotive wheels to grip and accelerate or brake without spinning.",
    given="Sprinkling sand on railway tracks.",
    formula="$f_s \\le \\mu_s N$; increasing $\\mu_s$ allows greater traction force $F = \\mu_s N$.",
    steps="1. Train wheels are driven by engine torque, producing a forward static frictional force from the rails.\n2. On icy or wet rails, $\\mu_s$ drops severely, causing the wheels to spin in place (slip).\n3. Sand grains interlock with the steel surfaces, dramatically raising $\\mu_s$.\n4. This allows the wheels to exert higher forward traction without slipping.",
    tip="Friction is often necessary! Without static friction between wheels and road/track, vehicles could neither start moving nor brake safely.",
    why_wrong="Option B, C, and D are physically incorrect."
))

# Q324: Medium
qs.append(make_lom_q(
    num=324,
    question="Why do tread patterns on automobile tires NOT increase friction on dry roads, but are essential on wet roads?",
    options={
        "A": "On dry roads, friction is independent of tread, but on wet roads, treads channel water away to prevent aquaplaning (hydroplaning)",
        "B": "Treads increase the weight of the tire on dry roads",
        "C": "Treads produce a magnetic attraction with wet asphalt",
        "D": "Treads reduce rolling friction to zero on wet roads"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Laws of friction and their limitations",
    concept="On dry roads, smooth rubber maximizes contact. On wet roads, a layer of water trapped between tire and road cannot escape, causing the tire to float on a water film (hydroplaning), reducing friction to near zero. Treads provide escape channels for water, restoring direct rubber-asphalt contact.",
    given="Role of tire treads on dry vs wet roads.",
    formula="Hydroplaning occurs when fluid lift pressure exceeds tire contact pressure.",
    steps="1. On a completely dry road, grooves (treads) actually decrease contact area and do not add friction.\n2. On a wet road, water between the tire and asphalt gets trapped.\n3. As vehicle speed increases, hydrodynamic water pressure builds up and lifts the tire off the road.\n4. Treads act as gutters, rapidly squeezing water out to the sides.\n5. This allows the tire rubber to maintain direct contact with the road, preventing hydroplaning.",
    tip="Tire treads are designed specifically to channel WATER away! On completely dry racetracks, slick (treadless) tires provide maximum grip.",
    why_wrong="Option B, C, and D are physically incorrect."
))

# Q325: Hard
qs.append(make_lom_q(
    num=325,
    question="A solid cylinder of mass $m$ and radius $R$ rolls without slipping down a rough incline of inclination $\\theta$. The frictional force acting on the cylinder is:",
    options={
        "A": "$\\frac{1}{3} mg \\sin\\theta$ directed up the incline",
        "B": "$\\mu_s mg \\cos\\theta$ directed up the incline",
        "C": "$\\frac{1}{2} mg \\sin\\theta$ directed down the incline",
        "D": "Zero, because it is rolling without slipping"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Laws of friction and their limitations",
    concept="For pure rolling down an incline, static friction acts UP the incline to provide the necessary torque for rotational acceleration $\\tau = f R = I \\alpha$. For a solid cylinder ($I = \\frac{1}{2}mR^2$), $f = \\frac{mg\\sin\\theta}{1 + mR^2/I} = \\frac{mg\\sin\\theta}{1 + 2} = \\frac{1}{3}mg\\sin\\theta$.",
    given="Solid cylinder rolling without slipping, mass $m$, radius $R$, incline $\\theta$.",
    formula="$a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$; $f = \\frac{mg\\sin\\theta}{1 + mR^2/I}$.",
    steps="1. Linear motion down the incline: $mg\\sin\\theta - f = ma$.\n2. Rotational motion about center of mass: $\\tau = f R = I \\alpha$.\n3. Pure rolling constraint: $a = \\alpha R \\implies \\alpha = a / R$.\n4. For a solid cylinder, moment of inertia is $I = \\frac{1}{2}mR^2$.\n5. Torque equation: $f R = \\left(\\frac{1}{2}mR^2\\right) \\left(\\frac{a}{R}\\right) = \\frac{1}{2}mR a \\implies f = \\frac{1}{2}ma$.\n6. Substitute into linear equation: $mg\\sin\\theta - \\frac{1}{2}ma = ma \\implies mg\\sin\\theta = \\frac{3}{2}ma \\implies ma = \\frac{2}{3}mg\\sin\\theta$.\n7. Therefore, friction is $f = \\frac{1}{2}ma = \\frac{1}{2}\\left(\\frac{2}{3}mg\\sin\\theta\\right) = \\frac{1}{3}mg\\sin\\theta$ directed up the incline.",
    tip="NEET Trap: In pure rolling, friction is STATIC friction, NOT $\\mu_s mg\\cos\\theta$! It takes only the exact value required for rolling ($f = \\frac{1}{3}mg\\sin\\theta$).",
    why_wrong="Option B assumes friction is at its limiting value, which would cause slipping. Option C has wrong coefficient and direction. Option D assumes zero friction, which would result in frictionless sliding without rolling."
))

# Q326: Hard
qs.append(make_lom_q(
    num=326,
    question="In the previous rolling cylinder problem, what is the minimum coefficient of static friction $\\mu_s$ required between the cylinder and the incline to prevent slipping?",
    options={
        "A": "$\\frac{1}{3} \\tan\\theta$",
        "B": "$\\tan\\theta$",
        "C": "$\\frac{1}{2} \\tan\\theta$",
        "D": "$\\frac{2}{3} \\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Laws of friction and their limitations",
    concept="For pure rolling without slipping, the required static friction must not exceed the limiting friction: $f \\le \\mu_s N \\implies \\frac{1}{3}mg\\sin\\theta \\le \\mu_s mg\\cos\\theta \\implies \\mu_s \\ge \\frac{1}{3}\\tan\\theta$.",
    given="Required friction $f = \\frac{1}{3}mg\\sin\\theta$, normal force $N = mg\\cos\\theta$.",
    formula="$f \\le \\mu_s N \\implies \\mu_{\\text{min}} = \\frac{f}{N} = \\frac{1}{3}\\tan\\theta$.",
    steps="1. From the rolling dynamics of a solid cylinder, the required static friction is $f = \\frac{1}{3}mg\\sin\\theta$.\n2. The normal reaction from the inclined plane is $N = mg\\cos\\theta$.\n3. The condition for no slipping is $f \\le f_{\\text{lim}} = \\mu_s N$.\n4. Substituting: $\\frac{1}{3}mg\\sin\\theta \\le \\mu_s mg\\cos\\theta$.\n5. Dividing by $mg\\cos\\theta$: $\\mu_s \\ge \\frac{1}{3} \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1}{3}\\tan\\theta$.\n6. Thus, $\\mu_{s, \\text{min}} = \\frac{1}{3}\\tan\\theta$.",
    tip="General formula for pure rolling down an incline: $\\mu_{\\text{min}} = \\frac{\\tan\\theta}{1 + mR^2/I}$. For cylinder ($I = \\frac{1}{2}mR^2$), $\\mu_{\\text{min}} = \\frac{\\tan\\theta}{1 + 2} = \\frac{1}{3}\\tan\\theta$!",
    why_wrong="Option B ($\\tan\\theta$) is the angle of repose for a sliding block. Option C is for a spherical shell. Option D is for a ring."
))

# Q327: Hard
qs.append(make_lom_q(
    num=327,
    question="A uniform sphere of mass $m$ and radius $R$ rolls without slipping down an inclined plane of inclination $\\theta$. The minimum coefficient of static friction to prevent slipping is:",
    options={
        "A": "$\\frac{2}{7} \\tan\\theta$",
        "B": "$\\frac{1}{3} \\tan\\theta$",
        "C": "$\\frac{5}{7} \\tan\\theta$",
        "D": "$\\frac{2}{5} \\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Laws of friction and their limitations",
    concept="For a solid sphere, $I = \\frac{2}{5}mR^2$. The required friction is $f = \\frac{mg\\sin\\theta}{1 + mR^2/I} = \\frac{mg\\sin\\theta}{1 + 5/2} = \\frac{2}{7}mg\\sin\\theta$. Minimum friction coefficient is $\\mu_{\\text{min}} = \\frac{f}{N} = \\frac{2}{7}\\tan\\theta$.",
    given="Solid sphere, $I = \\frac{2}{5}mR^2$, incline $\\theta$.",
    formula="$\\mu_{\\text{min}} = \\frac{\\tan\\theta}{1 + mR^2/I} = \\frac{\\tan\\theta}{1 + 2.5} = \\frac{2}{7}\\tan\\theta$.",
    steps="1. Moment of inertia of a solid sphere: $I = \\frac{2}{5}mR^2$.\n2. Ratio $\\frac{mR^2}{I} = \\frac{5}{2} = 2.5$.\n3. Acceleration of center of mass: $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)} = \\frac{g\\sin\\theta}{1 + 2/5} = \\frac{5}{7}g\\sin\\theta$.\n4. Static friction required for torque: $f = I \\frac{\\alpha}{R} = I \\frac{a}{R^2} = \\frac{2}{5}m a = \\frac{2}{5}m \\left(\\frac{5}{7}g\\sin\\theta\\right) = \\frac{2}{7}mg\\sin\\theta$.\n5. To avoid slipping: $f \\le \\mu_s N = \\mu_s mg\\cos\\theta$.\n6. $\\frac{2}{7}mg\\sin\\theta \\le \\mu_s mg\\cos\\theta \\implies \\mu_s \\ge \\frac{2}{7}\\tan\\theta$.",
    tip="Compare minimum $\\mu$ values for rolling down incline:\n- Ring: $\\frac{1}{2}\\tan\\theta$\n- Cylinder: $\\frac{1}{3}\\tan\\theta \\approx 0.33\\tan\\theta$\n- Solid Sphere: $\\frac{2}{7}\\tan\\theta \\approx 0.286\\tan\\theta$\nSolid sphere requires the LEAST friction to roll!",
    why_wrong="Option B is for a solid cylinder. Option C is the acceleration coefficient. Option D is the moment of inertia coefficient."
))

# Q328: Hard
qs.append(make_lom_q(
    num=328,
    question="A car accelerates from rest on a horizontal road. Which force is directly responsible for accelerating the car forward?",
    options={
        "A": "Static friction exerted by the road on the drive tires pointing forward",
        "B": "The force exerted by the engine directly on the car chassis",
        "C": "Kinetic friction exerted by the road pointing backwards",
        "D": "Air pushing on the rear bumper"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Laws of friction and their limitations",
    concept="Internal engine forces cannot accelerate the center of mass of the car. The engine produces a torque that tends to rotate the drive wheels, making the tire patch push backwards against the road. By Newton's third law, the road exerts a forward static frictional force on the tires, which is the sole external horizontal force accelerating the car.",
    given="Car accelerating forward on a horizontal road.",
    formula="External force $F_{\\text{ext}} = f_{s, \\text{road}} = M a$.",
    steps="1. By Newton's second law, only an EXTERNAL force can accelerate the center of mass of a system.\n2. The engine, transmission, and driveshaft are all internal to the car system; their mutual forces sum to zero.\n3. The engine rotates the drive wheels, so the bottom of each tire tries to slide backwards relative to the road surface.\n4. Static friction from the road opposes this backward slip by exerting a forward force on the tire contact patch.\n5. This forward static friction is the actual external force that accelerates the car forward.",
    tip="Super Concept: Walking and driving are propelled by STATIC FRICTION pointing in the direction of motion! Friction is not always an obstacle; here it is the motive force.",
    why_wrong="Option B: Engine forces are internal. Option C: If tires don't spin in place, friction is static, not kinetic, and points forward. Option D is absurd."
))

# ==============================================================================
# Topic 21: Angle of friction and angle of repose (Q329 to Q344: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q329: Easy (NEET 2022 Verified PYQ)
qs.append(make_lom_q(
    num=329,
    question="An object of mass $m$ is placed on an inclined plane making an angle $\\theta$ with the horizontal. If the coefficient of static friction is $\\mu_s$, the angle of inclination at which the body just begins to slide down is given by:",
    options={
        "A": "$\\theta = \\tan^{-1}(\\mu_s)$",
        "B": "$\\theta = \\sin^{-1}(\\mu_s)$",
        "C": "$\\theta = \\cos^{-1}(\\mu_s)$",
        "D": "$\\theta = \\cot^{-1}(\\mu_s)$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angle of friction and angle of repose",
    concept="At the verge of slipping down an inclined plane, the component of gravity down the incline ($mg\\sin\\theta$) equals the maximum static (limiting) friction ($f_{\\text{lim}} = \\mu_s N = \\mu_s mg\\cos\\theta$). Dividing gives $\\tan\\theta = \\mu_s \\implies \\theta = \\tan^{-1}(\\mu_s)$. This critical angle is known as the angle of repose.",
    given="Mass $m$, inclined plane at angle $\\theta$, coefficient $\\mu_s$.",
    formula="$mg\\sin\\theta = \\mu_s mg\\cos\\theta \\implies \\tan\\theta = \\mu_s \\implies \\theta = \\tan^{-1}(\\mu_s)$.",
    steps="1. Weight acts vertically downward with magnitude $mg$.\n2. Resolving parallel and perpendicular to the inclined plane:\n   - Component down the plane: $F_\\parallel = mg\\sin\\theta$.\n   - Component into the plane: $F_\\perp = mg\\cos\\theta$.\n3. Normal reaction: $N = mg\\cos\\theta$.\n4. Limiting static friction acting up the plane: $f_{\\text{lim}} = \\mu_s N = \\mu_s mg\\cos\\theta$.\n5. At the verge of slipping: $mg\\sin\\theta = f_{\\text{lim}} = \\mu_s mg\\cos\\theta$.\n6. Divide by $mg\\cos\\theta$: $\\tan\\theta = \\mu_s \\implies \\theta = \\tan^{-1}(\\mu_s)$.",
    tip="Angle of repose $\\theta_r = \\tan^{-1}(\\mu_s)$. It equals the angle of friction $\\lambda = \\tan^{-1}(\\mu_s)$!",
    why_wrong="Option B, C, and D are incorrect trigonometric relations.",
    is_pyq=True,
    pyq_year=2022,
    source="NEET UG 2022"
))

# Q330: Easy
qs.append(make_lom_q(
    num=330,
    question="The angle of friction $\\lambda$ is defined as the angle which:",
    options={
        "A": "The resultant of the limiting friction and the normal reaction makes with the normal reaction",
        "B": "The inclined plane makes with the vertical at rest",
        "C": "The normal reaction makes with the gravitational force",
        "D": "The limiting friction makes with the horizontal"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angle of friction and angle of repose",
    concept="The angle of friction $\\lambda$ is the angle between the total resultant contact force $\\vec{R} = \\vec{N} + \\vec{f}_{\\text{lim}}$ and the normal reaction $\\vec{N}$.",
    given="Definition of angle of friction.",
    formula="$\\tan\\lambda = \\frac{f_{\\text{lim}}}{N} = \\frac{\\mu_s N}{N} = \\mu_s$.",
    steps="1. Let $\\vec{N}$ be the normal reaction perpendicular to the surface.\n2. Let $\\vec{f}_{\\text{lim}}$ be the limiting friction along the surface.\n3. The resultant contact force is $\\vec{R} = \\vec{N} + \\vec{f}_{\\text{lim}}$.\n4. In the right-angled triangle formed by $\\vec{N}$, $\\vec{f}_{\\text{lim}}$, and $\\vec{R}$, the angle $\\lambda$ with $\\vec{N}$ satisfies $\\tan\\lambda = \\frac{f_{\\text{lim}}}{N} = \\mu_s$.\n5. Hence, $\\lambda$ is the angle between the resultant contact force and the normal.",
    tip="Remember: $\\tan\\lambda = \\mu_s$ where $\\lambda$ is measured with the NORMAL, not the surface!",
    why_wrong="Option B is the angle of repose with the vertical. Option C and D describe completely different angles."
))

# Q331: Easy
qs.append(make_lom_q(
    num=331,
    question="The numerical relation between the angle of friction $\\lambda$ and the angle of repose $\\theta_r$ for the same pair of surfaces is:",
    options={
        "A": "$\\theta_r = \\lambda$",
        "B": "$\\theta_r = 2\\lambda$",
        "C": "$\\theta_r = \\lambda / 2$",
        "D": "$\\theta_r + \\lambda = 90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angle of friction and angle of repose",
    concept="Both the angle of friction $\\lambda$ and the angle of repose $\\theta_r$ satisfy the same tangent relation: $\\tan\\lambda = \\mu_s$ and $\\tan\\theta_r = \\mu_s$. Therefore, they are numerically identical: $\\theta_r = \\lambda$.",
    given="Comparison of $\\lambda$ and $\\theta_r$.",
    formula="$\\tan\\lambda = \\mu_s = \\tan\\theta_r \\implies \\theta_r = \\lambda$.",
    steps="1. Angle of friction definition: $\\tan\\lambda = \\frac{f_{\\text{lim}}}{N} = \\mu_s$.\n2. Angle of repose definition: At verge of sliding on incline, $mg\\sin\\theta_r = \\mu_s mg\\cos\\theta_r \\implies \\tan\\theta_r = \\mu_s$.\n3. Since both tangents equal $\\mu_s$, their angles must be equal: $\\theta_r = \\lambda$.",
    tip="Fundamental NCERT Theorem: Angle of repose is ALWAYS equal to the angle of friction ($\\theta_r = \\lambda$)!",
    why_wrong="Option B, C, and D are incorrect mathematical relationships."
))

# Q332: Easy
qs.append(make_lom_q(
    num=332,
    question="If the coefficient of static friction between a block and an inclined plane is $\\mu_s = 1$, the angle of repose is:",
    options={
        "A": "$45^\\circ$",
        "B": "$30^\\circ$",
        "C": "$60^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angle of friction and angle of repose",
    concept="Angle of repose $\\theta_r = \\tan^{-1}(\\mu_s)$. Since $\\mu_s = 1$, $\\theta_r = \\tan^{-1}(1) = 45^\\circ$.",
    given="$\\mu_s = 1$.",
    formula="$\\theta_r = \\tan^{-1}(\\mu_s) = \\tan^{-1}(1) = 45^\\circ$.",
    steps="1. At the angle of repose: $\\tan\\theta_r = \\mu_s$.\n2. Given $\\mu_s = 1$.\n3. Therefore, $\\tan\\theta_r = 1 \\implies \\theta_r = 45^\\circ$.",
    tip="$\\mu_s = 1 \\implies \\theta_r = 45^\\circ$. Standard trigonometry value!",
    why_wrong="Option B is for $\\mu_s = 1/\\sqrt{3} \\approx 0.577$. Option C is for $\\mu_s = \\sqrt{3} \\approx 1.732$. Option D implies infinite friction."
))

# Q333: Medium
qs.append(make_lom_q(
    num=333,
    question="A block rests on an inclined plane of inclination $\\theta$. If the angle of repose is $\\theta_r = 30^\\circ$ and the plane's inclination is $\\theta = 20^\\circ$, which of the following is correct?",
    options={
        "A": "The block remains at rest, and the friction acting is $mg\\sin 20^\\circ$",
        "B": "The block slides down with acceleration $g(\\sin 20^\\circ - \\mu_k\\cos 20^\\circ)$",
        "C": "The block remains at rest, and the friction acting is $\\mu_s mg\\cos 20^\\circ$",
        "D": "The block moves up the incline"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="When the plane's inclination $\\theta$ is strictly less than the angle of repose $\\theta_r$ ($\\theta < \\theta_r$), the downward gravitational component is less than the limiting friction ($mg\\sin\\theta < \\mu_s mg\\cos\\theta$). The block remains at rest, and static friction self-adjusts to exactly balance the downward component: $f_s = mg\\sin\\theta$.",
    given="$\\theta = 20^\\circ$, $\\theta_r = 30^\\circ$.",
    formula="If $\\theta < \\theta_r$, block stays at rest and $f_s = mg\\sin\\theta$.",
    steps="1. Compare the actual inclination with the angle of repose: $\\theta = 20^\\circ < \\theta_r = 30^\\circ$.\n2. Since $\\theta < \\theta_r$, the block will NOT slide down; it remains in static equilibrium.\n3. The component of gravity pulling the block down the incline is $mg\\sin 20^\\circ$.\n4. By equilibrium along the incline ($\\sum F_\\parallel = 0$), static friction must exactly balance this pull: $f_s = mg\\sin 20^\\circ$.\n5. It does not reach the limiting value $\\mu_s mg\\cos 20^\\circ$.",
    tip="When $\\theta < \\theta_r$, $f_s = mg\\sin\\theta$! Only when $\\theta = \\theta_r$ does friction reach its maximum limiting value.",
    why_wrong="Option B incorrectly predicts sliding. Option C gives the limiting friction instead of the actual static friction. Option D is absurd."
))

# Q334: Medium
qs.append(make_lom_q(
    num=334,
    question="In the previous setup, if the inclination of the plane is increased to $\\theta = 40^\\circ$ (where $\\theta_r = 30^\\circ$), which of the following describes the motion?",
    options={
        "A": "The block accelerates down the plane because $\\theta > \\theta_r$",
        "B": "The block remains at rest because normal reaction increases",
        "C": "The block slides down at constant velocity",
        "D": "The friction acting equals $mg\\sin 40^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="When $\\theta > \\theta_r$, the driving gravitational component exceeds limiting static friction: $mg\\sin\\theta > \\mu_s mg\\cos\\theta$. Consequently, the block accelerates down the incline under net force $mg\\sin\\theta - \\mu_k mg\\cos\\theta$.",
    given="$\\theta = 40^\\circ$, $\\theta_r = 30^\\circ$.",
    formula="$\\theta > \\theta_r \\implies mg\\sin\\theta > f_{\\text{lim}} \\implies a = g(\\sin\\theta - \\mu_k\\cos\\theta) > 0$.",
    steps="1. Here, inclination angle $\\theta = 40^\\circ$ is greater than the angle of repose $\\theta_r = 30^\\circ$.\n2. $\\tan 40^\\circ > \\tan 30^\\circ = \\mu_s$, which means $mg\\sin 40^\\circ > \\mu_s mg\\cos 40^\\circ$.\n3. The downward force of gravity exceeds the maximum opposing static friction.\n4. Therefore, equilibrium breaks down and the block accelerates down the plane.\n5. Friction transitions to kinetic friction: $f_k = \\mu_k mg\\cos 40^\\circ$.",
    tip="Summary of Incline Behavior:\n- $\\theta < \\theta_r$: Rest, $f_s = mg\\sin\\theta$\n- $\\theta = \\theta_r$: Verge of motion, $f = \\mu_s mg\\cos\\theta$\n- $\\theta > \\theta_r$: Accelerating downward, $f_k = \\mu_k mg\\cos\\theta$",
    why_wrong="Option B is false because $\\cos\\theta$ actually decreases as $\\theta$ increases. Option C requires $\\tan\\theta = \\mu_k$, which is not given. Option D confuses static balance with sliding."
))

# Q335: Medium
qs.append(make_lom_q(
    num=335,
    question="A body of mass $m$ is resting on a rough horizontal surface with coefficient of static friction $\\mu_s$. The magnitude of the resultant contact force $R$ exerted by the surface on the body can vary within which of the following ranges?",
    options={
        "A": "$mg \\le R \\le mg \\sqrt{1 + \\mu_s^2}$",
        "B": "$0 \\le R \\le mg$",
        "C": "$\\mu_s mg \\le R \\le mg$",
        "D": "$mg \\le R \\le 2 mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="The resultant contact force is $R = \\sqrt{N^2 + f_s^2}$. When no horizontal force is applied, $f_s = 0$, so $R_{\\text{min}} = N = mg$. At impending motion, $f_s = f_{\\text{lim}} = \\mu_s N$, so $R_{\\text{max}} = \\sqrt{(mg)^2 + (\\mu_s mg)^2} = mg\\sqrt{1 + \\mu_s^2}$.",
    given="Horizontal surface, mass $m$, static friction $\\mu_s$.",
    formula="$R = \\sqrt{N^2 + f_s^2}$; $0 \\le f_s \\le \\mu_s N \\implies N \\le R \\le N\\sqrt{1 + \\mu_s^2}$.",
    steps="1. The contact force $\\vec{R}$ is the vector sum of normal reaction $\\vec{N}$ and static friction $\\vec{f}_s$.\n2. Since $\\vec{N}$ and $\\vec{f}_s$ are perpendicular: $R = \\sqrt{N^2 + f_s^2}$.\n3. Minimum value occurs when no external tangential force acts: $f_s = 0 \\implies R_{\\text{min}} = N = mg$.\n4. Maximum value occurs when friction reaches its limiting threshold: $f_s = \\mu_s N \\implies R_{\\text{max}} = \\sqrt{N^2 + (\\mu_s N)^2} = N\\sqrt{1 + \\mu_s^2} = mg\\sqrt{1 + \\mu_s^2}$.\n5. Thus, $mg \\le R \\le mg\\sqrt{1 + \\mu_s^2}$.",
    tip="Resultant contact force range: $mg \\le R \\le mg\\sqrt{1 + \\mu_s^2}$. Excellent concept question frequently featured in test series!",
    why_wrong="Option B ignores normal force. Option C has wrong lower bound. Option D assumes $\\mu_s = \\sqrt{3}$ arbitrarily."
))

# Q336: Medium
qs.append(make_lom_q(
    num=336,
    question="The angle of friction between two surfaces is $30^\\circ$. What is the coefficient of static friction $\\mu_s$?",
    options={
        "A": "$\\frac{1}{\\sqrt{3}} \\approx 0.577$",
        "B": "$\\sqrt{3} \\approx 1.732$",
        "C": "$0.5$",
        "D": "$\\frac{\\sqrt{3}}{2} \\approx 0.866$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="The coefficient of static friction is the tangent of the angle of friction: $\\mu_s = \\tan\\lambda$. For $\\lambda = 30^\\circ$, $\\mu_s = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.",
    given="Angle of friction $\\lambda = 30^\\circ$.",
    formula="$\\mu_s = \\tan\\lambda = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.",
    steps="1. By definition of angle of friction: $\\tan\\lambda = \\mu_s$.\n2. Given $\\lambda = 30^\\circ$.\n3. Therefore, $\\mu_s = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$.",
    tip="$\\tan 30^\\circ = 1/\\sqrt{3} \\approx 0.577$; $\\tan 45^\\circ = 1$; $\\tan 60^\\circ = \\sqrt{3} \\approx 1.732$. Know these angles!",
    why_wrong="Option B is $\\tan 60^\\circ$. Option C is $\\sin 30^\\circ$. Option D is $\\cos 30^\\circ$."
))

# Q337: Medium
qs.append(make_lom_q(
    num=337,
    question="A block rests on an inclined plane of inclination $\\theta = 30^\\circ$. If the coefficient of static friction is $\\mu_s = \\frac{1}{\\sqrt{3}}$, what is the magnitude of the resultant contact force exerted by the plane on the block of mass $m$?",
    options={
        "A": "$mg$",
        "B": "$mg \\cos 30^\\circ$",
        "C": "$mg \\sin 30^\\circ$",
        "D": "$2 mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="Since $\\mu_s = 1/\\sqrt{3}$, the angle of repose is $\\theta_r = \\tan^{-1}(1/\\sqrt{3}) = 30^\\circ$. The plane is at $\\theta = 30^\\circ$, so the block is at rest (on the verge of sliding). For any stationary block on an incline with no other forces acting, the total contact force $\\vec{R}$ must exactly balance the downward weight $\\vec{W} = m\\vec{g}$. Therefore, $|\\vec{R}| = mg$!",
    given="Incline $\\theta = 30^\\circ$, $\\mu_s = 1/\\sqrt{3}$, mass $m$, block is stationary.",
    formula="Static equilibrium: $\\vec{R} + m\\vec{g} = 0 \\implies R = mg$.",
    steps="1. Check if the block is at rest: $\\tan\\theta = \\tan 30^\\circ = 1/\\sqrt{3} = \\mu_s$. The block is at rest.\n2. The only forces acting on the block are:\n   - Downward gravity $m\\vec{g}$ of magnitude $mg$.\n   - Total contact force $\\vec{R} = \\vec{N} + \\vec{f}_s$ exerted by the incline.\n3. Since the block has zero acceleration, Newton's first law requires:\n   $\\sum \\vec{F} = \\vec{R} + m\\vec{g} = 0 \\implies \\vec{R} = -m\\vec{g}$.\n4. Therefore, the magnitude of the resultant contact force is exactly $|\\vec{R}| = mg$.\n5. Alternative verification: $N = mg\\cos 30^\\circ = mg\\frac{\\sqrt{3}}{2}$, $f_s = mg\\sin 30^\\circ = mg\\frac{1}{2}$.\n   $R = \\sqrt{N^2 + f_s^2} = \\sqrt{\\frac{3}{4}m^2g^2 + \\frac{1}{4}m^2g^2} = \\sqrt{m^2g^2} = mg$!",
    tip="High-IQ NEET Shortcut: For ANY object resting on an inclined plane with NO external pushes, the total contact force exerted by the plane is ALWAYS exactly equal to $mg$!",
    why_wrong="Option B is just the normal force. Option C is just the friction force. Option D is an arbitrary multiple."
))

# Q338: Medium
qs.append(make_lom_q(
    num=338,
    question="A body of mass $2\\text{ kg}$ is on an inclined plane of inclination $30^\\circ$. The coefficient of static friction is $\\mu_s = 0.7$. Taking $g = 10\\text{ m/s}^2$, what is the frictional force acting on the body?",
    options={
        "A": "10 N",
        "B": "12.1 N",
        "C": "14 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="Check if body slides: $\\tan 30^\\circ \\approx 0.577$. Since $\\mu_s = 0.7 > 0.577$, $\\theta < \\theta_r$. The body does not slide. Friction is static and equals the component of gravity down the incline: $f_s = mg\\sin 30^\\circ$.",
    given="$m = 2\\text{ kg}$, $\\theta = 30^\\circ$, $\\mu_s = 0.7$, $g = 10\\text{ m/s}^2$.",
    formula="$f_s = mg\\sin\\theta = 2 \\times 10 \\times \\sin 30^\\circ = 10\\text{ N}$.",
    steps="1. Calculate driving force down the incline: $F_g = mg\\sin 30^\\circ = 2 \\times 10 \\times 0.5 = 10\\text{ N}$.\n2. Calculate normal force: $N = mg\\cos 30^\\circ = 20 \\times 0.866 = 17.32\\text{ N}$.\n3. Calculate maximum limiting friction: $f_{\\text{lim}} = \\mu_s N = 0.7 \\times 17.32 = 12.12\\text{ N}$.\n4. Compare $F_g$ with $f_{\\text{lim}}$: $F_g = 10\\text{ N} < f_{\\text{lim}} = 12.12\\text{ N}$.\n5. Because the driving force is less than limiting friction, the body remains firmly at rest.\n6. By equilibrium along the incline, the static friction is exactly equal to the driving force: $f_s = 10\\text{ N}$.",
    tip="Classic Trap: Students multiply $0.7 \\times 17.32 = 12.1\\text{ N}$ (Option B) which is LIMITING friction! The actual friction acting is only $10\\text{ N}$.",
    why_wrong="Option B (12.1 N) is the limiting friction. Option C is $0.7 \\times 20$. Option D is zero."
))

# Q339: Medium
qs.append(make_lom_q(
    num=339,
    question="A heap of dry sand has the shape of a cone of base radius $R$. If the coefficient of static friction between the sand grains is $\\mu_s$, what is the maximum height $h_{\\text{max}}$ that the cone can attain without sand slipping down?",
    options={
        "A": "$\\mu_s R$",
        "B": "$\\frac{R}{\\mu_s}$",
        "C": "$\\mu_s R^2$",
        "D": "$\\frac{\\mu_s R}{2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="For a sandpile, the slope angle of the cone's surface cannot exceed the angle of repose $\\theta_r$: $\\tan\\theta \\le \\tan\\theta_r = \\mu_s$. In a cone of height $h$ and radius $R$, $\\tan\\theta = h/R$. Therefore, $h/R \\le \\mu_s \\implies h_{\\text{max}} = \\mu_s R$.",
    given="Cone of base radius $R$, sand coefficient of static friction $\\mu_s$.",
    formula="$\\tan\\theta = \\frac{h}{R} \\le \\mu_s \\implies h_{\\text{max}} = \\mu_s R$.",
    steps="1. The outer face of the conical sandpile forms an inclined plane of angle $\\theta$ with the horizontal.\n2. Sand grains on the slope will slip down if $\\theta > \\theta_r$, where $\\theta_r$ is the angle of repose.\n3. The maximum stable slope angle satisfies $\\tan\\theta_{\\text{max}} = \\tan\\theta_r = \\mu_s$.\n4. For a right cone, the tangent of the base angle is $\\tan\\theta = \\frac{\\text{height}}{\\text{radius}} = \\frac{h}{R}$.\n5. Setting $\\frac{h}{R} = \\mu_s$ gives the maximum stable height: $h_{\\text{max}} = \\mu_s R$.",
    tip="Real-world Application: The maximum height of any granular pile (sand, grain, coal) is $h = \\mu_s R$! Maximum volume is $V = \\frac{1}{3}\\pi R^2 h = \\frac{1}{3}\\pi \\mu_s R^3$.",
    why_wrong="Option B inverts $\\mu_s$. Option C has dimensions of area. Option D includes an unnecessary factor of 1/2."
))

# Q340: Medium
qs.append(make_lom_q(
    num=340,
    question="In the previous sandpile problem, what is the maximum volume of dry sand that can be piled on a circular area of radius $R$?",
    options={
        "A": "$\\frac{1}{3} \\pi \\mu_s R^3$",
        "B": "$\\pi \\mu_s R^3$",
        "C": "$\\frac{2}{3} \\pi \\mu_s R^3$",
        "D": "$\\frac{1}{2} \\pi \\mu_s R^3$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angle of friction and angle of repose",
    concept="Volume of a cone is $V = \\frac{1}{3}\\pi R^2 h$. Substituting maximum height $h_{\\text{max}} = \\mu_s R$ yields $V_{\\text{max}} = \\frac{1}{3}\\pi \\mu_s R^3$.",
    given="Conical pile, base radius $R$, maximum height $h = \\mu_s R$.",
    formula="$V = \\frac{1}{3}\\pi R^2 h_{\\text{max}} = \\frac{1}{3}\\pi \\mu_s R^3$.",
    steps="1. The volume of a circular cone is $V = \\frac{1}{3}\\pi R^2 h$.\n2. The maximum height without sand grains slipping is $h_{\\text{max}} = \\mu_s R$.\n3. Substitute $h_{\\text{max}}$ into the volume formula:\n   $V_{\\text{max}} = \\frac{1}{3}\\pi R^2 (\\mu_s R) = \\frac{1}{3}\\pi \\mu_s R^3$.",
    tip="Formula: $V_{\\text{max}} = \\frac{1}{3}\\pi \\mu_s R^3$. Popular question in AIIMS/NEET physics tests!",
    why_wrong="Option B forgets the 1/3 factor of a cone. Option C is the volume of a hemisphere. Option D uses 1/2."
))

# Q341: Hard
qs.append(make_lom_q(
    num=341,
    question="A small insect crawls up the inner surface of a rough hemispherical bowl of radius $R$. The coefficient of static friction between the insect and the bowl surface is $\\mu_s = 0.75$. What is the maximum height $h$ above the lowest point of the bowl to which the insect can crawl without slipping?",
    options={
        "A": "$0.2 R$",
        "B": "$0.4 R$",
        "C": "$0.6 R$",
        "D": "$0.5 R$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angle of friction and angle of repose",
    concept="At angle $\\theta$ from the vertical, the local tangent to the bowl makes an angle $\\theta$ with the horizontal. Slipping occurs when this angle exceeds the angle of repose $\\theta_r$: $\\tan\\theta \\le \\mu_s$. For $\\tan\\theta = 0.75 = 3/4$, $\\cos\\theta = 4/5 = 0.8$. The height above the lowest point is $h = R(1 - \\cos\\theta) = R(1 - 0.8) = 0.2R$.",
    given="Hemispherical bowl radius $R$, $\\mu_s = 0.75 = 3/4$.",
    formula="$\\tan\\theta = \\mu_s \\implies \\cos\\theta = \\frac{1}{\\sqrt{1 + \\mu_s^2}}$; $h = R(1 - \\cos\\theta)$.",
    steps="1. Let $\\theta$ be the angular position of the insect measured from the lowest point (the vertical axis).\n2. The normal to the spherical surface makes angle $\\theta$ with the vertical, which means the tangent to the surface makes angle $\\theta$ with the horizontal.\n3. The insect can crawl up without slipping as long as the slope angle $\\theta$ does not exceed the angle of repose $\\theta_r$.\n4. Therefore, at the maximum height: $\\tan\\theta = \\mu_s = 0.75 = \\frac{3}{4}$.\n5. From a 3-4-5 right triangle: $\\sin\\theta = \\frac{3}{5} = 0.6$ and $\\cos\\theta = \\frac{4}{5} = 0.8$.\n6. The vertical coordinate from the center is $y = R\\cos\\theta = 0.8R$.\n7. The height $h$ above the lowest point of the bowl is:\n   $h = R - R\\cos\\theta = R(1 - 0.8) = 0.2R$.",
    tip="Super Classic NEET Question: Maximum height in a hemispherical bowl is $h = R\\left(1 - \\frac{1}{\\sqrt{1 + \\mu_s^2}}\\right)$. For $\\mu_s = 3/4$, $h = 0.2R$!",
    why_wrong="Option B ($0.4R$) is $R(1 - \\sin\\theta) = R(1 - 0.6)$. Option C is $R\\sin\\theta$. Option D is $R/2$."
))

# Q342: Hard
qs.append(make_lom_q(
    num=342,
    question="In the previous insect problem, if the coefficient of static friction is $\\mu_s = \\frac{1}{\\sqrt{3}}$, what is the maximum height $h$ above the bottom of the bowl?",
    options={
        "A": "$R \\left(1 - \\frac{\\sqrt{3}}{2}\\right) \\approx 0.134 R$",
        "B": "$0.5 R$",
        "C": "$0.25 R$",
        "D": "$R \\left(1 - \\frac{1}{\\sqrt{3}}\\right)$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angle of friction and angle of repose",
    concept="Angle of repose: $\\tan\\theta = \\mu_s = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$. The height above the lowest point is $h = R(1 - \\cos 30^\\circ) = R(1 - \\sqrt{3}/2) \\approx 0.134R$.",
    given="$\\mu_s = 1/\\sqrt{3}$.",
    formula="$\\tan\\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$; $h = R(1 - \\cos 30^\\circ)$.",
    steps="1. The maximum slope occurs at the angle of repose: $\\tan\\theta = \\mu_s = \\frac{1}{\\sqrt{3}}$.\n2. Thus, $\\theta = 30^\\circ$.\n3. $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866$.\n4. Height above the lowest point: $h = R(1 - \\cos\\theta) = R\\left(1 - \\frac{\\sqrt{3}}{2}\\right) \\approx 0.134R$.",
    tip="Directly use $h = R(1 - \\cos\\theta)$ where $\\theta = \\tan^{-1}(\\mu_s)$!",
    why_wrong="Option B corresponds to $\\theta = 60^\\circ$ ($\\mu_s = \\sqrt{3}$). Option C and D use wrong trigonometric components."
))

# Q343: Hard
qs.append(make_lom_q(
    num=343,
    question="A block of mass $m$ is placed on an inclined plane whose inclination $\\theta$ is greater than the angle of repose $\\theta_r$. What is the minimum force $F$ applied parallel to the incline to prevent the block from sliding down?",
    options={
        "A": "$mg(\\sin\\theta - \\mu_s \\cos\\theta)$",
        "B": "$mg(\\sin\\theta + \\mu_s \\cos\\theta)$",
        "C": "$mg\\sin\\theta$",
        "D": "$\\mu_s mg\\cos\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angle of friction and angle of repose",
    concept="To prevent downward sliding, static friction acts UP the incline at its maximum limiting value $f_{\\text{lim}} = \\mu_s mg\\cos\\theta$. The upward pulling force $F$ assists friction in balancing the downward gravity pull: $F + f_{\\text{lim}} = mg\\sin\\theta \\implies F = mg(\\sin\\theta - \\mu_s\\cos\\theta)$.",
    given="Incline $\\theta > \\theta_r$, impending downward slide.",
    formula="$F + \\mu_s mg\\cos\\theta = mg\\sin\\theta \\implies F_{\\text{min}} = mg(\\sin\\theta - \\mu_s\\cos\\theta)$.",
    steps="1. Component of weight pulling block down the incline: $W_\\parallel = mg\\sin\\theta$.\n2. Normal reaction: $N = mg\\cos\\theta$.\n3. Since the block tends to slide DOWN, static friction acts UP the incline.\n4. To find the minimum force to just PREVENT slipping, friction must be at its maximum capacity: $f_{\\text{lim}} = \\mu_s N = \\mu_s mg\\cos\\theta$.\n5. Upward forces: applied force $F$ and limiting friction $f_{\\text{lim}}$.\n6. Equilibrium condition along the plane: $F + f_{\\text{lim}} = mg\\sin\\theta$.\n7. Therefore, $F_{\\text{min}} = mg\\sin\\theta - \\mu_s mg\\cos\\theta = mg(\\sin\\theta - \\mu_s\\cos\\theta)$.",
    tip="Compare:\n- Force to PREVENT sliding down: $F_1 = mg(\\sin\\theta - \\mu_s\\cos\\theta)$\n- Force to START moving up: $F_2 = mg(\\sin\\theta + \\mu_s\\cos\\theta)$\nNotice $F_1 < F_2$!",
    why_wrong="Option B is the force required to pull the block UP the incline. Option C is for a frictionless incline. Option D is just the friction force."
))

# Q344: Hard
qs.append(make_lom_q(
    num=344,
    question="In the previous setup, what is the ratio of the minimum force required to move the block UP the incline ($F_1$) to the minimum force required to prevent it from sliding DOWN ($F_2$)?",
    options={
        "A": "$\\frac{\\sin\\theta + \\mu_s \\cos\\theta}{\\sin\\theta - \\mu_s \\cos\\theta}$",
        "B": "$\\frac{\\sin\\theta - \\mu_s \\cos\\theta}{\\sin\\theta + \\mu_s \\cos\\theta}$",
        "C": "$\\frac{\\cos\\theta + \\mu_s \\sin\\theta}{\\cos\\theta - \\mu_s \\sin\\theta}$",
        "D": "$\\frac{1 + \\mu_s}{1 - \\mu_s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angle of friction and angle of repose",
    concept="To move up: $F_1 = mg(\\sin\\theta + \\mu_s\\cos\\theta)$ (friction acts down). To prevent sliding down: $F_2 = mg(\\sin\\theta - \\mu_s\\cos\\theta)$ (friction acts up). The ratio is $\\frac{F_1}{F_2} = \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\sin\\theta - \\mu_s\\cos\\theta} = \\frac{\\tan\\theta + \\mu_s}{\\tan\\theta - \\mu_s}$.",
    given="$F_1 = mg(\\sin\\theta + \\mu_s\\cos\\theta)$, $F_2 = mg(\\sin\\theta - \\mu_s\\cos\\theta)$.",
    formula="$\\frac{F_1}{F_2} = \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\sin\\theta - \\mu_s\\cos\\theta}$.",
    steps="1. Force to pull the block up the plane: Friction opposes upward motion and acts down the incline.\n   $F_1 = mg\\sin\\theta + f_{\\text{lim}} = mg(\\sin\\theta + \\mu_s\\cos\\theta)$.\n2. Force to prevent the block from slipping down: Friction acts up the incline to help hold the block.\n   $F_2 = mg\\sin\\theta - f_{\\text{lim}} = mg(\\sin\\theta - \\mu_s\\cos\\theta)$.\n3. Dividing $F_1$ by $F_2$:\n   $\\frac{F_1}{F_2} = \\frac{mg(\\sin\\theta + \\mu_s\\cos\\theta)}{mg(\\sin\\theta - \\mu_s\\cos\\theta)} = \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\sin\\theta - \\mu_s\\cos\\theta}$.\n4. Alternatively, dividing numerator and denominator by $\\cos\\theta$, this is $\\frac{\\tan\\theta + \\mu_s}{\\tan\\theta - \\mu_s}$.",
    tip="NEET Favorite: $\\frac{F_{\\text{up}}}{F_{\\text{down}}} = \\frac{\\tan\\theta + \\mu_s}{\\tan\\theta - \\mu_s}$. Can also be written as $\\frac{\\sin(\\theta + \\lambda)}{\\sin(\\theta - \\lambda)}$ where $\\lambda$ is angle of friction!",
    why_wrong="Option B is the reciprocal ratio. Option C swaps sine and cosine. Option D only holds if $\\theta = 45^\\circ$."
))

print(f"Topics 20 & 21 done: {len(qs)} questions.")
