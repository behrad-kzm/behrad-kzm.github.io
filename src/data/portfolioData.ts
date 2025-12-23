import { TreeItem } from '@/types/portfolio';

export const portfolioTree: TreeItem[] = [
  {
    id: 'readme',
    name: 'README.md',
    type: 'file',
    extension: 'md',
    content: `# 👨‍💻 It's Me, S. Behrad Kazemi

![Profile Picture](https://avatars.githubusercontent.com/u/6783461?v=4)

## About Me

I’m an experienced Backend Engineer with a strong foundation in backend development and system design, particularly for
distributed systems under heavy load.
My journey began with JavaScript and Node.js, building web applications using Express.js. As I advanced, I adopted TypeScript
for its type safety and scalability, which led me to NestJS, a framework I now use extensively to design and manage complex,
maintainable, and efficient backend systems.
I'm also experienced with both SQL (Postgres, MySQL) and NoSQL (MongoDB) databases, message queues (Kafka, RabbitMQ
and BulMQ), cloud-native infrastructure (Docker, Kubernetes, Azure), Rest API design and GraphQL and have contributed to the open-source ecosystem by
publishing npm packages.

---

## 📧 Contact Information

- **Email:** [me@behradkazemi.com](mailto:me@behradkazemi.com)
- **Website:** [behradkazemi.com](https://behradkazemi.com)

---

## 🔗 Social Links

| LinkedIn | GitHub | Twitter |
|:--------:|:------:|:-------:|
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kaazemi/) | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/behrad-kzm) | [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/behradkzm) |
| **YouTube** | **Medium** | **Instagram** |
| [![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@uncutfarsi) | [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@behradkazemi) | [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/behcrop/) |

---

## 💼 Quick Overview

### Current Role
**Senior Backend Developer @ RedRock**
- Leading backend architecture for enterprise solutions
- Managing development teams
- Implementing scalable microservices

### Expertise
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

## 📺 Content Creator

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

Explore the sidebar to learn more about:
- 📁 **experiences/** - My professional journey
- 📁 **educations/** - Academic background
- 📁 **licenses-certificates/** - Certifications and courses
- 📁 **skills/** - Technical skills and content creation

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
        name: 'BEng.computer-software.qiau',
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
        name: 'ielts',
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
        name: 'courses',
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
