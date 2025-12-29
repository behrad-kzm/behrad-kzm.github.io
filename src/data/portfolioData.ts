import { TreeItem } from '@/types/portfolio';

export const portfolioTree: TreeItem[] = [
  {
    id: 'readme',
    name: 'README.md',
    type: 'file',
    extension: 'md',
    content: `# It's Me, S. Behrad Kazemi

![Profile Picture](https://avatars.githubusercontent.com/u/6783461?v=4)

## 👨🏻‍💻 About Me

I'm an experienced **Backend Engineer** with a strong foundation in backend development and system design, particularly for
distributed systems under heavy load.
My journey began with JavaScript and **Node.js**, building web applications using Express.js. As I advanced, I adopted **TypeScript**
for its type safety and scalability, which led me to **NestJS**, a framework I now use extensively to design and manage complex,
maintainable, and efficient backend systems.
I'm also experienced with both SQL (**PostgreSQL**, **MySQL**) and NoSQL (**MongoDB**) databases, message queues (**Kafka**, **RabbitMQ**
and **BullMQ**), cloud-native infrastructure (**Docker**, **Kubernetes**, **Azure**), Rest API design and **GraphQL** and have contributed to the **open-source** ecosystem by
publishing npm packages.

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
**Senior Backend Developer @ RedRock**
- Leading backend architecture for enterprise solutions
- Managing development teams
- Implementing scalable microservices
- Architected real-time communication infrastructure utilizing WebRTC for video conferencing and instant messaging

### Skill
- **Backend:** Node.js, TypeScript, Python, Django
- **Mobile:** Swift, iOS Development, SwiftUI
- **Cloud:** AWS, Docker, Kubernetes
- **Database:** PostgreSQL, MongoDB, Redis
- **Message Queues:** Kafka, RabbitMQ, BulMQ
- **API Design:** REST, GraphQL

### Education
- **BEng in Computer Software Engineering**
- Qazvin Islamic Azad University (2013-2024)

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

### Backend Development
Specializing in building robust, scalable backend systems with modern technologies and best practices.

### System Architecture
Designing and implementing microservices architectures that scale.

### Technical Content
Sharing knowledge and helping developers grow through educational content.

---

## 📂 Navigate My Portfolio

### Files
Explore the file tree to learn more about:
- 📁 **experiences/** - My professional journey
- 📁 **educations/** - Academic background
- 📁 **licenses-certificates/** - Certifications and courses
- 📁 **skills/** - Technical skills and content creation

### Q&A
Interview preparation and common questions:
- 👔 **HR Questions** - Behavioral & situational questions
- 💻 **Technical Questions** - System design & architecture
- 👥 **Teamwork Questions** - Collaboration & communication
- 🏆 **Code Challenges** - Coding problems & solutions

---

## 🚀 Let's Build Something Amazing Together!

I'm always interested in exciting projects and collaboration opportunities. 
Feel free to reach out via email or connect with me on LinkedIn!

---

*Last updated: 2025*`
  },
  {
    id: 'experiences',
    name: 'experiences',
    type: 'folder',
    children: [
      {
        id: 'senior-backend-redrock',
        name: 'senior-backend.redrock.ts',
        type: 'file',
        extension: 'ts',
        content: `// Senior Backend Developer @ RedRock
// 2025 - Present

interface Experience {
  company: "RedRock";
  position: "Senior Backend Developer";
  period: "Mar 2025 - Present";
  responsibilities: [
    "Contributed to the design and implementation of a recommendation system for a crypto-focused social media platform",
    "Developed a personalized content delivery engine based on user behavior and crypto interests",
    "Designed and implemented a fully distributed real-time chat system supporting private and group messaging and video/audio streaming similar to IG live",
    "Collaborated with the team lead on backend architecture decisions with a focus on scalability and reliability",
    "Produced system architecture diagrams and effort estimations for assigned backend components",
    "Participated in peer reviews and worked closely with cross-functional teams to ensure platform alignment"
  ];
  technologies: [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Hasura",
    "NestJS",
    "REST API Design",
    "GraphQL",
    "WebSockets",
    "Kafka",
    "BullMQ",
    "MongoDB",
    "Redis",
    "Microservices Architecture",
    "Distributed Systems",
    "MediaSoup",
    "Real-Time Messaging"
  ];
}

export default Experience;`
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
  responsibilities: [
    "Built an appointment scheduling system integrating dental clinic front desk software with cloud services for real-time data synchronization",
    "Integrated multiple Practice Management Systems (OpenDental, Dentrix, and others) with differing database structures",
    "Implemented an edge-service pattern to normalize data, expose webhooks, and streamline onboarding of new PMS vendors",
    "Designed rate-limited synchronization mechanisms to handle third-party API constraints without service disruption",
    "Processed and cleansed inconsistent patient data and implemented logic to detect and merge duplicate or related records",
    "Developed algorithms to identify primary patient records and link dependents, improving data accuracy and care management",
    "Built a multi-doctor, multi-operatory appointment scheduling system to improve clinic efficiency",
    "Developed a distributed event-driven notification system using SMS, email, and push notifications",
    "Implemented two-way SMS messaging with server-side processing and admin dashboard visibility",
    "Implemented end-to-end encrypted patient–provider chat in collaboration with frontend and mobile teams"
  ];
  technologies: [
    "Node.js",
    "NestJS",
    "Appointment Scheduling Systems",
    "MySQL",
    "Azure Services",
    "Azure Container Apps",
    "Docker",
    "Redis",
    "Twilio (Two-Way SMS)",
    "SendGrid",
    "Firebase Notifications",
    "OpenDental",
    "Dentrix",
    "Event-Driven Architecture",
    "Data Normalization & Cleansing"
  ];
}

export default Experience;
`
      },
      {
        id: 'backend-oppodax',
        name: 'backend.oppodax.ts',
        type: 'file',
        extension: 'ts',
        content: `// Backend Developer @ Oppodax
// 2019 - 2023

interface Experience {
  company: "Oppodax";
  position: "Backend Developer";
  period: "Sep 2019 - Apr 2023";
  responsibilities: [
    "Developed a scalable notification system handling thousands of notifications daily for over 30,000 active users",
    "Built and maintained scalable backend services supporting high-traffic workloads",
    "Streamlined API integrations by creating a centralized shared library, improving deployment speed and code consistency",
    "Implemented real-time features and event-driven workflows for user-facing systems",
    "Integrated observability and monitoring using OpenTelemetry and Grafana to provide real-time business and system metrics",
    "Participated in code reviews and pair programming to improve code quality and team alignment"
  ];
  technologies: [
    "NestJS",
    "MySQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "OpenTelemetry",
    "Grafana"
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
        content: `// Senior iOS Developer @ Barandeh Bash Show
// 2019

import Foundation

struct Experience {
    let company = "Barandeh Bash Show"
    let position = "Senior iOS Developer"
    let period = "Jan 2019 - Aug 2019"
    
    let responsibilities = [
        "Led iOS development team",
        "Architected app using MVVMC pattern with reactive programming",
        "Implemented complex UI animations",
        "Integrated video streaming features",
        "Optimized app performance and memory usage"
    ]
    
    let technologies = [
        "Swift",
        "UIKit",
        "RxSwift",
        "RxCocoa",
        "Core Data",
        "Combine",
        "Socket.io",
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
        "Developed delivery tracking features",
        "Implemented real-time location updates",
        "Created intuitive user interface",
        "Integrated push notifications",
        "Worked with RESTful APIs"
    ]
    
    let technologies = [
        "Swift",
        "UIKit",
        "MapKit",
        "XMPP",
        "Google Map SDK",
        "Core Location",
        "Alamofire",
        "Firebase"
    ]
}`
      },
      {
        id: 'intern-ios-sibche',
        name: 'intern-ios.sibche.swift',
        type: 'file',
        extension: 'swift',
        content: `// iOS Developer Intern @ Sibche
// 2016 - 2017

import Foundation

struct Experience {
    let company = "Sibche"
    let position = "iOS Developer Intern"
    let period = "Feb 2016 - Jan 2017"
    
    let responsibilities = [
        "Assisted in app development",
        "Fixed bugs and implemented small features",
        "Learned iOS best practices",
        "Participated in daily standups",
        "Contributed to code documentation"
    ]
    
    let technologies = [
        "Objective-C",
        "UIKit",
        "Auto Layout",
        "Git"
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
        id: 'beng-computer',
        name: 'software-engineering.qiau.bch',
        type: 'file',
        extension: 'md',
        content: `# Bachelor of Engineering in Computer Software
## Qazvin Islamic Azad University (QIAU)
### 2013 - 2024

## About
Comprehensive computer science and software engineering program focusing on:
- Algorithm design and analysis
- Data structures
- Software architecture
- Database systems
- Operating systems
- Computer networks

## Key Achievements
- GPA: 3.7/4.0
- Dean's List: 6 semesters
- Final project: AI-powered recommendation system
- Active member of Computer Science Club

## Notable Courses
- Advanced Programming
- Data Structures & Algorithms
- Operating Systems
- Database Management Systems
- Software Engineering
- Computer Networks
- Artificial Intelligence
- Web Development`
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
- **TypeScript/JavaScript** ⭐⭐⭐⭐⭐
- **Swift** ⭐⭐⭐⭐⭐
- **Python** ⭐⭐⭐⭐
- **C++** ⭐⭐⭐⭐
- **SQL** ⭐⭐⭐⭐

## Backend Technologies
- Node.js / Express.js
- NestJS
- REST API Design
- GraphQL
- WebSockets
- Microservices Architecture

## iOS Development
- Swift / SwiftUI
- UIKit
- Core Data
- Combine
- AVFoundation
- MapKit / Core Location
- Push Notifications

## Databases
- PostgreSQL
- MongoDB
- Redis
- MySQL
- SQLite

## DevOps & Cloud
- Docker
- Kubernetes
- AWS (EC2, S3, Lambda, RDS)
- Azure Services
- CI/CD (GitHub Actions, Jenkins)
- Nginx
- Linux Administration

## Tools & Others
- Git / GitHub
- Postman
- Jira
- Figma
- Unit Testing (Jest, XCTest)
- Agile/Scrum Methodology`
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
