import katex from 'katex';

/**
 * Global Textbook Mathematical Formula Renderer for VG NEET Library
 * Guarantees ZERO raw LaTeX syntax in student-facing UI.
 * Renders mathematical/chemical expressions using KaTeX with automatic fallback to Unicode/HTML.
 */

const SUB_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
};

const SUP_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
};

/**
 * Converts any formula string or pseudo-LaTeX into clean, valid LaTeX for KaTeX rendering
 */
export function toKaTeXLatex(formulaStr: string): string {
  if (!formulaStr) return '';
  let s = String(formulaStr).trim();

  // Strip enclosing $$...$$, $...$, \(...\), \[...\]
  if (s.startsWith('$$') && s.endsWith('$$')) {
    s = s.slice(2, -2).trim();
  } else if (s.startsWith('\\[') && s.endsWith('\\]')) {
    s = s.slice(2, -2).trim();
  } else if (s.startsWith('$') && s.endsWith('$')) {
    s = s.slice(1, -1).trim();
  } else if (s.startsWith('\\(') && s.endsWith('\\)')) {
    s = s.slice(2, -2).trim();
  }

  // 1. Escape unescaped percent signs % -> \% (Prevents KaTeX from treating % as a LaTeX comment!)
  s = s.replace(/(^|[^\\])%/g, '$1\\%');

  // 2. Fix text-mode accents like \^ and degree symbols
  s = s.replace(/\\\^circ|\\\^\{\circ\}|\^circ|\^\circ|°/g, '^{\\circ}');
  s = s.replace(/\\\^/g, '^');

  // 3. Handle multi-line equations with \\ or \newline
  if ((s.includes('\\\\') || s.includes('\\newline')) && !s.includes('\\begin{')) {
    const lines = s.split(/\\\\|\\newline/).map(l => l.trim()).filter(Boolean);
    s = '\\begin{aligned} ' + lines.join(' \\\\ ') + ' \\end{aligned}';
  }

  // 4. Square roots
  s = s.replace(/√\(([^()]+)\)/g, '\\sqrt{$1}').replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');
  s = s.replace(/\\sqrt\(([^()]+)\)/g, '\\sqrt{$1}');

  // 5. Normalize \text{}, \mathrm{}, \mathbf{}, \mathit{}
  s = s.replace(/\\+(?:text|mathrm|mathbf|mathit)\{([^{}]+)\}/g, '\\text{$1}');

  // 6. Normalize arrows and implies
  s = s.replace(/\\(?:rightarrow|longrightarrow|to)\b|->/g, '\\rightarrow ');
  s = s.replace(/\\rightleftharpoons\b|<->|<=>/g, '\\rightleftharpoons ');
  s = s.replace(/\\implies\b|=>/g, '\\Rightarrow ');
  s = s.replace(/\\xrightarrow\{([^{}]+)\}/g, '\\xrightarrow{$1} ');

  // 7. Normalize Greek letters & common math symbols
  s = s.replace(/\\Delta\b/g, '\\Delta');
  s = s.replace(/\\delta\b/g, '\\delta');
  s = s.replace(/\\sum\b/g, '\\sum');
  s = s.replace(/\\int\b/g, '\\int');
  s = s.replace(/\\alpha\b/g, '\\alpha');
  s = s.replace(/\\beta\b/g, '\\beta');
  s = s.replace(/\\gamma\b/g, '\\gamma');
  s = s.replace(/\\lambda\b/g, '\\lambda');
  s = s.replace(/\\nu\b/g, '\\nu');
  s = s.replace(/\\mu_0\b|\\mu_\{0\}/g, '\\mu_0');
  s = s.replace(/\\mu\b/g, '\\mu');
  s = s.replace(/\\varepsilon_0\b|\\varepsilon_\{0\}/g, '\\varepsilon_0');
  s = s.replace(/\\varepsilon\b/g, '\\varepsilon');
  s = s.replace(/\\epsilon\b/g, '\\varepsilon');
  s = s.replace(/\\pi\b/g, '\\pi');
  s = s.replace(/\\theta\b/g, '\\theta');
  s = s.replace(/\\rho\b/g, '\\rho');
  s = s.replace(/\\sigma\b/g, '\\sigma');
  s = s.replace(/\\tau\b/g, '\\tau');
  s = s.replace(/\\omega\b/g, '\\omega');
  s = s.replace(/\\Omega\b/g, '\\Omega');
  s = s.replace(/\\phi\b/g, '\\phi');
  s = s.replace(/\\eta\b/g, '\\eta');
  s = s.replace(/\\infty\b/g, '\\infty');
  s = s.replace(/\\pm\b/g, '\\pm');

  // 8. Operators & Relations
  s = s.replace(/\\times\b/g, '\\times');
  s = s.replace(/\\cdot\b/g, '\\cdot');
  s = s.replace(/\\approx\b/g, '\\approx');
  s = s.replace(/\\propto\b/g, '\\propto');
  s = s.replace(/\\ge(?:q)?\b|>=/g, '\\ge');
  s = s.replace(/\\le(?:q)?\b|<=/g, '\\le');
  s = s.replace(/\\quad\b/g, '\\quad ');
  s = s.replace(/\\qquad\b/g, '\\qquad ');

  // 9. Convert Unicode subscripts/superscripts to standard LaTeX
  s = s.replace(/₁/g, '_1').replace(/₂/g, '_2').replace(/₃/g, '_3').replace(/₄/g, '_4')
       .replace(/₅/g, '_5').replace(/₆/g, '_6').replace(/₇/g, '_7').replace(/₈/g, '_8')
       .replace(/₉/g, '_9').replace(/₀/g, '_0').replace(/ₙ/g, '_n').replace(/ᵢ/g, '_i')
       .replace(/ᵣ/g, '_{\\text{r}}').replace(/⁺/g, '^+').replace(/⁻/g, '^-')
       .replace(/¹/g, '^1').replace(/²/g, '^2').replace(/³/g, '^3');

  // 10. Chemical States (aq), (g), (l), (s)
  s = s.replace(/\((aq|g|l|s)\)/gi, '\\text{($1)}');

  // 11. Units & constants
  s = s.replace(/\|?kJ\s*mol\^{-1}|\|?kJ\s*mol-1|\|?kJ\/mol/gi, '\\text{ kJ mol}^{-1}');
  s = s.replace(/\|?g\s*mol\^{-1}|\|?g\s*mol-1|\|?g\/mol/gi, '\\text{ g mol}^{-1}');
  s = s.replace(/\|?L\s*mol\^{-1}|\|?L\s*mol-1|\|?L\/mol/gi, '\\text{ L mol}^{-1}');
  s = s.replace(/\|?J\s*K\^{-1}\s*mol\^{-1}/gi, '\\text{ J K}^{-1}\\text{mol}^{-1}');
  s = s.replace(/\|?BM\b/g, '\\text{ BM}');
  s = s.replace(/\|?MeV\b/g, '\\text{ MeV}');

  // 12. Logs & fractions
  s = s.replace(/\\log_\{?10\}?/g, '\\log_{10}');
  s = s.replace(/\\log_\{?e\}?/g, '\\ln');
  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$1}{$2}');

  return s;
}

