---
title: "Building JFinder: Because Downloading Papers One by One Sucks"
date: 2025-01-31
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
