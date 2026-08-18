import katex from 'katex'

/**
 * Global Textbook Formula Renderer for VG NEET Library
 * Guarantees ZERO raw LaTeX commands in student-facing UI.
 * Renders mathematical/chemical expressions using KaTeX, clean HTML, and Unicode symbols.
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
  if (!formulaStr) return ''
  let s = String(formulaStr).trim();

  // Strip enclosing $...$ or \(...\)
  if ((s.startsWith('$') && s.endsWith('$')) || (s.startsWith('\\(') && s.endsWith('\\)'))) {
    s = s.replace(/^\$|^\\\(|\$|\\\)$/g, '').trim();
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
  s = s.replace(/\\mu\b/g, '\\mu');
  s = s.replace(/\\pi\b/g, '\\pi');
  s = s.replace(/\\theta\b/g, '\\theta');
  s = s.replace(/\\rho\b/g, '\\rho');
  s = s.replace(/\\sigma\b/g, '\\sigma');
  s = s.replace(/\\tau\b/g, '\\tau');
  s = s.replace(/\\omega\b/g, '\\omega');
  s = s.replace(/\\Omega\b/g, '\\Omega');
  s = s.replace(/\\phi\b/g, '\\phi');
  s = s.replace(/\\eta\b/g, '\\eta');
  s = s.replace(/\\epsilon\b/g, '\\epsilon');
  s = s.replace(/\\infty\b/g, '\\infty');
  s = s.replace(/\\pm\b/g, '\\pm');

  // 8. Operators & Relations
  s = s.replace(/\\times\b/g, '\\times');
  s = s.replace(/\\cdot\b/g, '\\cdot');
  s = s.replace(/\\approx\b/g, '\\approx');
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

  // 11. Units
  s = s.replace(/\|?kJ\s*mol\^{-1}|\|?kJ\s*mol-1|\|?kJ\/mol/gi, '\\text{ kJ mol}^{-1}');
  s = s.replace(/\|?g\s*mol\^{-1}|\|?g\s*mol-1|\|?g\/mol/gi, '\\text{ g mol}^{-1}');
  s = s.replace(/\|?L\s*mol\^{-1}|\|?L\s*mol-1|\|?L\/mol/gi, '\\text{ L mol}^{-1}');
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
  if (!text) return ''
  let s = String(text).trim();

  // Strip $...$
  s = s.replace(/\$([^\$]+)\$/g, '$1');

  // 1. Remove \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...}
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+(?:text|mathrm|mathbf|mathit)\{([^{}]+)\}/g, '$1');
  }

  // 2. Convert fractions \frac{num}{den} -> (num / den)
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+frac\{([^{}]+)\}\{([^{}]+)\}/g, (match, num, den) => {
      let n = num.trim();
      let d = den.trim();
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
  s = s.replace(/\\mu\b/g, 'μ');
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
export function renderFormulaHTML(formulaStr: string | undefined | null): string {
  if (!formulaStr) return ''
  const str = String(formulaStr).trim();
  if (!str) return ''

  const latex = toKaTeXLatex(str);

  try {
    const renderedMath = katex.renderToString(latex, {
      displayMode: true,
      throwOnError: false,
    });

    // Verify if KaTeX produced non-empty visible output
    const visibleText = renderedMath
      .replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/gi, '')
      .replace(/<[^>]*>/g, '')
      .trim();

    if (visibleText.length > 0) {
      return `<div class="math-formula-box">${renderedMath}</div>`;
    }
  } catch (err) {
    console.warn('KaTeX formula render error, using fallback:', err);
  }

  // Safe Fallback: Clean HTML/Unicode representation
  const fallbackText = formatSubSupFallback(str);
  return `<div class="math-formula-box"><span class="math-term">${fallbackText}</span></div>`;
}

/**
 * Render inline text (for explanations, steps, descriptions, practice questions, PYQs).
 * Processes $...$ math blocks with KaTeX and converts explicit backslashed LaTeX commands (\Delta, \rightarrow, etc.)
 * while PRESERVING ordinary prose 100% intact!
 */
export function renderInlineMathHTML(text: string | undefined | null): string {
  if (!text) return ''
  let s = String(text);

  // 1. Process explicit $...$ or \(...\) math blocks with KaTeX
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

  // 2. Strip \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...} wrappers
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+(?:text|mathrm|mathbf|mathit)\{([^{}]+)\}/g, '$1');
  }

  // 3. Convert fractions \frac{num}{den} -> num / den
  for (let i = 0; i < 5; i++) {
    s = s.replace(/\\+frac\{([^{}]+)\}\{([^{}]+)\}/g, (match, num, den) => {
      let cleanNum = num.trim();
      let cleanDen = den.trim();
      if (cleanNum.includes(' + ') || cleanNum.includes(' - ')) cleanNum = `(${cleanNum})`;
      if (cleanDen.includes(' + ') || cleanDen.includes(' - ')) cleanDen = `(${cleanDen})`;
      return `${cleanNum} / ${cleanDen}`;
    });
  }

  // 4. Square roots \sqrt{...}
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');

  // 5. Convert Greek letters and math symbols
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

  // 6. Convert Ionic Charges, Superscripts, and Subscripts
  s = s.replace(/\^\{2\+\}|\^2\+/g, '²⁺').replace(/\^\{3\+\}|\^3\+/g, '³⁺').replace(/\^\+|\^\{\+\}/g, '⁺');
  s = s.replace(/\^\{2\-\}|\^2\-/g, '²⁻').replace(/\^\{3\-\}|\^3\-/g, '³⁻').replace(/\^\-|\^\{\-\}/g, '⁻');
  s = s.replace(/\^\{([0-9]+)\}/g, (_, d) => d.split('').map((c: string) => SUP_MAP[c] || c).join(''));
  s = s.replace(/\^([0-9])/g, (_, d) => SUP_MAP[d] || d);

  s = s.replace(/_\{([0-9]+)\}/g, (_, d) => d.split('').map((c: string) => SUB_MAP[c] || c).join(''));
  s = s.replace(/_([0-9])/g, (_, d) => SUB_MAP[d] || d);
  s = s.replace(/_\{([a-zA-Z0-9_\-\s\.]+)\}/g, '<sub>$1</sub>');

  // 7. Units
  s = s.replace(/\|?kJ\s*mol\^{-1}|\|?kJ\s*mol-1/gi, 'kJ mol⁻¹');
  s = s.replace(/\|?g\s*mol\^{-1}|\|?g\s*mol-1/gi, 'g mol⁻¹');
  s = s.replace(/\|?L\s*mol\^{-1}|\|?L\s*mol-1/gi, 'L mol⁻¹');

  // 8. Clean leftover isolated backslashes from simple tokens
  s = s.replace(/\\([a-zA-Z]+)/g, '$1');

  return s;
}