/**
 * Fallback plaintext/unicode formatter if KaTeX ever fails or produces empty output.
 * Strips ALL raw LaTeX tokens and returns clean text/Unicode/subscripts.
 */
export function formatSubSupFallback(text: string): string {
  if (!text) return '';
  let s = String(text).trim();

  // Strip $...$, $$...$$, \(...\), \[...\]
  s = s.replace(/\$\$([^\$]+)\$\$/g, '$1');
  s = s.replace(/\$([^\$]+)\$/g, '$1');
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, '$1');
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$1');

  // 1. Remove \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...}
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+(?:text|mathrm|mathbf|mathit)\{([^{}]+)\}/g, '$1');
  }

  // 2. Convert fractions \frac{num}{den} -> (num / den)
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+frac\{([^{}]+)\}\{([^{}]+)\}/g, (_, num, den) => {
      const n = num.trim();
      const d = den.trim();
      return `(${n} / ${d})`;
    });
  }

  // 3. Greek letters & Math symbols
  s = s.replace(/\\Delta\b/g, 'Δ');
  s = s.replace(/\\delta\b/g, 'δ');
  s = s.replace(/\\sum\b/g, 'Σ');
  s = s.replace(/\\alpha\b/g, 'α');
  s = s.replace(/\\beta\b/g, 'β');
  s = s.replace(/\\gamma\b/g, 'γ');
  s = s.replace(/\\lambda\b/g, 'λ');
  s = s.replace(/\\nu\b/g, 'ν');
  s = s.replace(/\\mu_0\b|\\mu_\{0\}/g, 'μ₀');
  s = s.replace(/\\mu\b/g, 'μ');
  s = s.replace(/\\varepsilon_0\b|\\varepsilon_\{0\}/g, 'ε₀');
  s = s.replace(/\\varepsilon\b|\\epsilon\b/g, 'ε');
  s = s.replace(/\\pi\b/g, 'π');
  s = s.replace(/\\theta\b/g, 'θ');
  s = s.replace(/\\rho\b/g, 'ρ');
  s = s.replace(/\\sigma\b/g, 'σ');
  s = s.replace(/\\tau\b/g, 'τ');
  s = s.replace(/\\omega\b/g, 'ω');
  s = s.replace(/\\Omega\b/g, 'Ω');
  s = s.replace(/\\approx\b/g, '≈');
  s = s.replace(/\\propto\b/g, '∝');
  s = s.replace(/\\ge(?:q)?\b|>=/g, '≥');
  s = s.replace(/\\le(?:q)?\b|<=/g, '≤');
  s = s.replace(/\\times\b/g, '×');
  s = s.replace(/\\cdot\b/g, '·');
  s = s.replace(/\\quad\b/g, ' ');
  s = s.replace(/\\qquad\b/g, '  ');
  s = s.replace(/\\(?:rightarrow|longrightarrow|to)\b/g, '→');
  s = s.replace(/\\implies\b/g, '⇒');
  s = s.replace(/\\rightleftharpoons\b/g, '⇌');
  s = s.replace(/\^circ|\^\circ|°/g, '°');
  s = s.replace(/\\(?:dots|ldots|cdots)/g, '...');
  s = s.replace(/\\log_\{10\}|\\log_10/g, 'log₁₀');
  s = s.replace(/\\log\b/g, 'log');
  s = s.replace(/\\ln\b/g, 'ln');

  // 4. Charges, Subscripts & Superscripts
  s = s.replace(/\^\{2\+\}|\^2\+/g, '²⁺').replace(/\^\{3\+\}|\^3\+/g, '³⁺').replace(/\^\+|\^\{\+\}/g, '⁺');
  s = s.replace(/\^\{2\-\}|\^2\-/g, '²⁻').replace(/\^\{3\-\}|\^3\-/g, '³⁻').replace(/\^\-|\^\{\-\}/g, '⁻');
  s = s.replace(/\^\{([0-9]+)\}/g, (_, d) => d.split('').map((c: string) => SUP_MAP[c] || c).join(''));
  s = s.replace(/\^([0-9])/g, (_, d) => SUP_MAP[d] || d);

  s = s.replace(/_\{([0-9]+)\}/g, (_, d) => d.split('').map((c: string) => SUB_MAP[c] || c).join(''));
  s = s.replace(/_([0-9])/g, (_, d) => SUB_MAP[d] || d);
  s = s.replace(/_\{([a-zA-Z0-9_\-\s\.]+)\}/g, '$1');

  // Strip remaining backslashes
  s = s.replace(/\\+/g, '');

  return s;
}

