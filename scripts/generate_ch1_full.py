import json
import os

OUT_DIR = "src/data/chapterwise/biology"
os.makedirs(OUT_DIR, exist_ok=True)

CHAPTER_ID = "sexual-repro-flowering-plants"
CHAPTER_TITLE = "Sexual Reproduction in Flowering Plants"
SUBJECT = "Biology"
CLASS_LEVEL = "12"

T1 = {"topic": "Microsporogenesis & Megasporogenesis", "topicId": "bio-microsporogenesis-megasporogenesis"}
T2 = {"topic": "Pollination & Double Fertilization", "topicId": "bio-pollination-double-fertilization"}
T3 = {"topic": "Endosperm, Seed & Apomixis", "topicId": "bio-endosperm-apomixis"}

# We will build an array of 500 questions:
# 1-125: Easy
# 126-375: Medium
# 376-500: Hard
questions = []

