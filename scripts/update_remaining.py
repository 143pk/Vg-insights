with open('src/components/chapterwiseMcqsComponent.ts') as f:
    text = f.read()

# 1. Replace remaining isUnitsAndMeasurements
text = text.replace(
    'isUnitsAndMeasurements\n                      ? `',
    'isPopulatedChapter\n                      ? `'
)

# 2. Replace remaining isUnits
text = text.replace(
    'isUnits\n                ? `',
    'isPopulated\n                ? `'
)

# 3. Replace in check answer block
old_check_answer = """      const qId = btn.getAttribute('data-check-answer');
      if (!qId) return;

      const allQuestions = ChapterwiseMcqService.getQuestions('units-measurements');
      const questionData = allQuestions.find(item => item.id === qId);
      if (!questionData) return;

      const progress = ChapterwiseMcqService.getProgress('units-measurements');"""

new_check_answer = """      const qId = btn.getAttribute('data-check-answer');
      if (!qId) return;

      const currentChapterId = engineState.chapterId || 'units-measurements';
      const allQuestions = ChapterwiseMcqService.getQuestions(currentChapterId);
      const questionData = allQuestions.find(item => item.id === qId);
      if (!questionData) return;

      const progress = ChapterwiseMcqService.getProgress(currentChapterId);"""

assert old_check_answer in text, "old_check_answer not found!"
text = text.replace(old_check_answer, new_check_answer)

with open('src/components/chapterwiseMcqsComponent.ts', 'w') as f:
    f.write(text)

print("Remaining updates applied successfully!")
