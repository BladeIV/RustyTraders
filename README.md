# 🛡️ RustyTraders – Secure Marketplace Platform

**RustyTraders** is a secure, trust-driven online marketplace where users can buy and sell second-hand goods safely.  
Built with security and transparency at its core, the platform enforces **full KYC verification**, **encrypted file handling**, and **verified seller profiles** to protect buyers and sellers from scams and fraud.

---

## 👤 Developed By
BladeIV (GitHub: [BladeIV](https://github.com/BladeIV))  
📍 Durban, South Africa  
📧 support@prototypeit.co.za *(or your preferred contact email)*

---

## 🚀 Project Overview

| Phase | Title | Status | Description |
|:------|:-------|:-------|:-------------|
| **1** | Setup & Authentication | ✅ Completed | Environment scaffolding (Next.js + NestJS + Docker), JWT authentication, database, and GitHub repo initialization. |
| **2** | KYC & Verification | 🔄 In Progress | Secure identity verification (ID & selfie upload, admin approval, encrypted storage). |
| **3** | Marketplace Core | ⏳ Pending | Product listings, category filters, in-app chat, and search functionality. |
| **4** | Payments & Safety Layer | ⏳ Pending | Paystack integration, escrow logic, and fraud-protection automation. |
| **5** | Reviews & Launch | ⏳ Pending | Ratings, verified badges, and deployment readiness. |

---

## 🧱 Tech Stack

### **Frontend**
- [Next.js 15](https://nextjs.org/) – React-based UI framework  
- [Tailwind CSS](https://tailwindcss.com/) – Modern, responsive styling  
- Axios – Secure HTTP client  
- JWT Authentication – Persistent user sessions  

### **Backend**
- [NestJS 10](https://nestjs.com/) – Node.js server framework  
- [Prisma ORM](https://www.prisma.io/) – PostgreSQL schema management  
- Helmet + Rate-Limiting – API hardening  
- JWT (RS256) – Asymmetric authentication tokens  
- Cloudinary SDK (Phase 2) – Secure media uploads  

### **Infrastructure**
- **PostgreSQL 16** – Primary database  
- **Docker Compose** – Full local stack (frontend + backend + DB)  
- **GitHub CLI** – Governance & automation  
- **OpenSSL RSA Keys** – JWT encryption  

---

## 🔐 Security Features
- RSA-based JWT tokens (`RS256`)
- Helmet with strict CSP and referrer policies  
- Rate limiting (100 requests/min/IP)  
- CORS restricted to allowed origins (`localhost`, `rustytraders.com`)  
- AES-256 encryption for sensitive data  
- Role-based authorization for admin routes  
- POPIA & GDPR compliant data handling  

---

## 🧩 Project Structure

rustytraders/
│
├── frontend/ # Next.js client
│ ├── pages/
│ │ ├── auth/ # login / register
│ │ └── kyc.tsx # KYC upload (Phase 2)
│ └── components/
│
├── backend/ # NestJS API
│ ├── src/
│ │ ├── auth/ # JWT Auth module
│ │ ├── kyc/ # KYC Verification (Phase 2)
│ │ └── prisma/ # PrismaService
│ └── prisma/schema.prisma
│
├── docker-compose.yml
├── .env.example
└── README.md
📆 Development Timeline
Week	Focus	Key Deliverables
Week 1	Phase 1 – Setup & Authentication	✅ Completed full stack environment, database, JWT auth
Week 2	Phase 2 – KYC & Verification	ID + Selfie upload, Admin approval dashboard
Week 3	Phase 3 – Marketplace Core	Listings, filters, search, chat
Week 4	Phase 4 – Payments	Paystack integration, escrow release
Week 5	Phase 5 – Launch & Reviews	Verified badges, post-deployment audit
💰 Payment Milestones
Milestone	Description	Percentage	Status
Deposit #1	Phase 1 Completion – Setup & Authentication	20%	✅ Due upon acceptance
Milestone #2	KYC & Verification Module	25%	🔄 In progress
Milestone #3	Marketplace Core Features	25%	⏳ Pending
Milestone #4	Payments & Transaction Safety	20%	⏳ Pending
Milestone #5	Launch & Security Audit	10%	⏳ Pending
