import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 3: Inertia and its types (Q032 to Q047, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q032 - Easy
qs.append(make_lom_q(
    num=32,
    question="When a stationary bus suddenly starts moving forward, passengers standing inside fall backward. This is an example of:",
    options={
        "A": "Inertia of rest",
        "B": "Inertia of motion",
        "C": "Inertia of direction",
        "D": "Centrifugal reaction"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Inertia and its types",
    concept="Inertia of rest is the inherent tendency of an object to remain at rest unless an external force acts on it.",
    given="Stationary bus suddenly accelerates forward.",
    formula="\\text{Lower body moves with bus; upper body tends to stay at rest due to inertia.}",
    steps="1. The passenger's feet in contact with the bus floor move forward with the bus.\n2. The upper body tends to remain at rest due to inertia of rest.\n3. As a result, the passenger leans/falls backward relative to the bus.",
    tip="Starts moving $\\implies$ Inertia of rest (falls backward). Brakes applied $\\implies$ Inertia of motion (falls forward). Takes a sharp turn $\\implies$ Inertia of direction (leans outward)!",
    why_wrong="Option B applies when a moving vehicle stops suddenly."
))

# Q033 - Easy
qs.append(make_lom_q(
    num=33,
    question="When a moving bus suddenly applies brakes, the passengers jerk forward. This phenomenon is caused by:",
    options={
        "A": "Inertia of motion",
        "B": "Inertia of rest",
        "C": "Gravitational pull",
        "D": "Action-reaction force"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Inertia and its types",
    concept="Inertia of motion is the resistance of a body to changing its state of uniform motion.",
    given="Bus in motion suddenly stops due to braking.",
    formula="\\text{Upper body continues moving with initial velocity } \\vec{v} \\text{ while feet stop.}",
    steps="1. While traveling, the whole passenger body moves with the bus's velocity.\n2. When brakes are applied, the bus and the passenger's feet come to rest.\n3. The upper body continues forward due to inertia of motion, causing a forward jerk.",
    tip="Always identify the INITIAL state: If initially moving, it's inertia of motion!",
    why_wrong="Option B applies to a body initially at rest."
))

# Q034 - Easy
qs.append(make_lom_q(
    num=34,
    question="A mudguard is fitted over the wheels of a motorcycle to prevent flying mud from hitting the rider. This application relies on:",
    options={
        "A": "Inertia of direction",
        "B": "Inertia of rest",
        "C": "Newton's third law only",
        "D": "Gravitational attraction"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Inertia and its types",
    concept="Inertia of direction is the tendency of an object to continue moving in a straight line. Rotating mud particles fly off tangentially when adhesion fails.",
    given="Mud particles detaching from spinning tire.",
    formula="\\vec{v}_{\\text{mud}} = \\text{tangential velocity at separation point}",
    steps="1. Mud adheres to the rotating tire due to adhesive forces.\n2. When adhesive forces are insufficient to provide centripetal acceleration, mud flies off tangentially in a straight line.\n3. Mudguards intercept these tangential trajectories.",
    tip="Tangential departure of particles (sparks from grinding stone, mud from tire) is the classic demonstration of inertia of direction!",
    why_wrong="Option B is inertia of rest, but the tire and mud are in dynamic rotation."
))

# Q035 - Easy
qs.append(make_lom_q(
    num=35,
    question="Which of the following objects has the greatest inertia?",
    options={
        "A": "A loaded railway freight train of mass 2000 tonnes",
        "B": "A heavy transport truck of mass 10 tonnes",
        "C": "A passenger car of mass 1500 kg",
        "D": "A cricket ball of mass 160 g"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Inertia and its types",
    concept="Inertia is quantitatively proportional to mass ($I \\propto m$). The object with the greatest mass possesses the greatest inertia.",
    given="Four bodies of differing mass.",
    formula="\\text{Inertia} \\propto m",
    steps="1. Train mass: $2000\\text{ tonnes} = 2 \\times 10^6\\text{ kg}$.\n2. Truck mass: $10\\text{ tonnes} = 10^4\\text{ kg}$.\n3. Car mass: $1500\\text{ kg}$.\n4. Ball mass: $0.16\\text{ kg}$.\n5. The freight train has the largest mass, hence the greatest inertia.",
    tip="Inertia depends purely on mass, not on velocity or shape!",
    why_wrong="Options B, C, and D all have substantially smaller masses than the train."
))

# Q036 - Medium
qs.append(make_lom_q(
    num=36,
    question="An athlete takes a long run-up before taking a long jump. This is done to:",
    options={
        "A": "Gain large forward momentum and utilize inertia of motion during takeoff",
        "B": "Reduce the force of gravity during flight",
        "C": "Increase the normal reaction of the ground",
        "D": "Overcome atmospheric air resistance"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="Taking a run-up imparts significant forward velocity. Due to inertia of motion, this horizontal velocity is maintained in projectile flight, maximizing range $R = u_x T$.",
    given="Athlete running before jump.",
    formula="R = u_x \\times T = u\\cos\\theta \\times \\frac{2u\\sin\\theta}{g}",
    steps="1. Running up builds horizontal velocity $u_x$.\n2. At takeoff, this velocity carries the athlete forward during the airborne phase due to inertia of motion.\n3. The greater the takeoff speed $u$, the larger the horizontal distance covered.",
    tip="Inertia of motion preserves horizontal velocity once the feet leave the ground!",
    why_wrong="Option B is physically impossible; gravity remains $mg$ regardless of run-up."
))

# Q037 - Medium
qs.append(make_lom_q(
    num=37,
    question="Dust can be removed from a hanging carpet by beating it with a stick. The physical principle responsible for this is:",
    options={
        "A": "Inertia of rest of the dust particles",
        "B": "Inertia of motion of the dust particles",
        "C": "Newton's third law of motion only",
        "D": "Conservation of energy"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="When the carpet is struck, it accelerates forward suddenly. The dust particles tend to remain at rest due to inertia of rest and separate from the carpet fibers.",
    given="Carpet beaten with a stick.",
    formula="\\Delta x_{\\text{carpet}} > 0,\\quad \\Delta x_{\\text{dust}} \\approx 0 \\implies \\text{separation}",
    steps="1. The stick exerts an impulsive force on the carpet fibers, moving them rapidly.\n2. The dust particles receive negligible direct force and stay at rest due to inertia of rest.\n3. The carpet moves away from the dust, leaving the dust particles suspended in air, which then fall due to gravity.",
    tip="Beating a carpet or shaking a wet umbrella: liquid/dust stays at rest while fabric moves away!",
    why_wrong="Option B: The dust was initially at rest, so it is inertia of rest, not motion."
))

# Q038 - Medium
qs.append(make_lom_q(
    num=38,
    question="When a wet dog shakes its body vigorously, water droplets fly off in all directions. The droplets fly off because of:",
    options={
        "A": "Inertia of direction and motion of the water drops",
        "B": "Surface tension pushing them away",
        "C": "Gravitational repulsion",
        "D": "Capillary action"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="As the dog rapidly alternates its body rotation, the water droplets attain velocity. When the body suddenly changes direction, the droplets continue along their straight-line tangent due to inertia.",
    given="Dog shaking body to dry fur.",
    formula="\\vec{v}_{\\text{tangential}} = \\text{maintained along straight path when adhesion fails}",
    steps="1. Fur moves rapidly back and forth in an oscillatory rotational motion.\n2. Droplets acquire velocity along the fur's instantaneous motion.\n3. As the fur reverses direction, adhesive surface tension cannot provide the necessary centripetal force.\n4. Droplets break free and fly off along their tangential velocity vector due to inertia.",
    tip="Any tangential ejection during rapid oscillation or rotation is driven by inertia of motion and direction!",
    why_wrong="Option B: Surface tension holds drops to fur; it opposes them flying off."
))

# Q039 - Medium
qs.append(make_lom_q(
    num=39,
    question="A car rounds a sharp circular curve to the left on a flat horizontal road. An unrestrained passenger feels thrown outward toward the right door. What force actually pushes the passenger to the right?",
    options={
        "A": "No real force pushes the passenger to the right; the feeling is due to the passenger's inertia to continue in a straight line",
        "B": "Centrifugal force exerted by the engine",
        "C": "Friction between the seats and the passenger pushing rightwards",
        "D": "Gravitational attraction towards the outside of the curve"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="In an inertial reference frame, there is no real outward force. The passenger simply tends to continue in a straight line due to inertia of direction, while the car curves beneath them.",
    given="Car turning left on a flat curve.",
    formula="\\vec{v} = \\text{straight line}; \\text{ car accelerates leftward with } a_c = v^2/R",
    steps="1. By Newton's First Law, an object in motion continues along a straight path.\n2. The car turns left because lateral friction on tires provides centripetal acceleration.\n3. The unrestrained passenger moves straight until the right door comes into contact and pushes the passenger to the left.\n4. The outward sensation is purely an inertial effect.",
    tip="From an external (ground) frame, there is NO outward force! The only real force is the inward normal force from the car door pushing the passenger into the turn.",
    why_wrong="Option B: Centrifugal force is a fictitious/pseudo force in non-inertial frames, not a real physical force."
))

# Q040 - Medium
qs.append(make_lom_q(
    num=40,
    question="When leaves or ripe fruits fall from the branches of a tree when it is shaken vigorously, this is primarily due to:",
    options={
        "A": "Inertia of rest of the fruits/leaves",
        "B": "Inertia of motion of the branches",
        "C": "Decrease in gravitational pull of Earth",
        "D": "Increase in atmospheric pressure"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="When branches are set into rapid motion by shaking, the leaves and fruits tend to remain at rest due to their inertia of rest. The resulting shear stress at the stem snaps the connection.",
    given="Tree branches shaken vigorously.",
    formula="\\text{Branch moves; fruit tends to stay at rest } \\implies \\text{stem breaks under tension/shear}",
    steps="1. Shaking forces the branch into rapid oscillatory displacement.\n2. Due to inertia of rest, the fruits tend to remain stationary.\n3. A large bending/shearing strain develops in the stem.\n4. The stem breaks, and the fruit drops under gravity.",
    tip="Classic NCERT example of inertia of rest!",
    why_wrong="Option B describes the branch's motion, but the separation mechanism is the fruit's inertia of rest."
))

# Q041 - Medium
qs.append(make_lom_q(
    num=41,
    question="A bullet fired at a glass window pane pierces a clean circular hole through it without cracking the entire pane, whereas a thrown stone smashes the entire window pane into pieces. Why?",
    options={
        "A": "The bullet has very high speed, so contact time is extremely short and only the struck region receives momentum",
        "B": "The bullet has smaller mass than the stone",
        "C": "The stone exerts a smaller impulse than the bullet",
        "D": "Glass behaves as an elastic solid for bullets and a plastic solid for stones"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="At very high velocity, contact time $\Delta t$ is negligible ($10^{-5}\\text{ s}$). The impulse is localized to the contact area because the rest of the window has inertia and does not have time to respond.",
    given="High-speed bullet vs low-speed stone striking glass pane.",
    formula="\\Delta t_{\\text{bullet}} \\ll \\Delta t_{\\text{stone}}",
    steps="1. Contact time of the high-speed bullet is extremely brief ($\Delta t \\approx d/v$).\n2. Due to the inertia of rest of the surrounding glass, the disturbance does not propagate beyond the impact zone.\n3. For a slow stone, $\\Delta t$ is much larger, allowing stress waves to propagate throughout the entire pane and shatter it.",
    tip="Extremely short collision time $\\implies$ Localized impact due to inertia of surrounding material!",
    why_wrong="Option C is incorrect; a thrown stone typically exerts a much longer impulse that shatters the whole window."
))

# Q042 - Medium
qs.append(make_lom_q(
    num=42,
    question="A person jumping out of a rapidly moving train or bus is advised to run in the direction of the moving vehicle for a short distance after touching the ground. Why?",
    options={
        "A": "To safely bring the upper body to rest gradually and prevent falling forward due to inertia of motion",
        "B": "To increase the friction between shoes and ground",
        "C": "To utilize inertia of rest",
        "D": "To reduce the gravitational force acting on the body"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="Upon touching the ground, the feet are abruptly brought to rest by friction, while the upper body continues moving forward at the train's speed due to inertia of motion. Running allows the entire body to decelerate gradually.",
    given="Jumping off a moving vehicle.",
    formula="v_{\\text{feet}} \\to 0\\text{ immediately upon landing};\\quad v_{\\text{upper}} = v_{\\text{train}}",
    steps="1. Before landing, the person possesses the forward velocity of the vehicle.\n2. If the feet stop suddenly upon hitting the ground, the upper body continues forward due to inertia of motion, resulting in a dangerous forward tumble.\n3. Running in the direction of motion keeps the feet moving with the upper body while braking gradually.",
    tip="Always run forward when disembarking a moving vehicle to match lower body speed with upper body inertia of motion!",
    why_wrong="Option C: The body is initially moving, so it is an application of inertia of motion, not rest."
))

# Q043 - Medium
qs.append(make_lom_q(
    num=43,
    question="Which of the following is TRUE regarding the comparison between mass and weight?",
    options={
        "A": "Mass is a scalar and the measure of inertia, while weight is a vector force",
        "B": "Both mass and weight are scalar quantities",
        "C": "Mass changes with altitude, while weight remains constant",
        "D": "Weight is measured in kilograms in the SI system"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Inertia and its types",
    concept="Mass is an intrinsic scalar property representing inertia (SI unit: kg). Weight is the downward gravitational force $\vec{W} = m\vec{g}$ (SI unit: N).",
    given="Definitions of mass and weight.",
    formula="m = \\text{scalar [kg]},\\quad \\vec{W} = m\\vec{g} = \\text{vector [N]}",
    steps="1. Mass quantifies how much matter an object contains and its resistance to acceleration (inertia).\n2. Weight is the gravitational pull exerted on that mass by a celestial body: $W = mg$.\n3. Mass is invariant across the universe; weight varies with local $g$.\n4. Thus, statement A is correct.",
    tip="Mass = kg (scalar, constant everywhere). Weight = N (vector, varies with $g$)!",
    why_wrong="Option C is backward; mass is constant, while weight changes with altitude as $g$ decreases."
))

# Q044 - Hard
qs.append(make_lom_q(
    num=44,
    question="A coin placed on a smooth card on top of a beaker drops neatly into the beaker when the card is flicked horizontally with a quick finger snap. If the card is instead pulled slowly, the coin moves along with the card. This difference is explained by:",
    options={
        "A": "In a quick flick, the force of friction acts for such a small time that the impulse is insufficient to accelerate the coin significantly",
        "B": "Friction vanishes completely when velocity is high",
        "C": "The coin's mass increases during rapid motion",
        "D": "Air resistance pulls the coin down during the quick flick"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Inertia and its types",
    concept="The impulse delivered by friction during the quick flick is $J = f_k \\Delta t$. Because $\\Delta t$ is extremely small, $J \\approx 0$, so $\\Delta v = J/m \\approx 0$. Due to inertia of rest, the coin stays in place horizontally and falls into the beaker.",
    given="Coin on card over beaker; flicked quickly vs pulled slowly.",
    formula="J = \\int f dt = m\\Delta v \\implies \\Delta v = \\frac{\\mu_k mg \\Delta t}{m} = \\mu_k g \\Delta t",
    steps="1. When pulled slowly, static friction is sufficient to accelerate the coin with the card ($a_{\\text{card}} \\le \\mu_s g$).\n2. When snapped quickly, the card accelerates under a large force, slipping under the coin.\n3. The contact time $\\Delta t$ is minute, so the change in coin velocity $\\Delta v = \\mu_k g \\Delta t \\approx 0$.\n4. The coin remains in place due to inertia of rest and drops vertically under gravity into the glass.",
    tip="Impulse = $F \\Delta t$. A tiny $\\Delta t$ means negligible velocity transferred to the coin!",
    why_wrong="Option B is wrong; kinetic friction does not vanish to zero."
))

# Q045 - Hard
qs.append(make_lom_q(
    num=45,
    question="A massive iron anvil is placed on a person's chest. A second person strikes the anvil forcefully with a sledgehammer. The person lying down is not injured primarily because:",
    options={
        "A": "The large inertia of the anvil results in negligible acceleration, and it spreads the impact force over a large area and time",
        "B": "The anvil reflects the sledgehammer with zero transfer of energy",
        "C": "The hammer force is entirely absorbed by sound waves",
        "D": "The chest muscles generate an upward counter-force equal to the hammer force"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Inertia and its types",
    concept="Due to Newton's second law ($a = F/M$), a very large anvil mass $M$ results in an extraordinarily tiny acceleration under the hammer's impulse. Furthermore, the broad base distributes the weight over a large area, keeping pressure low.",
    given="Heavy anvil on chest struck by hammer.",
    formula="a_{\\text{anvil}} = \\frac{F_{\\text{hammer}}}{M_{\\text{anvil}}} \\ll a_{\\text{hammer}}",
    steps="1. The sledgehammer delivers an impulsive force $F$ over a very short duration.\n2. Because the anvil has a very large mass $M$, its acceleration $a = F/M$ is tiny.\n3. Most of the kinetic energy is dissipated in deformation of the hammer/anvil face and sound.\n4. The broad surface area of the anvil keeps the transmitted pressure on the chest safe and small.",
    tip="High mass $\\implies$ high inertia $\\implies$ tiny acceleration $a = F/M$! That is why the anvil protects the demonstrator.",
    why_wrong="Option B violates conservation of momentum and energy."
))

# Q046 - Hard
qs.append(make_lom_q(
    num=46,
    question="A ball of mass $m$ is suspended from the ceiling by a light vertical thread A. Another identical thread B is tied to the bottom of the ball. If a gradually increasing downward pull is applied to thread B, which thread breaks, and why?",
    options={
        "A": "Thread A breaks first because it supports the downward pull plus the weight of the ball",
        "B": "Thread B breaks first because of the ball's inertia",
        "C": "Both threads break simultaneously because tension is uniform everywhere",
        "D": "Neither thread breaks because the tension balances"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Inertia and its types",
    concept="For a slow, gradual pull, the system is in static equilibrium: $T_A = T_B + mg$. Since $T_A > T_B$ by an amount $mg$, thread A reaches its breaking threshold before thread B.",
    given="Gradual downward pull on lower thread B.",
    formula="T_A = T_B + mg > T_B",
    steps="1. In quasi-static equilibrium, thread A must support the downward pull $F$ in thread B plus the gravitational weight of the ball $mg$.\n2. Therefore, $T_A = F + mg$, whereas $T_B = F$.\n3. At every instant, tension in A is strictly greater than tension in B by $mg$.\n4. As $F$ increases gradually, $T_A$ exceeds the breaking tension first.",
    tip="Gradual pull $\\implies$ Upper thread A breaks ($T_A = F + mg$). Sudden jerk $\\implies$ Lower thread B breaks (inertia of mass $m$ resists instantaneous displacement)!",
    why_wrong="Option B describes what happens during a sudden jerk, not a gradual pull."
))

# Q047 - Hard
qs.append(make_lom_q(
    num=47,
    question="Two cubes of masses $m_1 = 1\\text{ kg}$ and $m_2 = 100\\text{ kg}$ are resting on a frictionless horizontal plane. An identical horizontal force $F = 10\\text{ N}$ is applied to each for a duration of $1\\text{ s}$. The ratio of their final kinetic energies $K_1 / K_2$ is:",
    options={
        "A": "100",
        "B": "1",
        "C": "0.01",
        "D": "10"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Inertia and its types",
    concept="The impulse $J = F \\Delta t$ delivered to both masses is identical, so both gain the same momentum $p$. Kinetic energy is related to momentum by $K = \\frac{p^2}{2m}$, which is inversely proportional to mass.",
    given="$F_1 = F_2 = 10\\text{ N}$, $\\Delta t = 1\\text{ s}$, $m_1 = 1\\text{ kg}$, $m_2 = 100\\text{ kg}$.",
    formula="J = F\\Delta t = p \\implies K = \\frac{p^2}{2m} \\propto \\frac{1}{m}",
    steps="1. Momentum gained by each: $p = F \\Delta t = 10 \\times 1 = 10\\text{ kg}\\cdot\\text{m/s}$.\n2. Kinetic energy of $m_1$: $K_1 = \\frac{p^2}{2m_1} = \\frac{100}{2 \\times 1} = 50\\text{ J}$.\n3. Kinetic energy of $m_2$: $K_2 = \\frac{p^2}{2m_2} = \\frac{100}{2 \\times 100} = 0.5\\text{ J}$.\n4. Ratio $K_1 / K_2 = \\frac{m_2}{m_1} = \\frac{100}{1} = 100$.",
    tip="Same force for same TIME $\\implies$ same momentum ($p_1 = p_2$) $\\implies K \\propto 1/m$! Same force over same DISTANCE $\\implies$ same work $\\implies K_1 = K_2$!",
    why_wrong="Option B ($1$) would occur if the force acted over the same distance, not the same time."
))

print("Topic 3 done: 16 questions.")
