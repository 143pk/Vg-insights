import json
import os
import sys

OUT_DIR = "/app/applet/src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

TOPIC_TITLES = {
    "bio-living-biodiversity": "What is Living? & Biodiversity",
    "bio-classification-taxonomy": "Need for Classification & Taxonomy",
    "bio-species-hierarchy": "Concept of Species & Taxonomical Hierarchy",
    "bio-nomenclature-systematics": "Binomial Nomenclature & Systematics"
}

def format_ts_file(part_num, questions):
    content = 'import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n'
    content += f'export const LIVING_WORLD_PART{part_num}_MCQS: ChapterwiseMCQ[] = [\n'
    for q in questions:
        content += f'  {json.dumps(q, indent=2)},\n'
    content += '];\n'
    return content

print("Helper ready.")
