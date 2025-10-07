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

## 🧩 Project Structure Overview

Module	Purpose	Key Features
Frontend (Next.js)	Handles all user interactions and page rendering. Built with React and Tailwind CSS for speed and responsiveness.	Login & Registration, KYC Upload Page, Marketplace Listing Interface, Admin Dashboard UI
Backend (NestJS API)	The core application server responsible for business logic, data management, and API endpoints.	JWT Authentication, KYC Processing, Payments (Paystack), Chat & Notifications
Authentication Service	Manages secure user sessions using RSA-based JWTs.	Login, Registration, Password Management, Role-based Access Control
KYC Verification Service	Ensures identity verification for all buyers and sellers before trading is allowed.	ID & Selfie Upload, Admin Approval, Encrypted File Handling
Database Layer (Prisma + PostgreSQL)	Stores all users, listings, transactions, and KYC records in a relational schema.	Prisma ORM, Migrations, Model Validation, Encrypted Data Fields
Marketplace Core	Central trading system where verified users can post and browse listings.	Categories, Search Filters, Location Sorting, Chat Between Users
Payments Module	Handles listing fees and transaction confirmations securely.	Paystack Integration, Escrow-style Release, Refund Logic
Admin Console	A control panel for system oversight and fraud management.	Approve/Reject KYCs, Suspend Accounts, Manage Disputes
Infrastructure & DevOps	Manages environment setup, containers, and cloud configuration.	Docker Compose Stack, .env Configuration, RSA Key Generation, CI/CD Integration (planned)
🧰 Folder Summary
Path	Description
frontend/	The Next.js web client, including all pages, components, and authentication forms.
backend/	The NestJS API containing modules for auth, KYC, marketplace, and payments.
backend/src/auth/	Authentication module with JWT guard, user service, and login controller.
backend/src/kyc/	Handles all KYC logic (uploads, admin verification, database linkage).
backend/prisma/schema.prisma	Prisma schema file defining database tables and relations.
docker-compose.yml	Container setup for PostgreSQL, backend API, and frontend UI.
.env.example	Environment variable template (database URL, JWT keys, API endpoints).
README.md	Project documentation file (this document).


