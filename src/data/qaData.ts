export interface QAItem {
  id: string;
  category: 'hr' | 'experience';
  title: string;
  subtitle: string;
  description: string;
  lastUpdate: string;
  icon: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const qaData: QAItem[] = [
  {
    id: 'hr-questions',
    category: 'hr',
    title: 'HR Questions',
    subtitle: 'Behavioral & situational questions',
    description: 'How I talk about the career, not the whiteboard.',
    lastUpdate: 'Sep 2026',
    icon: '👔',
    questions: [
      {
        question: 'Are you willing to relocate/travel?',
        answer:
          'Yes, if the role and team are a good fit. I already work across Istanbul and a Dubai-registered company. Occasional travel is fine when it actually helps the project.',
      },
      {
        question: 'What is the most significant achievement in your career?',
        answer:
          'Owning AIREOS after Red Rock created the CAIO seat. I took a real-estate lead assistant from a single Telegram bot to an on-prem system: a code coordinator, specialist agents, WhatsApp and Telegram, an Electron desk, and models on a Mac Studio cluster we deploy to clients. The part I am proud of is not the title. It is that the client gets one reply per turn and the model is not inventing listings.',
      },
      {
        question: 'Can you describe a challenging work situation and how you overcame it?',
        answer:
          'Smile Link hired me as a consultant to ship a patient iOS app. I built v1 alone over Nowruz — a thin booking client. They got sponsorship and offered a full-time backend seat. My other contract was ending, so I left and rebuilt their messy MVP. The phone app stayed simple. The hard problem was syncing Dentrix, OpenDental, and Sikka into one normalized store without double-booking a chair.',
      },
      {
        question: 'How do you handle stress and pressure?',
        answer:
          'I name the constraint, cut the work into a path I can finish, and say early if a date will slip. On Memeth the feed write path was on fire in k6. We did not hero-debug in prod language. We moved per-user rebuilds onto Kafka and locked the race. Pressure is a queue, not a mood.',
      },
    ],
  },
  {
    id: 'redrock-aireos',
    category: 'experience',
    title: 'Red Rock — AIREOS',
    subtitle: 'Chief AI Officer · Mar 2026 – Present',
    description: 'On-prem real-estate lead assistant. Questions from a hiring loop, answered the way I would say them in the room.',
    lastUpdate: 'Sep 2026',
    icon: '🤖',
    questions: [
      {
        question: 'Who was on the team, and why is the title Chief AI Officer after one year as Senior Software Engineer?',
        answer:
          'Red Rock created the CAIO seat when we moved from product backends into selling on-prem agentic systems. The role did not exist before. I was already shipping the agent and the client — I am not only a backend engineer; I have shipped iOS as well — so I could see the full path from model to the person using the desk. CEO and CTO asked me to own that mandate. On AIREOS I pair with the CTO on the agent process. There is a product manager, a tester, two frontend people in France, and two more on the other client track. Company-wide we are about fifteen people.',
      },
      {
        question: 'Walk me through AIREOS as if I am at a whiteboard.',
        answer:
          'A client texts WhatsApp or Telegram. We persist the chat and wait until they stop typing. One quiet batch, one turn. A code coordinator — not an LLM router — loads that identity’s memories and open brief. Then two things run at once: memory updates what we know about the person, and a pipeline that classifies the batch into a closed instruction set, a generator that applies those instructions in code — update buy/rent/sell/let, search listings, write commitments — and a composer that only writes the reply. The client gets the reply without waiting for memory. Staff use Electron; it talks only to this process’s local API. Models are Ollama on a Mac Studio cluster we deploy to the client. Nothing has to leave their machine.',
      },
      {
        question: 'How did you cut token use, and how did you measure it?',
        answer:
          'v1 was one huge prompt that explained the whole product. That raised tokens and also raised wrong answers, because the model had too many jobs. I added a prompt-builder child: after the generator decides the case — confirm brief, suggest a listing, ask the next catalog question — it builds a small prompt from those facts only. I compared Ollama’s own usage fields on the same traces, mainly prompt_eval_count. Those calls dropped about 50%. The quality win was fewer off-brief replies, not just cheaper tokens. 50% is what I measured on those calls.',
      },
      {
        question: 'What is the RAG actually for?',
        answer:
          'Dubai listings, not a generic PDF dump. We embed the inventory and retrieve so a buy/rent brief matches real units, and so we can tell a seller this community trades in this range instead of the model inventing a price.',
      },
      {
        question: 'What does offline / private inference mean here?',
        answer:
          'Offline means on-prem: Ollama and the agent run on a Mac Studio cluster we sell and install for the client. Inference stays on their hardware. We are not calling a public API for the core path. Tenant memory is identity-scoped and enforced with PostgreSQL row-level security.',
      },
      {
        question: 'Why an Electron app and a separate daemon?',
        answer:
          'Two processes, two teams. The desk is staff UI. The daemon owns Telegram, WhatsApp, Postgres, and the agents. They meet at a local control API. France can ship the UI while we ship the agent without fighting the same PRs. If the daemon dies, chat stops; the UI cannot silently keep answering.',
      },
    ],
  },
  {
    id: 'redrock-memeth',
    category: 'experience',
    title: 'Red Rock — Memeth',
    subtitle: 'Senior Software Engineer · Mar 2025 – Mar 2026',
    description: 'Crypto social platform. I was one of three seniors, not the sole architect.',
    lastUpdate: 'Sep 2026',
    icon: '📡',
    questions: [
      {
        question: 'Were you the tech lead of the seven services?',
        answer:
          'No. I was one of three senior backend engineers. Architecture sat with the CTO, who was also the team lead. I designed and shipped slices with them. I do not claim I owned the whole system.',
      },
      {
        question: 'What did you own, and what was the API service?',
        answer:
          'When I joined, Memeth was one API. Follow, user, and auth still live there. I worked on that codebase first. After we understood the seams, we extracted new NestJS services around it — chat, feed, posts, HLS, livestream, SFU. I owned the old API and those extractions. The API service is not a gateway. It is the leftover core. We did not rewrite follow and auth on day one.',
      },
      {
        question: '200 to 500 RPS — what was the bottleneck, and was that production?',
        answer:
          'The feed write path. Each new post fired triggers that rebuilt feeds for every follower on the request. The write sat there too long, and concurrent updates raced. We moved generation onto Kafka consumers so the API could return, and we used Redis Redlock on the race. That is what took a single-core pod from about 200 to about 500 RPS in k6. That is a capacity test, not live traffic. The live community was about 10,000 users.',
      },
      {
        question: '25 million notifications a day — production or a test?',
        answer:
          'A peak we load-tested with k6, with Kafka and Redlock on the fan-out. Not a number I saw as steady production. Chat sockets were the same rule: about 2,000 WebSockets per pod as a capacity target.',
      },
      {
        question: 'SFU vs livestream vs Cloudflare HLS — why three boxes?',
        answer:
          'Live and VOD are not the same path. The SFU is MediaSoup. Users send and receive WebRTC there. We kept it off the main Kubernetes mesh because WebRTC needs many ports. That box only forwards media and calls APIs on the livestream service. Policy is 150 viewers per room; more rooms means more SFU pods. Livestream sits on Kubernetes, few ports. It owns permissions through Hasura and can see the rest of the microservices. Cloudflare HLS is VOD. Posts and chat store the file on S3, then call this edge service with request-reply: make this streamable. Cloudflare only gives you one webhook when the HLS URL is ready, so this service is that single callback. Posts and chat never talk to Cloudflare directly.',
      },
    ],
  },
  {
    id: 'smilelink',
    category: 'experience',
    title: 'Smile Link',
    subtitle: 'Backend Developer · Jun 2023 – Jan 2025',
    description: 'Consultant first, then full-time backend. Dental PMS sync and scheduling.',
    lastUpdate: 'Sep 2026',
    icon: '🦷',
    questions: [
      {
        question: 'How did you join, and did you only do backend?',
        answer:
          'I started as a consultant. They asked me to build the patient iOS app. I shipped v1 myself over the Nowruz break — booking, not a full clinic OS. They then got sponsorship and offered salary, title, and equity. My other contract was ending. I told that company I was leaving and joined Smile Link full-time as backend. I rebuilt a messy MVP. The phone app stayed simple on purpose. The hard system was behind it. I shipped iOS alone. Most of my time after that was backend, because iOS, Android, and web all sat on the same API.',
      },
      {
        question: 'What does an edge service do when a new PMS vendor shows up?',
        answer:
          'Each front-desk vendor has a different schema. We did not teach OpenDental to the iOS app. We built one edge per PMS — OpenDental, Dentrix, Sikka. A new vendor is a new adapter. Edges write into a normalized store. iOS, Android, and web only talk to that. If an edge is down, the rest of the product still serves clean data.',
      },
      {
        question: 'How did you decide two records were the same patient?',
        answer:
          'Phone and email are the primary keys for same person. A shared phone plus a child’s age is not a duplicate. That is a parent booking kids. We create dependents under the guardian. Merging those records would have destroyed family history.',
      },
      {
        question: 'What exactly raced on the scheduler, and how did you stop it?',
        answer:
          'Two front-desk clicks, same doctor, same operatory, same slot. We take a Redlock on that slot, write in a transaction, and require an idempotency key so a retry does not book twice.',
      },
    ],
  },
  {
    id: 'zarinpal',
    category: 'experience',
    title: 'ZarinPal — Oppodax',
    subtitle: 'Backend Developer · Sep 2019 – Apr 2023',
    description: 'ZarinPal is the parent company. Oppodax is the product I joined.',
    lastUpdate: 'Sep 2026',
    icon: '🔔',
    questions: [
      {
        question: 'The resume says ZarinPal. The site used to say Oppodax. Which is it?',
        answer:
          'I worked at ZarinPal, on the Oppodax team. Oppodax is the product, not a second employer.',
      },
      {
        question: 'Notifications were up to two hours late. What did you change?',
        answer:
          'A cron job pulled a fixed batch. If the pile was bigger than that batch, the rest waited for the next tick. Under load that stacked to about two hours. I put the work on a queue. A worker claims a large set of rows, and we spread those claims across pods so two pods never send the same notification. More pods means more throughput. The clock is no longer one cron, one batch.',
      },
      {
        question: 'What did you build for observability?',
        answer:
          'A metrics service that collects from the platform and exposes OpenTelemetry and Prometheus. I did not rebuild every existing dashboard. I added a place the rest of the system could be seen.',
      },
    ],
  },
  {
    id: 'ios-years',
    category: 'experience',
    title: 'Sibche · SpeedDeliv · Barandeh Bash',
    subtitle: 'iOS · 2016 – 2019',
    description: 'Three products, not intern standups.',
    lastUpdate: 'Sep 2026',
    icon: '📱',
    questions: [
      {
        question: 'What did you actually ship at Sibche?',
        answer:
          'Sibche was an Iran-market App Store — Aptoide or Cydia, not Apple. I worked on the main client: browse and install apps the official store would not serve. I also built in-app VPN with NEVPNManager so people could reach us when the official path was blocked. A crash there was not a Jira ticket. It stopped downloads for the market.',
      },
      {
        question: 'SpeedDeliv — what was your work?',
        answer:
          'Delivery. I put XMPP on the iOS app so order and driver updates were a live session, not a polling loop. Tracking and maps sat on top of that session.',
      },
      {
        question: 'Barandeh Bash — music, quiz, or both?',
        answer:
          'Both. I built the in-app music player and a quiz app for engagement. Crash work was the same rule as Sibche: if it died, you saw it in the numbers the same week.',
      },
    ],
  },
  {
    id: 'nestjs-oss',
    category: 'experience',
    title: 'NestJS Core',
    subtitle: 'OSS · PR #16954 · May 2026',
    description: 'Route conflict detection and specificity-based registration in v12.',
    lastUpdate: 'Sep 2026',
    icon: '🧩',
    questions: [
      {
        question: 'What was the bug?',
        answer:
          'Nest lets you declare /users/:id and /users/me. Depending on registration order, me was bound as :id. The DTO said id must be a UUID, so a legal reserved path returned 400.',
      },
      {
        question: 'What did you change?',
        answer:
          'Two things. Routes register by specificity — static me wins over :id. At boot we detect the conflict and can warn or throw, so you see the shadow in the console, not in production. It landed in NestJS Core v12, Express and Fastify. PR 16954. Order is the runtime fix. Detection is why it does not regress when someone adds another parametric path next month.',
      },
    ],
  },
];
