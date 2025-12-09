---
title: "Building JFinder: Because Downloading Papers One by One Sucks"
date: 2025-01-31
updated: 2025-12-09
---

**Update (December 2025):** JFinder v2 is here! Check out [what's new](#whats-new-in-v2) below.

---

You know what's really annoying? Trying to download research papers. You search for your topic, open a billion tabs, and then spend hours clicking "download" on each one. And half the time, the papers aren't even what you needed!

I got fed up with this whole process and thought, "There's gotta be a better way."

I looked around for tools that could help, but everything I found was either way too basic (just a simple search box) or too complicated. Nothing in between. Nothing that just... worked.

That's why I built **JFinder**. Because I was tired of doing this manually. The idea was simple: type what you're researching, and let AI figure out the rest (kinda like Scopus AI but with the auto-download capabilities). I'm using this AI model called **Llama 3.3 70B** (because it's dirt cheap and pretty reliable). I tried **DeepSeek** first, but the uptime wasn't that good. Might change it later, though.

### Btw, the process-flow is pretty straightforward:
- You tell it what you're researching.
- It comes up with smart ways to search for it (way better than my "throw keywords at it and pray" approach).
- It keeps trying different searches until it finds enough papers.
- Then it tries to download what it can find.

It's far from perfect, I know. Look, this is just a **proof of concept**. It's basically just me saying, "Hey, this is how AI could actually be useful for real stuff."

### Also, there are limitations (of course):
- Some papers just won't download (thanks, paywalls!).
- It only searches **Scopus** for now.
- Sometimes the AI gets a bit... creative with its searches.

But you know what? **It works.** It's not perfect, but it's better than opening 50 tabs and clicking download manually. You might say, *"But we should read the abstract too!"* STFU, I just want to get my PDFs and read them later.

If you want to try it, it's up at **[jfinder.doedja.com](https://jfinder.doedja.com)**. Just type in what you're researching and see what happens. No signup, no nonsense. If it helps, great! If it doesn't, well, at least we tried something new.

---

**Just a heads up:**
*this is an educational tool. Use it responsibly.*

---

## What's New in v2

So I finally got around to upgrading JFinder. Here's what changed:

**Multiple download sources** — Instead of just hoping one source works, it now tries Unpaywall, Sci-Hub, LibGen, and Anna's Archive all in parallel. Way faster, way more reliable.

**OpenAlex instead of Scopus** — Scopus required an API key which was annoying to get. OpenAlex is free and doesn't need authentication. You can still use Scopus if you have a key, but it's optional now.

**DOI bulk upload** — Got a list of DOIs already? Just dump them in and let it download everything. No need to search.

**Gap Analysis mode** — This one's new and kinda experimental. It looks at the papers you've found and tries to figure out what's *missing*. What research hasn't been done yet? What are the unexplored areas? It gives you a report with potential research directions. Honestly, I'm still not 100% sure how useful this is, but it's kinda cool.

**Tech-wise** — Rebuilt the whole thing with Astro, TypeScript, and Bun. Uses OpenRouter for the LLM stuff so I can swap models whenever. The code's also on [GitHub](https://github.com/doedja/jfinder) now if you wanna run it yourself.

Still got limitations though. Some papers won't download (paywalls gonna paywall), and the AI still gets creative with its searches sometimes. But it's way better than v1.
