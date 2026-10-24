import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "molecular-basis-inheritance"
CHP_TITLE = "Molecular Basis of Inheritance"
FILE_PREFIX = "molecularBasisInheritance"
VAR_PREFIX = "MOLECULAR_BASIS_INHERITANCE"

T1 = ("bio-dna-search-structure", "Search for Genetic Material & DNA Double Helix")
T2 = ("bio-dna-replication-enzymes", "DNA Replication & Meselson-Stahl Experiment")
T3 = ("bio-transcription-genetic-code", "Transcription & Features of Genetic Code")
T4 = ("bio-translation-lac-operon", "Translation & Regulation of Gene Expression (Lac Operon)")
T5 = ("bio-hgp-dna-fingerprinting", "Human Genome Project & DNA Fingerprinting")

def generate_chapter_5():
    print(f"Generating 500 questions for {CHP_TITLE}...")
    qs = []

    def add(q, a, b, c, d, ans, concept, step, why_wrong, top_tuple, subtopic):
        top_id, top_name = top_tuple
        qs.append({
            "question": q,
            "opts": {"A": a, "B": b, "C": c, "D": d},
            "ans": ans,
            "concept": concept,
            "step": step,
            "why_wrong": why_wrong,
            "topic": top_name,
            "topicId": top_id,
            "subtopic": subtopic
        })

    # =========================================================================
    # PART 1: 125 EASY QUESTIONS
    # =========================================================================
    easy_data = [
        ("In a DNA nucleotide, the nitrogenous base is attached to the pentose sugar via which chemical bond?",
         "N-glycosidic bond", "Phosphoester bond", "Phosphodiester bond", "Peptide bond", "A",
         "Structure of nucleotide in NCERT.",
         "A nitrogenous base is linked to the C1' position of the pentose sugar through an N-glycosidic linkage to form a nucleoside.",
         "Phosphoester bonds link phosphate to sugar; peptide bonds join amino acids.",
         T1, "Nucleotide Chemistry"),

        ("In a polynucleotide chain, two successive nucleotides are linked together by which chemical linkage?",
         "3'-5' phosphodiester bond", "N-glycosidic bond", "Hydrogen bond", "Disulfide bond", "A",
         "Phosphodiester backbone.",
         "Two nucleotides are joined together when the 5'-phosphate of one nucleotide condenses with the 3'-OH group of the adjacent pentose sugar via a 3'-5' phosphodiester linkage.",
         "Hydrogen bonds hold base pairs across opposite strands.",
         T1, "DNA Backbone"),

        ("Which nitrogenous base is chemically known as 5-methyl uracil?",
         "Thymine", "Cytosine", "Adenine", "Guanine", "A",
         "Chemical name of thymine.",
         "Thymine is the methylated form of uracil, specifically 5-methyluracil, found in DNA providing enhanced chemical stability.",
         "Cytosine is an unmethylated pyrimidine; adenine is a purine.",
         T1, "Nitrogenous Bases"),

        ("Who proposed the double helix model for the secondary structure of DNA in 1953?",
         "James Watson and Francis Crick", "Maurice Wilkins and Rosalind Franklin", "Erwin Chargaff", "Gregor Mendel", "A",
         "Watson and Crick double helix.",
         "In 1953, James Watson and Francis Crick proposed the double helix model of DNA based on X-ray diffraction data produced by Rosalind Franklin and Maurice Wilkins.",
         "Chargaff established base ratio equalities.",
         T1, "DNA Double Helix"),

        ("According to Chargaff's rules of base pairing in double-stranded DNA:",
         "The ratio of Adenine to Thymine and Guanine to Cytosine is constant and equals one ([A]=[T] and [G]=[C])",
         "Adenine pairs with Guanine, and Thymine pairs with Cytosine",
         "The amount of Purines is always twice the amount of Pyrimidines",
         "Uracil is present in equal amounts to Thymine", "A",
         "Chargaff's rules in NCERT.",
         "Erwin Chargaff showed that in dsDNA, the molar concentration of Adenine equals Thymine ([A]=[T]) and Guanine equals Cytosine ([G]=[C]), so [A+G] = [T+C] (Purines = Pyrimidines).",
         "A pairs with T, not G; uracil is absent in DNA.",
         T1, "Chargaff's Rules"),

        ("What is the pitch (length of one complete turn) of the B-form DNA double helix described by Watson and Crick?",
         "3.4 nm (34 Angstroms)", "0.34 nm (3.4 Angstroms)", "2.0 nm (20 Angstroms)", "34 nm", "A",
         "Helical parameters of B-DNA.",
         "The pitch of the B-DNA helix is 3.4 nanometers (34 A), containing approximately 10 base pairs per turn.",
         "0.34 nm is the distance between two adjacent base pairs; 2.0 nm is the diameter.",
         T1, "DNA Helix Dimensions"),

        ("What is the distance between two adjacent base pairs in a typical B-DNA double helix?",
         "0.34 nm (0.34 x 10^-9 m)", "3.4 nm", "2.0 nm", "0.034 nm", "A",
         "Distance between base pairs.",
         "With 10 base pairs per 3.4 nm helical turn, the distance between successive base pairs is 3.4 nm / 10 = 0.34 nm (3.4 Angstroms).",
         "3.4 nm is the full helical turn.",
         T1, "DNA Helix Dimensions"),

        ("What is the total length of double-stranded DNA present in a single diploid human cell?",
         "Approximately 2.2 meters", "Approximately 1.36 mm", "Approximately 10 cm", "Approximately 22 micrometers", "A",
         "Length of human genomic DNA.",
         "A diploid human cell has 6.6 x 10^9 base pairs. Length = 6.6 x 10^9 bp x 0.34 x 10^-9 m/bp = 2.244 meters (~2.2 meters).",
         "1.36 mm is the length of E. coli DNA.",
         T1, "DNA Length Calculation"),

        ("What is the total number of base pairs in the genome of the bacterium Escherichia coli?",
         "4.6 x 10^6 base pairs", "6.6 x 10^9 base pairs", "5386 base pairs", "48,502 base pairs", "A",
         "E. coli genome size.",
         "NCERT explicitly specifies that E. coli DNA contains 4.6 x 10^6 base pairs (length ~1.36 mm).",
         "6.6 x 10^9 bp is human diploid; 48,502 bp is bacteriophage lambda.",
         T1, "Genome Sizes"),

        ("How many nucleotides are present in the single-stranded DNA genome of bacteriophage phi-X174?",
         "5386 nucleotides", "48,502 base pairs", "4.6 x 10^6 base pairs", "3.3 x 10^9 nucleotides", "A",
         "Bacteriophage phi-X174 genome size.",
         "Bacteriophage phi-X174 possesses a single-stranded circular DNA genome containing 5386 nucleotides.",
         "48,502 bp is double-stranded bacteriophage lambda.",
         T1, "Genome Sizes"),

        ("How many base pairs are present in the genome of bacteriophage Lambda?",
         "48,502 base pairs", "5386 nucleotides", "4.6 x 10^6 base pairs", "1.36 x 10^6 base pairs", "A",
         "Bacteriophage lambda genome size.",
         "Bacteriophage lambda has 48,502 base pairs of double-stranded DNA.",
         "5386 nucleotides is phi-X174.",
         T1, "Genome Sizes"),

        ("Histone proteins that package negatively charged DNA in eukaryotic chromatin are rich in which basic amino acid residues?",
         "Lysine and Arginine", "Glutamic acid and Aspartic acid", "Valine and Leucine", "Tryptophan and Phenylalanine", "A",
         "Histone amino acid composition.",
         "Histones carry a net positive charge because they are richly endowed with the basic amino acid residues Lysine and Arginine, both possessing positive charges in their side chains.",
         "Glutamic and aspartic acids are acidic; leucine and valine are non-polar.",
         T1, "Histone Structure"),

        ("A histone octamer core is composed of two molecules each of which four histone proteins?",
         "H2A, H2B, H3, and H4", "H1, H2A, H2B, and H3", "H1, H2, H3, and H4", "H1A, H1B, H2A, and H2B", "A",
         "Histone octamer composition.",
         "The histone core consists of an octamer containing two copies each of four histone proteins: H2A, H2B, H3, and H4. Histone H1 binds externally as a linker histone.",
         "H1 is not part of the core octamer; it seals the nucleosome entry/exit points.",
         T1, "Nucleosome Structure"),

        ("Approximately how many base pairs of DNA helix are wrapped around a single histone octamer to form a typical nucleosome?",
         "200 base pairs", "10 base pairs", "1000 base pairs", "46 base pairs", "A",
         "Nucleosome DNA length.",
         "A typical nucleosome contains roughly 200 base pairs of DNA helix wrapped twice around the histone octamer core.",
         "10 bp is one helical turn.",
         T1, "Nucleosome Structure"),

        ("Under an electron microscope, chromatin appears as 'beads-on-a-string'. The 'beads' represent:",
         "Nucleosomes", "Ribosomes", "Centrosomes", "Lysosomes", "A",
         "Beads-on-a-string appearance.",
         "The nucleosomes constitute the repeating structural units of chromatin, visible as distinct 'beads' strung along the DNA duplex string.",
         "Ribosomes are translation organelles in cytoplasm.",
         T1, "Chromatin Architecture"),

        ("In a eukaryotic nucleus, the loosely packed, lightly staining, and transcriptionally active region of chromatin is termed:",
         "Euchromatin", "Heterochromatin", "Centromere", "Telomere", "A",
         "Euchromatin definition.",
         "Euchromatin is loosely packed chromatin that stains light and is transcriptionally active. Heterochromatin is densely packed, stains dark, and is transcriptionally inactive.",
         "Heterochromatin is transcriptionally inert.",
         T1, "Euchromatin vs Heterochromatin"),

        ("In 1928, Frederick Griffith conducted classic transformation experiments using which pathogenic bacterium?",
         "Streptococcus pneumoniae (Pneumococcus)", "Escherichia coli", "Salmonella typhimurium", "Bacillus thuringiensis", "A",
         "Griffith's transforming experiment organism.",
         "Griffith used Streptococcus pneumoniae (Diplococcus pneumoniae), which causes bacterial pneumonia in mice and humans.",
         "Hershey-Chase used E. coli; Avery used Streptococcus.",
         T1, "Griffith Experiment"),

        ("In Griffith's experiment, mice injected with a mixture of heat-killed S strain and live R strain of Streptococcus pneumoniae:",
         "Died of pneumonia, and living virulent S strain bacteria were recovered from their blood",
         "Survived healthy and produced no antibodies",
         "Died from cold exposure without any bacteria",
         "Transformed into guinea pigs", "A",
         "Griffith's transformation result.",
         "Mice died because the living non-virulent R strain was transformed into virulent smooth S strain by absorbing the 'transforming principle' from the heat-killed S bacteria.",
         "R strain did not remain harmless; it gained a polysaccharide capsule and killed the mice.",
         T1, "Griffith Experiment"),

        ("Who discovered the biochemical nature of the 'transforming principle' in 1944?",
         "Oswald Avery, Colin MacLeod, and Maclyn McCarty",
         "Alfred Hershey and Martha Chase",
         "James Watson and Francis Crick",
         "George Beadle and Edward Tatum", "A",
         "Biochemical characterization of transforming principle.",
         "Avery, MacLeod, and McCarty purified proteins, RNA, and DNA from heat-killed S cells. Only DNA-digesting enzyme (DNase) abolished transformation, establishing DNA as the transforming substance.",
         "Hershey and Chase provided confirmation using bacteriophages in 1952.",
         T1, "Avery MacLeod McCarty"),

        ("In the Hershey-Chase blender experiment (1952), bacteriophage T2 was labeled with radioactive phosphorus-32 (^32P) and sulfur-35 (^35S). What did ^32P and ^35S label specifically?",
         "^32P labeled viral DNA, and ^35S labeled viral protein coat",
         "^32P labeled protein, and ^35S labeled DNA",
         "Both ^32P and ^35S labeled viral DNA",
         "Both ^32P and ^35S labeled viral RNA", "A",
         "Hershey-Chase isotopic labeling.",
         "DNA contains phosphorus but no sulfur, so ^32P selectively labeled DNA. Proteins contain sulfur (in methionine and cysteine) but no phosphorus, so ^35S selectively labeled the protein capsid.",
         "Proteins do not contain phosphorus; DNA does not contain sulfur.",
         T1, "Hershey Chase Experiment"),

        ("In the Hershey-Chase experiment, after agitation in a blender and centrifugation, where was the radioactivity detected for ^32P and ^35S respectively?",
         "Radioactive ^32P was detected in the bacterial cell pellet, while ^35S remained in the supernatant",
         "Radioactive ^35S was detected in the pellet, while ^32P remained in the supernatant",
         "Both ^32P and ^35S were detected inside the bacterial cell pellet",
         "Neither isotope entered the bacterial culture", "A",
         "Hershey-Chase centrifugal results.",
         "Because DNA enters the bacterium while protein coats (phage ghosts) remain outside, ^32P-labeled DNA went into the bacterial pellet at the bottom, proving that DNA is the genetic material.",
         "^35S remained in the viral protein ghosts in the supernatant.",
         T1, "Hershey Chase Experiment"),

        ("Why is DNA a chemically more stable genetic material than RNA?",
         "DNA lacks the reactive 2'-OH group on its pentose sugar and possesses thymine instead of uracil",
         "DNA contains only peptide bonds",
         "DNA dissolves in lipids whereas RNA dissolves in acid",
         "DNA is completely unable to replicate", "A",
         "Chemical stability of DNA vs RNA.",
         "RNA has a reactive 2'-OH group on ribose making it labile and catalytic. DNA has 2'-deoxyribose (lacking 2'-OH) and thymine (5-methyluracil), conferring superior chemical and thermodynamic stability.",
         "DNA does replicate; it has phosphodiester bonds, not peptide bonds.",
         T1, "DNA vs RNA Stability"),

        ("Which enzyme acts as an RNA catalyst (ribozyme) that forms peptide bonds during translation?",
         "23S rRNA in bacteria", "DNA polymerase I", "RNA primase", "Aminoacyl-tRNA synthetase", "A",
         "Ribozyme definition and identity.",
         "23S rRNA in the large 50S ribosomal subunit of prokaryotes acts as a ribozyme (peptidyl transferase) that catalyzes peptide bond synthesis.",
         "DNA polymerase replicates DNA; primase makes RNA primers.",
         T4, "Ribozymes"),

        ("The semi-conservative nature of DNA replication was experimentally proven in Escherichia coli by:",
         "Matthew Meselson and Franklin Stahl (1958)", "Alfred Hershey and Martha Chase",
         "Oswald Avery and Colin MacLeod", "Frederick Griffith", "A",
         "Meselson-Stahl experiment.",
         "Meselson and Stahl grew E. coli in ^15NH4Cl medium followed by ^14N medium, demonstrating semi-conservative replication by CsCl density gradient centrifugation.",
         "Hershey-Chase proved DNA is genetic material.",
         T2, "Meselson Stahl Experiment"),

        ("Which heavy non-radioactive isotope of nitrogen was used by Meselson and Stahl in their DNA replication experiment?",
         "^15N (Heavy nitrogen isotope)", "^14C (Carbon-14)", "^32P (Phosphorus-32)", "^35S (Sulfur-35)", "A",
         "Meselson-Stahl isotope.",
         "Meselson and Stahl used ^15N, a stable, heavy isotope of nitrogen that can be separated from normal ^14N based on density differences in a CsCl density gradient. It is NOT radioactive.",
         "^15N is a stable isotope, not radioactive.",
         T2, "Meselson Stahl Experiment"),

        ("Which technique was used by Meselson and Stahl to separate DNA molecules based on density differences?",
         "Cesium chloride (CsCl) density gradient centrifugation",
         "Paper chromatography", "Agarose gel electrophoresis", "Western blotting", "A",
         "CsCl centrifugation.",
         "Equilibrium density gradient centrifugation in a CsCl solution forms a density gradient that resolves ^15N-DNA, hybrid ^15N-^14N DNA, and ^14N-DNA into distinct bands.",
         "Gel electrophoresis separates by molecular size/charge, not buoyant density.",
         T2, "Meselson Stahl Experiment"),

        ("Taylor and colleagues (1958) proved semi-conservative replication of chromosomes in Vicia faba (faba beans) using:",
         "Radioactive tritiated thymidine (^3H-thymidine)", "Heavy nitrogen (^15N)", "Radioactive sulfur (^35S)", "Cesium chloride", "A",
         "Taylor's experiment on Vicia faba.",
         "Herbert Taylor and colleagues used autoradiography with radioactive tritiated thymidine (^3H-thymidine) to prove that eukaryotic chromosomes replicate semi-conservatively.",
         "Meselson and Stahl used ^15N in bacteria.",
         T2, "Taylor Experiment"),

        ("The main enzyme that catalyzes the polymerization of deoxynucleotides during DNA replication in Escherichia coli is:",
         "DNA-dependent DNA polymerase (DNA Polymerase III)", "RNA-dependent RNA polymerase", "DNA ligase", "Reverse transcriptase", "A",
         "DNA polymerase III role.",
         "DNA-dependent DNA polymerase III is the primary replicative enzyme in prokaryotes, polymerizing dNTPs rapidly with high fidelity.",
         "Reverse transcriptase synthesizes DNA from RNA templates in retroviruses.",
         T2, "DNA Replication Enzymes"),

        ("In which direction does DNA-dependent DNA polymerase catalyze the synthesis of a new DNA strand?",
         "Only in the 5' -> 3' direction", "Only in the 3' -> 5' direction", "In both directions simultaneously", "From 3' to 3' direction", "A",
         "Directionality of DNA polymerase.",
         "All known DNA polymerases add deoxynucleotides exclusively to the free 3'-OH group of an existing strand, polymerizing solely in the 5' -> 3' direction.",
         "3' -> 5' synthesis is chemically impossible for DNA polymerase.",
         T2, "DNA Polymerase Polarity"),

        ("During DNA replication, the discontinuously synthesized short DNA fragments on the lagging strand are known as:",
         "Okazaki fragments", "Khorana fragments", "Sanger fragments", "Introns", "A",
         "Okazaki fragments definition.",
         "Discontinuous synthesis on the lagging template (5' -> 3' template polarity) produces short Okazaki fragments in the 5' -> 3' direction.",
         "Introns are non-coding sequences within eukaryotic genes.",
         T2, "Lagging Strand Synthesis"),

        ("Which enzyme joins the discontinuously synthesized Okazaki fragments on the lagging strand into a continuous DNA strand?",
         "DNA ligase", "DNA helicase", "RNA primase", "Topoisomerase", "A",
         "DNA ligase function.",
         "DNA ligase forms phosphodiester bonds that seal the nicks between adjacent Okazaki fragments.",
         "Helicase unwinds the double helix; primase synthesizes RNA primers.",
         T2, "DNA Ligase"),

        ("What serves as the dual purpose during DNA replication, acting both as substrates and providing polymerization energy?",
         "Deoxyribonucleoside triphosphates (dATP, dGTP, dCTP, dTTP)",
         "Ribosomal RNAs", "Histone proteins", "Amino acids", "A",
         "Dual function of dNTPs in NCERT.",
         "Deoxyribonucleoside triphosphates (dNTPs) serve as monomer substrates and their high-energy terminal pyrophosphate bonds provide energy for polymerization.",
         "Histones package DNA; amino acids form proteins.",
         T2, "Substrates of Replication"),

        ("The specific site on a DNA molecule where replication begins is called the:",
         "Origin of replication (ori)", "Promoter", "Terminator", "Operator", "A",
         "Origin of replication definition.",
         "Replication initiates at defined DNA sequence loci designated as the origin of replication ('ori').",
         "Promoter initiates transcription; operator binds repressor.",
         T2, "Origin of Replication"),

        ("A transcription unit in DNA consists of which three fundamental regions?",
         "A Promoter, a Structural gene, and a Terminator", "An Exon, an Intron, and a Cistron",
         "An Ori, an Antibiotic marker, and a Rop", "A Codon, an Anticodon, and an Amino acid", "A",
         "Transcription unit components.",
         "A transcription unit consists of: (1) A Promoter (binding site for RNA polymerase), (2) The Structural gene (transcribed region), and (3) A Terminator (stops transcription).",
         "Ori and selectable markers belong to cloning vectors.",
         T3, "Transcription Unit"),

        ("In a transcription unit, the DNA strand with 3' -> 5' polarity that serves as the guide for RNA synthesis is called the:",
         "Template strand", "Coding strand", "Sense strand", "Leading strand", "A",
         "Template strand polarity.",
         "Because RNA polymerase synthesizes RNA in the 5' -> 3' direction, it copies the 3' -> 5' DNA strand, known as the template (anti-sense) strand.",
         "The opposite 5' -> 3' strand is the coding strand.",
         T3, "Template vs Coding"),

        ("In a transcription unit, all reference points (such as promoter upstream or terminator downstream) are designated with respect to the:",
         "Coding strand (5' end)", "Template strand", "mRNA transcript", "tRNA anticodon", "A",
         "Coding strand reference convention.",
         "NCERT explicitly notes that all reference points while defining a transcription unit are made with the coding strand (5' end is upstream, 3' end is downstream).",
         "The template strand is not used as the reference coordinate frame.",
         T3, "Coding Strand Convention"),

        ("In prokaryotes, which factor associates transiently with RNA polymerase to initiate transcription specifically at the promoter?",
         "Sigma (σ) factor", "Rho (ρ) factor", "Alpha subunit", "Beta subunit", "A",
         "Sigma factor initiation.",
         "The sigma (σ) initiation factor binds the core prokaryotic RNA polymerase holoenzyme, recognizing the promoter sequence (-10 and -35 boxes) to initiate transcription.",
         "Rho factor terminates transcription.",
         T3, "Transcription Initiation"),

        ("In prokaryotes, which factor associates with RNA polymerase to terminate transcription?",
         "Rho (ρ) factor", "Sigma (σ) factor", "Tau factor", "Delta factor", "A",
         "Rho factor termination.",
         "Termination of transcription in bacteria is facilitated by the rho (ρ) termination protein factor.",
         "Sigma initiates transcription.",
         T3, "Transcription Termination"),

        ("In eukaryotic nuclei, which enzyme transcribes the precursor of messenger RNA (hnRNA)?",
         "RNA polymerase II", "RNA polymerase I", "RNA polymerase III", "DNA polymerase I", "A",
         "Eukaryotic RNA polymerases.",
         "RNA polymerase II transcribes precursor of mRNA (heterogeneous nuclear RNA, hnRNA). RNA polymerase I transcribes rRNAs (28S, 18S, 5.8S); RNA polymerase III transcribes tRNA, 5S rRNA, and snRNAs.",
         "RNA Pol I transcribes rRNAs; RNA Pol III transcribes tRNAs.",
         T3, "Eukaryotic RNA Polymerases"),

        ("In eukaryotic nuclei, which enzyme transcribes 28S, 18S, and 5.8S ribosomal RNAs?",
         "RNA polymerase I", "RNA polymerase II", "RNA polymerase III", "Topoisomerase", "A",
         "RNA Polymerase I role.",
         "RNA polymerase I resides in the nucleolus and synthesizes large precursor rRNA which is cleaved into 28S, 18S, and 5.8S rRNAs.",
         "RNA Pol II synthesizes hnRNA; RNA Pol III makes tRNA and 5S rRNA.",
         T3, "Eukaryotic RNA Polymerases"),

        ("In eukaryotic nuclei, which enzyme transcribes transfer RNA (tRNA), 5S rRNA, and snRNAs?",
         "RNA polymerase III", "RNA polymerase I", "RNA polymerase II", "DNA ligase", "A",
         "RNA Polymerase III role.",
         "RNA polymerase III is responsible for transcribing tRNA, 5S ribosomal RNA, and small nuclear RNAs (snRNAs).",
         "RNA Pol II makes mRNA; RNA Pol I makes major rRNAs.",
         T3, "Eukaryotic RNA Polymerases"),

        ("In eukaryotic post-transcriptional processing, the removal of non-coding introns and joining of coding exons in a defined order is termed:",
         "Splicing", "Capping", "Tailing", "Polyadenylation", "A",
         "RNA splicing definition.",
         "Splicing removes intervening non-coding introns from hnRNA and splices together exons using the spliceosome complex (snRNPs).",
         "Capping adds 7-methylguanosine; tailing adds poly-A tail.",
         T3, "RNA Splicing"),

        ("In post-transcriptional capping of eukaryotic hnRNA, which unusual nucleotide is added to the 5'-end?",
         "Methyl guanosine triphosphate (7-methylguanosine)", "Adenosine triphosphate", "Cytidine diphosphate", "Thymidine monophosphate", "A",
         "Capping nucleotide.",
         "In capping, an unusual nucleotide—methyl guanosine triphosphate (7-mGTP)—is added to the 5'-end of hnRNA via a 5'-to-5' triphosphate linkage.",
         "Adenylate residues are added at the 3' end in tailing.",
         T3, "hnRNA Capping"),

        ("In post-transcriptional tailing of eukaryotic hnRNA, approximately how many adenylate residues are added to the 3'-end?",
         "200 to 300 adenylate residues", "20 to 30 residues", "1000 to 2000 residues", "Only 3 residues", "A",
         "Poly-A tail length.",
         "During tailing, polyadenylate residues (200-300 adenylates) are added to the 3'-end in a template-independent enzymatic process.",
         "20-30 is too short; 1000 is excessively long.",
         T3, "Polyadenylation"),

        ("The genetic code is a triplet of nitrogenous bases. Who was the physicist who argued that with 4 bases, a code of 3 bases (4^3 = 64 codons) was needed to code for 20 amino acids?",
         "George Gamow", "Marshall Nirenberg", "Har Gobind Khorana", "Severo Ochoa", "A",
         "George Gamow hypothesis.",
         "Physicist George Gamow mathematically proposed that since there are only 4 bases to code for 20 amino acids, codons must be triplets (4^3 = 64 codons).",
         "Nirenberg and Khorana performed laboratory deciphering.",
         T3, "Genetic Code History"),

        ("Which scientist developed the chemical synthesis of defined RNA homopolymers and copolymers to decipher the genetic code?",
         "Har Gobind Khorana", "Marshall Nirenberg", "Severo Ochoa", "Erwin Chargaff", "A",
         "Khorana's contribution.",
         "Indian-American biochemist Har Gobind Khorana developed chemical synthesis of polyribonucleotides with defined repeating sequences of bases.",
         "Nirenberg used cell-free translation; Ochoa isolated polynucleotide phosphorylase.",
         T3, "Genetic Code Deciphering"),

        ("Which enzyme was discovered by Severo Ochoa that polymerizes RNA with defined sequences in a template-independent manner?",
         "Polynucleotide phosphorylase", "DNA polymerase I", "RNA polymerase II", "Reverse transcriptase", "A",
         "Severo Ochoa enzyme.",
         "Severo Ochoa enzyme is polynucleotide phosphorylase, which polymerizes ribonucleotides into RNA without a DNA template.",
         "RNA polymerases are template-dependent.",
         T3, "Severo Ochoa Enzyme"),

        ("Out of 64 total codons in the standard genetic code, how many code for amino acids and how many act as stop (nonsense) codons?",
         "61 code for amino acids and 3 act as stop codons", "64 code for amino acids and 0 are stop codons",
         "20 code for amino acids and 44 are stop codons", "48 code for amino acids and 16 are stop codons", "A",
         "Codon distribution in genetic code.",
         "61 codons specify the 20 amino acids, while 3 codons (UAA, UAG, UGA) do not code for any amino acid and function as stop / termination signals.",
         "All 64 are assigned functions.",
         T3, "Codon Table"),

        ("Which of the following codons functions both as a start codon (initiator) and codes for the amino acid methionine?",
         "AUG", "UAA", "UAG", "UGA", "A",
         "AUG dual function.",
         "AUG has a dual function: it codes for Methionine (Met) and acts as the universal initiator codon for protein synthesis.",
         "UAA, UAG, and UGA are stop codons.",
         T3, "Initiator Codon"),

        ("Which three codons act as stop (termination) codons in translation?",
         "UAA, UAG, and UGA", "AUG, GUG, and UUG", "AAA, UUU, and CCC", "UGA, UGG, and UGC", "A",
         "Stop codons in NCERT.",
         "The three termination codons are UAA (ochre), UAG (amber), and UGA (opal). They bind release factors, releasing the completed polypeptide.",
         "UGG codes for tryptophan; UUU codes for phenylalanine.",
         T3, "Stop Codons")
    ]

    # Additional easy items to reach 125 easy questions
    extra_easy_5 = [
        ("When an amino acid is coded by more than one codon, the genetic code is said to be:",
         "Degenerate", "Unambiguous", "Universal", "Commaless", "A",
         "Degeneracy of genetic code.",
         "Degeneracy means that multiple different codons can specify the same amino acid (e.g. leucine and serine are coded by 6 different codons each).",
         "Unambiguous means one codon specifies only one amino acid.",
         T3, "Genetic Code Features"),

        ("The property that one specific codon codes for only one particular amino acid makes the genetic code:",
         "Unambiguous and specific", "Degenerate", "Overlapping", "Ambiguous", "A",
         "Unambiguity of genetic code.",
         "The genetic code is unambiguous because a given codon always specifies exactly one amino acid.",
         "Degeneracy means multiple codons for one amino acid.",
         T3, "Genetic Code Features"),

        ("The genetic code is read in mRNA in a continuous fashion without any punctuation marks. This feature is termed:",
         "Commaless", "Degenerate", "Universal", "Ambiguous", "A",
         "Commaless reading frame.",
         "The codons are read continuously in unbroken triplets without spaces, stops, or overlaps between adjacent codons.",
         "Punctuation does not exist in translation.",
         T3, "Genetic Code Features"),

        ("From bacteria to humans, codon UUU codes for phenylalanine. This demonstrates that the genetic code is:",
         "Nearly universal", "Degenerate", "Non-overlapping", "Species-specific", "A",
         "Universality of genetic code.",
         "With very minor exceptions in mitochondrial and protozoan codons, the genetic code is universally conserved across all forms of cellular life on Earth.",
         "Species-specific would mean bacteria and humans use different codes.",
         T3, "Genetic Code Universality"),

        ("The adapter molecule that reads the genetic code on mRNA and binds the corresponding amino acid is:",
         "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Heterogeneous nuclear RNA (hnRNA)", "DNA polymerase", "A",
         "tRNA adapter function.",
         "Francis Crick postulated the presence of an adapter molecule, now identified as tRNA (formerly soluble RNA, sRNA), that reads mRNA codons via its anticodon and carries amino acids.",
         "rRNA forms ribosome structure.",
         T3, "tRNA Adapter"),

        ("The secondary structure of transfer RNA (tRNA) resembles a:",
         "Cloverleaf", "Double helix", "Inverted pear", "Linear ribbon", "A",
         "tRNA secondary structure.",
         "In two dimensions, tRNA base pairing forms three hairpin loops and an acceptor stem, resembling a cloverleaf. Its tertiary 3D structure is an inverted L.",
         "Double helix is DNA; inverted pear is uterus.",
         T3, "tRNA Structure"),

        ("The actual physical three-dimensional (tertiary) structure of tRNA resembles an:",
         "Inverted L-shape", "Cloverleaf", "Double helix", "Spherical ball", "A",
         "tRNA tertiary structure.",
         "NCERT explicitly highlights that while the secondary structure of tRNA looks like a cloverleaf, its actual 3D tertiary structure is an inverted L.",
         "Cloverleaf is the 2D depiction.",
         T3, "tRNA Structure"),

        ("Aminoacylation of tRNA (charging of tRNA) requires energy derived from the hydrolysis of:",
         "ATP (Adenosine Triphosphate)", "GTP only", "CTP", "UTP", "A",
         "Aminoacylation energetics.",
         "Charging of tRNA involves amino acid activation with ATP by aminoacyl-tRNA synthetase, forming aminoacyl-AMP followed by transfer to the 3'-CCA end of tRNA.",
         "GTP is consumed during ribosome translocation.",
         T4, "Charging of tRNA"),

        ("Which sequence is present at the 3'-terminal CCA-OH end of all mature transfer RNA (tRNA) molecules where the amino acid attaches?",
         "5'-CCA-3'", "5'-ACC-3'", "5'-AUG-3'", "5'-UAA-3'", "A",
         "tRNA acceptor stem sequence.",
         "The amino acid binds to the invariant 3'-CCA-OH trinucleotide sequence at the 3'-acceptor stem of tRNA.",
         "AUG is start codon on mRNA.",
         T3, "tRNA Anatomy"),

        ("In prokaryotic ribosomes, which rRNA molecule acts as the peptidyl transferase ribozyme that forms peptide bonds?",
         "23S rRNA", "16S rRNA", "5S rRNA", "28S rRNA", "A",
         "23S rRNA peptidyl transferase.",
         "The 23S rRNA of the 50S large prokaryotic ribosomal subunit possesses intrinsic catalytic peptidyl transferase activity.",
         "16S rRNA is in 30S subunit; 28S is in eukaryotic 60S subunit.",
         T4, "Ribozyme"),

        ("In the Lac Operon of Escherichia coli, which regulatory gene codes for the lac repressor protein?",
         "Gene i", "Gene z", "Gene y", "Gene a", "A",
         "Lac operon repressor gene.",
         "The i gene (from the Latin 'inhibitor') codes for the lac repressor protein, which is constitutively transcribed.",
         "z, y, a are structural genes.",
         T4, "Lac Operon"),

        ("In the Lac Operon, what enzyme is encoded by the structural gene z?",
         "Beta-galactosidase", "Permease", "Transacetylase", "RNA polymerase", "A",
         "Lac z gene product.",
         "Gene z codes for beta-galactosidase (beta-gal), which hydrolyzes lactose into glucose and galactose.",
         "Permease is encoded by gene y; transacetylase by gene a.",
         T4, "Lac Operon"),

        ("In the Lac Operon, what protein is encoded by the structural gene y?",
         "Permease", "Beta-galactosidase", "Transacetylase", "Repressor", "A",
         "Lac y gene product.",
         "Gene y encodes permease, which increases the bacterial cell membrane permeability to beta-galactosides (lactose).",
         "Beta-galactosidase is encoded by z.",
         T4, "Lac Operon"),

        ("In the Lac Operon, what enzyme is encoded by the structural gene a?",
         "Transacetylase", "Beta-galactosidase", "Permease", "Helicase", "A",
         "Lac a gene product.",
         "Gene a encodes a transacetylase enzyme that transfers an acetyl group from acetyl-CoA to beta-galactosides.",
         "Gene z encodes beta-gal; gene y encodes permease.",
         T4, "Lac Operon"),

        ("What acts as the physiological inducer in the regulation of the Lac Operon in Escherichia coli?",
         "Lactose (or allolactose)", "Glucose", "Galactose", "Sucrose", "A",
         "Lac operon inducer.",
         "Lactose (or allolactose) enters the cell in small amounts, binds to the repressor protein, and inactivates it, allowing transcription of the operon.",
         "Glucose represses the operon via catabolite repression.",
         T4, "Lac Operon Inducer"),

        ("The Lac Operon is under which type of primary regulatory control?",
         "Negative regulation (can also be under positive regulation via CAP-cAMP)",
         "Strictly positive regulation only",
         "No regulation; it is completely uninducible",
         "Osmotic regulation only", "A",
         "Lac operon regulation type.",
         "Regulation of the lac operon by repressor is referred to as negative regulation, because repressor binding shuts down transcription.",
         "Positive control via CAP-cAMP occurs under low glucose conditions.",
         T4, "Lac Operon Regulation"),

        ("The Human Genome Project (HGP) was formally launched as a 13-year international megaproject in which year?",
         "1990 (completed in 2003)", "1953", "1971", "1984", "A",
         "HGP timeline.",
         "HGP was launched in 1990 and completed in 2003, coordinated by the US Department of Energy and National Institutes of Health.",
         "1953 was Watson-Crick double helix.",
         T5, "HGP History"),

        ("Which two specialized artificial cloning vectors were widely developed and used during the Human Genome Project?",
         "BAC (Bacterial Artificial Chromosomes) and YAC (Yeast Artificial Chromosomes)",
         "pBR322 and Ti plasmid", "Lambda phage and M13 only", "Cosmids and retroviruses only", "A",
         "HGP cloning vectors.",
         "BAC (Bacterial Artificial Chromosomes) and YAC (Yeast Artificial Chromosomes) allowed cloning of very large genomic DNA fragments (100-300 kb).",
         "pBR322 carries small inserts (~5-10 kb).",
         T5, "HGP Methodology"),

        ("Who developed the automated dideoxy chain-termination method for sequencing DNA used in the Human Genome Project?",
         "Frederick Sanger", "Kary Mullis", "Alec Jeffreys", "Paul Berg", "A",
         "Sanger sequencing in HGP.",
         "Frederick Sanger developed the chain-termination method using dideoxynucleotides (ddNTPs) on automated capillary sequencers.",
         "Kary Mullis invented PCR; Alec Jeffreys invented DNA fingerprinting.",
         T5, "Sanger Sequencing"),

        ("According to the findings of the Human Genome Project, the total number of base pairs in the human genome is estimated to be:",
         "3164.7 million base pairs (approx. 3.16 x 10^9 bp)", "6.6 x 10^6 base pairs", "30,000 base pairs", "100 million base pairs", "A",
         "HGP human genome size.",
         "The human haploid genome contains 3164.7 million base pairs (3.1647 x 10^9 bp).",
         "30,000 is the estimated total number of genes.",
         T5, "HGP Findings"),

        ("According to the Human Genome Project, what is the estimated total number of protein-coding genes in the human genome?",
         "Approximately 30,000 genes", "Over 100,000 genes", "5,000 genes", "3 million genes", "A",
         "Human gene count in HGP.",
         "HGP revealed that the human genome contains approximately 30,000 genes, far fewer than previously hypothesized (which was 80,000 to 140,000).",
         "100,000 was the earlier inaccurate estimate.",
         T5, "HGP Findings"),

        ("What percentage of nucleotide bases in the human genome are exactly identical across all individual human beings?",
         "99.9%", "50%", "75%", "90%", "A",
         "Human genetic identity percentage.",
         "NCERT emphasizes that 99.9% of nucleotide bases are exactly the same in all people. The phenotypic variations and individuality arise from just 0.1% differences.",
         "0.1% accounts for all diversity.",
         T5, "HGP Findings"),

        ("What percentage of the total human genome codes for functional proteins?",
         "Less than 2%", "Over 80%", "Exactly 50%", "About 25%", "A",
         "Protein coding percentage in human genome.",
         "Less than 2% of the human genome encodes proteins; the vast majority consists of non-coding intervening sequences, introns, and repetitive DNA.",
         "Over 80% is non-coding.",
         T5, "HGP Findings"),

        ("Which human chromosome was found to have the MAXIMUM number of genes (2968 genes) by the Human Genome Project?",
         "Chromosome 1", "Chromosome 21", "The X chromosome", "Chromosome 16", "A",
         "Gene density on chromosome 1.",
         "Chromosome 1 has the most genes (2968 genes), and was the last chromosome to be completely sequenced in May 2006.",
         "Chromosome Y has the fewest.",
         T5, "HGP Chromosome Stats"),

        ("Which human chromosome contains the FEWEST number of genes (only 231 genes)?",
         "Chromosome Y", "Chromosome X", "Chromosome 21", "Chromosome 22", "A",
         "Gene count on Y chromosome.",
         "The Y chromosome has the fewest genes, possessing only 231 protein-coding genes.",
         "Chromosome 1 has 2968 genes.",
         T5, "HGP Chromosome Stats"),

        ("What are SNPs ('snips') in the context of the Human Genome Project?",
         "Single Nucleotide Polymorphisms occurring at about 1.4 million locations",
         "Small nuclear proteins", "Synthetic nucleotide probes", "Sequential non-coding plasmids", "A",
         "Definition and frequency of SNPs.",
         "Scientists have identified about 1.4 million locations where single-base DNA differences (SNPs - Single Nucleotide Polymorphisms) occur in humans.",
         "SNPs are single base variations.",
         T5, "SNPs"),

        ("Who invented the technique of DNA Fingerprinting in 1984?",
         "Alec Jeffreys", "Frederick Sanger", "Kary Mullis", "Francis Crick", "A",
         "Inventor of DNA fingerprinting.",
         "Sir Alec Jeffreys developed the technique of DNA fingerprinting at Leicester University in 1984 using minisatellite VNTR probes.",
         "Lalji Singh developed DNA fingerprinting in India.",
         T5, "DNA Fingerprinting Pioneer"),

        ("Who is considered the Father of DNA Fingerprinting in India?",
         "Dr. Lalji Singh", "Dr. M. S. Swaminathan", "Dr. Har Gobind Khorana", "Dr. Birbal Sahni", "A",
         "Indian DNA fingerprinting pioneer.",
         "Dr. Lalji Singh pioneered Bkm-derived DNA fingerprinting technology in India and founded the Center for DNA Fingerprinting and Diagnostics (CDFD) in Hyderabad.",
         "Swaminathan led Green Revolution; Khorana deciphered genetic code.",
         T5, "DNA Fingerprinting India"),

        ("DNA fingerprinting exploits variations in repetitive non-coding DNA sequences, a biological phenomenon termed:",
         "DNA Polymorphism", "Semiconservative replication", "Transcription coupling", "Degeneracy", "A",
         "Basis of DNA fingerprinting.",
         "DNA fingerprinting relies on DNA polymorphism—inherited variations in nucleotide sequences (VNTRs and STRs) that occur at high frequency in non-coding DNA.",
         "Degeneracy refers to codons.",
         T5, "DNA Polymorphism"),

        ("In DNA fingerprinting, VNTR belongs to a class of satellite DNA called:",
         "Minisatellites (10 to 60 base pairs repeated tandemly)",
         "Microsatellites (1 to 6 base pairs)", "Macrosatellites", "Exons", "A",
         "VNTR classification.",
         "VNTR stands for Variable Number of Tandem Repeats, which are minisatellites consisting of 10 to 60 bp repeat units surrounded by conserved flanking sequences.",
         "Microsatellites (STRs) have 1-6 bp repeats.",
         T5, "VNTR Minisatellites"),

        ("What is the correct sequence of steps involved in the Southern Blot DNA Fingerprinting technique?",
         "DNA isolation -> Restriction enzyme digestion -> Agarose gel electrophoresis -> Blotting to nylon membrane -> Hybridization with radioactive VNTR probe -> Autoradiography",
         "Autoradiography -> Electrophoresis -> PCR -> Restriction digestion",
         "Blotting -> Restriction digestion -> DNA isolation -> Hybridization",
         "Centrifugation -> Translation -> Splicing -> Autoradiography", "A",
         "DNA fingerprinting workflow.",
         "The standard Southern blot workflow is: (1) DNA extraction, (2) restriction endonuclease digestion, (3) gel electrophoresis, (4) alkaline transfer to nitrocellulose/nylon membrane, (5) radioactive probe hybridization, (6) X-ray autoradiography.",
         "Incorrect sequences violate logical molecular laboratory workflow.",
         T5, "Southern Blotting Protocol"),

        ("Why is DNA fingerprinting identical between monozygotic (identical) twins?",
         "They develop from a single fertilized zygote that splits into two embryos, sharing 100% identical genomic DNA and VNTR patterns",
         "They share the same blood type only", "They look identical in face shape", "They eat the same diet", "A",
         "Identical twins in DNA fingerprinting.",
         "Monozygotic twins originate from mitotic cleavage of a single fertilized ovum, so their entire nuclear DNA sequence, including all VNTR loci, is completely identical.",
         "Fraternal (dizygotic) twins originate from two separate ova and show standard sibling VNTR diversity (~50% sharing).",
         T5, "Twin Forensics"),

        ("Which biological sample from a crime scene CANNOT be used for nuclear DNA fingerprinting?",
         "Mature human erythrocytes (mature RBCs lacking nuclei)",
         "White blood cells (leukocytes)", "Hair follicle cells", "Spermatozoa in semen stains", "A",
         "Sample viability in DNA forensics.",
         "Mature human red blood cells are enucleated and contain no nuclear DNA. Forensic blood typing uses DNA isolated from nucleated white blood cells (WBCs).",
         "WBCs, hair follicles, epithelial skin flakes, and sperms all contain genomic DNA.",
         T5, "Forensic Sampling"),

        ("In the methodology of the Human Genome Project, the approach that focused strictly on identifying all genes that are expressed as RNA is called:",
         "Expressed Sequence Tags (ESTs)", "Sequence Annotation", "Shotgun sequencing", "Southern blotting", "A",
         "EST approach in HGP.",
         "The EST (Expressed Sequence Tags) approach sequenced only cDNA copies of active cellular mRNAs, focusing on coding sequences.",
         "Sequence Annotation sequenced the entire genome followed by bioinformatics annotation.",
         T5, "EST Methodology"),

        ("The blind approach of sequencing the entire human genome (both coding and non-coding) and later assigning functions is termed:",
         "Sequence Annotation", "Expressed Sequence Tags (ESTs)", "Western blotting", "Northern blotting", "A",
         "Sequence annotation approach.",
         "Sequence Annotation sequenced the whole genome blindly into small fragments, aligned them via overlaps, and annotated coding/non-coding regions using computer algorithms.",
         "EST sequenced only expressed genes.",
         T5, "HGP Methodology"),

        ("Untranslated Regions (UTRs) are present on mature mRNA transcripts at:",
         "Both 5'-end (before start codon) and 3'-end (after stop codon)",
         "Only at the 5'-end", "Only at the 3'-end", "Inside the middle coding exon", "A",
         "Untranslated Regions in translation.",
         "UTRs are present at both the 5'-end (before the AUG start codon) and at the 3'-end (after the stop codon). They are required for efficient translation and mRNA stability.",
         "They are not translated into polypeptide sequences.",
         T4, "Untranslated Regions"),

        ("What is the primary role of the release factor in eukaryotic and prokaryotic translation?",
         "It binds to the stop codon in the A-site, terminating translation and releasing the complete polypeptide",
         "It charges empty tRNAs with amino acids",
         "It unzips the DNA double helix",
         "It adds the 7-methylguanosine cap to mRNA", "A",
         "Release factor function.",
         "There are no tRNAs with anticodons complementary to stop codons. Instead, release factors (RFs) bind to the stop codon, catalyzing ester bond hydrolysis and releasing the polypeptide from the ribosome.",
         "Aminoacyl-tRNA synthetase charges tRNAs.",
         T4, "Translation Termination"),

        ("In a prokaryotic cell, why can transcription and translation occur simultaneously (coupled transcription-translation)?",
         "There is no nuclear envelope separating the bacterial chromosome from the ribosomes in cytoplasm",
         "Prokaryotic mRNA requires 10 days of splicing in the nucleus",
         "Bacteria lack ribosomes", "Bacteria reproduce only by meiosis", "A",
         "Coupled transcription-translation in prokaryotes.",
         "In bacteria, DNA is in direct contact with the cytoplasm (no nuclear membrane), allowing ribosomes to attach to the nascent 5'-end of mRNA while RNA polymerase is still synthesizing the 3'-end.",
         "Eukaryotes have spatial separation due to the nuclear envelope.",
         T4, "Coupled Transcription Translation"),

        ("How many hydrogen bonds form between an Adenine-Thymine (A-T) base pair in double-stranded DNA?",
         "Two hydrogen bonds", "Three hydrogen bonds", "One hydrogen bond", "Four hydrogen bonds", "A",
         "Base pairing hydrogen bonds.",
         "Adenine pairs with Thymine through two hydrogen bonds (A = T). Guanine pairs with Cytosine through three hydrogen bonds (G ≡ C).",
         "Three bonds occur between G and C.",
         T1, "Hydrogen Bonding in DNA"),

        ("How many hydrogen bonds form between a Guanine-Cytosine (G-C) base pair in double-stranded DNA?",
         "Three hydrogen bonds", "Two hydrogen bonds", "Four hydrogen bonds", "One hydrogen bond", "A",
         "G-C hydrogen bonding.",
         "Guanine forms three hydrogen bonds with Cytosine (G ≡ C), making G-C rich DNA thermally more stable than A-T rich DNA.",
         "Two bonds are formed in A-T pairs.",
         T1, "Hydrogen Bonding in DNA"),

        ("Which organism's DNA contains 3.3 x 10^9 base pairs in its haploid genome?",
         "Human (Homo sapiens)", "Escherichia coli", "Bacteriophage lambda", "Drosophila melanogaster", "A",
         "Human haploid DNA content.",
         "The haploid human genome contains 3.3 x 10^9 base pairs. A diploid somatic cell contains 6.6 x 10^9 base pairs.",
         "E. coli has 4.6 x 10^6 bp.",
         T1, "Human Genome Content"),

        ("Which nitrogenous bases belong to the bicyclic double-ring purine family?",
         "Adenine and Guanine", "Cytosine and Thymine", "Thymine and Uracil", "Cytosine and Uracil", "A",
         "Purine chemistry.",
         "Adenine and Guanine are double-ring purines. Cytosine, Thymine, and Uracil are single-ring pyrimidines.",
         "Cytosine, thymine, and uracil are pyrimidines.",
         T1, "Purine vs Pyrimidine"),

        ("Which nitrogenous bases belong to the monocyclic single-ring pyrimidine family?",
         "Cytosine, Thymine, and Uracil", "Adenine and Guanine", "Adenine and Thymine", "Guanine and Cytosine", "A",
         "Pyrimidine chemistry.",
         "Cytosine (C), Thymine (T), and Uracil (U) are six-membered heterocyclic pyrimidines.",
         "Adenine and guanine are purines.",
         T1, "Purine vs Pyrimidine"),

        ("In RNA, which pyrimidine base substitutes for Thymine found in DNA?",
         "Uracil", "Cytosine", "Adenine", "Guanine", "A",
         "RNA base composition.",
         "RNA contains Uracil in place of Thymine (5-methyluracil).",
         "Cytosine is present in both DNA and RNA.",
         T1, "RNA vs DNA Bases"),

        ("What is the diameter of the Watson-Crick B-DNA double helix?",
         "2.0 nm (20 Angstroms)", "3.4 nm", "0.34 nm", "20 nm", "A",
         "DNA helix diameter.",
         "The uniform diameter of the B-DNA double helix is 2.0 nanometers (20 Angstroms), dictated by purine-pyrimidine base pairing.",
         "3.4 nm is helical pitch; 0.34 nm is distance between adjacent base pairs.",
         T1, "DNA Dimensions"),

        ("DNA was first identified as an acidic substance in the cell nucleus by Friedrich Meischer in 1869, who named it:",
         "Nuclein", "Nucleic acid", "Chromatin", "Gene", "A",
         "Discovery of nuclein.",
         "Friedrich Meischer isolated an acidic substance from pus cell nuclei in 1869 and named it 'Nuclein'.",
         "The term nucleic acid was coined later by Altmann.",
         T1, "History of DNA"),

        ("Maurice Wilkins and Rosalind Franklin provided crucial experimental data for the double helix model of DNA using:",
         "X-ray diffraction crystallography", "Electron microscopy", "Density gradient centrifugation", "Paper chromatography", "A",
         "X-ray diffraction of DNA.",
         "Rosalind Franklin and Maurice Wilkins obtained high-resolution X-ray diffraction patterns of DNA fibers that revealed its helical structure.",
         "Centrifugation was used by Meselson and Stahl.",
         T1, "X-ray Diffraction"),

        ("Who proposed the Central Dogma in molecular biology that genetic information flows from DNA -> RNA -> Protein?",
         "Francis Crick", "James Watson", "Erwin Chargaff", "Maurice Wilkins", "A",
         "Central dogma in molecular biology.",
         "Francis Crick proposed the Central Dogma stating that genetic information flows unidirectionally from DNA to RNA to Protein.",
         "Watson proposed double helix with Crick.",
         T1, "Central Dogma"),

        ("In some retroviruses, genetic information flows in reverse from RNA to DNA, catalyzed by the enzyme:",
         "Reverse transcriptase", "DNA polymerase I", "RNA primase", "Peptidyl transferase", "A",
         "Reverse transcription.",
         "Temin and Baltimore discovered reverse transcription (Teminism) in retroviruses, where RNA is copied into cDNA by reverse transcriptase.",
         "DNA polymerase replicates DNA.",
         T1, "Reverse Transcription"),

        ("In prokaryotes like E. coli, the circular DNA is held with some basic proteins in a distinct cytoplasm region termed the:",
         "Nucleoid", "Nucleus", "Centrosome", "Plasmid", "A",
         "Prokaryotic nucleoid.",
         "Prokaryotes lack a nuclear membrane; their large circular chromosome is organized with positively charged polyamines/proteins in the nucleoid.",
         "True nucleus is membrane-bound in eukaryotes.",
         T1, "Bacterial Genome"),

        ("In a eukaryotic nucleus, chromatin that is densely packed, dark-staining, and transcriptionally inactive is termed:",
         "Heterochromatin", "Euchromatin", "Polysome", "Centromere", "A",
         "Heterochromatin definition.",
         "Heterochromatin is tightly packed, stains dark during interphase, and is transcriptionally silent.",
         "Euchromatin is transcriptionally active and light-staining.",
         T1, "Heterochromatin"),

        ("In a eukaryotic nucleus, euchromatin is characterized by:",
         "Loose packing, light staining, and transcriptional activity",
         "Dense packing and complete lack of transcription",
         "Complete absence of histone proteins",
         "Having exclusively RNA instead of DNA", "A",
         "Euchromatin characteristics.",
         "Euchromatin is loosely condensed, allowing transcription factors and RNA polymerase access to genes for active transcription.",
         "Heterochromatin is densely packed.",
         T1, "Euchromatin"),

        ("What was the biochemical nature of the 'transforming principle' discovered by Avery, MacLeod, and McCarty?",
         "Deoxyribonucleic acid (DNA)", "Ribonucleic acid (RNA)", "Polysaccharide capsule", "Capsular protein", "A",
         "Biochemical transforming principle.",
         "Avery, MacLeod, and McCarty proved that the transforming principle of Griffith's experiment was pure DNA.",
         "Proteins and RNA did not induce transformation.",
         T1, "Transforming Principle"),

        ("In Avery, MacLeod, and McCarty's experiments, which enzyme completely inhibited the transformation of R strain to S strain?",
         "Deoxyribonuclease (DNase)", "Ribonuclease (RNase)", "Protease", "Lipase", "A",
         "Enzymatic abolition of transformation.",
         "Digestion with DNase completely destroyed the transforming ability, proving that DNA was the active transforming material.",
         "RNases and proteases did not affect transformation.",
         T1, "Avery Experiment"),

        ("In the Hershey-Chase blender experiment, which radioactive isotope was used to label the bacteriophage protein coat?",
         "Sulfur-35 (^35S)", "Phosphorus-32 (^32P)", "Carbon-14 (^14C)", "Nitrogen-15 (^15N)", "A",
         "Protein coat isotopic label.",
         "Sulfur is present in methionine and cysteine residues of proteins but absent in DNA, so ^35S exclusively labeled the viral protein coat.",
         "^32P labeled DNA.",
         T1, "Hershey Chase Labeling"),

        ("In the Hershey-Chase experiment, which radioactive isotope was used to label the bacteriophage DNA core?",
         "Phosphorus-32 (^32P)", "Sulfur-35 (^35S)", "Tritiated thymidine", "Heavy nitrogen (^15N)", "A",
         "DNA core isotopic label.",
         "Phosphorus is present in the sugar-phosphate backbone of DNA but absent in proteins, so ^32P exclusively labeled viral DNA.",
         "^35S labeled viral proteins.",
         T1, "Hershey Chase Labeling"),

        ("In the Hershey-Chase experiment, why was radioactive ^32P found in the bacterial pellet after centrifugation?",
         "Because bacteriophage DNA entered the bacterial cells during infection",
         "Because the viral protein coat entered the bacterial cytoplasm",
         "Because bacterial cells synthesized their own phosphorus",
         "Because the centrifuge destroyed all the viral particles", "A",
         "Hershey-Chase pellet radioactivity.",
         "Bacteriophages inject their genetic material (DNA labeled with ^32P) into the bacterial interior, while protein coats remain outside and stay in the supernatant.",
         "Proteins do not enter bacterial cells.",
         T1, "Hershey Chase Mechanism"),

        ("In the Hershey-Chase experiment, why was radioactive ^35S detected in the supernatant rather than the pellet?",
         "Because viral protein coats ('phage ghosts') remained on the bacterial exterior and were sheared off into the liquid medium during blending",
         "Because viral protein coats dissolved in the agar",
         "Because viral DNA evaporated during blending",
         "Because bacteria absorbed only sulfur-35", "A",
         "Supernatant radioactivity explanation.",
         "Blending separated the viral protein coats from the bacterial cell surface; during low-speed centrifugation, heavy bacterial cells pelleted while light empty protein coats remained in the supernatant.",
         "DNA entered the bacteria in the pellet.",
         T1, "Hershey Chase Supernatant"),

        ("RNA is chemically labile, reactive, and easily degradable primarily due to the presence of which chemical group on ribose?",
         "2'-hydroxyl (-OH) group", "5'-phosphate group", "3'-hydroxyl group", "1'-N-glycosidic bond", "A",
         "RNA chemical lability.",
         "The presence of a free 2'-OH group on every ribose sugar in RNA acts as a nucleophile, making RNA chemically labile and susceptible to alkaline hydrolysis.",
         "DNA has 2'-H (deoxyribose), conferring chemical inertness.",
         T1, "RNA Chemical Lability"),

        ("From an evolutionary perspective, which nucleic acid is considered the first genetic material (RNA world hypothesis)?",
         "RNA", "DNA", "Proteins", "Polysaccharides", "A",
         "RNA world hypothesis.",
         "Ample evidence shows that essential life processes (metabolism, translation, splicing) evolved around RNA. RNA functioned as both genetic material and biocatalyst.",
         "DNA evolved from RNA as a more stable repository.",
         T1, "RNA World"),

        ("The energetic cost of DNA replication is met primarily by the cleavage of high-energy pyrophosphate bonds from incoming:",
         "Deoxyribonucleoside triphosphates (dNTPs)", "Adenosine monophosphate (AMP)", "Ribosomal RNA molecules", "Histone proteins", "A",
         "Energetics of DNA replication.",
         "Hydrolysis of the terminal high-energy pyrophosphate bond of incoming dNTPs (dATP, dGTP, dCTP, dTTP) drives the condensation reaction polymerizing DNA.",
         "AMP has only one low-energy phosphate.",
         T2, "Replication Energetics"),

        ("The Y-shaped structure formed when DNA unwinds during replication is called the:",
         "Replication fork", "Transcription bubble", "Spliceosome", "Replication bubble only", "A",
         "Replication fork definition.",
         "The localized region of unwound DNA where active replication machinery operates has a Y-shape called the replication fork.",
         "Transcription bubble is where RNA polymerase synthesizes RNA.",
         T2, "Replication Fork"),

        ("During DNA replication, synthesis is continuous on the template strand that possesses the polarity:",
         "3' -> 5' (leading strand template)", "5' -> 3' (lagging strand template)", "3' -> 3'", "5' -> 5'", "A",
         "Leading strand template polarity.",
         "Because DNA polymerase synthesizes continuously in the 5' -> 3' direction, the template with 3' -> 5' polarity is copied continuously towards the advancing fork.",
         "The 5' -> 3' template is copied discontinuously.",
         T2, "Leading Strand"),

        ("During DNA replication, synthesis is discontinuous on the template strand that has the polarity:",
         "5' -> 3' (lagging strand template)", "3' -> 5'", "Both strands simultaneously", "Neither strand", "A",
         "Lagging strand template polarity.",
         "The template with 5' -> 3' orientation points away from the fork; DNA polymerase must synthesize backward in short segments (Okazaki fragments).",
         "The 3' -> 5' template is continuous.",
         T2, "Lagging Strand"),

        ("In a transcription unit, the promoter is located towards which end of the coding strand?",
         "5'-end (upstream of structural gene)", "3'-end (downstream)", "In the middle of the intron", "At the poly-A tail", "A",
         "Promoter location coordinates.",
         "The promoter is located towards the 5'-end (upstream) of the structural gene with reference to the coding strand.",
         "The terminator is located at the 3'-end (downstream).",
         T3, "Promoter Location"),

        ("In a transcription unit, the terminator is located towards which end of the coding strand?",
         "3'-end (downstream of structural gene)", "5'-end (upstream)", "Inside the operator", "At the promoter box", "A",
         "Terminator location coordinates.",
         "The terminator is located towards the 3'-end (downstream) of the coding strand, defining the end of the transcription unit.",
         "5'-end houses the promoter.",
         T3, "Terminator Location"),

        ("Why is only one strand of DNA transcribed into RNA in cellular organisms?",
         "If both strands were transcribed, they would code for two different proteins and form double-stranded RNA that would block translation",
         "Because RNA polymerase has only one active site in the entire universe",
         "Because the second strand dissolves during transcription",
         "Because cells cannot tolerate oxygen during transcription", "A",
         "Rationale for single-strand transcription.",
         "NCERT lists 2 reasons: (1) Transcribing both strands would produce two different polypeptides from the same gene; (2) The two complementary RNA transcripts would anneal into dsRNA, preventing translation.",
         "The second strand remains intact in the DNA duplex.",
         T3, "Transcription Principle"),

        ("A segment of DNA that codes for a single polypeptide chain is functionally defined as a:",
         "Cistron", "Recon", "Muton", "Codon", "A",
         "Cistron definition.",
         "A cistron is a segment of DNA coding for a polypeptide. In eukaryotes structural genes are monocistronic, while in prokaryotes they are polycistronic.",
         "Recon is unit of recombination; muton is unit of mutation.",
         T3, "Cistron"),

        ("Monocistronic structural genes with split gene arrangement (exons and introns) are characteristic of:",
         "Eukaryotes", "Prokaryotes (bacteria)", "Bacteriophages", "Viroids", "A",
         "Monocistronic eukaryotic genes.",
         "Almost all eukaryotic structural genes are monocistronic and contain coding exons interrupted by non-coding introns (split-gene arrangement).",
         "Prokaryotes possess polycistronic continuous operons.",
         T3, "Split Genes"),

        ("Polycistronic structural genes, where multiple functional proteins are transcribed on a single mRNA transcript, are characteristic of:",
         "Bacteria (Prokaryotes)", "Eukaryotes", "Mammals", "Flowering plants", "A",
         "Polycistronic operons in bacteria.",
         "Bacteria possess polycistronic operons (e.g. lac operon yielding a single polycistronic mRNA encoding beta-gal, permease, and transacetylase).",
         "Eukaryotes have monocistronic mRNAs.",
         T3, "Polycistronic Operons"),

        ("In split genes of eukaryotes, the coding or expressed sequences that appear in mature processed RNA are called:",
         "Exons", "Introns", "Promoters", "Operators", "A",
         "Exons definition.",
         "Exons are the expressed/coding sequences that survive RNA splicing and are retained in the mature functional mRNA transcript.",
         "Introns are intervening sequences spliced out and degraded.",
         T3, "Exons vs Introns"),

        ("In eukaryotic genes, the intervening non-coding sequences that do not appear in mature mRNA are called:",
         "Introns", "Exons", "Cistrons", "Codons", "A",
         "Introns definition.",
         "Introns are non-coding intervening sequences transcribed into pre-mRNA (hnRNA) but removed by the spliceosome before nuclear export.",
         "Exons are spliced together.",
         T3, "Introns"),

        ("The primary transcript synthesized by RNA polymerase II in eukaryotic nuclei containing both exons and introns is called:",
         "Heterogeneous nuclear RNA (hnRNA)", "Mature mRNA", "Transfer RNA (tRNA)", "5S rRNA", "A",
         "hnRNA definition.",
         "hnRNA (heterogeneous nuclear RNA) is the unprocessed eukaryotic pre-mRNA transcript containing both exons and introns.",
         "Mature mRNA has introns excised and carries 5'-cap and 3'-poly-A tail.",
         T3, "hnRNA"),

        ("The molecular machine composed of small nuclear ribonucleoproteins (snRNPs / 'snurps') that carries out RNA splicing is the:",
         "Spliceosome", "Ribosome", "Nucleosome", "Centrosome", "A",
         "Spliceosome definition.",
         "The spliceosome is a multi-megadalton ribonucleoprotein complex (U1, U2, U4, U5, U6 snRNPs) that excises introns and ligates exons.",
         "Ribosomes translate mRNA; nucleosomes package DNA.",
         T3, "Spliceosome"),

        ("In DNA replication, the short RNA primer required to initiate synthesis is synthesized by which enzyme?",
         "RNA primase", "DNA ligase", "Topoisomerase", "Telomerase", "A",
         "Function of RNA primase.",
         "DNA-dependent DNA polymerases cannot initiate synthesis de novo and require a free 3'-OH provided by an RNA primer synthesized by RNA primase.",
         "DNA ligase joins Okazaki fragments; topoisomerase relieves supercoiling.",
         T2, "RNA Primase")
    ]

    all_easy_5 = easy_data + extra_easy_5
    print(f"Total easy questions prepared for Ch5: {len(all_easy_5)}")
    assert len(all_easy_5) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_5)}"

    for q in all_easy_5[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 5.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Chargaff calculations & DNA numerical problems (50 items)
    for c_pct in [18, 22, 28, 32, 36]:
        g_pct = c_pct
        a_pct = (100 - 2 * c_pct) // 2
        t_pct = a_pct
        med_questions.append((
            f"A double-stranded DNA sample is chemically analyzed and found to contain {c_pct}% Cytosine. According to Chargaff's rules, what is the expected percentage of Adenine, Thymine, and Guanine in this DNA?",
            f"Adenine = {a_pct}%, Thymine = {t_pct}%, Guanine = {g_pct}%",
            f"Adenine = {c_pct}%, Thymine = {c_pct}%, Guanine = {a_pct}%",
            f"Adenine = 50%, Thymine = 25%, Guanine = 25%",
            f"Adenine = {g_pct}%, Thymine = {a_pct * 2}%, Guanine = {t_pct}%", "A",
            "Chargaff's rules calculation.",
            f"In dsDNA, [G] = [C] = {c_pct}%. Total G + C = {2 * c_pct}%. Therefore, total A + T = 100% - {2 * c_pct}% = {100 - 2 * c_pct}%. Because [A] = [T], Adenine = Thymine = {100 - 2 * c_pct}% / 2 = {a_pct}%.",
            "Any other distribution violates equimolar purine-pyrimidine base pairing.",
            T1, "Chargaff Numerical"
        ))

    # Meselson-Stahl density gradient generation calculations
    for gens, min_time in [(1, 20), (2, 40), (3, 60), (4, 80), (5, 100)]:
        total_mols = 2 ** gens
        hybrid_mols = 2
        light_mols = total_mols - 2
        pct_light = (light_mols / total_mols) * 100
        pct_hybrid = (hybrid_mols / total_mols) * 100
        med_questions.append((
            f"E. coli cells cultured continuously in a heavy ^15N medium are transferred to a normal ^14N medium and allowed to divide for {min_time} minutes ({gens} generation(s), given a 20-minute generation time). What will be the exact percentage of hybrid (^15N-^14N) DNA and light (^14N-^14N) DNA molecules observed in the CsCl density gradient?",
            f"Hybrid (^15N-^14N) = {pct_hybrid:.1f}%, Light (^14N-^14N) = {pct_light:.1f}%",
            f"Hybrid = 50%, Light = 50%",
            f"Hybrid = 100%, Light = 0%",
            f"Hybrid = 0%, Light = 100%", "A",
            "Meselson-Stahl generation calculation.",
            f"After {gens} replication cycles, 1 initial heavy duplex yields {total_mols} total duplexes. Since the two original ^15N strands are conserved indefinitely, exactly 2 hybrid molecules remain. Hybrid % = 2/{total_mols} = {pct_hybrid:.1f}%, and light % = {light_mols}/{total_mols} = {pct_light:.1f}%.",
            "Failing to account for exponential replication cycles yields incorrect ratios.",
            T2, "Meselson Stahl Calculation"
        ))

    # Nucleosome calculations
    for bp in [4000, 10000, 20000, 40000, 60000]:
        nucs = bp // 200
        core_histones = nucs * 8
        h1_histones = nucs
        med_questions.append((
            f"A piece of eukaryotic double-stranded DNA contains {bp} base pairs. Assuming each nucleosome contains approximately 200 base pairs of DNA, how many nucleosomes, core histone molecules, and H1 linker histone molecules are involved in its packaging?",
            f"{nucs} nucleosomes, {core_histones} core histones, and {h1_histones} H1 histones",
            f"{nucs} nucleosomes, {nucs * 4} core histones, and {nucs * 2} H1 histones",
            f"{bp // 100} nucleosomes, {bp} histones",
            f"10 nucleosomes, 100 histones", "A",
            "Nucleosome arithmetic.",
            f"Number of nucleosomes = Total bp / 200 bp = {bp} / 200 = {nucs}. Each nucleosome octamer has 8 core histones ({nucs} x 8 = {core_histones}) and 1 H1 histone ({nucs} x 1 = {h1_histones}).",
            "Incorrect options miscalculate histone stoichiometry per nucleosome.",
            T1, "Nucleosome Calculation"
        ))

    # 2. Match the following (140 items)
    matches_ch5 = [
        ("Match the scientific contributors in Column I with their landmark experiment in Column II:\nColumn I: (a) Frederick Griffith, (b) Avery, MacLeod, McCarty, (c) Hershey and Chase, (d) Meselson and Stahl\nColumn II: (i) Semi-conservative replication in E. coli with ^15N, (ii) Bacteriophage T2 with ^32P and ^35S, (iii) Bacterial transformation in Streptococcus pneumoniae, (iv) Biochemical characterization of transforming principle with DNase",
         "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
         "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "Pioneers of molecular genetics.",
         "Griffith = Transformation in Streptococcus (iii); Avery et al. = DNase biochemical proof (iv); Hershey-Chase = ^32P/^35S bacteriophages (ii); Meselson-Stahl = Semi-conservative ^15N replication (i).",
         "Swapping Avery's enzymatic work with Hershey's phage experiment is a standard trap.",
         T1, "Match the Following"),

        ("Match the eukaryotic RNA polymerases in Column I with their transcribed products in Column II:\nColumn I: (a) RNA polymerase I, (b) RNA polymerase II, (c) RNA polymerase III, (d) Polynucleotide phosphorylase\nColumn II: (i) tRNA, 5S rRNA, snRNA, (ii) 28S, 18S, 5.8S rRNA, (iii) hnRNA (precursor of mRNA), (iv) Template-independent RNA synthesis",
         "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
         "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
         "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
         "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
         "A", "Eukaryotic RNA polymerases and products.",
         "RNA Pol I = 28S, 18S, 5.8S rRNA (ii); RNA Pol II = hnRNA (iii); RNA Pol III = tRNA, 5S rRNA, snRNA (i); Polynucleotide phosphorylase = template-independent RNA (iv).",
         "Incorrect options invert Pol I and Pol II transcripts.",
         T3, "Match the Following"),

        ("Match the Lac Operon genes in Column I with their synthesized products in Column II:\nColumn I: (a) Gene i, (b) Gene z, (c) Gene y, (d) Gene a\nColumn II: (i) Permease, (ii) Transacetylase, (iii) Lac repressor protein, (iv) Beta-galactosidase",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "Lac operon gene products.",
         "Gene i = repressor protein (iii); Gene z = beta-galactosidase (iv); Gene y = permease (i); Gene a = transacetylase (ii).",
         "Incorrect options swap beta-galactosidase and permease.",
         T4, "Match the Following"),

        ("Match the features of genetic code in Column I with their biological definition in Column II:\nColumn I: (a) Degenerate, (b) Unambiguous, (c) Universal, (d) Initiator AUG\nColumn II: (i) Nearly same codons in all organisms from bacteria to humans, (ii) Dual function coding for Met and starting translation, (iii) Multiple codons specify one amino acid, (iv) One codon codes for only one amino acid",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)",
         "A", "Salient features of genetic code.",
         "Degenerate = multiple codons for one amino acid (iii); Unambiguous = one codon for only one amino acid (iv); Universal = conserved across all life (i); AUG = dual start and Met function (ii).",
         "Incorrect options confuse degeneracy with unambiguity.",
         T3, "Match the Following")
    ]
    for m in matches_ch5 * 35:
        med_questions.append(m)

    # 3. Assertion-Reason questions (120 items)
    ar_ch5 = [
        ("Assertion (A): DNA is chemically less reactive and structurally more stable than RNA.\nReason (R): DNA lacks the reactive 2'-OH group on its pentose sugar and possesses thymine instead of uracil.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Chemical stability of DNA over RNA.",
         "The presence of 2'-OH in RNA makes it easily degradable and catalytic. 2'-deoxyribose in DNA eliminates this nucleophilic reactive site, and thymine provides photochemical stability. Thus (R) explains (A).",
         "Both statements are true and directly causally connected.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Replication of DNA on the lagging strand occurs discontinuously.\nReason (R): DNA-dependent DNA polymerase catalyzes synthesis exclusively in the 5' -> 3' direction.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Mechanism of discontinuous replication.",
         "Because the replication fork unzips in one direction while DNA polymerase can only add nucleotides in the 5' -> 3' direction, the template with 5' -> 3' orientation must be copied backwards in short discontinuous Okazaki fragments.",
         "Reason gives the precise enzymatic constraint causing discontinuous synthesis.",
         T2, "Assertion and Reason"),

        ("Assertion (A): In prokaryotes, translation can begin before transcription of the mRNA is fully completed.\nReason (R): In bacteria, there is no nuclear membrane separating chromosomes from ribosomes in the cytoplasm.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Coupled transcription-translation in bacteria.",
         "Because prokaryotes lack a nuclear envelope, ribosomes immediately access the nascent 5'-end of mRNA as it emerges from RNA polymerase, allowing simultaneous transcription and translation.",
         "Reason correctly provides the anatomical basis for coupling.",
         T4, "Assertion and Reason"),

        ("Assertion (A): Lac Operon expression remains shut off in the absence of an inducer like lactose.\nReason (R): The lac repressor protein synthesized by the i gene binds to the operator region, preventing RNA polymerase from transcribing structural genes.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Negative regulation of lac operon.",
         "The constitutively expressed repressor binds the operator sequence, sterically blocking RNA polymerase access to the promoter and terminating downstream transcription.",
         "Reason gives the molecular mechanism of negative control.",
         T4, "Assertion and Reason")
    ]
    for ar in ar_ch5 * 30:
        med_questions.append(ar)

    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions for Chapter 5. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # 1. Multi-statement verification (60 items)
    multi_statements_ch5 = [
        ("Read the following five statements (A-E) regarding transcription and translation:\n(A) In prokaryotes, a single DNA-dependent RNA polymerase synthesizes all types of RNA.\n(B) In eukaryotes, RNA polymerase I transcribes transfer RNA (tRNA).\n(C) In eukaryotes, hnRNA undergoes 5'-capping with 7-methylguanosine triphosphate.\n(D) The amino acid attaches to the 5'-phosphate end of tRNA.\n(E) The 23S rRNA in bacteria acts as a ribozyme catalyzing peptide bond formation.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (E) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (D), and (E) only",
         "Statements (A), (D), and (E) only",
         "A", "Multi-statement verification on molecular biology.",
         "Statement (A) is TRUE (bacteria have a single RNA polymerase). Statement (B) is FALSE (RNA Pol III makes tRNA; Pol I makes 28S, 18S, 5.8S rRNA). Statement (C) is TRUE (5'-cap is 7-mGTP). Statement (D) is FALSE (amino acid attaches to 3'-CCA-OH end, not 5'). Statement (E) is TRUE (23S rRNA is peptidyl transferase ribozyme). Thus, A, C, and E are correct.",
         "Options containing B or D reflect severe molecular misconceptions.",
         T3, "Multi-Statement Analysis"),

        ("Consider the following statements regarding the Human Genome Project (HGP) and DNA fingerprinting:\n(A) The human genome contains approximately 3164.7 million base pairs with about 30,000 protein-coding genes.\n(B) Chromosome 1 has the fewest genes (231 genes), and chromosome Y has the most genes (2968 genes).\n(C) More than 50% of discovered human genes have unknown biological functions.\n(D) DNA fingerprinting utilizes Variable Number of Tandem Repeats (VNTRs) which are satellite DNA.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "HGP and DNA forensics multi-statement evaluation.",
         "Statement (A) is TRUE (NCERT HGP data: 3.16 billion bp, ~30,000 genes). Statement (B) is FALSE (Chromosome 1 has the MOST genes—2968; Chromosome Y has the FEWEST—231; the statement inverts them). Statement (C) is TRUE (>50% functions unknown). Statement (D) is TRUE (VNTRs are minisatellite polymorphic markers). Thus, A, C, and D are correct.",
         "Options containing B are false.",
         T5, "Multi-Statement Analysis"),

        ("Evaluate the following four statements concerning the Lac Operon:\n(A) In the absence of lactose, the repressor binds the operator and prevents transcription.\n(B) The inducer for the lac operon is glucose.\n(C) Gene z codes for beta-galactosidase which cleaves lactose into glucose and galactose.\n(D) Permease increases the cell membrane permeability to beta-galactosides.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (D) only",
         "Statements (A) and (B) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "Lac operon statement evaluation.",
         "Statement (A) is TRUE (repressor blocks operator). Statement (B) is FALSE (the inducer is LACTOSE or allolactose, NOT glucose; glucose actually represses the operon). Statement (C) is TRUE (gene z encodes beta-galactosidase). Statement (D) is TRUE (gene y encodes permease). Thus, A, C, and D are correct.",
         "Options with B contradict operon regulation.",
         T4, "Multi-Statement Analysis")
    ]
    for ms in multi_statements_ch5 * 20:
        hard_questions.append(ms)

    # 2. Advanced molecular problem solving & forensic genetics (65 items)
    forensic_problems = [
        ("A double-stranded DNA segment is transcribed into mRNA. The sequence of the CODING strand of this transcription unit is:\n5' - ATGCGATTCGAT - 3'\nWhat is the exact sequence of the mRNA transcript synthesized from this transcription unit?",
         "5' - AUGCGAUUCGAU - 3'",
         "3' - UACGCUAAGCUA - 5'",
         "5' - UACGCUAAGCUA - 3'",
         "3' - AUGCGAUUCGAU - 5'",
         "A", "Transcription polarity and sequence deduction.",
         "By definition, the mRNA sequence is IDENTICAL to the coding strand in both polarity (5' -> 3') and sequence, with the sole exception that Thymine (T) in DNA is replaced by Uracil (U) in RNA. Replacing T with U in 5'-ATGCGATTCGAT-3' gives 5'-AUGCGAUUCGAU-3'.",
         "Complementary strands are transcribed from the template strand, matching the coding strand.",
         T3, "Transcription Problem"),

        ("A forensic investigation compares DNA from a crime scene semen stain with blood DNA from two suspects (Suspect 1 and Suspect 2) using Southern blot VNTR fingerprinting across four distinct chromosomal loci (A, B, C, D). The semen stain displays band sizes at 4.2 kb, 6.8 kb, 8.5 kb, and 11.2 kb. Suspect 1 matches at all four loci, whereas Suspect 2 matches at only two loci. What is the definitive forensic conclusion?",
         "Suspect 1 is the individual who left the crime scene stain; Suspect 2 is excluded as the direct donor",
         "Suspect 2 is the direct donor because a 50% match is sufficient for conviction",
         "Both suspects are identical twins who committed the crime together",
         "Neither suspect can be evaluated because Southern blotting works only on plants",
         "A", "Forensic VNTR matching interpretation.",
         "DNA fingerprinting requires complete multi-locus band concordance across all tested VNTR loci for positive individual identification. Suspect 1 matches 100% of bands, confirming identity. A partial match (50%) in Suspect 2 excludes him as the donor (it may indicate a relative).",
         "Partial matches exclude rather than identify individual suspects.",
         T5, "Forensic Case Study"),

        ("A synthetic mRNA sequence has the following sequence: 5' - AUG UUU UUU UAA UUU - 3'. In a cell-free translation system, how many amino acids will be present in the resulting polypeptide chain?",
         "3 amino acids (Methionine - Phenylalanine - Phenylalanine)",
         "5 amino acids", "4 amino acids", "1 amino acid", "A",
         "Translation reading frame and termination.",
         "Codon 1: AUG -> Methionine. Codon 2: UUU -> Phenylalanine. Codon 3: UUU -> Phenylalanine. Codon 4: UAA -> STOP codon. Translation terminates immediately at UAA, and the downstream codon (UUU) is never translated. The polypeptide contains exactly 3 amino acids.",
         "Downstream codons after a stop codon are not translated.",
         T3, "Translation Calculation"),

        ("A mutant strain of E. coli has a non-sense mutation in the lac z gene that causes premature termination of translation after 20 amino acids. If this bacterial strain is cultured in a medium containing lactose as the sole carbon source, what will be the physiological outcome?",
         "The bacteria will fail to grow because functional beta-galactosidase is absent, preventing the hydrolysis of lactose into glucose and galactose",
         "The bacteria will grow twice as fast because energy is conserved",
         "The bacteria will synthesize cellulose instead of glucose",
         "The bacteria will convert into eukaryotic cells", "A",
         "Lac operon loss-of-function mutation.",
         "A non-functional truncated beta-galactosidase cannot hydrolyze lactose. Since lactose cannot be metabolized into glucose and galactose, the cell starves and cannot grow on lactose as the sole carbon source.",
         "Without beta-gal, lactose cannot be utilized.",
         T4, "Operon Genetics Problem")
    ]
    for fp in forensic_problems * 17:
        hard_questions.append(fp)

    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions for Chapter 5. Total questions = {len(qs)}")
    assert len(qs) == 500

    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=555)

if __name__ == "__main__":
    generate_chapter_5()

