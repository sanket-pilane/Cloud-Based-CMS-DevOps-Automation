# CMS Backend

This is a simple Node.js/Express backend for a basic CMS using MongoDB (Mongoose).

Requirements

- Node.js (>=16 recommended)
- npm
- MongoDB (local or remote)

Setup (Ubuntu)

1. Install Node.js and npm (if not already installed):

   sudo apt update
   sudo apt install -y nodejs npm

2. Install and run MongoDB (or use a remote MongoDB URI). For local MongoDB, you can use the official instructions or install via apt.

3. Copy `.env.example` to `.env` and edit if needed:

   cp .env.example .env

4. Install dependencies and run:

   npm install
   npm run dev

The server listens on port defined in `.env` (default 5000).

API Endpoints

- POST /api/articles — create article (JSON body: { title, content })
- GET /api/articles — list articles
- PUT /api/articles/:id — update article
- DELETE /api/articles/:id — delete article
