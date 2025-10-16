# 🛡️ RustyTraders – Secure Marketplace Platform

**RustyTraders** is a secure, trust-driven online marketplace where users can buy and sell second-hand goods safely.  
Built with security and transparency at its core, the platform enforces **full KYC verification**, **encrypted file handling**, and **verified seller profiles** to protect buyers and sellers from scams and fraud.

---

## 👤 Developed By
BladeIV (GitHub: [BladeIV](https://github.com/BladeIV))  
📍 Durban, South Africa  
📧 support@prototypeit.co.za 

---

## 🚀 Project Overview

| Phase | Title | Status | Description |
|:------|:------|:------:|:------------|
| **1** | Setup & Authentication | ✅ Completed | Environment scaffolding (Next.js + NestJS + Docker), JWT auth, DB init. |
| **2** | KYC & Verification | 🟩 Backend Stable / Frontend In Progress | Secure identity verification (ID & selfie upload, AES encryption, admin approval). |
| **3** | Marketplace Core | ⏳ Pending | Product listings, category filters, in-app chat, search functionality. |
| **4** | Payments & Safety Layer | ⏳ Pending | Paystack integration, escrow logic, fraud-protection automation. |
| **5** | Reviews & Launch | ⏳ Pending | Ratings, verified badges, deployment readiness. |

**🧾 Last Updated:** 2025-10-16 — Phase 2 Day 2 (**8 h**)  
**Milestone Log:** [`docs/milestones/phase2_day2.md`](docs/milestones/phase2_day2.md)

---

📘 **Latest Milestone:**  
[Phase 2 Day 1 — Database & Prisma Integration](backend/docs/milestones/phase2_day1.md) ✅

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


## 🗂️ Project Structure

```bash
rustytraders/
│
├── frontend/                 # Next.js client
│   ├── pages/
│   │   ├── auth/             # login / register
│   │   └── kyc.tsx           # KYC upload (Phase 2)
│   └── components/
│
├── backend/                  # NestJS API
│   ├── src/
│   │   ├── auth/             # JWT Auth module
│   │   ├── kyc/              # KYC Verification (Phase 2)
│   │   └── prisma/           # PrismaService
│   └── prisma/schema.prisma
│
├── docker-compose.yml
├── .env.example
└── README.md
```


