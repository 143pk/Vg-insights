import json
import os
import sys

# Directory setup
OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

TOPIC_CONFIG = {
    "bio-living-biodiversity": {
        "title": "What is Living? & Biodiversity",
        "subtopics": [
            "Defining vs Non-defining Characteristics of Life",
            "Growth in Living vs Non-living Beings",
            "Reproduction Modes & Sterile Organisms",
            "Metabolism & In Vitro Metabolic Reactions",
            "Cellular Organisation as Defining Feature",
            "Consciousness & Environmental Stimuli",
            "Photoperiod & Seasonal Breeders",
            "Biodiversity & Range of Known Species"
        ]
    },
    "bio-classification-taxonomy": {
        "title": "Need for Classification & Taxonomy",
        "subtopics": [
            "Need for Biological Classification",
            "Taxonomy Processes: Characterisation & Identification",
            "Taxonomy Processes: Nomenclature & Classification",
            "Classical Taxonomy vs Modern Biosystematics",
            "Concept of Taxon vs Category",
            "Taxonomic Keys: Couplets and Leads",
            "Herbarium Techniques & Standards",
            "Botanical Gardens, Museums & Zoological Parks",
            "Flora, Manuals, Monographs & Catalogues"
        ]
    },
    "bio-species-hierarchy": {
        "title": "Concept of Species & Taxonomical Hierarchy",
        "subtopics": [
            "Linnaean Obligate Taxonomic Hierarchy",
            "Trend of Common Characteristics Across Ranks",
            "Ernst Mayr's Biological Species Concept",
            "Genus: Monotypic vs Polytypic Genera",
            "Family: Vegetative vs Reproductive Criteria",
            "Order: Floral Characters in Plant Orders",
            "Class & Phylum / Division Distinctions",
            "NCERT Table 1.1: Man (Homo sapiens)",
            "NCERT Table 1.1: Housefly (Musca domestica)",
            "NCERT Table 1.1: Mango (Mangifera indica)",
            "NCERT Table 1.1: Wheat (Triticum aestivum)"
        ]
    },
    "bio-nomenclature-systematics": {
        "title": "Binomial Nomenclature & Systematics",
        "subtopics": [
            "Origin and Meaning of Systematics (Systema)",
            "Linnaeus Publications: Systema Naturae & Species Plantarum",
            "International Nomenclature Codes (ICBN, ICZN, ICNB)",
            "Binomial Nomenclature: Latin Origin & Typography",
            "Binomial Nomenclature: Generic Name & Specific Epithet",
            "Author Citation Rules & Roman Font Standards",
            "Tautonyms: Validity in Zoology vs Botany",
            "Principle of Priority & Historical Starting Dates",
            "Type Method: Holotype, Isotype, Lectotype, Neotype"
        ]
    }
}

print("Config loaded successfully.")
