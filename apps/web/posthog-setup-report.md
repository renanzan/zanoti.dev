<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into zanoti.dev (Next.js 16 App Router). PostHog was already partially wired (posthog-js installed, reverse proxy in next.config.ts, and several capture() calls), so the wizard focused on completing the missing foundation and broadening event coverage.

**Changes made:**

- **`instrumentation-client.ts`** (new) — Initialises PostHog using the recommended Next.js 15.3+ pattern. Configured with `api_host: "/ingest"` (reverse proxy already in place), `capture_exceptions: true` for automatic error tracking, and `defaults: "2026-01-30"`.
- **`apps/web/.env`** — Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` via the wizard-tools MCP (values never written directly to code).
- **`src/app/(site)/_layout/Navigation/NavIcon.tsx`** — Added optional `onClick` prop to support PostHog tracking from the parent Navbar.
- **`src/app/(site)/_layout/Navigation/Navbar.tsx`** — Added `social_link_clicked` capture for all social icons in the navbar (Twitter, GitHub), with `platform`, `destination`, and `location` properties.
- **`src/app/(site)/_layout/FooterSocialLinks.tsx`** (new client component) — Renders the footer social links (Twitter, GitHub) with `social_link_clicked` capture and `location: "footer"`.
- **`src/app/(site)/_layout/FooterGithubLink.tsx`** (new client component) — Renders the "veja a atualização recente no GitHub" link with `github_source_clicked` capture.
- **`src/app/(site)/_layout/Footer.tsx`** — Replaced inline social links and LastUpdate anchor with the new client components above (server component preserved; only interactive leaves converted to client).
- **`src/components/QuickAccess/QuickAccessContext.tsx`** — Added `quick_access_opened` capture with `trigger: "keyboard_shortcut"` when the `Q` key shortcut fires, complementing the existing button-trigger capture in `QuickAccessButton.tsx`.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `contact_cta_clicked` | User clicked "Entrar em contato" CTA in the hero section | `src/app/(site)/_ui/Hero/HeroCta.tsx` *(pre-existing)* |
| `resume_link_clicked` | User clicked the CURRICULO.pdf resume link | `src/app/(site)/_ui/Hero/HeroCta.tsx` *(pre-existing)* |
| `theme_changed` | User changed the site theme (light / dark / system) | `src/components/FloatingThemeButton.tsx` *(pre-existing)* |
| `quick_access_opened` | User opened the Quick Access panel — via button | `src/components/QuickAccess/QuickAccessButton.tsx` *(pre-existing)* |
| `quick_access_opened` | User opened the Quick Access panel — via keyboard shortcut (`Q`) | `src/components/QuickAccess/QuickAccessContext.tsx` *(added)* |
| `quick_access_search_performed` | User typed a search query in Quick Access | `src/components/QuickAccess/QuickAccessPanel.tsx` *(pre-existing)* |
| `quick_access_item_selected` | User selected an item from Quick Access | `src/components/QuickAccess/QuickAccessPanel.tsx` *(pre-existing)* |
| `social_link_clicked` | User clicked a social link (Twitter or GitHub) in the navbar | `src/app/(site)/_layout/Navigation/Navbar.tsx` *(added)* |
| `social_link_clicked` | User clicked a social link (Twitter or GitHub) in the footer | `src/app/(site)/_layout/FooterSocialLinks.tsx` *(added)* |
| `github_source_clicked` | User clicked the "veja a atualização recente no GitHub" footer link | `src/app/(site)/_layout/FooterGithubLink.tsx` *(added)* |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics:** https://us.posthog.com/project/320607/dashboard/1299193
- 📈 **Portfolio Conversion: Contact & Resume** — https://us.posthog.com/project/320607/insights/g73WqlaQ
- 🔽 **Quick Access Engagement Funnel** — https://us.posthog.com/project/320607/insights/zA2kOpxi
- 🔗 **Social & GitHub Outbound Clicks by Platform** — https://us.posthog.com/project/320607/insights/UcsuU0Jl
- 🎨 **Theme Preference Distribution** — https://us.posthog.com/project/320607/insights/fD86KL0L
- ⌨️ **Quick Access: Trigger Method (Button vs Keyboard)** — https://us.posthog.com/project/320607/insights/G8HAfv78

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
