import { DetailedTopicContent } from '../../types/neet';

export const bioEndocrineGlandsHormonesDetails: DetailedTopicContent = {
  topicId: "bio-endocrine-glands-hormones",
  topicName: "Endocrine Glands and Hormones",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Chemical Coordination and Integration",

  whatIsThisTopic: "An exhaustive NCERT-aligned guide to human endocrine glands (Hypothalamus, Pituitary, Pineal, Thyroid, Parathyroid, Thymus, Adrenal, Pancreas, Gonads) and non-endocrine tissue hormones (Heart, Kidney, GI tract), detailing their secretor functions, target tissue responses, physiological feedback mechanisms, and associated clinical disorders.",

  basicIdea: [
    "Endocrine glands are ductless glands that secrete hormones directly into the bloodstream. Modern NCERT definition defines hormones as non-nutrient chemicals that act as intercellular messengers and are produced in trace amounts.",
    "The Hypothalamus forms the basal part of diencephalon and contains neurosecretory nuclei that synthesize releasing and inhibiting hormones to regulate anterior pituitary function, while directly producing Oxytocin and Vasopressin (ADH) stored in neurohypophysis.",
    "Pituitary Gland is situated in the sella turcica and divided into Adenohypophysis (GH, PRL, TSH, ACTH, LH, FSH, MSH) and Neurohypophysis (Oxytocin, ADH). It serves as the master gland under hypothalamic control.",
    "Calcium Homeostasis is maintained antagonistically by Parathyroid Hormone (PTH - hypercalcemic, increases blood Ca²⁺) and Thyrocalcitonin (TCT - hypocalcemic, lowers blood Ca²⁺).",
    "Glucose Homeostasis is regulated antagonistically by Insulin (hypoglycemic, secreted by pancreatic β-cells) and Glucagon (hyperglycemic, secreted by pancreatic α-cells).",
    "Adrenal gland consists of Cortex (producing Aldosterone, Cortisol, Androgenic steroids) and Medulla (producing Epinephrine and Norepinephrine for emergency 3F responses).",
    "Hormones are also secreted by non-endocrine organs: Heart (ANF lowers BP), Kidney (Erythropoietin stimulates RBC formation), and GI tract (Gastrin, Secretin, CCK, GIP)."
  ],

  importantTerms: [
    {
      term: "Hormone (Modern NCERT Definition)",
      definition: "Non-nutrient chemical messengers produced in trace amounts that act as intercellular signaling molecules transported via blood to target organs.",
      neetNote: "NCERT contrasts classical definition (ductless gland secretions) with modern definition covering non-glandular intercellular messengers."
    },
    {
      term: "Sella Turcica",
      definition: "A saddle-shaped depression in the sphenoid bone of the skull that lodges and protects the pituitary gland.",
      neetNote: "Direct NCERT anatomical question frequently asked in NEET."
    },
    {
      term: "Neurohypophysis (Pars Nervosa)",
      definition: "The posterior lobe of the pituitary gland that stores and releases Oxytocin and Vasopressin synthesized by hypothalamic neurosecretory nuclei.",
      neetNote: "Neurohypophysis does NOT synthesize hormones; it only stores and releases hypothalamic neurohormones."
    },
    {
      term: "Acromegaly",
      definition: "A severe clinical disorder caused by hypersecretion of Growth Hormone (GH) in adults, characterized by dramatic disfigurement of facial bones and hands.",
      neetNote: "Distinguish from Gigantism (GH hypersecretion in childhood prior to epiphyseal plate closure)."
    },
    {
      term: "Diabetes Insipidus",
      definition: "A metabolic condition caused by hyposecretion of Vasopressin (ADH) from posterior pituitary, leading to excessive excretion of dilute urine (diuresis) and intense thirst without glycosuria.",
      neetNote: "Unlike Diabetes Mellitus, there is NO glucose or ketone body loss in urine in Diabetes Insipidus."
    },
    {
      term: "Cretinism",
      definition: "Congenital hypothyroidism during pregnancy causing severe stunted physical growth, mental retardation, low IQ, deaf-mutism, and cutaneous abnormalities in infants.",
      neetNote: "High-yield NCERT disorder statement. Caused by maternal thyroid hormone deficiency."
    },
    {
      term: "Exophthalmic Goitre (Grave's Disease)",
      definition: "A form of hyperthyroidism characterized by enlargement of the thyroid gland, protrusion of eyeballs (exophthalmos), elevated Basal Metabolic Rate (BMR), and weight loss.",
      neetNote: "Classic NEET question distinguishing Grave's disease (hyperthyroid) from Simple Goitre (hypothyroid/iodine deficiency)."
    },
    {
      term: "Addison's Disease",
      definition: "An endocrine disorder caused by hyposecretion of adrenal cortex corticoids, presenting with hypoglycemia, acute muscular weakness, severe fatigue, and hyperpigmentation of skin.",
      neetNote: "Direct NCERT disorder linked to adrenal cortex deficiency."
    },
    {
      term: "Atrial Natriuretic Factor (ANF)",
      definition: "A peptide hormone secreted by the atrial wall of the heart when blood pressure or blood volume increases, causing vasodilation and excretion of Na⁺/water to lower blood pressure.",
      neetNote: "ANF acts antagonistically to the Renin-Angiotensin-Aldosterone System (RAAS)."
    },
    {
      term: "Erythropoietin (EPO)",
      definition: "A peptide hormone synthesized by juxtaglomerular (JG) cells of the kidney in response to hypoxia, stimulating erythropoiesis in bone marrow.",
      neetNote: "Key non-endocrine organ hormone tested in NEET."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Endocrine System Architecture & Hypothalamus Control",
      paragraphs: [
        "The human endocrine system comprises ductless glands and specialized hormone-secreting tissues distributed throughout the body. Unlike exocrine glands which release secretions through ducts onto epithelial surfaces, endocrine glands discharge their chemical messengers—hormones—directly into intercellular fluids and blood plasma.",
        "The Hypothalamus serves as the master neuroendocrine integrator, situated at the basal part of the diencephalon (forebrain). It contains multiple groups of specialized neurosecretory cells called neurosecretory nuclei that produce neurohormones.",
        "Hypothalamic hormones are functionally divided into two distinct categories:",
        "1. Releasing Hormones: Stimulate the synthesis and secretion of anterior pituitary hormones. Example: Gonadotropin Releasing Hormone (GnRH) stimulates anterior pituitary gonadotrophs to release LH and FSH.",
        "2. Inhibiting Hormones: Suppress anterior pituitary hormone production. Example: Somatostatin inhibits Growth Hormone (GH) release from the anterior pituitary.",
        "Anatomically, hypothalamic signals reach the Anterior Pituitary (Adenohypophysis) via a specialized vascular system—the Hypophyseal Portal System. In contrast, the Posterior Pituitary (Neurohypophysis) is under direct neural regulation; axons from hypothalamic neurosecretory neurons extend directly down the infundibulum into the posterior pituitary, transporting Oxytocin and Vasopressin axonally for storage and release."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="280" fill="#f8fafc" rx="12"/>
          
          <!-- Hypothalamus Box -->
          <rect x="180" y="20" width="240" height="65" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="8"/>
          <text x="300" y="45" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">HYPOTHALAMUS</text>
          <text x="300" y="65" font-size="11" fill="#1e3a8a" text-anchor="middle">(Neurosecretory Nuclei)</text>

          <!-- Infundibulum Stalk -->
          <line x1="250" y1="85" x2="210" y2="150" stroke="#0284c7" stroke-width="3" stroke-dasharray="4,4"/>
          <line x1="350" y1="85" x2="390" y2="150" stroke="#dc2626" stroke-width="3"/>

          <!-- Anterior Pituitary -->
          <rect x="120" y="150" width="160" height="80" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="8"/>
          <text x="200" y="175" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">Anterior Pituitary</text>
          <text x="200" y="195" font-size="10" fill="#075985" text-anchor="middle">(Adenohypophysis)</text>
          <text x="200" y="215" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">GH, TSH, ACTH, PRL, LH, FSH</text>

          <!-- Posterior Pituitary -->
          <rect x="320" y="150" width="160" height="80" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="8"/>
          <text x="400" y="175" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">Posterior Pituitary</text>
          <text x="400" y="195" font-size="10" fill="#7f1d1d" text-anchor="middle">(Neurohypophysis)</text>
          <text x="400" y="215" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Oxytocin, Vasopressin (ADH)</text>

          <!-- Labels on arrows -->
          <text x="200" y="120" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Hypophyseal Portal System</text>
          <text x="400" y="120" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Axonal Transport</text>
        </svg>`,
        caption: "Hypothalamus-Pituitary Axis: Portal vascular link to Adenohypophysis vs direct axonal neural link to Neurohypophysis.",
        guide: "Observe that Neurohypophysis does NOT synthesize Oxytocin/ADH; it merely receives them via hypothalamic neuronal axons."
      },
      importantPoints: [
        "Hypothalamus produces Releasing (GnRH) and Inhibiting (Somatostatin) neurohormones.",
        "Hypophyseal Portal System carries hypothalamic signals to anterior pituitary.",
        "Neurohypophysis stores and releases Oxytocin and Vasopressin synthesized in hypothalamus."
      ]
    },
    {
      heading: "2. Pituitary Gland & Pineal Gland Functions",
      paragraphs: [
        "The Pituitary Gland (Hypophysis) is lodged inside the sella turcica of the sphenoid bone and attached to the hypothalamus via the infundibulum. Anatomically, it consists of two major divisions:",
        "1. Adenohypophysis: Comprises Pars Distalis (anterior pituitary) and Pars Intermedia.",
        "• Growth Hormone (GH / Somatotropin): Stimulates tissue growth, protein synthesis, and bone elongation. Hypersecretion in children causes Gigantism; hypersecretion in adults causes Acromegaly (severe facial disfigurement and premature mortality). Hyposecretion in children leads to Pituitary Dwarfism.",
        "• Prolactin (PRL): Stimulates mammary gland growth and milk synthesis.",
        "• Thyroid Stimulating Hormone (TSH): Stimulates synthesis and release of thyroid hormones (T3 and T4).",
        "• Adrenocorticotropic Hormone (ACTH): Stimulates adrenal cortex to secrete glucocorticoids.",
        "• Luteinizing Hormone (LH): In males, stimulates Leydig cells to produce androgens. In females, triggers ovulation of Graafian follicle and maintains corpus luteum.",
        "• Follicle Stimulating Hormone (FSH): In males, acts with androgens to regulate spermatogenesis. In females, stimulates growth of ovarian follicles.",
        "• Melanocyte Stimulating Hormone (MSH): Secreted by Pars Intermedia (almost merged with Pars Distalis in humans); acts on melanocytes to regulate skin pigmentation.",
        "2. Neurohypophysis (Pars Nervosa): Stores two hypothalamic hormones:",
        "• Oxytocin: Causes powerful uterine muscle contractions during parturition (childbirth) and triggers milk ejection reflex from mammary glands during suckling.",
        "• Vasopressin / Anti-Diuretic Hormone (ADH): Acts primarily on renal distal convoluted tubules (DCT) and collecting ducts to enhance water reabsorption, preventing diuresis. Deficiency causes Diabetes Insipidus (excretion of massive volumes of dilute urine, intense thirst, without glycosuria).",
        "Pineal Gland: Situated on the dorsal side of forebrain, it secretes Melatonin. Melatonin regulates the 24-hour diurnal (circadian) rhythm of the body, including sleep-wake cycle, body temperature, metabolism, skin pigmentation, menstrual cycles, and immune defense."
      ],
      tables: [
        {
          title: "Anterior Pituitary Hormones Summary",
          headers: ["Hormone", "Target Organ", "Primary Physiological Function", "Hyper/Hypo Disorders"],
          rows: [
            ["GH (Somatotropin)", "Bones, Muscles, Tissues", "Promotes body growth and protein synthesis", "Gigantism / Acromegaly (Hyper), Dwarfism (Hypo)"],
            ["PRL (Prolactin)", "Mammary Glands", "Mammary gland growth & milk formation", "Galactorrhea (Hyper)"],
            ["TSH", "Thyroid Gland", "Stimulates T3/T4 synthesis and secretion", "Secondary Hyper/Hypothyroidism"],
            ["ACTH", "Adrenal Cortex", "Stimulates glucocorticoid (cortisol) release", "Cushing's disease (Hyper)"],
            ["LH", "Gonads (Testes/Ovaries)", "Male: Leydig androgen release; Female: Ovulation & Corpus Luteum", "Infertility, menstrual disorders"],
            ["FSH", "Gonads (Testes/Ovaries)", "Male: Spermatogenesis; Female: Follicle maturation", "Infertility, delayed puberty"]
          ]
        }
      ],
      importantPoints: [
        "Acromegaly is GH hypersecretion in adults; Gigantism occurs in children.",
        "ADH deficiency leads to Diabetes Insipidus (polyuria without glycosuria).",
        "Oxytocin is essential for parturition contractions and milk ejection.",
        "Melatonin from pineal gland controls circadian sleep-wake rhythm."
      ]
    },
    {
      heading: "3. Thyroid, Parathyroid & Thymus Glands (Calcium & Immunity Control)",
      paragraphs: [
        "The Thyroid Gland is composed of two lobes situated on either side of the trachea, interconnected by a thin median connective tissue band called the Isthmus. It consists of thyroid follicles surrounded by stromal tissue. Follicular cells produce two principal iodinated hormones:",
        "1. Tetraiodothyronine (T4 or Thyroxine) and 2. Triiodothyronine (T3).",
        "Dietary iodine is essential for thyroid hormone synthesis. Functions of T3/T4 include regulation of Basal Metabolic Rate (BMR), maintenance of water and electrolyte balance, erythropoiesis (RBC formation), and regulation of carbohydrate, fat, and protein metabolism.",
        "Thyroid Clinical Disorders:",
        "• Hypothyroidism: Deficiency of thyroid hormones. In pregnancy, causes Cretinism in infants (stunted growth, mental retardation, low IQ, deaf-mutism). In adults, causes Myxedema and irregular menstrual cycles. Dietary iodine deficiency causes Simple Goitre (thyroid enlargement).",
        "• Hyperthyroidism: Excessive thyroid hormone secretion. Exophthalmic Goitre (Grave's Disease) features thyroid enlargement, protruding eyes, marked BMR elevation, nervousness, and weight loss.",
        "• Thyrocalcitonin (TCT): Protein hormone secreted by thyroid parafollicular C-cells; lowers blood calcium levels (hypocalcemic hormone).",
        "Parathyroid Glands: Four tiny glands located on the posterior surface of the thyroid lobes (one pair per lobe). They secrete Parathyroid Hormone (PTH), a peptide hormone that INCREASES blood Ca²⁺ levels (hypercalcemic hormone). PTH acts by:",
        "1. Stimulating osteoclast activity and bone resorption (demineralization).",
        "2. Promoting Ca²⁺ reabsorption in renal tubules.",
        "3. Enhancing Ca²⁺ absorption from digested food in the gastrointestinal tract.",
        "TCT and PTH act antagonistically to maintain tight calcium homeostasis in blood plasma (~9-11 mg/dL). Deficiency of PTH causes Parathyroid Tetany (painful muscle spasms due to low blood Ca²⁺).",
        "Thymus Gland: A lobular organ located on the ventral side of aorta behind the sternum between the lungs. It secretes Thymosins, which play a crucial role in immune system development by promoting T-lymphocyte differentiation (cell-mediated immunity) and antibody production (humoral immunity). The thymus degenerates with age, leading to weakened immune responses in elderly individuals."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="240" fill="#f8fafc" rx="12"/>
          
          <!-- Central Blood Calcium Pool -->
          <circle cx="300" cy="120" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
          <text x="300" y="115" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Blood Ca²⁺</text>
          <text x="300" y="132" font-size="11" fill="#b45309" text-anchor="middle">Homeostasis</text>

          <!-- PTH Action (Raises Ca²⁺) -->
          <rect x="30" y="70" width="160" height="100" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="8"/>
          <text x="110" y="95" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">Parathyroid (PTH)</text>
          <text x="110" y="115" font-size="10" fill="#7f1d1d" text-anchor="middle">HYPERCALCEMIC</text>
          <text x="110" y="135" font-size="9" fill="#991b1b" text-anchor="middle">• Bone Resorption ↑</text>
          <text x="110" y="150" font-size="9" fill="#991b1b" text-anchor="middle">• Renal Ca²⁺ Reabsorption ↑</text>

          <!-- Arrow PTH -> Blood -->
          <line x1="190" y1="120" x2="255" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
          <text x="220" y="110" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">+ Ca²⁺</text>

          <!-- TCT Action (Lowers Ca²⁺) -->
          <rect x="410" y="70" width="160" height="100" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="8"/>
          <text x="490" y="95" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">Thyroid C-Cells (TCT)</text>
          <text x="490" y="115" font-size="10" fill="#075985" text-anchor="middle">HYPOCALCEMIC</text>
          <text x="490" y="135" font-size="9" fill="#0369a1" text-anchor="middle">• Ca²⁺ Deposition in Bone</text>
          <text x="490" y="150" font-size="9" fill="#0369a1" text-anchor="middle">• Renal Ca²⁺ Excretion ↑</text>

          <!-- Arrow Blood -> TCT -->
          <line x1="345" y1="120" x2="410" y2="120" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow-blue)"/>
          <text x="380" y="110" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">- Ca²⁺</text>

          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Antagonistic Regulation of Plasma Ca²⁺ Levels by Hypercalcemic PTH and Hypocalcemic TCT.",
        guide: "PTH increases blood calcium by bone resorption and renal reabsorption; TCT decreases blood calcium by bone deposition."
      },
      importantPoints: [
        "PTH is hypercalcemic (increases blood Ca²⁺); TCT is hypocalcemic (lowers blood Ca²⁺).",
        "Cretinism is infant hypothyroidism causing mental retardation and deaf-mutism.",
        "Exophthalmic Goitre (Grave's Disease) is hyperthyroidism with protruding eyeballs.",
        "Thymus secretes Thymosins for T-cell differentiation; degenerates in old age."
      ]
    },
    {
      heading: "4. Adrenal Gland & Pancreas (Stress & Glucose Homeostasis)",
      paragraphs: [
        "Adrenal Glands: Paired suprarenal glands located superior to each kidney. Divided into an outer Adrenal Cortex and an inner Adrenal Medulla.",
        "1. Adrenal Medulla: Secretes two catecholamines—Adrenaline (Epinephrine) and Noradrenaline (Norepinephrine). Commonly designated as 'Emergency Hormones' or 'Hormones of Fight, Flight, or Fright (3F)'. Their actions include:",
        "• Rapid increase in alertness, pupillary dilation, piloerection (goosebumps), and sweating.",
        "• Acceleration of heart rate, cardiac output, and breathing rate.",
        "• Stimulation of glycogen breakdown (glycogenolysis) raising blood glucose, as well as lipolysis and proteolysis.",
        "2. Adrenal Cortex: Anatomically layered into three distinct zones (from outside in):",
        "• Zona glomerulosa (outermost) → secretes Mineralocorticoids (mainly Aldosterone).",
        "• Zona fasciculata (middle layer) → secretes Glucocorticoids (mainly Cortisol).",
        "• Zona reticularis (innermost layer) → secretes Adrenal Androgenic Steroids.",
        "Physiological Actions of Corticoids:",
        "• Aldosterone: Acts on renal distal tubules to stimulate Na⁺ and water reabsorption while enhancing K⁺ and phosphate excretion. Maintains electrolyte, blood volume, osmotic pressure, and blood pressure homeostasis.",
        "• Cortisol: Stimulates gluconeogenesis, lipolysis, proteolysis; suppresses cellular amino acid uptake; exerts anti-inflammatory and immunosuppressive effects; maintains cardiovascular and renal functions; stimulates erythropoiesis.",
        "• Addison's Disease: Hyposecretion of corticoids by adrenal cortex leads to altered carbohydrate metabolism, extreme fatigue, muscular weakness, skin hyperpigmentation, and low blood pressure.",
        "Pancreas: A composite/heterocrine gland operating with dual exocrine and endocrine functions. The endocrine portion comprises ~1-2 million Islets of Langerhans (1-2% of total pancreatic tissue), featuring two primary cell populations:",
        "• Alpha cells (α-cells): Secrete Glucagon (peptide hormone). Glucagon is a HYPERGLYCEMIC hormone that raises blood glucose levels by stimulating hepatic glycogenolysis and gluconeogenesis while reducing cellular glucose uptake.",
        "• Beta cells (β-cells): Secrete Insulin (peptide hormone). Insulin is a HYPOGLYCEMIC hormone that lowers blood glucose by accelerating cellular glucose uptake into hepatocytes and adipocytes, and driving glycogenesis (conversion of glucose to glycogen).",
        "• Diabetes Mellitus: Chronic insulin deficiency or resistance causes prolonged hyperglycemia, resulting in urinary excretion of glucose (glycosuria) and accumulation of toxic ketone bodies (ketonuria)."
      ],
      tables: [
        {
          title: "Pancreatic & Adrenal Hormones Comparison",
          headers: ["Gland / Zone", "Hormone Secreted", "Primary Target / Action", "Clinical Outcome / Imbalance"],
          rows: [
            ["Pancreatic α-cells", "Glucagon", "Hepatocytes (Glycogenolysis ↑)", "Hyperglycemia"],
            ["Pancreatic β-cells", "Insulin", "Hepatocytes & Adipocytes (Glucose uptake ↑)", "Diabetes Mellitus (Hypo / Deficiency)"],
            ["Adrenal Medulla", "Epinephrine / Norepinephrine", "Heart, Blood vessels, Glycogen stores", "3F Emergency Response"],
            ["Adrenal Cortex (Z. Glomerulosa)", "Aldosterone", "Renal Tubules (Na⁺/H₂O reabsorption ↑)", "Conn's Syndrome (Hyper) / BP alterations"],
            ["Adrenal Cortex (Z. Fasciculata)", "Cortisol", "Liver, Tissues (Gluconeogenesis, Anti-inflammatory)", "Cushing's Syndrome (Hyper), Addison's Disease (Hypo)"]
          ]
        }
      ],
      importantPoints: [
        "Epinephrine and Norepinephrine are 3F emergency hormones of Adrenal Medulla.",
        "Adrenal Cortex zones: Outer Glomerulosa, Middle Fasciculata, Inner Reticularis (GFR).",
        "Cortisol is gluconeogenic, anti-inflammatory, and immunosuppressive.",
        "Insulin lowers blood glucose (hypoglycemic); Glucagon raises blood glucose (hyperglycemic)."
      ]
    },
    {
      heading: "5. Gonadal Hormones & Non-Endocrine Organ Secretions",
      paragraphs: [
        "Testis (Male Gonad): Located inside the scrotum outside the abdominal cavity. Functions as both primary sex organ and endocrine gland. Composed of seminiferous tubules and interstitial/stromal tissue containing Leydig cells (interstitial cells).",
        "Leydig cells synthesize and secrete Androgens (primarily Testosterone). Functions of Androgens:",
        "1. Regulate development, maturation, and function of male accessory sex organs (epididymis, vas deferens, seminal vesicles, prostate).",
        "2. Stimulate male secondary sexual characters (beard, mustache, deep voice, muscular body, aggressiveness).",
        "3. Stimulate spermatogenesis (along with FSH) and erythropoiesis, exerting anabolic effects on protein and carbohydrate metabolism.",
        "Ovary (Female Gonad): Located in the pelvic cavity. Produces the female gamete (ovum) and two major steroid hormones:",
        "1. Estrogen: Secreted by growing ovarian follicles. Stimulates development of female secondary sex organs, secondary sexual characters (high pitch voice, breast development), and female sexual behavior.",
        "2. Progesterone: Secreted by the Corpus Luteum (formed from ruptured Graafian follicle after ovulation). Essential for pregnancy maintenance. Acts on mammary glands to stimulate formation of alveoli (milk-storing sacs) and milk secretion.",
        "Hormones Secreted by Non-Endocrine Organs:",
        "1. Heart: Atrial wall secretes Atrial Natriuretic Factor (ANF) in response to high blood pressure. ANF induces vasodilation and urinary Na⁺ excretion, lowering blood pressure (antagonistic to RAAS).",
        "2. Kidney: Juxtaglomerular (JG) cells secrete Erythropoietin (EPO), a peptide hormone that stimulates erythropoiesis in bone marrow during hypoxia.",
        "3. Gastrointestinal (GI) Tract: Secretes four major peptide hormones:",
        "• Gastrin: Stimulates gastric glands to secrete Hydrochloric acid (HCl) and Pepsinogen.",
        "• Secretin: Acts on exocrine pancreas to stimulate secretion of water and bicarbonate ions (HCO3⁻).",
        "• Cholecystokinin (CCK): Acts on exocrine pancreas (stimulating digestive enzyme secretion) and gallbladder (stimulating bile contraction and release).",
        "• Gastric Inhibitory Peptide (GIP): Inhibits gastric secretion and gastric motility.",
        "4. Non-Endocrine Tissue Growth Factors: Peptide factors secreted by various tissues essential for cell proliferation, tissue repair, and regeneration."
      ],
      importantPoints: [
        "ANF from heart lowers blood pressure by vasodilation (antagonistic to RAAS).",
        "Erythropoietin (EPO) from JG cells of kidney stimulates RBC formation.",
        "CCK stimulates pancreatic enzyme release AND gallbladder contraction.",
        "Secretin stimulates pancreatic water and bicarbonate secretion.",
        "Progesterone is secreted by Corpus Luteum to support pregnancy."
      ]
    }
  ],

  formulae: [
    {
      title: "Calcium Homeostasis Antagonism",
      formula: "\\text{Blood } Ca^{2+} = \\text{PTH (Hypercalcemic } \\uparrow) \\iff \\text{TCT (Hypocalcemic } \\downarrow)",
      meaning: "PTH increases blood calcium by bone resorption and kidney reabsorption; TCT decreases blood calcium by depositing Ca²⁺ into bone.",
      "whenToUse": "Use when solving questions regarding serum calcium regulation and parathyroid/thyroid disorders."
    },
    {
      title: "Glucose Homeostasis Antagonism",
      formula: "\\text{Blood Glucose} = \\text{Glucagon (Hyperglycemic } \\uparrow) \\iff \\text{Insulin (Hypoglycemic } \\downarrow)",
      meaning: "Insulin promotes cellular uptake and glycogenesis; Glucagon promotes glycogenolysis and gluconeogenesis.",
      "whenToUse": "Use when evaluating pancreatic islet cell function and diabetes mellitus diagnostics."
    },
    {
      title: "Blood Pressure Regulation Antagonism",
      formula: "\\text{Blood Pressure} = \\text{RAAS / Aldosterone (Vasoconstriction / Na}^+ \\text{ reabsorption } \\uparrow) \\iff \\text{ANF (Vasodilation / Na}^+ \\text{ excretion } \\downarrow)",
      meaning: "ANF from cardiac atrial wall lowers blood pressure, directly opposing the vasoconstrictive and volume-expanding effects of RAAS.",
      "whenToUse": "Use for NEET questions comparing cardiac and renal blood pressure control mechanisms."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
      <rect width="600" height="300" fill="#f8fafc" rx="12"/>
      <text x="300" y="25" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Overview of Major Human Endocrine Glands</text>
      
      <!-- Layout Glands -->
      <!-- Brain Glands -->
      <g transform="translate(40, 50)">
        <rect width="150" height="65" fill="#e0e7ff" stroke="#4338ca" stroke-width="2" rx="8"/>
        <text x="75" y="22" font-size="12" font-weight="bold" fill="#312e81" text-anchor="middle">Hypothalamus / Pituitary</text>
        <text x="75" y="42" font-size="10" fill="#3730a3" text-anchor="middle">Releasing factors, GH, TSH,</text>
        <text x="75" y="55" font-size="10" fill="#3730a3" text-anchor="middle">ACTH, LH, FSH, ADH, Oxytocin</text>
      </g>

      <g transform="translate(225, 50)">
        <rect width="150" height="65" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="8"/>
        <text x="75" y="22" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">Pineal Gland</text>
        <text x="75" y="42" font-size="10" fill="#92400e" text-anchor="middle">Melatonin</text>
        <text x="75" y="55" font-size="10" fill="#92400e" text-anchor="middle">(Circadian 24-hr Rhythm)</text>
      </g>

      <g transform="translate(410, 50)">
        <rect width="150" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
        <text x="75" y="22" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">Thyroid & Parathyroid</text>
        <text x="75" y="42" font-size="10" fill="#166534" text-anchor="middle">T3, T4, TCT (Hypocalcemic)</text>
        <text x="75" y="55" font-size="10" fill="#166534" text-anchor="middle">PTH (Hypercalcemic)</text>
      </g>

      <!-- Mid-body Glands -->
      <g transform="translate(40, 135)">
        <rect width="150" height="65" fill="#fce7f3" stroke="#db2777" stroke-width="2" rx="8"/>
        <text x="75" y="22" font-size="12" font-weight="bold" fill="#831843" text-anchor="middle">Thymus Gland</text>
        <text x="75" y="42" font-size="10" fill="#9d174d" text-anchor="middle">Thymosins</text>
        <text x="75" y="55" font-size="10" fill="#9d174d" text-anchor="middle">(T-cell Immunity)</text>
      </g>

      <g transform="translate(225, 135)">
        <rect width="150" height="65" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="8"/>
        <text x="75" y="22" font-size="12" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Adrenal Glands</text>
        <text x="75" y="42" font-size="10" fill="#991b1b" text-anchor="middle">Cortex: Cortisol, Aldosterone</text>
        <text x="75" y="55" font-size="10" fill="#991b1b" text-anchor="middle">Medulla: Epinephrine (3F)</text>
      </g>

      <g transform="translate(410, 135)">
        <rect width="150" height="65" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="8"/>
        <text x="75" y="22" font-size="12" font-weight="bold" fill="#075985" text-anchor="middle">Pancreas (Islets)</text>
        <text x="75" y="42" font-size="10" fill="#0369a1" text-anchor="middle">α-cells: Glucagon</text>
        <text x="75" y="55" font-size="10" fill="#0369a1" text-anchor="middle">β-cells: Insulin</text>
      </g>

      <!-- Lower Glands & Non-endocrine -->
      <g transform="translate(132, 220)">
        <rect width="160" height="65" fill="#fae8ff" stroke="#c084fc" stroke-width="2" rx="8"/>
        <text x="80" y="22" font-size="12" font-weight="bold" fill="#581c87" text-anchor="middle">Gonads (Testis / Ovary)</text>
        <text x="80" y="42" font-size="10" fill="#6b21a8" text-anchor="middle">Androgens (Testosterone),</text>
        <text x="80" y="55" font-size="10" fill="#6b21a8" text-anchor="middle">Estrogen & Progesterone</text>
      </g>

      <g transform="translate(308, 220)">
        <rect width="160" height="65" fill="#ccfbf1" stroke="#14b8a6" stroke-width="2" rx="8"/>
        <text x="80" y="22" font-size="12" font-weight="bold" fill="#134e4a" text-anchor="middle">Heart, Kidney & GI Tract</text>
        <text x="80" y="42" font-size="10" fill="#0f766e" text-anchor="middle">ANF (Heart), EPO (Kidney),</text>
        <text x="80" y="55" font-size="10" fill="#0f766e" text-anchor="middle">Gastrin, Secretin, CCK, GIP</text>
      </g>
    </svg>`,
    caption: "Comprehensive Endocrine Glands & Hormone System Map in Human Anatomy."
  },

  neetImportantPoints: [
    "Neurohypophysis stores and releases Oxytocin and Vasopressin synthesized by the hypothalamus; it does NOT synthesize them.",
    "Acromegaly is adult GH hypersecretion causing facial disfigurement and premature death.",
    "Diabetes Insipidus is caused by ADH deficiency, characterized by polyuria without glycosuria or ketonuria.",
    "Cretinism is congenital hypothyroidism in infants causing stunted growth, mental retardation, and deaf-mutism.",
    "Exophthalmic Goitre (Grave's Disease) is hyperthyroidism with protrusion of eyeballs and elevated BMR.",
    "PTH is hypercalcemic (raises blood Ca²⁺) while TCT is hypocalcemic (lowers blood Ca²⁺).",
    "Adrenal Cortex layers from outside to inside: Zona glomerulosa, Zona fasciculata, Zona reticularis (Mnemonic: GFR).",
    "Addison's Disease is caused by hyposecretion of adrenal cortex hormones, leading to fatigue, hypoglycemia, and skin hyperpigmentation.",
    "Atrial Natriuretic Factor (ANF) from heart causes vasodilation and lowers blood pressure, opposing RAAS.",
    "Erythropoietin (EPO) is secreted by juxtaglomerular cells of kidney to stimulate erythropoiesis in response to hypoxia.",
    "CCK stimulates BOTH pancreatic digestive enzyme secretion and gallbladder bile release."
  ],

  commonConfusions: [
    {
      commonConfusion: "Neurohypophysis synthesizes Oxytocin and Vasopressin.",
      correctFact: "Neurohypophysis (posterior pituitary) does NOT synthesize any hormones. Oxytocin and Vasopressin are synthesized by neurosecretory nuclei in the Hypothalamus and transported axonally to neurohypophysis for storage and release.",
      whyItMattersForNEET: "Extremely common true/false trap question in NEET UG paper."
    },
    {
      commonConfusion: "Diabetes Insipidus results in glucose loss in urine.",
      correctFact: "Diabetes Insipidus is caused by ADH deficiency and leads to excretion of large volumes of dilute urine WITHOUT glucose. Glucose in urine (glycosuria) occurs in Diabetes Mellitus (insulin deficiency/resistance).",
      whyItMattersForNEET: "Frequently tested diagnostic comparison in NEET MCQs."
    },
    {
      commonConfusion: "Parathyroid hormone (PTH) lowers blood calcium levels.",
      correctFact: "PTH is a HYPERCALCEMIC hormone that INCREASES blood Ca²⁺ levels via bone resorption and kidney reabsorption. Thyrocalcitonin (TCT) is the HYPOCALCEMIC hormone that lowers blood Ca²⁺.",
      whyItMattersForNEET: "Direct NCERT line question on calcium hormone antagonism."
    },
    {
      commonConfusion: "Grave's Disease is a hypothyroid condition.",
      correctFact: "Exophthalmic Goitre (Grave's Disease) is an autoimmune HYPERTHYROID condition characterized by elevated BMR, protruding eyeballs, and thyroid enlargement. Simple Goitre is caused by iodine deficiency (hypothyroidism).",
      whyItMattersForNEET: "Key pathology matching question in NEET."
    },
    {
      commonConfusion: "Secretin stimulates gallbladder contraction.",
      correctFact: "Cholecystokinin (CCK) stimulates gallbladder contraction to release bile. Secretin acts on exocrine pancreas to stimulate water and bicarbonate ion (HCO3⁻) release.",
      whyItMattersForNEET: "GI tract hormone function matching question."
    }
  ],

  quickRevision: [
    "Hypothalamus: Releasing & Inhibiting hormones via Portal system to anterior pituitary; Oxytocin & ADH via axons to posterior pituitary.",
    "Pituitary: Sella turcica location. GH (Acromegaly/Gigantism), TSH, ACTH, PRL, LH, FSH, MSH (Pars intermedia).",
    "Posterior Pituitary: Oxytocin (parturition/milk ejection), ADH/Vasopressin (water reabsorption in DCT, deficiency = Diabetes Insipidus).",
    "Pineal: Melatonin (24-hr circadian sleep-wake rhythm).",
    "Thyroid: T3/T4 (BMR, BMR regulation; deficiency in infants = Cretinism; hypersecretion = Grave's disease). TCT (hypocalcemic).",
    "Parathyroid: PTH (hypercalcemic, bone resorption, increases blood Ca²⁺).",
    "Thymus: Thymosins (T-cell differentiation, cell-mediated immunity; degenerates with age).",
    "Adrenal Medulla: Epinephrine & Norepinephrine (3F emergency hormones).",
    "Adrenal Cortex: Zona Glomerulosa (Aldosterone - mineralo), Zona Fasciculata (Cortisol - gluco), Zona Reticularis (Androgens). Deficiency = Addison's disease.",
    "Pancreas: α-cells (Glucagon - hyperglycemic), β-cells (Insulin - hypoglycemic, deficiency = Diabetes Mellitus).",
    "Non-Endocrine: Heart (ANF lowers BP), Kidney (EPO stimulates RBCs), GI Tract (Gastrin, Secretin, CCK, GIP)."
  ],

  practiceQuestions: [
    {
      id: "pq-bio-endo-1",
      question: "Which of the following hormones is synthesized by the hypothalamus and transported axonally to the posterior pituitary for release?",
      options: [
        "Thyroid Stimulating Hormone (TSH)",
        "Adrenocorticotropic Hormone (ACTH)",
        "Vasopressin (ADH)",
        "Prolactin (PRL)"
      ],
      correctAnswerIndex: 2,
      explanation: "Vasopressin (ADH) and Oxytocin are synthesized by neurosecretory nuclei in the hypothalamus and transported axonally to the posterior pituitary (neurohypophysis) where they are stored and released. TSH, ACTH, and PRL are synthesized directly by adenohypophysis.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-endo-2",
      question: "A patient presents with high blood pressure, extreme muscular weakness, hypoglycemia, and dark pigmentation of the skin. Laboratory analysis reveals hyposecretion of adrenal cortex hormones. Which disorder is this?",
      options: [
        "Cushing's Syndrome",
        "Addison's Disease",
        "Grave's Disease",
        "Diabetes Insipidus"
      ],
      correctAnswerIndex: 1,
      explanation: "Addison's disease is caused by hyposecretion of corticoids from the adrenal cortex. Symptoms include altered carbohydrate metabolism, hypoglycemia, acute weakness, fatigue, and hyperpigmentation of skin.",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-endo-3",
      question: "Which of the following pairs of hormones act antagonistically to maintain calcium homeostasis in human blood plasma?",
      options: [
        "Insulin and Glucagon",
        "Parathyroid Hormone (PTH) and Thyrocalcitonin (TCT)",
        "Aldosterone and Atrial Natriuretic Factor (ANF)",
        "Oxytocin and Prolactin"
      ],
      correctAnswerIndex: 1,
      explanation: "PTH is a hypercalcemic hormone that increases blood Ca²⁺ levels via bone resorption and renal tubular reabsorption. Thyrocalcitonin (TCT) from thyroid parafollicular C-cells is a hypocalcemic hormone that lowers blood Ca²⁺.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-endo-4",
      question: "Match the GI tract hormone in Column I with its primary function in Column II:\n\nColumn I:\n(A) Gastrin\n(B) Secretin\n(C) Cholecystokinin (CCK)\n(D) GIP\n\nColumn II:\n(1) Stimulates secretion of water and HCO3⁻ from exocrine pancreas\n(2) Inhibits gastric secretion and motility\n(3) Stimulates HCl and Pepsinogen secretion\n(4) Stimulates pancreatic enzymes and gallbladder bile release",
      options: [
        "A-3, B-1, C-4, D-2",
        "A-1, B-3, C-2, D-4",
        "A-3, B-4, C-1, D-2",
        "A-2, B-1, C-4, D-3"
      ],
      correctAnswerIndex: 0,
      explanation: "Gastrin stimulates HCl and pepsinogen secretion (3). Secretin stimulates water and bicarbonate release from pancreas (1). CCK stimulates pancreatic enzymes and gallbladder bile release (4). GIP inhibits gastric secretion and motility (2). Correct matching: A-3, B-1, C-4, D-2.",
      difficulty: "Hard"
    },
    {
      id: "pq-bio-endo-5",
      question: "A pregnant woman suffering from severe iodine deficiency gives birth to a child. Which clinical condition is most likely to develop in the infant?",
      options: [
        "Acromegaly",
        "Cretinism",
        "Exophthalmic Goitre",
        "Diabetes Mellitus"
      ],
      correctAnswerIndex: 1,
      explanation: "Maternal hypothyroidism due to severe iodine deficiency during pregnancy causes Cretinism in the infant, characterized by stunted growth, mental retardation, low IQ, abnormal skin, and deaf-mutism.",
      difficulty: "Medium"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-endo-1",
      year: 2023,
      exam: "NEET UG 2023",
      question: "Which of the following statements is CORRECT regarding the human endocrine system?",
      options: [
        "Neurohypophysis synthesizes and secretes oxytocin and vasopressin.",
        "Adenohypophysis is under direct neural regulation of the hypothalamus.",
        "Parathyroid hormone (PTH) decreases blood Ca²⁺ levels.",
        "Atrial Natriuretic Factor (ANF) decreases blood pressure."
      ],
      correctAnswerIndex: 3,
      explanation: "Atrial Natriuretic Factor (ANF) is secreted by cardiac atrial wall when blood pressure increases. ANF causes vasodilation and urinary sodium excretion, thereby DECREASING blood pressure. Neurohypophysis does NOT synthesize oxytocin/vasopressin; Adenohypophysis is connected via portal circulation, not direct neural regulation; PTH INCREASES blood Ca²⁺.",
      topicTested: "Non-Endocrine Organ Hormones & ANF",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Paper"
    },
    {
      id: "pyq-bio-endo-2",
      year: 2022,
      exam: "NEET UG 2022",
      question: "Grave's disease is caused due to:",
      options: [
        "Hyposecretion of thyroid gland",
        "Hypersecretion of thyroid gland",
        "Hyposecretion of adrenal gland",
        "Hypersecretion of adrenal gland"
      ],
      correctAnswerIndex: 1,
      explanation: "Grave's disease (Exophthalmic Goitre) is an autoimmune form of hyperthyroidism resulting from hypersecretion of thyroid hormones (T3 and T4), leading to thyroid enlargement, protruding eyeballs, high BMR, and weight loss.",
      topicTested: "Thyroid Disorders",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Paper"
    },
    {
      id: "pyq-bio-endo-3",
      year: 2020,
      exam: "NEET UG 2020",
      question: "Match the following columns and select the CORRECT option:\n\nColumn I:\n(a) Pituitary gland\n(b) Thyroid gland\n(c) Adrenal gland\n(d) Pancreas\n\nColumn II:\n(i) Grave's disease\n(ii) Diabetes Mellitus\n(iii) Diabetes Insipidus\n(iv) Addison's disease",
      options: [
        "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
        "(a)-(ii), (b)-(a), (c)-(iv), (d)-(iii)",
        "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)"
      ],
      correctAnswerIndex: 0,
      explanation: "Pituitary gland deficiency of ADH -> Diabetes Insipidus (iii). Thyroid gland hypersecretion -> Grave's disease (i). Adrenal cortex hyposecretion -> Addison's disease (iv). Pancreas insulin deficiency -> Diabetes Mellitus (ii). Correct matching: (a)-(iii), (b)-(i), (c)-(iv), (d)-(ii).",
      topicTested: "Endocrine Disorders Matching",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper"
    },
    {
      id: "pyq-bio-endo-4",
      year: 2019,
      exam: "NEET UG 2019",
      question: "Which of the following hormone levels will cause release of ovum (ovulation) from the Graafian follicle?",
      options: [
        "High concentration of Estrogen",
        "High concentration of Progesterone",
        "Low concentration of LH",
        "Low concentration of FSH"
      ],
      correctAnswerIndex: 0,
      explanation: "High levels of Estrogen secreted by growing ovarian follicles exert positive feedback on LH secretion, leading to an LH Surge near the mid-cycle (~14th day), which triggers ovulation of the Graafian follicle.",
      topicTested: "Pituitary & Ovarian Hormones in Ovulation",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    },
    {
      id: "pyq-bio-endo-5",
      year: 2018,
      exam: "NEET UG 2018",
      question: "Hypersecretion of Growth Hormone in adults does not cause further increase in height, because:",
      options: [
        "Epiphyseal plates close after adolescence.",
        "Bones lose their sensitivity to Growth Hormone in adults.",
        "Muscle fibres do not grow in adults.",
        "Growth Hormone becomes inactive in adults."
      ],
      correctAnswerIndex: 0,
      explanation: "In adults, epiphyseal plates at the ends of long bones fuse and close after adolescence under the influence of sex steroids. Thus, GH hypersecretion in adults cannot cause longitudinal bone growth (Gigantism), but instead causes disfigurement of facial bones and hands called Acromegaly.",
      topicTested: "Growth Hormone Mechanism & Acromegaly",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2018 Official Paper"
    },
    {
      id: "pyq-bio-endo-6",
      year: 2016,
      exam: "NEET UG 2016",
      question: "Which hormone stimulates the exocrine pancreas to secrete water and bicarbonate ions?",
      options: [
        "Gastrin",
        "Secretin",
        "Cholecystokinin (CCK)",
        "Gastric Inhibitory Peptide (GIP)"
      ],
      correctAnswerIndex: 1,
      explanation: "Secretin acts on the exocrine pancreas to stimulate the secretion of water and bicarbonate ions (HCO3⁻) to neutralize acidic chyme in the duodenum. CCK stimulates digestive enzymes from pancreas and bile from gallbladder.",
      topicTested: "Gastrointestinal Hormones",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2016 Official Paper"
    }
  ]
};
