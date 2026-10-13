# Careers Application Environment Variables

The careers application flow uses a backend-ready service layer in `src/app/services/career-application-service.ts`.

## Supported Environment Variable

- `VITE_CAREERS_APPLICATION_API_URL`
  - Optional.
  - If set, job applications are submitted as `POST` JSON requests to this endpoint.
  - If missing, the app falls back to local development storage mode.

## Security Guidance

- Do not expose secret credentials in client-side environment variables.
- Any `VITE_*` variable is included in browser bundles and is public.
- Keep API keys and private integrations on a secure backend.
