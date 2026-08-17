// 16 Original, Comprehensive NEET-Level Step-by-Step Solved Numericals

export interface SolvedNumerical {
  id: string;
  topic: string;
  question: string;
  given: string[];
  required: string;
  concept: string;
  formula: string;
  signConvention: string;
  substitution: string;
  calculation: string;
  finalAnswer: string;
  neetShortcut: string;
}

export const rayOpticsNumericals: SolvedNumerical[] = [
  {
    id: "num-1",
    topic: "Mirror Formula (Concave Mirror Real Image)",
    question: "An object of height 4.0 cm is placed at a distance of 30.0 cm in front of a concave mirror of focal length 20.0 cm. Determine the position, nature, and height of the image formed.",
    given: ["Object height h_o = +4.0 cm", "Object distance u = -30.0 cm", "Focal length f = -20.0 cm (Concave mirror)"],
    required: "Image distance (v), image height (h_i), and image nature",
    concept: "Spherical mirror formula relating u, v, and f, followed by linear magnification m = -v/u = h_i/h_o.",
    formula: "1/f = 1/v + 1/u   ⇒   v = (u · f) / (u - f);   m = h_i / h_o = -v / u",
    signConvention: "Pole P is origin. Real object on left: u = -30 cm. Concave mirror focus on left: f = -20 cm.",
    substitution: "v = [ (-30) × (-20) ] / [ (-30) - (-20) ] = (+600) / (-30 + 20) = 600 / (-10)",
    calculation: "v = -60.0 cm. Magnification m = -v / u = -(-60) / (-30) = -2.0. Image height h_i = m × h_o = -2.0 × 4.0 cm = -8.0 cm.",
    finalAnswer: "Image is formed at 60.0 cm in front of the mirror (v = -60.0 cm). The image is Real, Inverted, and Magnified to a height of 8.0 cm.",
    neetShortcut: "Since u is between C (2f = 40 cm) and F (20 cm), the image must form beyond C (|v| > 40 cm) and be inverted with |m| > 1. This quickly eliminates wrong options in MCQs."
  },
  {
    id: "num-2",
    topic: "Mirror Formula (Concave Mirror Virtual Image)",
    question: "A dental inspection concave mirror has a radius of curvature of 30.0 cm. To examine a tooth cavity, it is placed 10.0 cm away from the tooth. Calculate the position and magnification of the image.",
    given: ["Radius of curvature R = -30.0 cm ⇒ f = R/2 = -15.0 cm", "Object distance u = -10.0 cm (Tooth inside focal length)"],
    required: "Image distance (v) and magnification (m)",
    concept: "When an object is placed inside the principal focus of a concave mirror (u < f), a virtual, erect, and magnified image is produced behind the mirror.",
    formula: "1/v = 1/f - 1/u;   m = -v / u",
    signConvention: "f = -15.0 cm, u = -10.0 cm.",
    substitution: "1/v = 1/(-15) - 1/(-10) = -1/15 + 1/10 = (-2 + 3) / 30 = +1/30",
    calculation: "v = +30.0 cm. Linear magnification m = -v / u = -(+30) / (-10) = +3.0.",
    finalAnswer: "Image distance v = +30.0 cm (formed 30 cm behind the mirror). Magnification m = +3.0 (Virtual, Erect, 3 times enlarged).",
    neetShortcut: "Use direct formula m = f / (f - u) = (-15) / [ -15 - (-10) ] = -15 / -5 = +3.0 in 5 seconds!"
  },
  {
    id: "num-3",
    topic: "Convex Mirror (Automobile Rear-View)",
    question: "A convex mirror used as a rear-view mirror on a truck has a radius of curvature of 2.0 m. If a car is following the truck at a distance of 5.0 m, locate the position and size of the car's image.",
    given: ["Radius of curvature R = +2.0 m ⇒ f = +1.0 m", "Object distance u = -5.0 m"],
    required: "Image distance (v) and linear magnification (m)",
    concept: "A convex mirror always forms a virtual, erect, and diminished image behind the mirror (0 < v < f).",
    formula: "1/f = 1/v + 1/u   ⇒   1/v = 1/f - 1/u;   m = -v / u",
    signConvention: "f = +1.0 m, u = -5.0 m.",
    substitution: "1/v = 1/(+1) - 1/(-5) = 1 + 1/5 = 6/5",
    calculation: "v = +5/6 m = +0.833 m (or +83.3 cm). Magnification m = -v / u = -(+5/6) / (-5) = +1/6 = +0.167.",
    finalAnswer: "Image is formed at 0.833 m (83.3 cm) behind the mirror. It is Virtual, Erect, and Diminished to 1/6th of the car's original size.",
    neetShortcut: "For a convex mirror, v is always positive and strictly less than f (0.833 m < 1.0 m). If any MCQ option has v < 0 or v > f, eliminate immediately."
  },
  {
    id: "num-4",
    topic: "Snell's Law & Refraction Across Multiple Media",
    question: "A ray of light traveling in water (n₁ = 4/3) strikes a flat glass block (n₂ = 1.50) submerged in the water at an angle of incidence of 30°. Calculate the angle of refraction inside the glass.",
    given: ["Refractive index of water n₁ = 4/3 ≈ 1.333", "Refractive index of glass n₂ = 1.50 = 3/2", "Angle of incidence i = 30° ⇒ sin 30° = 0.5"],
    required: "Angle of refraction r in the glass block",
    concept: "Snell's Law at plane interface: n₁ sin i = n₂ sin r.",
    formula: "sin r = (n₁ / n₂) · sin i",
    signConvention: "All angles measured from the interface normal.",
    substitution: "sin r = [ (4/3) / (3/2) ] × sin 30° = [ (4/3) × (2/3) ] × (1/2) = (8/9) × (1/2) = 4/9 ≈ 0.4444",
    calculation: "r = sin⁻¹(4/9) = sin⁻¹(0.444) ≈ 26.4°.",
    finalAnswer: "The angle of refraction inside the glass block is r = sin⁻¹(4/9) ≈ 26.4° (bent toward normal since glass is denser than water).",
    neetShortcut: "Relative index w_μ_g = μ_g / μ_w = (3/2) / (4/3) = 9/8. Since light enters a denser medium (9/8 > 1), r MUST be less than i = 30°."
  },
  {
    id: "num-5",
    topic: "Refractive Index, Invariant Frequency & Wavelength",
    question: "Monochromatic light of wavelength 600 nm in vacuum enters a glass medium of refractive index 1.50. Calculate: (a) the speed of light in glass, (b) the wavelength in glass, and (c) the frequency of light in glass. (c = 3.0 × 10⁸ m/s).",
    given: ["Wavelength in vacuum λ₀ = 600 nm = 6.0 × 10⁻⁷ m", "Refractive index of glass n = 1.50", "Speed of light in vacuum c = 3.0 × 10⁸ m/s"],
    required: "(a) Speed in glass v, (b) Wavelength in glass λ, (c) Frequency in glass ν",
    concept: "Frequency ν remains strictly constant upon refraction. Speed v = c/n and wavelength λ = λ₀/n.",
    formula: "(a) v = c / n;   (b) λ = λ₀ / n;   (c) ν = c / λ₀ = v / λ",
    signConvention: "Scalar physical properties.",
    substitution: "(a) v = (3.0 × 10⁸) / 1.50;   (b) λ = 600 nm / 1.50;   (c) ν = (3.0 × 10⁸) / (6.0 × 10⁻⁷)",
    calculation: "(a) v = 2.0 × 10⁸ m/s. (b) λ = 400 nm = 4.0 × 10⁻⁷ m. (c) ν = 5.0 × 10¹⁴ Hz.",
    finalAnswer: "Speed in glass = 2.0 × 10⁸ m/s; Wavelength in glass = 400 nm; Frequency = 5.0 × 10¹⁴ Hz (strictly unchanged).",
    neetShortcut: "NEET Trap: When asked 'what is the frequency of light in glass?', NEVER divide the frequency by n. Frequency depends only on the source!"
  },
  {
    id: "num-6",
    topic: "Refraction Through Glass Slab (Lateral Shift)",
    question: "A ray of light is incident at an angle of 45° on a rectangular glass plate of thickness 6.0 cm and refractive index √2 ≈ 1.414. Calculate the lateral displacement suffered by the ray upon emerging from the slab.",
    given: ["Angle of incidence i = 45°", "Slab thickness t = 6.0 cm = 0.06 m", "Refractive index of glass n = √2"],
    required: "Lateral displacement d",
    concept: "Snell's law at first surface to find r, followed by lateral displacement formula d = t · sin(i - r) / cos r.",
    formula: "sin i / sin r = n   ⇒   sin r = sin i / n;   d = [ t · sin(i - r) ] / cos r",
    signConvention: "All angles positive.",
    substitution: "sin r = sin 45° / √2 = (1/√2) / √2 = 1/2 ⇒ r = 30°. Then: (i - r) = 45° - 30° = 15°. cos r = cos 30° = √3/2. sin 15° = sin(45° - 30°) = (√6 - √2)/4 ≈ 0.2588.",
    calculation: "d = [ 6.0 × sin 15° ] / cos 30° = [ 6.0 × 0.2588 ] / (0.866) = 1.5528 / 0.866 = 1.793 cm ≈ 1.79 cm.",
    finalAnswer: "Lateral displacement d = 1.79 cm (or (3√2 - √6) cm).",
    neetShortcut: "Direct algebraic simplification: d = t · [ sin i - (sin i · cos i) / √(n² - sin²i) ]. For standard angles (45°, n=√2), d = 6 · sin 15° / cos 30° = 2(√3 - 1) cm ≈ 1.79 cm."
  },
  {
    id: "num-7",
    topic: "Apparent Depth & Multi-Layer Shift",
    question: "A glass beaker is filled with water (n₁ = 4/3) up to a depth of 12.0 cm, and an immiscible oil layer (n₂ = 1.50) of depth 9.0 cm is poured on top of it. Looking normally from above, calculate the apparent depth of a coin placed at the bottom of the beaker.",
    given: ["Water depth t₁ = 12.0 cm, n₁ = 4/3", "Oil depth t₂ = 9.0 cm, n₂ = 1.50 = 3/2"],
    required: "Total apparent depth (h'_total) and total upward shift (Δh)",
    concept: "For near-normal viewing across multiple liquid layers, total apparent depth is the sum of apparent depths of individual layers: h' = Σ(t_i / n_i).",
    formula: "h'_total = t₁ / n₁ + t₂ / n₂;   Δh = (t₁ + t₂) - h'_total",
    signConvention: "Depths measured downward from the top surface.",
    substitution: "h'_total = 12.0 / (4/3) + 9.0 / (3/2) = (12 × 3/4) + (9 × 2/3)",
    calculation: "h'_total = 9.0 cm + 6.0 cm = 15.0 cm. Real total depth = 12.0 + 9.0 = 21.0 cm. Total upward shift Δh = 21.0 - 15.0 = 6.0 cm.",
    finalAnswer: "The coin appears to be at an apparent depth of 15.0 cm below the top surface (raised upward by 6.0 cm).",
    neetShortcut: "Individual shifts add up: Δh = t₁(1 - 1/n₁) + t₂(1 - 1/n₂) = 12(1 - 3/4) + 9(1 - 2/3) = 12(1/4) + 9(1/3) = 3 + 3 = 6.0 cm."
  },
  {
    id: "num-8",
    topic: "Critical Angle & Total Internal Reflection (TIR)",
    question: "A point source of light is placed at the bottom of a water tank of depth 80.0 cm (refractive index of water n = 4/3). Find the minimum radius of the circular illuminated disk at the water surface through which light can emerge into air.",
    given: ["Depth of point source h = 80.0 cm = 0.80 m", "Refractive index of water n = 4/3"],
    required: "Radius of circular emergence disk (R)",
    concept: "Light rays striking the surface at angle i > C undergo Total Internal Reflection. Only rays within the cone of half-angle C emerge into air, forming an illuminated circle of radius R = h · tan C.",
    formula: "sin C = 1 / n   ⇒   tan C = sin C / cos C = (1/n) / √(1 - 1/n²) = 1 / √(n² - 1);   R = h / √(n² - 1)",
    signConvention: "All geometry positive.",
    substitution: "R = 80.0 / √[ (4/3)² - 1 ] = 80.0 / √[ 16/9 - 1 ] = 80.0 / √(7/9) = (80.0 × 3) / √7",
    calculation: "R = 240 / 2.6457 ≈ 90.71 cm ≈ 0.91 m. Area of disk A = π R² = π h² / (n² - 1) = π (0.80)² / (7/9) = 2.58 m².",
    finalAnswer: "Radius of the circular illuminated patch at the water surface is R = 240/√7 cm ≈ 90.7 cm.",
    neetShortcut: "Standard NEET Formula to memorize: R = h / √(n² - 1). For water (n=4/3), R = 3h / √7. For glass (n=1.5), R = h / √1.25 = 2h / √5."
  },
  {
    id: "num-9",
    topic: "Refraction at Spherical Curved Glass Surface",
    question: "A solid glass sphere of radius 10.0 cm and refractive index 1.50 has a small air bubble trapped 4.0 cm inside the front surface along a diameter. When viewed normally through the front surface from air, where does the bubble appear to be located?",
    given: ["Radius of curvature of front surface R = -10.0 cm (Center C lies in the glass behind the surface)", "Object distance u = -4.0 cm", "Refractive index of medium containing object (glass) n₁ = 1.50", "Refractive index of outer viewing medium (air) n₂ = 1.00"],
    required: "Apparent image distance (v)",
    concept: "Refraction at single curved spherical interface: n₂/v - n₁/u = (n₂ - n₁)/R.",
    formula: "n₂ / v - n₁ / u = (n₂ - n₁) / R",
    signConvention: "Light travels from glass (inside) to air (outside). Front pole P is origin. Real object is at u = -4.0 cm. Curvature center is at R = -10.0 cm.",
    substitution: "1.00 / v - 1.50 / (-4.0) = (1.00 - 1.50) / (-10.0) ⇒ 1/v + 1.5/4 = -0.5 / -10 = +0.05",
    calculation: "1/v + 0.375 = 0.05 ⇒ 1/v = 0.05 - 0.375 = -0.325 = -13/40. v = -40 / 13 ≈ -3.077 cm.",
    finalAnswer: "The air bubble appears to be at a distance of 3.08 cm behind the front curved surface (v = -3.08 cm, virtual image).",
    neetShortcut: "Be extremely vigilant with n₁ and n₂! n₁ is ALWAYS the medium where the incident light starts (here, glass n₁ = 1.5)."
  },
  {
    id: "num-10",
    topic: "Lens Formula & Linear Magnification",
    question: "A convex lens of focal length 15.0 cm forms a real image of an object on a screen placed 45.0 cm away from the lens. Find: (a) the position of the object, (b) the linear magnification, and (c) the image nature.",
    given: ["Focal length f = +15.0 cm (Convex lens)", "Image distance v = +45.0 cm (Real image formed on screen)"],
    required: "Object distance (u), magnification (m), and image characteristics",
    concept: "Thin lens equation 1/f = 1/v - 1/u, followed by lens magnification m = +v/u.",
    formula: "1/u = 1/v - 1/f   ⇒   u = (v · f) / (f - v);   m = +v / u",
    signConvention: "f = +15.0 cm, v = +45.0 cm.",
    substitution: "1/u = 1/(+45) - 1/(+15) = (1 - 3) / 45 = -2 / 45",
    calculation: "u = -45/2 = -22.5 cm. Magnification m = +v / u = (+45.0) / (-22.5) = -2.0.",
    finalAnswer: "Object is placed at u = -22.5 cm (22.5 cm in front of the lens). Magnification m = -2.0 (Real, Inverted, 2 times magnified).",
    neetShortcut: "Since object is between F (15 cm) and 2F (30 cm), image must form beyond 2F (v > 30 cm) and be enlarged (|m| > 1). Exact match!"
  },
  {
    id: "num-11",
    topic: "Concave Lens (Virtual Diminished Image)",
    question: "An object of height 5.0 cm is placed 20.0 cm in front of a concave lens of focal length 20.0 cm. Calculate the image distance, height of the image, and state its nature.",
    given: ["Object height h_o = +5.0 cm", "Object distance u = -20.0 cm", "Focal length f = -20.0 cm (Concave lens)"],
    required: "Image distance (v), image height (h_i), and nature",
    concept: "A concave lens diverges rays, forming a virtual, erect, and diminished image on the same side as the object.",
    formula: "1/v = 1/f + 1/u   ⇒   v = (u · f) / (u + f);   m = h_i / h_o = +v / u",
    signConvention: "f = -20.0 cm, u = -20.0 cm.",
    substitution: "v = [ (-20) × (-20) ] / [ (-20) + (-20) ] = (+400) / (-40) = -10.0 cm",
    calculation: "v = -10.0 cm. Magnification m = +v / u = (-10.0) / (-20.0) = +0.5. Image height h_i = m × h_o = +0.5 × 5.0 cm = +2.5 cm.",
    finalAnswer: "Image distance v = -10.0 cm (10.0 cm in front of lens on the same side). Height = +2.5 cm (Virtual, Erect, Half the size of object).",
    neetShortcut: "When u = f for a concave lens, image is ALWAYS formed exactly at v = -f/2 with magnification m = +0.5!"
  },
  {
    id: "num-12",
    topic: "Lens Maker's Formula in Air and Liquid",
    question: "An equibiconvex lens made of crown glass (μ_g = 1.50) has a focal length of 20.0 cm in air. Calculate its new focal length when completely immersed in water (μ_w = 4/3).",
    given: ["Focal length in air f_air = +20.0 cm", "Glass index μ_g = 1.50 = 3/2", "Water index μ_w = 4/3"],
    required: "Focal length in water (f_water)",
    concept: "Lens Maker's Formula: 1/f = (μ_lens/μ_medium - 1)(1/R₁ - 1/R₂). Ratio of focal lengths in liquid and air.",
    formula: "f_liquid / f_air = [ (μ_g - 1) ] / [ (μ_g / μ_w) - 1 ]",
    signConvention: "Both f_air and f_water remain positive.",
    substitution: "f_water / 20.0 = [ (1.5 - 1) ] / [ (1.5 / (4/3)) - 1 ] = [ 0.5 ] / [ (9/8) - 1 ] = [ 1/2 ] / [ 1/8 ] = (1/2) × 8 = 4",
    calculation: "f_water = 4 × f_air = 4 × 20.0 cm = +80.0 cm.",
    finalAnswer: "The focal length in water becomes +80.0 cm (quadrupled in water, remaining converging).",
    neetShortcut: "GOLDEN NEET RESULT: For standard glass (μ=1.5) in water (μ=4/3), f_water is ALWAYS exactly 4 × f_air. If f_air = 20 cm, instantly write 80 cm!"
  },
  {
    id: "num-13",
    topic: "Combination of Thin Lenses & Power in Dioptres",
    question: "Two thin lenses of focal lengths +25.0 cm and -50.0 cm are placed in coaxial contact with each other. Calculate: (a) the power of each lens, (b) the total power of the combination, and (c) the equivalent focal length.",
    given: ["f₁ = +25.0 cm = +0.25 m (Convex lens)", "f₂ = -50.0 cm = -0.50 m (Concave lens)"],
    required: "P₁, P₂, P_total, and equivalent focal length F",
    concept: "Lens power P = 1/f(m). For thin lenses in contact, powers add algebraically: P = P₁ + P₂, and 1/F = 1/f₁ + 1/f₂.",
    formula: "P₁ = 100 / f₁(cm);   P₂ = 100 / f₂(cm);   P_total = P₁ + P₂;   F = 100 / P_total",
    signConvention: "Convex lens has P > 0; Concave lens has P < 0.",
    substitution: "P₁ = +100 / 25 = +4.0 D. P₂ = 100 / (-50) = -2.0 D. P_total = +4.0 D + (-2.0 D)",
    calculation: "P_total = +2.0 D. Equivalent focal length F = 100 / (+2.0) = +50.0 cm = +0.50 m.",
    finalAnswer: "P₁ = +4.0 D, P₂ = -2.0 D. Total Power P_total = +2.0 D. Equivalent Focal Length F = +50.0 cm (Converging combination).",
    neetShortcut: "Net power is positive (+2.0 D), so the combination behaves as an equivalent convex lens of focal length 50 cm."
  },
  {
    id: "num-14",
    topic: "Prism Minimum Deviation & Refractive Index",
    question: "An equilateral glass prism (A = 60°) produces an angle of minimum deviation of 30° for a beam of monochromatic light. Calculate the refractive index of the prism material.",
    given: ["Angle of prism A = 60°", "Angle of minimum deviation δ_m = 30°"],
    required: "Refractive index of prism material (μ)",
    concept: "Prism formula at minimum deviation condition: μ = sin[(A + δ_m)/2] / sin(A/2).",
    formula: "μ = sin [ (A + δ_m) / 2 ] / sin (A / 2)",
    signConvention: "All angles positive.",
    substitution: "μ = sin [ (60° + 30°) / 2 ] / sin (60° / 2) = sin(45°) / sin(30°)",
    calculation: "sin 45° = 1/√2 ≈ 0.7071. sin 30° = 1/2 = 0.5. μ = (1/√2) / (1/2) = 2 / √2 = √2 ≈ 1.414.",
    finalAnswer: "Refractive index of the prism material is μ = √2 ≈ 1.414.",
    neetShortcut: "Angle of incidence at minimum deviation i = (A + δ_m)/2 = 45°. Angle of refraction r = A/2 = 30°. Then μ = sin 45° / sin 30° = √2."
  },
  {
    id: "num-15",
    topic: "Simple Microscope (Near Point & Relaxed Eye)",
    question: "A student with a normal near point (D = 25 cm) uses a simple magnifying glass of focal length 5.0 cm. Calculate the magnifying power when the image is formed: (a) at the least distance of distinct vision (D = 25 cm), and (b) at infinity (relaxed eye).",
    given: ["Least distance of distinct vision D = 25.0 cm", "Focal length of magnifying lens f = 5.0 cm"],
    required: "(a) Magnification at near point M_near, (b) Magnification at infinity M_inf",
    concept: "Simple microscope magnifying power for strained eye (v = -D) vs relaxed eye (v = -∞).",
    formula: "(a) M_near = 1 + D / f;   (b) M_inf = D / f",
    signConvention: "Magnifying power is a positive dimensionless angular ratio.",
    substitution: "(a) M_near = 1 + 25.0 / 5.0 = 1 + 5.0;   (b) M_inf = 25.0 / 5.0",
    calculation: "(a) M_near = 6.0X (Maximum magnification). (b) M_inf = 5.0X (Normal adjustment).",
    finalAnswer: "(a) Magnifying power at near point = 6X; (b) Magnifying power at infinity = 5X.",
    neetShortcut: "Notice: M_near is ALWAYS strictly greater than M_inf by exactly 1: M_near = M_inf + 1."
  },
  {
    id: "num-16",
    topic: "Astronomical Telescope in Normal Adjustment",
    question: "An astronomical refracting telescope has an objective lens of focal length 100 cm and an eyepiece of focal length 5.0 cm. For normal adjustment (final image at infinity), calculate: (a) the magnifying power, (b) the length of the telescope tube, and (c) if this telescope is used to view the Moon (subtending angle 0.5° at the objective), find the angular size of the image seen through the eyepiece.",
    given: ["Focal length of objective f_o = 100.0 cm = 1.0 m", "Focal length of eyepiece f_e = 5.0 cm = 0.05 m", "Angular size of Moon α = 0.5°"],
    required: "(a) Magnification M, (b) Tube length L, (c) Visual angle of image β",
    concept: "Normal adjustment astronomical telescope: M = f_o / f_e, L = f_o + f_e, and M = β / α.",
    formula: "(a) M = f_o / f_e;   (b) L = f_o + f_e;   (c) β = M × α",
    signConvention: "Scalar magnitudes in normal adjustment.",
    substitution: "(a) M = 100.0 / 5.0 = 20.0;   (b) L = 100.0 + 5.0 = 105.0 cm;   (c) β = 20.0 × 0.5°",
    calculation: "(a) M = 20X. (b) Tube length L = 105.0 cm (1.05 m). (c) Angular size β = 10.0°.",
    finalAnswer: "Magnifying power M = 20X; Tube length L = 105.0 cm; Visual angle subtended by the image β = 10.0°.",
    neetShortcut: "In normal adjustment, remember the double check: L = f_o + f_e and M = f_o / f_e. If L = 105 cm and M = 20, f_o = 100 cm, f_e = 5 cm."
  }
];
