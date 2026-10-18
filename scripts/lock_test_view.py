with open('src/components/weeklyMockComponent.ts', 'r', encoding='utf-8') as f:
    code = f.read()

target = '  public static renderTestView(mockId: string): string {'
replacement = """  public static renderTestView(mockId: string): string {
    if (!PaymentService.isWeeklyMockAllowed()) {
      return `
        <div class="max-w-3xl mx-auto space-y-6 pb-12 pt-6">
          ${PricingComponent.renderLockPrompt({
            badgeText: 'Pro Exclusive • Weekly NEET Mock',
            title: 'Weekly Mock Tests are Completely Locked for Free Users',
            description: 'Upgrade to VG Insights Pro to take the full 180-question, 720-mark simulated NEET UG mock test with detailed analytics, step-by-step solutions, and AI mistake diagnostic sync.'
          })}
          <div class="text-center">
            <a href="#weekly-mock" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Mock Overview
            </a>
          </div>
        </div>
      `;
    }"""

if target in code and 'Weekly Mock Tests are Completely Locked' not in code:
    code = code.replace(target, replacement, 1)
    with open('src/components/weeklyMockComponent.ts', 'w', encoding='utf-8') as f:
        f.write(code)
    print('TEST_VIEW_LOCKED')
