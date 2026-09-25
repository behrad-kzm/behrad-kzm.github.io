import { TreeItem } from '@/types/portfolio';

export const portfolioTree: TreeItem[] = [
  {
    id: 'readme',
    name: 'README.md',
    type: 'file',
    extension: 'md',
    content: `# It's Me, S. Behrad Kazemi

![Profile Picture](https://avatars.githubusercontent.com/u/6783461)

## 👨🏻‍💻 About Me

I build production **agentic systems**, after 10+ years on large-scale backends.
I owned the architecture and delivery of **AIREOS**, an on-premise real-estate lead assistant: private LLMs on a **Mac Studio** cluster, **Google ADK**, a code coordinator with classifier / generator / composer / memory, **pgvector** over Dubai listings, WhatsApp and Telegram, plus an Electron desk against a local control API. A case-based prompt builder replaced one monolithic prompt and cut token use by ~50% on the LLM calls I compared, measured from Ollama's native usage fields.

That work sits on a backend career in high-concurrency, distributed, real-time systems — microservices, **Kafka**, WebSockets, a 10,000-user community, and capacity we proved in k6 (about 500 RPS/pod, 2,000 connections/pod, ~25M notifications/day).

I'm a **NestJS** contributor: /users/:id was able to steal /users/me. I landed conflict detection and specificity-based registration in NestJS Core v12 ([#16954](https://github.com/nestjs/nest/pull/16954)).

---

## 📂 Navigate My Portfolio

### [Explorer](#action:explorer)
Explore the file tree to learn more about:
- 📁 [**experiences/**](#action:explorer) - My professional journey
- 📁 [**educations/**](#action:explorer) - Academic background
- 📁 [**licenses-certificates/**](#action:explorer) - Certifications and courses
- 📁 [**skills/**](#action:explorer) - Technical skills and content creation

### [Q&A](#action:qa)
Interview questions I actually get — and how I answer them:
- 👔 [**HR Questions**](#action:qa) - Behavioral & situational
- 🤖 [**Red Rock — AIREOS**](#action:qa) - Chief AI Officer
- 📡 [**Red Rock — Memeth**](#action:qa) - Senior Software Engineer
- 🦷 [**Smile Link**](#action:qa) - Backend + iOS
- 🔔 [**ZarinPal — Oppodax**](#action:qa) - Notifications
- 📱 [**iOS years**](#action:qa) - Sibche, SpeedDeliv, Barandeh Bash
- 🧩 [**NestJS Core**](#action:qa) - PR #16954

---

## 📧 Contacts

- **Email:** [me@behradkazemi.com](mailto:me@behradkazemi.com)
- **Website:** [behradkazemi.com](https://behradkazemi.com)

---

## 🔗 Socials

<div class="social-links-grid">
  <a href="https://www.linkedin.com/in/kaazemi/" target="_blank" class="social-link">
    <svg class="social-icon" fill="#0077B5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    <span>LinkedIn</span>
  </a>
  <a href="https://github.com/behrad-kzm" target="_blank" class="social-link">
    <svg class="social-icon" fill="#FFFFFF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span>GitHub</span>
  </a>
  <a href="https://x.com/behradkzm" target="_blank" class="social-link">
    <svg class="social-icon" fill="#1DA1F2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    <span>Twitter</span>
  </a>
  <a href="https://www.youtube.com/@uncutfarsi" target="_blank" class="social-link">
    <svg class="social-icon" fill="#FF0000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    <span>YouTube</span>
  </a>
  <a href="https://medium.com/@behradkazemi" target="_blank" class="social-link">
    <svg class="social-icon" fill="#FFFFFF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
    <span>Medium</span>
  </a>
  <a href="https://www.instagram.com/behcrop/" target="_blank" class="social-link">
    <svg class="social-icon" fill="#E4405F" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
    <span>Instagram</span>
  </a>
</div>

---

## 💼 Overview

### Current Role
**Chief AI Officer @ Red Rock Technology**
- Own AIREOS: on-prem lead assistant for buy / rent / sell / let
- Code coordinator + specialist agents on Ollama, deployed on Mac Studio clusters
- Electron desk talks only to the local agent process (Telegram + WhatsApp)
- Previously Senior Software Engineer on Memeth (Mar 2025 – Mar 2026)

### Skill
- **AI:** Google ADK, Agentic AI, LLM orchestration, Prompt engineering
- **Backend:** Node.js, TypeScript, NestJS, Python
- **Mobile:** Swift, RxSwift, UIKit
- **Databases:** PostgreSQL, MongoDB, MySQL, Redis
- **Message Queues:** Kafka, RabbitMQ, BullMQ
- **Communication:** REST, GraphQL, Socket.IO, MediaSoup, MCP

### Education
- **MSc in Computer Engineering** — Beykent University, Istanbul (2026)
- **BEng in Computer Engineering (Software)** — QIAU, Qazvin (2013–2024)

---

## 📺 Youtube

I run a tech-focused YouTube channel where I share:
- Software development tutorials
- System design discussions
- Career advice for developers
- Code reviews and best practices

**Check out my latest videos on YouTube!**

---

## 🎯 What I Do

### Agentic Systems
On-prem multi-agent platforms with private LLMs, Google ADK, RAG, and offline-first desktop delivery.

### Distributed Backends
High-concurrency microservices, Kafka, and real-time systems for a 10,000-user community, with k6 capacity tests for feed, sockets, and notification fan-out.

### Technical Content
Sharing knowledge and helping developers grow through educational content.

---

## 🚀 Let's talk!

Feel free to reach out via email or connect with me on LinkedIn!

---

*Last updated: 2026*`
  },
  {
    id: 'experiences',
    name: 'experiences',
    type: 'folder',
    children: [
      {
        id: 'chief-ai-redrock',
        name: 'chief-ai.redrock.ts',
        type: 'file',
        extension: 'ts',
        content: `// Chief AI Officer @ Red Rock Technology
// 2026 - Present

interface Experience {
  company: "Red Rock Technology FZ-LLC";
  position: "Chief AI Officer";
  period: "Mar 2026 - Present";
  location: "Dubai, UAE";
  project: "AIREOS - Agentic Real Estate Assistant";
  team: "Product squad with CTO (backend), two frontend tracks, PM, and QA; company ~15 on redrock.io";
  responsibilities: [
    "Promoted into a newly created CAIO role when Red Rock moved from product backends into on-prem agentic systems; CEO and CTO asked me to own it because I already shipped both the agent and the client, not only APIs",
    "Owned AIREOS: a single-process lead assistant. Client messages Telegram or WhatsApp; the machine waits until they stop typing, then runs one turn — understand, update the brief, write one reply",
    "Designed a code coordinator (not an LLM router). Classifier emits a closed instruction set; generator applies it in code (brief, listing search, commitments); composer writes the reply; memory updates in parallel so the client is not blocked",
    "Replaced one monolithic prompt with a prompt-builder child that picks a single case from the turn's decisions and facts. Compared Ollama native usage fields (prompt_eval_count) on the same traces and cut token use by ~50% on those calls, with fewer off-brief answers",
    "Grounded buy/rent matching and community price ranges in a pgvector index of Dubai listings so users can price a unit against real community comps instead of model memory",
    "Deployed Ollama and the agent on Mac Studio clusters the company sells to business clients; tenant memory is identity-scoped and enforced with PostgreSQL row-level security",
    "Split the Electron desk from the agent daemon so UI and backend could ship in parallel against a local control API with fewer merge conflicts"
  ];
  technologies: [
    "Node.js",
    "TypeScript",
    "Google ADK",
    "Ollama",
    "PostgreSQL",
    "pgvector",
    "Electron",
    "RAG",
    "Telegram",
    "WhatsApp",
    "Multi-Agent Orchestration"
  ];
}

export default Experience;`
      },
      {
        id: 'senior-backend-redrock',
        name: 'senior-swe.redrock.ts',
        type: 'file',
        extension: 'ts',
        content: `// Senior Software Engineer @ Red Rock Technology
// 2025 - 2026

interface Experience {
  company: "Red Rock Technology FZ-LLC";
  position: "Senior Software Engineer";
  period: "Mar 2025 - Mar 2026";
  location: "Dubai, UAE";
  project: "Memeth - Crypto Social Platform";
  team: "3 senior backend engineers plus CTO / team lead";
  owned: [
    "legacy API — follow, user, auth (monolith we inherited)",
    "chat",
    "SFU (MediaSoup)",
    "livestream",
    "Cloudflare media / HLS",
    "posts",
    "feed"
  ];
  responsibilities: [
    "One of three senior backend engineers on Memeth, working with the CTO / team lead — not the sole architect — on a NestJS platform for a 10,000-user crypto social community",
    "Joined onto a legacy API that still held follow, user, and auth. After shipping on that codebase, we extracted the rest as microservices — chat, MediaSoup SFU, livestream, Cloudflare HLS, posts, and feed — and I owned those plus the old API",
    "Feed path: the bottleneck was per-user triggers that rebuilt a follower's feed on each new post. Moved that work to Kafka consumers so the write path could return sooner, and used Redis Redlock where concurrent updates raced",
    "k6 load tests (capacity, not live traffic): ~200 to ~500 RPS per single-core pod on the feed path; chat and notification fan-out designed and tested for ~2,000 WebSockets/pod and ~25M PUSH/SMS/EMAIL/day with Kafka and Redlock",
    "Split live into two processes: a MediaSoup SFU hosted where many UDP/TCP ports can be opened for WebRTC, calling into a Kubernetes livestream service that owns permissions via Hasura and talks to the rest of the mesh — 150 viewers per room, more rooms by adding SFU pods",
    "Built a Cloudflare HLS edge service (request-reply) so posts and chat could turn an S3 object into a CDN streamable URL. Cloudflare exposes one webhook for the ready HLS URL; this service is the single ingress for that callback"
  ];
  technologies: [
    "NestJS",
    "TypeScript",
    "Kafka",
    "Redis",
    "MongoDB",
    "Hasura",
    "Socket.IO",
    "MediaSoup",
    "Cloudflare Stream / HLS",
    "S3",
    "WebSockets",
    "Kubernetes",
    "Request-Reply",
    "Edge-Service",
    "Strangler",
    "Microservices Architecture",
    "Distributed Systems"
  ];
}

export default Experience;`
      },
      {
        id: 'oss-nestjs',
        name: 'oss.nestjs.ts',
        type: 'file',
        extension: 'ts',
        content: `// OSS Contributor @ NestJS Core
// May 2026
// https://github.com/nestjs/nest/pull/16954

interface Contribution {
  project: "NestJS Core v12";
  kind: "route conflict detection and specificity-based registration";
  problem: [
    "GET /users/:id and GET /users/me can shadow each other",
    "Express/Fastify may send 'me' into the :id controller",
    "Validation then rejects a legal reserved path as a bad UUID or number"
  ];
  change: [
    "Detect conflicting route declarations at registration time",
    "Register more specific static segments before parametric ones",
    "Configurable policy: warn or fail in the console so the shadow is visible before production"
  ];
}

export default Contribution;`
      },
      {
        id: 'backend-smilelink',
        name: 'backend.smilelink.ts',
        type: 'file',
        extension: 'ts',
        content: `// Backend Developer @ SmileLink
// 2023 - 2025

interface Experience {
  company: "SmileLink";
  position: "Backend Developer";
  period: "Jun 2023 - Jan 2025";
  joinedAs: "Consultant — shipped the patient iOS app, then full-time backend after they raised sponsorship";
  responsibilities: [
    "Joined as a consultant and shipped the patient iOS app (Swift) alone — a thin booking client. After sponsorship they hired me full-time; I rebuilt the messy MVP backend from scratch so iOS, Android, and web could sit on one API",
    "Most of the complexity was the backend: sync clinic front-desk software into a canonical store, then serve normalized patients and slots to every client",
    "One edge service per PMS — OpenDental, Dentrix, Sikka — so a new vendor is a new adapter. Each edge pulls vendor-shaped data; the rest of the system only sees the lake / normalized model",
    "Deduped patients on phone and email. Repeated numbers plus age were treated as a parent registering children — we linked dependents under the guardian instead of merging them into one person",
    "Stopped double-booking the same operatory, doctor, and slot with Redis Redlock, database transactions, and an idempotency key on appointment create"
  ];
  technologies: [
    "Node.js",
    "NestJS",
    "Swift",
    "UIKit",
    "MySQL",
    "Redis",
    "Redlock",
    "Docker",
    "OpenDental",
    "Dentrix",
    "Sikka",
    "Edge-Service",
    "Idempotency",
    "Data Normalization"
  ];
}

export default Experience;
`
      },
      {
        id: 'backend-zarinpal',
        name: 'backend.zarinpal.ts',
        type: 'file',
        extension: 'ts',
        content: `// Backend Developer @ ZarinPal — Oppodax
// 2019 - 2023

interface Experience {
  company: "ZarinPal";
  project: "Oppodax";
  position: "Backend Developer";
  period: "Sep 2019 - Apr 2023";
  responsibilities: [
    "ZarinPal was the parent company; I joined the Oppodax team as a backend developer",
    "Notification delays hit ~2 hours because a cron job ran a fixed batch size. I moved work onto a queue, read much larger batches, and spread processing across pods so two workers could not claim the same record",
    "Added a metrics service that collected signals from the platform and exposed them with OpenTelemetry and Prometheus"
  ];
  technologies: [
    "NestJS",
    "MySQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "OpenTelemetry",
    "Prometheus"
  ];
}

export default Experience;
`
      },
      {
        id: 'senior-ios-bbshow',
        name: 'senior-ios.bbshow.swift',
        type: 'file',
        extension: 'swift',
        content: `// Senior iOS Developer @ Barandeh Bash
// 2019

import Foundation

struct Experience {
    let company = "Barandeh Bash"
    let position = "Senior iOS Developer"
    let period = "Jan 2019 - Aug 2019"

    let responsibilities = [
        "Built the in-app music player",
        "Built a competitive quiz app to drive engagement",
        "Crash work was part of the job — a fix showed up in the store metrics the same week"
    ]

    let technologies = [
        "Swift",
        "UIKit",
        "RxSwift",
        "RxCocoa",
        "AVFoundation",
    ]
}`
      },
      {
        id: 'ios-speeddeliv',
        name: 'ios.speeddeliv.swift',
        type: 'file',
        extension: 'swift',
        content: `// iOS Developer @ SpeedDeliv
// 2017 - 2018

import Foundation

struct Experience {
    let company = "SpeedDeliv"
    let position = "iOS Developer"
    let period = "Jan 2017 - Dec 2018"

    let responsibilities = [
        "Built the delivery iOS app's real-time channel on XMPP — order and driver updates without polling the HTTP API",
        "Delivery tracking and maps sat on top of that live session"
    ]

    let technologies = [
        "Swift",
        "UIKit",
        "XMPP",
        "MapKit",
        "Core Location",
    ]
}`
      },
      {
        id: 'ios-sibche',
        name: 'ios.sibche.swift',
        type: 'file',
        extension: 'swift',
        content: `// iOS Developer @ Sibche
// 2016 - 2017

import Foundation

struct Experience {
    let company = "Sibche"
    let position = "iOS Developer"
    let period = "Feb 2016 - Jan 2017"

    let product = "Iran-market iOS app store (Aptoide / Cydia class) — sideload apps the official App Store would not serve"

    let responsibilities = [
        "Worked on the main Sibche client: browse, install, and update unofficial apps for the Iran market",
        "Built in-app VPN (NEVPNManager) so users could reach the store when the official App Store path was blocked",
        "Crash fixes were the fastest feedback loop — a bad build blocked downloads for the whole market"
    ]

    let technologies = [
        "Objective-C",
        "Swift",
        "UIKit",
        "NEVPNManager",
    ]
}`
      },
      {
        id: 'robocup',
        name: 'robocup.cpp',
        type: 'file',
        extension: 'cpp',
        content: `// RoboCup Team Member
// 2014 - 2017

#include <iostream>
#include <vector>

class RoboCupExperience {
public:
    std::string team = "University RoboCup Team";
    std::string role = "Software Developer";
    std::string period = "Aug2014 - Nov 2017";
    
    std::vector<std::string> responsibilities = {
        "Developed robot control algorithms",
        "Implemented computer vision for object detection",
        "Programmed autonomous navigation systems",
        "Collaborated in international competitions",
        "Optimized real-time decision making"
    };
    
    std::vector<std::string> technologies = {
        "C++",
        "OpenCV",
        "Nao Robots",
        "BHuman framework",
        "Debian",
    };
};`
      }
    ]
  },
  {
    id: 'educations',
    name: 'educations',
    type: 'folder',
    children: [
      {
        id: 'msc-computer',
        name: 'computer-eng.beykent.msc',
        type: 'file',
        extension: 'md',
        content: `# Master of Computer Engineering
## Beykent University
### Istanbul, Turkey • 2026

## About
Master of Computer Engineering at Beykent University in Istanbul, Turkey.`
      },
      {
        id: 'beng-computer',
        name: 'software-eng.qiau.bch',
        type: 'file',
        extension: 'md',
        content: `# Bachelor of Computer Engineering (Software)
## Qazvin Islamic Azad University (QIAU)
### Qazvin, Iran • 2013 - 2024
**Minor:** Software Engineering

## About
Computer engineering program with a software engineering minor, covering algorithms, systems, and applied robotics.

## Key Achievements
- RoboCup C++ developer representing the university internationally (Iran Open 2015, RoboCup China)
- Reduced camera calibration time from 30–45 minutes to 10–15 minutes
- Replaced the legacy B-Human field-line detection approach with a RANSAC-based boundary detection algorithm, reducing vision processing time by 80%

## Notable Courses
- Advanced Programming
- Data Structures & Algorithms
- Operating Systems
- Database Management Systems
- Software Engineering
- Computer Networks
- Artificial Intelligence
- Computer Vision`
      }
    ]
  },
  {
    id: 'licenses-certificates',
    name: 'licenses-certificates',
    type: 'folder',
    children: [
      {
        id: 'ielts',
        name: 'ielts.cert',
        type: 'file',
        extension: 'md',
        content: `# IELTS Certification
## International English Language Testing System

### Overall Score: 6.5
**Test Date:** 12/SEP/2025

## Score Breakdown
- **Listening:** 7
- **Reading:** 6.5
- **Writing:** 6.0
- **Speaking:** 6.5

## Recognition
IELTS is recognized by over 10,000 organizations worldwide, including universities, employers, professional bodies, and governments.

This score demonstrates strong English proficiency suitable for:
- Professional environments
- Academic settings
- International communication`
      },
      {
        id: 'courses',
        name: 'paid-cources.cert',
        type: 'file',
        extension: 'md',
        content: `# Professional Courses & Certifications

## Online Courses

### The OWASP Top 10 Security Risks
**Issuer:** Udemy
**Date:** Feb 2025
**Skills:** Security Risks

### CKAD
**Issuer:** Udemy
**Date:** Jan 2025
**Skills:** Kubernetes, DevOps, Cloud Native

### Microservices Foundations
**Platform:** Linkedin
**Completion:** Dev 2024

### Microservices Design Patterns
**Platform:** Linkedin
**Completion:** Dec 2024

### Software Architecture: Domain-Driven Design
**Platform:** Linkedin
**Completion:** Dec 2024

### HIPPA 101 - Dental
**Platform:** Smart Training
**Completion:** Nov 2023`
      }
    ]
  },
  {
    id: 'skills',
    name: 'skills',
    type: 'folder',
    children: [
      {
        id: 'technical-skills',
        name: 'technical-skills.list',
        type: 'file',
        extension: 'md',
        content: `# Technical Skills

## Programming Languages
- **TypeScript / JavaScript** ⭐⭐⭐⭐⭐
- **Swift** ⭐⭐⭐⭐⭐
- **Python** ⭐⭐⭐⭐
- **C++** ⭐⭐⭐⭐

## AI Skills
- Google ADK
- Agentic AI system design
- LLM orchestration and workflow engineering
- Prompt engineering
- Loop engineering
- Ollama
- pgvector / RAG

## Microservice Design Patterns
- CQRS
- SAGA
- 2PC
- DLQ
- Event-Driven Architecture
- Request-Reply
- Edge-Service
- Strangler
- Sidecar

## Databases and Data Management
- PostgreSQL
- MongoDB
- MySQL
- Redis
- TypeORM
- Mongoose

## Message Queues
- Kafka
- RabbitMQ
- BullMQ (Redis)

## Communication Mechanisms
- MCP Tools
- RESTful APIs
- Socket.IO
- MediaSoup
- GraphQL

## Backend and Platform
- Node.js
- NestJS
- Electron
- Docker
- Kubernetes`
      },
      {
        id: 'podcast',
        name: 'podcast.youtube',
        type: 'file',
        extension: 'md',
        content: `# Content Creation

## Tech Podcast & YouTube Channel
**Platform:** YouTube
**Focus:** Software Development & Technology
**Started:** 2022

### About
Sharing knowledge and experiences in software development through:
- Technical tutorials
- Code reviews
- Career advice
- Industry insights
- Interview with developers

### Topics Covered
- Backend development best practices
- iOS app development tutorials
- System design discussions
- Career growth in tech
- Open source contributions

### Stats
- **Subscribers:** 165+
- **Total Views:** 25K+
- **Videos Published:** 25+
- **Average Rating:** 4.8/5

### Community
Engaged with a community of developers through:
- Comments and discussions
- Live coding sessions
- Q&A streams
- Discord community`
      }
    ]
  }
];
