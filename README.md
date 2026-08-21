<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=26&pause=1000&color=3776AB&center=true&vCenter=true&width=800&lines=Hi+there%2C+I'm+Shayan+%F0%9F%91%8B;Undergraduate+Researcher+%E2%80%94+Retrieval+%26+RAG;Robotics+Software+Infrastructure;B.S.+Computer+Engineering%2C+UET+Taxila" alt="Typing SVG" />
</div>

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=shanooo773&label=Profile%20views&color=3776AB&style=flat" alt="Profile Views" />
  <img src="https://img.shields.io/github/followers/shanooo773?label=Followers&style=social" alt="GitHub Followers" />
</div>

# Shayan Humayun

**Undergraduate researcher — information retrieval, RAG, and grounded language models**
B.S. Computer Engineering, UET Taxila (expected Aug 2027) · Research student, Swarm Robotics Lab

[![Website](https://img.shields.io/badge/Website-shayanhumayun.vercel.app-000000?style=flat-square)](https://shayanhumayun.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shayan-humayun-7a8097326/)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:shanooo773@gmail.com)

---

## Research interests

Robust retrieval under noisy and out-of-distribution input · hybrid dense–sparse and phonetic retrieval · retrieval-augmented generation and grounded language models · evaluation of reliability in deployed LLM systems.

Most of what I build starts from the same question: **when retrieval fails, why does it fail, and can I measure the fix?**

---

## Current work

**Undergraduate Research Student — Swarm Robotics Lab, UET Taxila**
*Democratizing Robotics in Pakistan — HEC Technology Development Fund grant TDF04-095 (Jul 2025 – Jul 2026)*

- Lead developer on **AnyBot** ([app.brainswarmrobotics.com](https://app.brainswarmrobotics.com)) — a browser-based environment for remotely programming, monitoring, and controlling robotic platforms, lowering the hardware barrier to robotics experimentation.
- Designed hybrid retrieval pipelines combining dense embedding search with sparse keyword matching, improving grounded response quality over dense-only retrieval.
- Built RAG pipelines and an LLM inference proxy (Ollama → FastAPI → robot proxy) for query processing over technical robotics documentation.
- Python backend services, REST APIs, and containerised deployment with Docker Compose on Linux.

---

## Selected projects

### Phonetic similarity search over a 134k-word pronunciation lexicon
Phonetic nearest-neighbour search over 134,373 CMUdict entries; pronunciations encoded as 384-dimensional embeddings and indexed with FAISS. Full index loads in under 0.5 s.

Out-of-vocabulary queries turned out to be the dominant failure mode, so I added a grapheme-to-phoneme front-end to phonemise unseen words before retrieval.

> **Ablation:** with G2P, top-1 neighbour similarity on OOV queries rose from **0.46 → 0.90**, while in-vocabulary results were unchanged — isolating G2P as the source of the gain.

`FAISS` · `embeddings` · `G2P` · `Python`

### Retrieval-augmented QA over medical reference text
RAG pipeline over the *Gale Encyclopedia of Medicine* using LangChain, FAISS, and Hugging Face embedding models, served through Streamlit. Every answer returns source citations; the system also accepts arbitrary user-uploaded documents at query time.

> **Negative result, kept:** I built an evaluation harness with page-level ground truth (51 questions across 47 source pages) and benchmarked three chunking strategies. No statistically significant difference between them (McNemar p ≥ 0.125). An earlier *positive* result traced back to a chunk-size-dependent relevance criterion — redefining ground truth as source-page identity removed the artefact, and the effect did not survive.

`LangChain` · `FAISS` · `Hugging Face` · `Streamlit`

### Remote robotics console — full-stack booking and access system
Platform for shared robotics hardware: JWT authentication, role-based access, and a time-slot booking workflow. Containerised with Docker Compose; NoVNC integration for browser-based remote device control.

`FastAPI` · `Docker Compose` · `NoVNC` · `React`

### Expense management and analytics system
FastAPI backend with RESTful endpoints and MySQL persistence; Streamlit frontend with category and time-series aggregation dashboards.

`FastAPI` · `MySQL` · `Streamlit` · `pandas`

---

## Also: robotics infrastructure

Most of my robotics work sits at the software/infra layer rather than embedded control — building the systems that let people access and run robots remotely (AnyBot, the booking/access console) rather than writing the onboard control stack itself. Docker Compose, NoVNC, and Linux are the recurring tools there.

## Also built

**Co-founder & AI/Python Engineer — AI voice-agent startup** (Dec 2025 – Mar 2026)
Built an AI voice-calling agent with one collaborator, from prototype through live call-centre deployment and commercial handover to a software house. Speech pipeline integrating Whisper ASR, Chatterbox TTS, and LLM-based intent routing, tuned for latency under real-time conversational constraints. Automation workflows in Python and n8n, with structured logging and reliability monitoring for production traffic.

---

## Technical skills

| | |
|---|---|
| **Languages** | Python, JavaScript, C/C++, SQL |
| **ML & AI** | LangChain, FAISS, Hugging Face Transformers, RAG pipelines, hybrid dense–sparse retrieval, embedding models, prompt engineering, ASR/TTS (Whisper, Chatterbox) |
| **Data** | pandas, NumPy, data cleaning, exploratory analysis, MySQL |
| **Systems** | FastAPI, REST APIs, JWT auth, React.js, Streamlit, Docker, Docker Compose, Linux/Ubuntu, Git, n8n |

---

## Honors

- **First Runner-Up**, Inter-University National AI Hackathon (AUREX 2026), Bahria University Islamabad — full AI/ML solution designed, built, and deployed in a 6-hour window
- **Selected**, Stanford University Code in Place 2026 — Experienced Student track
- **Selected Participant**, IEEE IndustryHUB Silicon Valley (Mar 2026 – present)

---

<div align="center">
  <img height="150" src="https://github-readme-stats.vercel.app/api?username=shanooo773&show_icons=true&hide_border=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
  <img height="150" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shanooo773&layout=compact&langs_count=6&hide_border=true&theme=tokyonight"/>
</div>

<div align="center">
  <img src="https://streak-stats.demolab.com/?user=shanooo773&theme=tokyonight&hide_border=true" alt="GitHub Streak"/>
</div>

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=shanooo773&theme=tokyo-night&bg_color=1a1b27&color=9745f5&line=9745f5&point=ffffff&area=true&hide_border=true" alt="GitHub Activity Graph"/>
</div>

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=shanooo773&theme=tokyonight&no-frame=true&row=1&column=7" alt="GitHub Trophies"/>
</div>

<div align="center">
  <sub>Open to collaboration on retrieval systems, RAG evaluation, and grounded LLM applications.</sub>
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />
</div>
