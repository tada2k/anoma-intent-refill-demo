# Anoma Intent Refill — Demo (Static Prototype)

A **pure front-end** UX prototype that demonstrates intent-centric flow:

**Compose intent → Simulate solve (mechanism, fee, MEV risk, route) → Simulate settlement**  
Everything is simulated in the browser (no wallet, no backend).

## Run locally
Just open `index.html` in a browser.

## Quick publish
### CodeSandbox
1. Go to https://codesandbox.io → Create Sandbox → **Upload folder**  
2. Drop the folder with these files → open `index.html` → “Open in new tab”.

### GitHub + Vercel
1. Create an empty repo, push these 5 files to root.  
2. Vercel → Add New Project → Import from GitHub → Framework = **Other/Static** → deploy.  
3. It will serve `index.html` at root.

## What it shows
- **Intent composer**: target chain, asset, amount, destination, privacy, max slippage, time bound, fee rule.
- **Proposed intent JSON** (copyable).
- **Solve simulation**: mechanism (batch auction / sealed-bid / RFQ), ETA, fee estimate, MEV risk, match score, candidate route steps.
- **Settlement simulation**: succeed/fail with human-readable reasons based on constraints.

> This is a **presentation prototype** for community review. It reflects Anoma’s *intent → discovery → solve → settle* idea and constraint-first UX. No real execution.