with open('src/components/chapterwiseMcqsComponent.ts') as f:
    text = f.read()

updates = [
    (
        "if (chapterId === 'units-measurements') {",
        "if (chapterId === 'units-measurements' || chapterId === 'motion-straight-line') {"
    ),
    (
        "const allQuestions = ChapterwiseMcqService.getQuestions('units-measurements');\n  const checkedMap = progress.checkedQuestions || {};\n  let attemptedCount = 0;",
        "const allQuestions = ChapterwiseMcqService.getQuestions(progress.chapterId || engineState.chapterId || 'units-measurements');\n  const checkedMap = progress.checkedQuestions || {};\n  let attemptedCount = 0;"
    ),
    (
        """<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
              Chapter 1
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Total Questions: 150
            </span>""",
        """<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
              Chapter ${chapterId === 'motion-straight-line' ? '2' : '1'}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Total Questions: ${totalQuestions}
            </span>"""
    ),
    (
        """<h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Units and Measurements
          </h1>""",
        """<h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            ${chapterId === 'motion-straight-line' ? 'Motion in a Straight Line' : 'Units and Measurements'}
          </h1>"""
    ),
    (
        "const isUnitsAndMeasurements = chapter.id === 'units-measurements';",
        "const isPopulatedChapter = chapter.id === 'units-measurements' || chapter.id === 'motion-straight-line';"
    ),
    (
        """isUnitsAndMeasurements
                      ? `
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      ✓ 500 MCQs Ready
                    </span>
                  `""",
        """isPopulatedChapter
                      ? `
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      ✓ 500 MCQs Ready
                    </span>
                  `"""
    ),
    (
        "<span>${isUnitsAndMeasurements ? 'Start Practice' : 'MCQ Practice'}</span>",
        "<span>${isPopulatedChapter ? 'Start Practice (500)' : 'MCQ Practice'}</span>"
    ),
    (
        "const isUnits = id === 'units-measurements';",
        "const isPopulated = id === 'units-measurements' || id === 'motion-straight-line';"
    ),
    (
        """isUnits
                ? `
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                ✓ 500 MCQs Ready
              </span>
            `""",
        """isPopulated
                ? `
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                ✓ 500 MCQs Ready
              </span>
            `"""
    ),
    (
        "<span>${isUnits ? 'Start Practice (150)' : 'MCQ Practice'}</span>",
        "<span>${isPopulated ? 'Start Practice (500)' : 'MCQ Practice'}</span>"
    ),
    (
        "appContent.innerHTML = renderUnitsPracticeEngine('units-measurements');",
        "appContent.innerHTML = renderUnitsPracticeEngine(engineState.chapterId || 'units-measurements');"
    ),
    (
        "const progress = ChapterwiseMcqService.getProgress('units-measurements');\n      // If question is already checked",
        "const currentChapterId = engineState.chapterId || 'units-measurements';\n      const progress = ChapterwiseMcqService.getProgress(currentChapterId);\n      // If question is already checked"
    ),
    (
        "ChapterwiseMcqService.saveDraftSelection('units-measurements', qId, optKey);",
        "ChapterwiseMcqService.saveDraftSelection(engineState.chapterId || 'units-measurements', qId, optKey);"
    ),
    (
        "const allQuestions = ChapterwiseMcqService.getQuestions('units-measurements');\n      const questionData = allQuestions.find(item => item.id === qId);\n      if (!questionData) return;\n      const progress = ChapterwiseMcqService.getProgress('units-measurements');",
        "const currentChapterId = engineState.chapterId || 'units-measurements';\n      const allQuestions = ChapterwiseMcqService.getQuestions(currentChapterId);\n      const questionData = allQuestions.find(item => item.id === qId);\n      if (!questionData) return;\n      const progress = ChapterwiseMcqService.getProgress(currentChapterId);"
    ),
    (
        "const checkResult = ChapterwiseMcqService.checkAnswer('units-measurements', qId, chosenOption);",
        "const checkResult = ChapterwiseMcqService.checkAnswer(currentChapterId, qId, chosenOption);"
    ),
    (
        "ChapterwiseMcqService.resetProgress('units-measurements');",
        "ChapterwiseMcqService.resetProgress(engineState.chapterId || 'units-measurements');"
    ),
    (
        "const isNowBookmarked = ChapterwiseMcqService.toggleBookmark('units-measurements', qId);",
        "const isNowBookmarked = ChapterwiseMcqService.toggleBookmark(engineState.chapterId || 'units-measurements', qId);"
    ),
    (
        "showResetToast('Chapter reset to fresh! All tested questions reset to zero (0/150).');",
        "showResetToast('Chapter reset to fresh! All tested questions reset to zero (0/500).');"
    )
]

for i, (old, new) in enumerate(updates):
    if old not in text:
        print(f'Update {i} FAILED: old string not found:\n{repr(old[:60])}')
    else:
        text = text.replace(old, new, 1)
        print(f'Update {i} SUCCESS')

with open('src/components/chapterwiseMcqsComponent.ts', 'w') as f:
    f.write(text)
print('Saved updated src/components/chapterwiseMcqsComponent.ts')
