import fs from 'fs';
import path from 'path';

// Helper map for physics formulas enrichment
const ENRICHMENTS: Record<string, any> = {
  // Motion in 1D & 2D
  "Distance and Displacement": {
    unit: "meter (m)",
    conditions: "Displacement depends only on initial and final positions; distance depends on actual path length.",
    meaning: "Displacement is the shortest vector distance between initial and final points; distance is total scalar path length.",
    symbols: "s = magnitude of displacement (m), Δx = position change = x_f - x_i (m).",
    whenToUse: "Use when distinguishing scalar path length from vector displacement or computing net shift in position.",
    calculationExample: {
      problem: "A particle moves 3 m North and then 4 m East. Find the total distance and net displacement magnitude.",
      given: "North displacement = 3 m, East displacement = 4 m.",
      stepByStep: [
        "Distance = scalar sum = 3 m + 4 m = 7 m.",
        "Displacement = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5 m."
      ],
      answer: "Distance = 7 m, Displacement = 5 m"
    }
  },
  "Average Velocity and Speed": {
    unit: "m/s",
    conditions: "Average velocity is vector displacement over total time; average speed is total distance over total time.",
    meaning: "Measures overall rate of position change or distance covered over a finite time interval.",
    symbols: "v_avg = average velocity (m/s), Δx = net displacement (m), Δt = time interval (s).",
    whenToUse: "Use for multi-stage journeys or motion over finite time intervals.",
    calculationExample: {
      problem: "A car travels the first half of a distance at 40 km/h and the second half at 60 km/h. Find average speed.",
      given: "v1 = 40 km/h, v2 = 60 km/h for equal distances d.",
      stepByStep: [
        "Total time t = d/v1 + d/v2 = d(1/40 + 1/60) = d(5/120) = d/24.",
        "Average speed = Total distance / Total time = 2d / (d/24) = 2 × 24 = 48 km/h."
      ],
      answer: "48 km/h"
    }
  },
  "First Kinematic Equation (Velocity-Time)": {
    unit: "m/s",
    conditions: "Valid strictly under CONSTANT acceleration (a = constant).",
    meaning: "Relates final velocity to initial velocity, uniform acceleration, and elapsed time.",
    symbols: "v = final velocity (m/s), u = initial velocity (m/s), a = uniform acceleration (m/s²), t = time (s).",
    whenToUse: "Use when acceleration is uniform and displacement s is NOT involved.",
    calculationExample: {
      problem: "A particle starting from rest accelerates uniformly at 3 m/s² for 4 seconds. Find its final velocity.",
      given: "u = 0, a = 3 m/s², t = 4 s.",
      stepByStep: [
        "Formula: v = u + a t",
        "v = 0 + (3 m/s²)(4 s) = 12 m/s."
      ],
      answer: "12 m/s"
    }
  },
  "Second Kinematic Equation (Displacement-Time)": {
    unit: "meter (m)",
    conditions: "Valid strictly under CONSTANT acceleration (a = constant).",
    meaning: "Calculates net displacement produced by initial velocity and uniform acceleration over time t.",
    symbols: "s = displacement (m), u = initial velocity (m/s), a = uniform acceleration (m/s²), t = time (s).",
    whenToUse: "Use when calculating displacement when initial velocity, acceleration, and time are known.",
    calculationExample: {
      problem: "A stone dropped from rest falls freely under gravity (g = 10 m/s²) for 3 seconds. Find the distance fallen.",
      given: "u = 0, g = 10 m/s², t = 3 s.",
      stepByStep: [
        "Formula: s = u t + 1/2 a t²",
        "s = 0 + 1/2 (10 m/s²)(3 s)² = 5 × 9 = 45 m."
      ],
      answer: "45 m"
    }
  },
  "Third Kinematic Equation (Velocity-Displacement)": {
    unit: "m²/s² (Velocity in m/s)",
    conditions: "Valid strictly under CONSTANT acceleration (a = constant). Time variable t is absent.",
    meaning: "Links initial velocity, final velocity, uniform acceleration, and total displacement directly.",
    symbols: "v = final velocity (m/s), u = initial velocity (m/s), a = acceleration (m/s²), s = displacement (m).",
    whenToUse: "Use when time t is unknown or not required in the problem statement.",
    calculationExample: {
      problem: "A bullet entering a wooden block at 100 m/s penetrates 0.1 m before stopping. Find its retardation.",
      given: "u = 100 m/s, v = 0, s = 0.1 m.",
      stepByStep: [
        "Formula: v² = u² + 2 a s",
        "0 = (100)² + 2 a (0.1) => 0 = 10000 + 0.2 a",
        "a = -10000 / 0.2 = -50,000 m/s²."
      ],
      answer: "Retardation = 50,000 m/s²"
    }
  },
  "Displacement in nth Second": {
    unit: "meter (m)",
    conditions: "Valid under constant acceleration for integer second interval n (from t = n-1 to t = n).",
    meaning: "Calculates the displacement covered exclusively during the single nth second of motion.",
    symbols: "s_n = displacement in nth second (m), u = initial velocity (m/s), a = uniform acceleration (m/s²), n = second number.",
    whenToUse: "Use when NEET problem asks specifically for displacement in the nth second.",
    calculationExample: {
      problem: "A body accelerates from rest at 2 m/s². Find displacement covered in the 5th second.",
      given: "u = 0, a = 2 m/s², n = 5.",
      stepByStep: [
        "Formula: s_n = u + a/2 (2n - 1)",
        "s_5 = 0 + (2/2) (2(5) - 1) = 1 × 9 = 9 m."
      ],
      answer: "9 m"
    }
  },

  // Work, Energy, Power
  "Work Done by Constant Force": {
    unit: "Joule (J) = N·m",
    conditions: "Force vector F and displacement vector s are constant throughout motion.",
    meaning: "Work represents the scalar dot product of force and displacement vectors.",
    symbols: "W = work (J), F = force magnitude (N), s = displacement magnitude (m), θ = angle between F and s.",
    whenToUse: "Use when calculating work done by a constant force acting at an angle θ.",
    calculationExample: {
      problem: "A force of 10 N pulls a box through 4 m at 60° to the horizontal. Calculate work done.",
      given: "F = 10 N, s = 4 m, θ = 60° (cos 60° = 0.5).",
      stepByStep: [
        "Formula: W = F s cos θ",
        "W = 10 × 4 × cos(60°) = 40 × 0.5 = 20 J."
      ],
      answer: "20 J"
    }
  },
  "Work in Rectangular Vector Components": {
    unit: "Joule (J)",
    conditions: "Force and displacement expressed in Cartesian unit vectors i, j, k.",
    meaning: "Sum of independent work components along orthogonal X, Y, Z axes.",
    symbols: "Fx, Fy, Fz = force components (N); Δx, Δy, Δz = displacement components (m).",
    whenToUse: "Use when force and displacement are given in vector i, j, k notation.",
    calculationExample: {
      problem: "Force F = (2i + 3j - k) N moves a body by s = (3i + 2j + 4k) m. Find work done.",
      given: "Fx=2, Fy=3, Fz=-1; Δx=3, Δy=2, Δz=4.",
      stepByStep: [
        "Formula: W = Fx Δx + Fy Δy + Fz Δz",
        "W = (2)(3) + (3)(2) + (-1)(4) = 6 + 6 - 4 = 8 J."
      ],
      answer: "8 J"
    }
  },
  "Work Done by Variable Force (1D Calculus)": {
    unit: "Joule (J)",
    conditions: "Force F(x) varies continuously as a function of position x.",
    meaning: "Definite integral of position-dependent force F(x), representing area under F-x graph.",
    symbols: "W = work (J), F(x) = position-dependent force (N), x_i = initial position (m), x_f = final position (m).",
    whenToUse: "Use when force is a function of position x, F = F(x).",
    calculationExample: {
      problem: "A force F(x) = 3 x² N acts on a particle from x = 0 to x = 2 m. Calculate work done.",
      given: "F(x) = 3 x², x_i = 0, x_f = 2 m.",
      stepByStep: [
        "Formula: W = ∫[0 to 2] 3 x² dx",
        "W = [x³][0 to 2] = 2³ - 0³ = 8 J."
      ],
      answer: "8 J"
    }
  },
  "Work Done by Spring Restoring Force": {
    unit: "Joule (J)",
    conditions: "Spring obeys Hooke's law F = -k x within elastic limit.",
    meaning: "Work done by internal restoring force of spring during extension/compression.",
    symbols: "W_spring = spring work (J), k = spring constant (N/m), x_i = initial displacement (m), x_f = final displacement (m).",
    whenToUse: "Use when calculating work done BY the spring on an attached mass.",
    calculationExample: {
      problem: "A spring of constant k = 100 N/m is stretched from x_i = 0 to x_f = 0.1 m. Find work done BY spring.",
      given: "k = 100 N/m, x_i = 0, x_f = 0.1 m.",
      stepByStep: [
        "Formula: W_spring = -1/2 k (x_f² - x_i²)",
        "W_spring = -1/2 (100) (0.1² - 0) = -50 (0.01) = -0.5 J."
      ],
      answer: "-0.5 J"
    }
  },
  "Work Done by External Agent on Spring": {
    unit: "Joule (J)",
    conditions: "External agent stretches or compresses spring quasi-statically (without kinetic energy change).",
    meaning: "Work input supplied by external force to deform spring, stored as potential energy.",
    symbols: "W_ext = external work (J), k = spring constant (N/m), x_i = initial stretch (m), x_f = final stretch (m).",
    whenToUse: "Use when calculating external agent work required to stretch or compress a spring.",
    calculationExample: {
      problem: "Find external work needed to stretch a spring (k = 200 N/m) from 0.1 m to 0.2 m.",
      given: "k = 200 N/m, x_i = 0.1 m, x_f = 0.2 m.",
      stepByStep: [
        "Formula: W_ext = +1/2 k (x_f² - x_i²)",
        "W_ext = 1/2 (200) (0.2² - 0.1²) = 100 (0.04 - 0.01) = 100 (0.03) = 3 J."
      ],
      answer: "3 J"
    }
  },
  "Translational Kinetic Energy": {
    unit: "Joule (J) = kg·m²/s²",
    conditions: "Non-relativistic speeds (v << c). Mass m is constant.",
    meaning: "Energy possessed by a body solely due to its linear translational motion.",
    symbols: "K = kinetic energy (J), m = mass (kg), v = speed (m/s).",
    whenToUse: "Use when calculating energy associated with linear motion or speed change.",
    calculationExample: {
      problem: "Calculate kinetic energy of a 2 kg body moving with a speed of 5 m/s.",
      given: "m = 2 kg, v = 5 m/s.",
      stepByStep: [
        "Formula: K = 1/2 m v²",
        "K = 1/2 (2 kg) (5 m/s)² = 1 × 25 = 25 J."
      ],
      answer: "25 J"
    }
  },
  "Momentum-Kinetic Energy Transformations": {
    unit: "K in Joules (J), p in kg·m/s",
    conditions: "Valid for single non-relativistic particle of constant mass m.",
    meaning: "Mathematical link converting linear momentum p to kinetic energy K and vice versa.",
    symbols: "K = kinetic energy (J), p = linear momentum magnitude (kg·m/s), m = mass (kg).",
    whenToUse: "Use when comparing kinetic energy and momentum of different masses.",
    calculationExample: {
      problem: "If linear momentum of a 4 kg mass is 20 kg·m/s, find its kinetic energy.",
      given: "m = 4 kg, p = 20 kg·m/s.",
      stepByStep: [
        "Formula: K = p² / (2m)",
        "K = (20)² / (2 × 4) = 400 / 8 = 50 J."
      ],
      answer: "50 J"
    }
  },
  "Work-Energy Theorem Master Equation": {
    unit: "Joule (J)",
    conditions: "Applies to all reference frames (including non-inertial frames if pseudo-forces included).",
    meaning: "Net work done by ALL forces equals change in kinetic energy of the system.",
    symbols: "W_net = net work done by all forces (J), ΔK = K_final - K_initial = change in kinetic energy (J).",
    whenToUse: "Use as primary scalar equation linking forces, displacement, and speed changes.",
    calculationExample: {
      problem: "A 1000 kg car accelerates from 10 m/s to 20 m/s. Find net work done on the car.",
      given: "m = 1000 kg, u = 10 m/s, v = 20 m/s.",
      stepByStep: [
        "Formula: W_net = ΔK = 1/2 m (v² - u²)",
        "W_net = 1/2 (1000) (20² - 10²) = 500 (400 - 100) = 500 × 300 = 150,000 J = 150 kJ."
      ],
      answer: "150 kJ"
    }
  },
  "Vehicle Stopping Distance under Retarding Force": {
    unit: "meter (m)",
    conditions: "Uniform braking retarding force f = μ_k m g.",
    meaning: "Minimum distance required to bring a moving vehicle to a complete stop.",
    symbols: "s = stopping distance (m), v = initial speed (m/s), f = retarding force (N), μ_k = friction coefficient.",
    whenToUse: "Use when calculating stopping distance or braking distance under friction.",
    calculationExample: {
      problem: "A car traveling at 20 m/s skids on a road with coefficient of friction μ = 0.5. Find stopping distance (g = 10 m/s²).",
      given: "v = 20 m/s, μ = 0.5, g = 10 m/s².",
      stepByStep: [
        "Formula: s = v² / (2 μ g)",
        "s = (20)² / (2 × 0.5 × 10) = 400 / 10 = 40 m."
      ],
      answer: "40 m"
    }
  },

  // Rotational Motion
  "Vector Torque Formula": {
    unit: "N·m = kg·m²/s²",
    conditions: "Position vector r measured from specified origin or rotation axis.",
    meaning: "Rotational analogue of force, representing turning effect about a point or axis.",
    symbols: "τ = torque vector (N·m), r = position vector from axis (m), F = applied force vector (N), θ = angle between r and F.",
    whenToUse: "Use when calculating rotational turning effect produced by a force about an axis.",
    calculationExample: {
      problem: "A force F = 50 N is applied perpendicularly at the end of a 0.4 m long door wrench. Find torque about pivot.",
      given: "F = 50 N, r = 0.4 m, θ = 90° (sin 90° = 1).",
      stepByStep: [
        "Formula: τ = r F sin θ",
        "τ = 0.4 m × 50 N × 1 = 20 N·m."
      ],
      answer: "20 N·m"
    }
  },
  "Angular Momentum of Particle": {
    unit: "kg·m²/s = J·s",
    conditions: "Measured with respect to a fixed origin or axis of rotation.",
    meaning: "Rotational analogue of linear momentum for a moving point mass.",
    symbols: "L = angular momentum (kg·m²/s), r = position vector (m), p = linear momentum (kg·m/s), m = mass (kg), v = speed (m/s).",
    whenToUse: "Use when finding moment of momentum of a moving particle relative to a point.",
    calculationExample: {
      problem: "A 2 kg mass moves at 10 m/s along a straight line at a perpendicular distance of 3 m from origin. Find angular momentum.",
      given: "m = 2 kg, v = 10 m/s, r_perp = 3 m.",
      stepByStep: [
        "Formula: L = m v r_perp",
        "L = (2 kg) × (10 m/s) × (3 m) = 60 kg·m²/s."
      ],
      answer: "60 kg·m²/s"
    }
  },
  "Rigid Body Angular Momentum": {
    unit: "kg·m²/s",
    conditions: "Rigid body rotating about a fixed symmetry axis with moment of inertia I.",
    meaning: "Total rotational momentum of a distributed rigid body rotating at angular speed ω.",
    symbols: "L = angular momentum (kg·m²/s), I = moment of inertia (kg·m²), ω = angular speed (rad/s).",
    whenToUse: "Use when calculating angular momentum of rotating rigid bodies (flywheel, disc, sphere).",
    calculationExample: {
      problem: "A disc of moment of inertia I = 0.5 kg·m² rotates at ω = 20 rad/s. Find its angular momentum.",
      given: "I = 0.5 kg·m², ω = 20 rad/s.",
      stepByStep: [
        "Formula: L = I ω",
        "L = 0.5 kg·m² × 20 rad/s = 10 kg·m²/s."
      ],
      answer: "10 kg·m²/s"
    }
  },
  "Torque-Angular Acceleration Relation": {
    unit: "τ in N·m, α in rad/s²",
    conditions: "Rotational motion about a fixed axis with constant or variable moment of inertia I.",
    meaning: "Rotational dynamic law equivalent to Newton's Second Law F = m a.",
    symbols: "τ_net = net external torque (N·m), I = moment of inertia (kg·m²), α = angular acceleration (rad/s²).",
    whenToUse: "Use when linking net external torque to angular acceleration of a body.",
    calculationExample: {
      problem: "A torque of 12 N·m acts on a wheel with moment of inertia 3 kg·m². Find angular acceleration produced.",
      given: "τ = 12 N·m, I = 3 kg·m².",
      stepByStep: [
        "Formula: τ = I α => α = τ / I",
        "α = 12 / 3 = 4 rad/s²."
      ],
      answer: "4 rad/s²"
    }
  },
  "Conservation of Angular Momentum": {
    unit: "kg·m²/s",
    conditions: "Net external torque acting on system must be ZERO (τ_ext = 0).",
    meaning: "Total angular momentum of an isolated system remains strictly constant over time.",
    symbols: "I1, I2 = initial and final moments of inertia (kg·m²); ω1, ω2 = initial and final angular speeds (rad/s).",
    whenToUse: "Use when internal shape/mass distribution of a rotating body changes without external torque.",
    calculationExample: {
      problem: "A skater rotating at 4 rad/s with I1 = 8 kg·m² pulls arms in, reducing moment of inertia to I2 = 2 kg·m². Find new angular speed ω2.",
      given: "I1 = 8 kg·m², ω1 = 4 rad/s, I2 = 2 kg·m².",
      stepByStep: [
        "Formula: I1 ω1 = I2 ω2",
        "8 × 4 = 2 × ω2 => 32 = 2 ω2 => ω2 = 16 rad/s."
      ],
      answer: "16 rad/s"
    }
  }
};

console.log('Enriching physics topic formula fields...');
