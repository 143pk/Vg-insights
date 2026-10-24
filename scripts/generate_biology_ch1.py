#!/usr/bin/env python3
import json
import os
import sys

# Script to generate 500 NCERT MCQs for Sexual Reproduction in Flowering Plants
# Difficulty target: 125 Easy, 250 Medium, 125 Hard

CHAPTER_ID = "sexual-repro-flowering-plants"
CHAPTER_TITLE = "Sexual Reproduction in Flowering Plants"
SUBJECT = "Biology"
CLASS_LEVEL = "12"

TOPICS = [
    {
        "id": "bio-microsporogenesis-megasporogenesis",
        "title": "Microsporogenesis & Megasporogenesis",
        "subtopics": [
            "Stamen & Anther Structure",
            "Microsporangium Wall Layers",
            "Tapetum Cytology & Functions",
            "Microsporogenesis & Pollen Tetrad",
            "Pollen Grain Structure & Wall (Exine & Intine)",
            "Vegetative & Generative Cells (2-celled vs 3-celled shedding)",
            "Pollen Allergies & Economic Products",
            "Pollen Viability & Cryopreservation",
            "Pistil (Gynoecium) Morphology (Syncarpous vs Apocarpous)",
            "Ovule Anatomy (Megasporangium, Funicle, Hilum, Integuments, Micropyle, Chalaza, Nucellus)",
            "Megasporogenesis & Monosporic Development",
            "7-Celled 8-Nucleate Embryo Sac (Polygonum Type)",
            "Egg Apparatus & Filiform Apparatus Functions",
            "Antipodal Cells & Central Cell Polar Nuclei"
        ]
    },
    {
        "id": "bio-pollination-double-fertilization",
        "title": "Pollination & Double Fertilization",
        "subtopics": [
            "Autogamy & Chasmogamous vs Cleistogamous Flowers",
            "Geitonogamy: Genetic vs Functional Nature",
            "Xenogamy (True Cross-Pollination)",
            "Outbreeding Devices (Dichogamy, Herkogamy, Heterostyly)",
            "Self-Incompatibility Mechanism",
            "Monoecy vs Dioecy (Castor, Maize vs Papaya, Date Palm)",
            "Abiotic Pollination: Anemophily (Wind Pollination)",
            "Abiotic Pollination: Hydrophily (Vallisneria, Hydrilla, Zostera)",
            "Water Hyacinth & Water Lily Insect/Wind Pollination Trap",
            "Biotic Pollination: Entomophily (Insect Pollination) & Floral Rewards",
            "Special Pollination: Yucca-Pronuba Moth Mutualism & Amorphophallus",
            "Pollen Robbers / Nectar Thieves",
            "Pollen-Pistil Interaction & Chemotropic Tube Growth",
            "Artificial Hybridization (Emasculation & Bagging)",
            "Entry of Pollen Tube into Ovule & Synergid",
            "Double Fertilisation: Syngamy & Triple Fusion",
            "Ploidy Levels (Zygote vs PEN vs Aleurone vs Antipodals)"
        ]
    },
    {
        "id": "bio-endosperm-apomixis",
        "title": "Endosperm, Seed & Apomixis",
        "subtopics": [
            "Free Nuclear vs Cellular Endosperm Development",
            "Tender Coconut Water vs White Kernel Anatomy",
            "Non-Endospermic (Exalbuminous) Seeds (Pea, Bean, Groundnut)",
            "Endospermic (Albuminous) Seeds (Castor, Maize, Wheat, Barley)",
            "Embryogeny Stages: Proembryo, Globular, Heart-shaped, Torpedo",
            "Dicot Embryo Structure (Cotyledons, Epicotyl, Plumule, Hypocotyl, Radicle)",
            "Monocot (Grass) Embryo Structure (Scutellum, Coleoptile, Coleorhiza, Epiblast)",
            "Seed Coat Structure (Testa & Tegmen) & Micropyle Function",
            "Perisperm: Remnant Persistent Nucellus (Black Pepper, Beet)",
            "Fruit Types: True Fruits vs False Fruits (Apple, Pear, Strawberry, Cashew)",
            "Parthenocarpic Fruits (Banana, Auxin/Gibberellin Induction)",
            "Seed Dormancy, Dehydration & Storage Adaptations",
            "Seed Viability Records: Lupinus arcticus & Phoenix dactylifera",
            "Apomixis Mechanism & Agricultural Importance",
            "Polyembryony (Nucellar Adventive Embryony in Citrus & Mango)"
        ]
    }
]

print(f"Loaded schema definition for {CHAPTER_TITLE}")
