import { TreeItem } from '@/types/portfolio';

export const portfolioTree: TreeItem[] = [
  {
    id: 'readme',
    name: 'README.md',
    type: 'file',
    extension: 'md',
    content: `# 👨‍💻 Welcome to My Portfolio

![Profile Picture](https://api.dicebear.com/7.x/avataaars/svg?seed=developer)

## About Me

Hello! I'm a passionate Full-Stack Developer with extensive experience in backend development and iOS app development. I specialize in building scalable, high-performance applications and have worked with cutting-edge technologies across multiple platforms.

With over 6 years of professional experience, I've contributed to various successful projects ranging from enterprise solutions to mobile applications. I'm also passionate about sharing knowledge through my tech podcast and YouTube channel.

---

## 📧 Contact Information

- **Email:** [your.email@example.com](mailto:your.email@example.com)
- **Phone:** +1 (555) 123-4567
- **Location:** Your City, Country
- **Website:** [www.yourwebsite.com](https://www.yourwebsite.com)

---

## 🔗 Social Links

| LinkedIn | GitHub | Twitter |
|:--------:|:------:|:-------:|
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile) | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername) | [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle) |
| **YouTube** | **Medium** | **Instagram** |
| [![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@yourchannel) | [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@yourusername) | [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/yourhandle) |

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

### Education
- **BEng in Computer Software Engineering**
- Qazvin Islamic Azad University (2014-2018)

---

## 📺 Content Creator

I run a tech-focused YouTube channel with 15K+ subscribers where I share:
- Software development tutorials
- System design discussions
- Career advice for developers
- Code reviews and best practices

**Check out my latest videos on YouTube!**

---

## 🎯 What I Do

### Backend Development
Specializing in building robust, scalable backend systems with modern technologies and best practices.

### iOS Development
Creating beautiful, performant iOS applications using Swift and SwiftUI.

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
// 2022 - Present

interface Experience {
  company: "RedRock";
  position: "Senior Backend Developer";
  period: "2022 - Present";
  responsibilities: [
    "Led backend architecture design and implementation",
    "Managed a team of 5 backend developers",
    "Optimized database queries reducing load time by 40%",
    "Implemented microservices architecture",
    "Designed and deployed scalable REST APIs"
  ];
  technologies: [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes"
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
// 2020 - 2022

interface Experience {
  company: "SmileLink";
  position: "Backend Developer";
  period: "2020 - 2022";
  responsibilities: [
    "Developed RESTful APIs for mobile applications",
    "Implemented authentication and authorization systems",
    "Integrated third-party payment gateways",
    "Optimized application performance",
    "Collaborated with frontend team for seamless integration"
  ];
  technologies: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS",
    "JWT"
  ];
}

export default Experience;`
      },
      {
        id: 'backend-oppodax',
        name: 'backend.oppodax.ts',
        type: 'file',
        extension: 'ts',
        content: `// Backend Developer @ Oppodax
// 2019 - 2020

interface Experience {
  company: "Oppodax";
  position: "Backend Developer";
  period: "2019 - 2020";
  responsibilities: [
    "Built scalable backend services",
    "Implemented real-time features using WebSockets",
    "Developed data processing pipelines",
    "Created comprehensive API documentation",
    "Participated in code reviews and pair programming"
  ];
  technologies: [
    "Python",
    "Django",
    "PostgreSQL",
    "Redis",
    "Celery"
  ];
}

export default Experience;`
      },
      {
        id: 'senior-ios-bbshow',
        name: 'senior-ios.bbshow.swift',
        type: 'file',
        extension: 'swift',
        content: `// Senior iOS Developer @ BBShow
// 2021 - 2022

import Foundation

struct Experience {
    let company = "BBShow"
    let position = "Senior iOS Developer"
    let period = "2021 - 2022"
    
    let responsibilities = [
        "Led iOS development team",
        "Architected app using MVVM pattern",
        "Implemented complex UI animations",
        "Integrated video streaming features",
        "Optimized app performance and memory usage"
    ]
    
    let technologies = [
        "Swift",
        "UIKit",
        "SwiftUI",
        "Core Data",
        "Combine",
        "AVFoundation"
    ]
}`
      },
      {
        id: 'ios-speeddeliv',
        name: 'ios.speeddeliv.swift',
        type: 'file',
        extension: 'swift',
        content: `// iOS Developer @ SpeedDeliv
// 2019 - 2021

import Foundation

struct Experience {
    let company = "SpeedDeliv"
    let position = "iOS Developer"
    let period = "2019 - 2021"
    
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
// 2018 - 2019

import Foundation

struct Experience {
    let company = "Sibche"
    let position = "iOS Developer Intern"
    let period = "2018 - 2019"
    
    let responsibilities = [
        "Assisted in app development",
        "Fixed bugs and implemented small features",
        "Learned iOS best practices",
        "Participated in daily standups",
        "Contributed to code documentation"
    ]
    
    let technologies = [
        "Swift",
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
// 2017 - 2018

#include <iostream>
#include <vector>

class RoboCupExperience {
public:
    std::string team = "University RoboCup Team";
    std::string role = "Software Developer";
    std::string period = "2017 - 2018";
    
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
        "ROS (Robot Operating System)",
        "Linux",
        "Python"
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
### 2014 - 2018

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

### Overall Score: 7.5
**Test Date:** March 2023

## Score Breakdown
- **Listening:** 8.0
- **Reading:** 7.5
- **Writing:** 7.0
- **Speaking:** 7.5

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

## Technical Certifications

### AWS Certified Solutions Architect - Associate
**Issuer:** Amazon Web Services
**Date:** 2023
**Skills:** Cloud Architecture, AWS Services, Scalability

### Kubernetes Administrator (CKA)
**Issuer:** Cloud Native Computing Foundation
**Date:** 2022
**Skills:** Container Orchestration, DevOps, Cloud Native

### MongoDB Certified Developer
**Issuer:** MongoDB University
**Date:** 2021
**Skills:** NoSQL, Database Design, Performance Tuning

## Online Courses

### Advanced TypeScript Programming
**Platform:** Udemy
**Completion:** 2023

### iOS App Development with SwiftUI
**Platform:** Coursera
**Completion:** 2022

### Microservices Architecture
**Platform:** Pluralsight
**Completion:** 2022

### Machine Learning Specialization
**Platform:** Coursera (Stanford)
**Completion:** 2021`
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
- Django / Flask
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
- **Subscribers:** 15K+
- **Total Views:** 250K+
- **Videos Published:** 80+
- **Average Rating:** 4.8/5

### Popular Videos
1. "Building Scalable Microservices with Node.js"
2. "SwiftUI Complete Guide for Beginners"
3. "System Design Interview Preparation"
4. "Clean Code Principles Every Developer Should Know"

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
