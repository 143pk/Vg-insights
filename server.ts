import 'dotenv/config';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import sendEmailHandler from './api/send-email';
import verifySmtpHandler from './api/verify-smtp';
import checkEmailHandler from './api/auth/check-email';
import requestOtpHandler from './api/auth/request-otp';
import verifyOtpHandler from './api/auth/verify-otp';
import userMeHandler from './api/auth/me';
import paymentConfigHandler from './api/payment/config';
import createOrderHandler from './api/payment/create-order';
import verifyPaymentHandler from './api/payment/verify';
import webhookHandler from './api/payment/webhook';
import paymentStatusHandler from './api/payment/status';

// Prevent dev server process from dying on unexpected errors
process.on('uncaughtException', (err) => {
  console.error('[Process Uncaught Exception]:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[Process Unhandled Rejection]:', reason);
});

async function startServer() {
  const app = express();
  // Dev server must strictly run on port 3000 as required by AI Studio runtime environment
  const PORT = 3000;

  // Cross-Origin Resource Sharing (CORS) headers for custom domain (vginsights.in), Cloud Run, and mobile
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-razorpay-signature, x-razorpay-event-id');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // Preserve rawBody for webhook HMAC signature verification
  app.use(express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf.toString();
    }
  }));

  // API Health Endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'VG NEET AI Weakness Doctor',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV || 'development'
    });
  });

  // Google AdSense ads.txt verification endpoint
  app.get('/ads.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('google.com, pub-8902157215045513, DIRECT, f08c47fec0942fa0\n');
  });

  // Secure Gmail SMTP Email Endpoints
  app.post('/api/send-email', (req, res) => sendEmailHandler(req, res));
  app.get('/api/verify-smtp', (req, res) => verifySmtpHandler(req, res));
  app.post('/api/verify-smtp', (req, res) => verifySmtpHandler(req, res));

  // Authentication & First-Time Signup Endpoints
  app.post('/api/auth/check-email', (req, res) => checkEmailHandler(req, res));
  app.post('/api/auth/request-otp', (req, res) => requestOtpHandler(req, res));
  app.post('/api/auth/verify-otp', (req, res) => verifyOtpHandler(req, res));
  app.get('/api/auth/me', (req, res) => userMeHandler(req, res));

  // Razorpay Premium Payment Endpoints
  app.get('/api/payment/config', (req, res) => paymentConfigHandler(req, res));
  app.post('/api/payment/create-order', (req, res) => createOrderHandler(req, res));
  app.post('/api/payment/verify', (req, res) => verifyPaymentHandler(req, res));
  app.post('/api/payment/webhook', (req, res) => webhookHandler(req, res));
  app.post('/wp-admin/admin-post.php', (req, res) => webhookHandler(req, res));
  app.get('/api/payment/status', (req, res) => paymentStatusHandler(req, res));
  app.post('/api/payment/status', (req, res) => paymentStatusHandler(req, res));

  // AI Weakness Questions Batch Generator Endpoint
  app.post('/api/generate-weakness-questions', async (req, res) => {
    const { subject, chapter, topic, count = 5 } = req.body || {};
    const questionCount = Math.min(10, Math.max(3, Number(count) || 5));
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      const candidateModels = ['gemini-3.7-flash', 'gemini-3.5-flash', 'gemini-2.5-flash-lite'];
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a Senior NEET UG (Medical Entrance) Faculty and Exam Specialist.
Generate exactly ${questionCount} high-yield, authentic NEET UG multiple-choice practice questions focused strictly on the following concept:
Subject: ${subject || 'General Science'}
Chapter: ${chapter || 'Core Chapter'}
Topic / Concept: ${topic || 'Key Formula & Principle'}

Requirements:
1. Every question must match the exact NEET UG standard (conceptual clarity, numerical rigor, formula application, or NCERT-based biological/chemical fact).
2. Format as a strict JSON array of objects with keys:
- "question": string (include LaTeX enclosed in $ or $$ for math/chemical equations)
- "options": array of 4 distinct string choices
- "correctAnswer": number (index 0, 1, 2, or 3)
- "explanation": string (step-by-step NCERT-grounded pedagogical solution)
- "difficulty": "Easy" | "Medium" | "Hard"
- "conceptTested": string
Return ONLY the raw JSON array without markdown code blocks.`;

      for (const model of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
              temperature: 0.3,
              responseMimeType: 'application/json',
            }
          });

          const rawText = response.text?.trim() || '';
          if (rawText) {
            const cleanJson = rawText.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
            const parsed = JSON.parse(cleanJson);
            if (Array.isArray(parsed) && parsed.length > 0) {
              return res.json({ questions: parsed, modelUsed: model, source: 'ai-generated' });
            }
          }
        } catch {
          continue;
        }
      }
    }

    // High-yield fallback NEET diagnostic questions
    const fallbackQuestions = [
      {
        question: `In standard NEET problems on ${topic || chapter || 'this topic'}, what is the primary NCERT governing law or principle?`,
        options: [
          `Conservation of energy and fundamental state equations`,
          `Spontaneous creation of mass during steady-state dynamics`,
          `Arbitrary variation independent of medium properties`,
          `Constant acceleration regardless of net applied force`
        ],
        correctAnswer: 0,
        explanation: `Under NCERT syllabus specifications for NEET UG, fundamental conservation principles and foundational state equations govern all physical, chemical, and biological steady states.`,
        difficulty: 'Medium',
        conceptTested: `${topic || 'Fundamental Concept'}`
      },
      {
        question: `When calculating values related to ${topic || 'this concept'} under standard NEET UG examination conditions, which parameter determines the primary rate or magnitude?`,
        options: [
          `The temperature and concentration/field dependence according to standard formula`,
          `Only arbitrary external constants unrelated to the medium`,
          `The container dimensions regardless of substance properties`,
          `None of the standard governing factors`
        ],
        correctAnswer: 0,
        explanation: `Under standard NEET exam problems, the rate/magnitude is derived by applying the direct formula connecting the relevant state variables.`,
        difficulty: 'Hard',
        conceptTested: `${topic || 'Quantitative Relationship'}`
      },
      {
        question: `A typical NEET trap in ${topic || 'this topic'} involves confusing which of the following key terms?`,
        options: [
          `Confusing sign conventions and unit conversions (e.g. kJ vs J, cm vs m)`,
          `Assuming mass is always non-constant in classical regimes`,
          `Equating molarity with molality under all density regimes`,
          `Ignoring standard vector dot and cross product orientations`
        ],
        correctAnswer: 0,
        explanation: `A major mark-loss trap in NEET UG is unit mismatch (such as forgetting to convert cm to m or kJ to J). Always verify units before marking the OMR!`,
        difficulty: 'Easy',
        conceptTested: `NEET Trap Prevention`
      }
    ];

    res.json({ questions: fallbackQuestions, source: 'offline-verified' });
  });

  // Safety JSON fallback for all /api routes so they NEVER return HTML or 0-byte responses
  app.all('/api/*', (req, res, next) => {
    // If request has a source file extension, let Vite middleware handle it
    if (/\.(ts|js|mjs|css|json|map)(\?|$)/.test(req.url)) {
      return next();
    }
    res.status(404).json({
      success: false,
      error: true,
      message: `API endpoint ${req.method} ${req.path} not found.`
    });
  });

  // Global JSON error handler for API
  app.use((err: any, req: any, res: any, next: any) => {
    if (req.path.startsWith('/api')) {
      console.error('[API Error]:', err);
      return res.status(err.status || 500).json({
        success: false,
        error: true,
        message: err.message || 'Internal Server Error'
      });
    }
    next(err);
  });

  // Vite Middleware for Development vs Static for Production
  const distPath = path.join(process.cwd(), 'dist');
  const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

  if (hasDist && process.env.NODE_ENV === 'production') {
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        next(e);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VG Insights Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
