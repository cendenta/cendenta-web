import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://855e8e250aa947bc80484767dde24cd0@o424032.ingest.sentry.io/6396679',
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV || 'development',
  release: process.env.SENTRY_RELEASE,
  tracesSampleRate: process.env.SENTRY_SAMPLE_RATE || 0.5,
});