/**
 * Global Formula Card HTML Renderer
 * Creates textbook equation layouts using KaTeX with automatic fallback to Unicode/HTML.
 * GUARANTEES that a formula card NEVER renders as a blank rectangle!
 */
export function renderFormulaHTML(formulaStr: string | undefined | null, options: { displayMode?: boolean } = {}): string {
  if (!formulaStr) return '';
  const str = String(formulaStr).trim();
  if (!str) return '';

  const displayMode = options.displayMode !== false;
  const latex = toKaTeXLatex(str);

  try {
    const renderedMath = katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
    });

    // Verify if KaTeX produced non-empty visible output
    const visibleText = renderedMath
      .replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/gi, '')
      .replace(/<[^>]*>/g, '')
      .trim();

    if (visibleText.length > 0) {
      return `<div class="math-formula-box" data-math-rendered="true">${renderedMath}</div>`;
    }
  } catch (err) {
    console.warn('KaTeX formula render error, using fallback:', err);
  }

  // Safe Fallback: Clean HTML/Unicode representation
  const fallbackText = formatSubSupFallback(str);
  if (!fallbackText) return '';
  return `<div class="math-formula-box" data-math-rendered="true"><span class="math-term">${fallbackText}</span></div>`;
}

/**
 * Render inline text (for explanations, steps, descriptions, practice questions, PYQs).
 * Processes $...$ math blocks with KaTeX and converts explicit backslashed LaTeX commands (\Delta, \rightarrow, etc.)
 * while PRESERVING ordinary prose 100% intact!
 */
