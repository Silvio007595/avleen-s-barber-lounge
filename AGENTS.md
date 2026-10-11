<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the barbershop's public presentation on the index route with in-page service and contact sections; all booking actions open WhatsApp rather than claiming an internal booking system.
- Define visual roles and responsive presentation in the global design system, with reusable Button variants for calls to action, to keep the brand consistent.
- Keep published service prices in a browser-safe shared data module with concrete source-table tests; preserve ambiguous entries rather than inventing service distinctions.
