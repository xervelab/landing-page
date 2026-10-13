# Get Started Onboarding Environment Variables

The `/get-started` onboarding flow uses a client-side service layer located at `src/app/services/onboarding-service.ts`.

## Supported Environment Variables

- `VITE_ONBOARDING_API_URL`
  - Optional.
  - When set, onboarding submissions are sent as `POST` JSON requests to this endpoint.
  - When not set, submissions are written to browser `localStorage` in fallback mode for development.

## Security Notes

- Do not place private API keys or secrets in Vite client environment variables.
- `VITE_*` values are embedded in browser-accessible bundles.
- Use a backend endpoint that handles secure credentials server-side.

## QA Simulation Controls

For testing API/network failure behavior without backend changes, the service checks browser localStorage key:

- Key: `xervelab:onboarding:simulate`
- Values:
  - `api-failure`
  - `network-failure`
  - any other value (or missing key) = normal behavior

Example in browser console:

```js
localStorage.setItem("xervelab:onboarding:simulate", "api-failure")
```

Reset:

```js
localStorage.removeItem("xervelab:onboarding:simulate")
```