export function renderInlineMathHTML(text: string | undefined | null): string {
  if (!text) return '';
  let s = String(text);

  // 1. Process explicit $$...$$ display math blocks
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, mathStr) => {
    try {
      const rendered = katex.renderToString(toKaTeXLatex(mathStr), { displayMode: true, throwOnError: false });
      const visibleText = rendered
        .replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim();

      if (visibleText.length > 0) {
        return rendered;
      }
      return formatSubSupFallback(mathStr);
    } catch {
      return formatSubSupFallback(mathStr);
    }
  });

  // 2. Process explicit $...$ or \(...\) inline math blocks with KaTeX
  s = s.replace(/\$([^\$]+)\$/g, (_, mathStr) => {
    try {
      const rendered = katex.renderToString(toKaTeXLatex(mathStr), { displayMode: false, throwOnError: false });
      const visibleText = rendered
        .replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim();

      if (visibleText.length > 0) {
        return rendered;
      }
      return formatSubSupFallback(mathStr);
    } catch {
      return formatSubSupFallback(mathStr);
    }
  });

  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_, mathStr) => {
    try {
      const rendered = katex.renderToString(toKaTeXLatex(mathStr), { displayMode: false, throwOnError: false });
      return rendered || formatSubSupFallback(mathStr);
    } catch {
      return formatSubSupFallback(mathStr);
    }
  });

  // 3. Strip \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...} wrappers in remaining text
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+(?:text|mathrm|mathbf|mathit)\{([^{}]+)\}/g, '$1');
  }

  // 4. Convert fractions \frac{num}{den} -> num / den
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+frac\{([^{}]+)\}\{([^{}]+)\}/g, (_, num, den) => {
      let cleanNum = num.trim();
      let cleanDen = den.trim();
      if (cleanNum.includes(' + ') || cleanNum.includes(' - ')) cleanNum = `(${cleanNum})`;
      if (cleanDen.includes(' + ') || cleanDen.includes(' - ')) cleanDen = `(${cleanDen})`;
      return `${cleanNum} / ${cleanDen}`;
    });
  }

  // 5. Square roots \sqrt{...}
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');

  // 6. Convert Greek letters and math symbols
  s = s.replace(/\\Delta\b/g, 'Δ');
  s = s.replace(/\\delta\b/g, 'δ');
  s = s.replace(/\\sum\b/g, 'Σ');
  s = s.replace(/\\int\b/g, '∫');
  s = s.replace(/\\alpha\b/g, 'α');
  s = s.replace(/\\beta\b/g, 'β');
  s = s.replace(/\\gamma\b/g, 'γ');
  s = s.replace(/\\lambda\b/g, 'λ');
  s = s.replace(/\\nu\b/g, 'ν');
  s = s.replace(/\\mu_0\b|\\mu_\{0\}/g, 'μ₀');
  s = s.replace(/\\mu\b/g, 'μ');
  s = s.replace(/\\varepsilon_0\b|\\varepsilon_\{0\}/g, 'ε₀');
  s = s.replace(/\\varepsilon\b|\\epsilon\b/g, 'ε');
  s = s.replace(/\\pi\b/g, 'π');
  s = s.replace(/\\theta\b/g, 'θ');
  s = s.replace(/\\rho\b/g, 'ρ');
  s = s.replace(/\\sigma\b/g, 'σ');
  s = s.replace(/\\tau\b/g, 'τ');
  s = s.replace(/\\omega\b/g, 'ω');
  s = s.replace(/\\Omega\b/g, 'Ω');
  s = s.replace(/\\phi\b/g, 'φ');
  s = s.replace(/\\eta\b/g, 'η');
  s = s.replace(/\\infty\b/g, '∞');
  s = s.replace(/\\pm\b/g, '±');
  s = s.replace(/\\approx\b/g, '≈');
  s = s.replace(/\\propto\b/g, '∝');
  s = s.replace(/\\ge(?:q)?\b/g, '≥');
  s = s.replace(/\\le(?:q)?\b/g, '≤');
  s = s.replace(/\\times\b/g, '×');
  s = s.replace(/\\cdot\b/g, '·');
  s = s.replace(/\\(?:rightarrow|longrightarrow|to)\b/g, '→');
  s = s.replace(/\\rightleftharpoons\b/g, '⇌');
  s = s.replace(/\\implies\b/g, '⇒');
  s = s.replace(/\^circ|\^\circ/g, '°');
  s = s.replace(/\\(?:dots|ldots|cdots)/g, '...');
  s = s.replace(/\\log_\{10\}|\\log_10/g, 'log₁₀');
  s = s.replace(/\\log\b/g, 'log');
  s = s.replace(/\\ln\b/g, 'ln');
  s = s.replace(/\\degree\b/g, '°');

  // 7. Convert Ionic Charges, Superscripts, and Subscripts
  s = s.replace(/\^\{2\+\}|\^2\+/g, '²⁺').replace(/\^\{3\+\}|\^3\+/g, '³⁺').replace(/\^\+|\^\{\+\}/g, '⁺');
  s = s.replace(/\^\{2\-\}|\^2\-/g, '²⁻').replace(/\^\{3\-\}|\^3\-/g, '³⁻').replace(/\^\-|\^\{\-\}/g, '⁻');
  s = s.replace(/\^\{([0-9]+)\}/g, (_, d) => d.split('').map((c: string) => SUP_MAP[c] || c).join(''));
  s = s.replace(/\^([0-9])/g, (_, d) => SUP_MAP[d] || d);

  s = s.replace(/_\{([0-9]+)\}/g, (_, d) => d.split('').map((c: string) => SUB_MAP[c] || c).join(''));
  s = s.replace(/_([0-9])/g, (_, d) => SUB_MAP[d] || d);
  s = s.replace(/_\{([a-zA-Z0-9_\-\s\.]+)\}/g, '<sub>$1</sub>');

  // 8. Units
  s = s.replace(/\|?kJ\s*mol\^{-1}|\|?kJ\s*mol-1/gi, 'kJ mol⁻¹');
  s = s.replace(/\|?g\s*mol\^{-1}|\|?g\s*mol-1/gi, 'g mol⁻¹');
  s = s.replace(/\|?L\s*mol\^{-1}|\|?L\s*mol-1/gi, 'L mol⁻¹');

  // 9. Clean leftover isolated backslashes from simple tokens
  s = s.replace(/\\([a-zA-Z]+)/g, '$1');

  return s;
}

