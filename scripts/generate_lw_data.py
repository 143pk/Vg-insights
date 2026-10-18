import json
import os

# We will generate 500 unique MCQs for The Living World
# Part 1: 1..125 (Easy)
# Part 2: 126..250 (Medium)
# Part 3: 251..375 (Medium)
# Part 4: 376..500 (Hard)

TOPIC_MAP = {
    "living": ("bio-living-biodiversity", "What is Living? & Biodiversity"),
    "taxonomy": ("bio-classification-taxonomy", "Need for Classification & Taxonomy"),
    "hierarchy": ("bio-species-hierarchy", "Concept of Species & Taxonomical Hierarchy"),
    "nomenclature": ("bio-nomenclature-systematics", "Binomial Nomenclature & Systematics")
}

print("Generator script scaffold created.")