/**
 * Global renderMath function:
 * Scans the container (defaults to document.body) and renders all mathematical expressions
 * using KaTeX, removing broken/empty formula states and preventing raw LaTeX flashes.
 */
export function renderMath(rootElement?: HTMLElement | Document | null): void {
  if (typeof document === 'undefined') return;
  const container = rootElement || document.body;
  if (!container) return;

  // 1. Process all elements with [data-latex] or .katex-render-target
  const targetedElements = container.querySelectorAll<HTMLElement>('.katex-render-target, [data-latex]');
  targetedElements.forEach((el) => {
    if (el.getAttribute('data-math-rendered') === 'true') return;

    const rawLatex = el.getAttribute('data-latex') || el.textContent || '';
    const isDisplay = el.getAttribute('data-display') === 'true' || el.classList.contains('block') || el.tagName === 'DIV';

    if (!rawLatex || !rawLatex.trim()) {
      el.style.display = 'none';
      return;
    }

    try {
      const latex = toKaTeXLatex(decodeURIComponent(rawLatex));
      katex.render(latex, el, {
        displayMode: isDisplay,
        throwOnError: false,
      });
      el.setAttribute('data-math-rendered', 'true');
    } catch {
      el.innerHTML = formatSubSupFallback(rawLatex);
      el.setAttribute('data-math-rendered', 'true');
    }
  });

  // 2. Process .formula-passage-target elements that may contain unrendered LaTeX or empty boxes
  const passageTargets = container.querySelectorAll<HTMLElement>('.formula-passage-target');
  passageTargets.forEach((el) => {
    if (el.getAttribute('data-math-rendered') === 'true') return;

    // If already contains rendered KaTeX html
    if (el.querySelector('.katex')) {
      el.setAttribute('data-math-rendered', 'true');
      return;
    }

    const text = el.textContent?.trim() || '';
    if (!text) {
      el.style.display = 'none';
      return;
    }

    // Check if text looks like LaTeX or math expression
    if (text.includes('\\') || text.includes('^') || text.includes('_') || text.includes('=') || text.includes('+')) {
      try {
        const latex = toKaTeXLatex(text);
        katex.render(latex, el, {
          displayMode: true,
          throwOnError: false,
        });
        el.setAttribute('data-math-rendered', 'true');
      } catch {
        el.innerHTML = formatSubSupFallback(text);
        el.setAttribute('data-math-rendered', 'true');
      }
    }
  });

  // 3. Process unrendered .math-formula-box elements
  const formulaBoxes = container.querySelectorAll<HTMLElement>('.math-formula-box:not([data-math-rendered="true"])');
  formulaBoxes.forEach((el) => {
    if (el.querySelector('.katex')) {
      el.setAttribute('data-math-rendered', 'true');
      return;
    }

    const text = el.textContent?.trim() || '';
    if (!text) {
      el.style.display = 'none';
      return;
    }

    try {
      const latex = toKaTeXLatex(text);
      katex.render(latex, el, {
        displayMode: true,
        throwOnError: false,
      });
      el.setAttribute('data-math-rendered', 'true');
    } catch {
      el.innerHTML = `<span class="math-term">${formatSubSupFallback(text)}</span>`;
      el.setAttribute('data-math-rendered', 'true');
    }
  });

  // 4. Scan for any raw unrendered LaTeX strings in paragraphs or code elements
  // e.g. text containing $...$, \frac{, \Delta, E_{\text{cell}}
  const candidateTexts = container.querySelectorAll<HTMLElement>('p, span.font-mono, div.font-mono');
  candidateTexts.forEach((el) => {
    if (el.getAttribute('data-math-scanned') === 'true' || el.querySelector('.katex') || el.closest('.katex')) {
      return;
    }

    const html = el.innerHTML;
    // Check if contains math indicators like $, $$, \frac, \text{, \Delta, \times, \log_{10}
    if (
      html.includes('$') ||
      html.includes('\\frac') ||
      html.includes('\\text{') ||
      html.includes('E_{\\text{cell}}') ||
      html.includes('\\Delta') ||
      html.includes('\\log_{10}') ||
      html.includes('\\rightarrow')
    ) {
      // Check if it's a standalone raw formula without dollar signs
      if (!html.includes('$') && html.includes('\\frac')) {
        try {
          const latex = toKaTeXLatex(el.textContent || '');
          katex.render(latex, el, {
            displayMode: false,
            throwOnError: false,
          });
          el.setAttribute('data-math-rendered', 'true');
        } catch {
          el.innerHTML = renderInlineMathHTML(html);
        }
      } else {
        el.innerHTML = renderInlineMathHTML(html);
      }
      el.setAttribute('data-math-scanned', 'true');
    }
  });
}

/**
 * Automatically observes the DOM for dynamic content changes and renders mathematical expressions.
 */
let mathObserverInitialized = false;
let mathDebounceTimer: number | null = null;

export function initMathAutoRender(): void {
  if (typeof window === 'undefined' || typeof MutationObserver === 'undefined') return;
  if (mathObserverInitialized) return;
  mathObserverInitialized = true;

  const observer = new MutationObserver((mutations) => {
    let shouldRender = false;
    for (const m of mutations) {
      if (m.type === 'childList' && m.addedNodes.length > 0) {
        for (let i = 0; i < m.addedNodes.length; i++) {
          const node = m.addedNodes[i];
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            // Ignore mutations that happen inside KaTeX itself
            if (!el.classList?.contains('katex') && !el.classList?.contains('katex-html')) {
              shouldRender = true;
              break;
            }
          }
        }
      }
      if (shouldRender) break;
    }

    if (shouldRender) {
      if (mathDebounceTimer) {
        window.clearTimeout(mathDebounceTimer);
      }
      mathDebounceTimer = window.setTimeout(() => {
        renderMath(document.body);
      }, 40);
    }
  });

  const root = document.getElementById('root') || document.body;
  if (root) {
    observer.observe(root, {
      childList: true,
      subtree: true,
    });
  }
}

