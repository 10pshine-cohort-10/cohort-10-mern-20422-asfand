# Notes App

A full-stack notes management application built with the MERN stack (MongoDB, Express, React, Node.js) as part of the 10 Pearls Cohort 10 internship program.

## What it does

- Users can sign up, log in, and manage their personal notes
- Notes support rich text editing
- Each user only sees their own notes

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React (Vite) |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Auth | JWT, bcrypt |
| Logging | Pino, pino-http |
| Testing | Mocha + Chai (backend), Jest + RTL (frontend) |
| Code quality | SonarQube, CodeRabbit |

## Project structure

```
├── server/               # Express API
│   ├── src/
│   │   ├── config/       # environment and db config
│   │   ├── controllers/  # route handlers
│   │   ├── middleware/    # auth, error handling, logging
│   │   ├── models/       # Mongoose schemas
│   │   ├── routes/       # API route definitions
│   │   ├── services/     # business logic
│   │   └── app.js        # server entry point
│   ├── package.json
│   └── .env.example
│
├── client/               # React app
│   ├── src/
│   │   ├── components/   # reusable UI components
│   │   ├── context/      # React context providers
│   │   ├── pages/        # page-level components
│   │   └── services/     # API client functions
│   ├── package.json
│   └── .env.example
│
├── .coderabbit.yaml      # CodeRabbit review config
└── .gitignore
```

## Getting started

### Prerequisites

- Node.js (v18 or later)
- MongoDB (local or Atlas)
- Git

### Setup

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/10pshine-cohort-10/cohort-10-mern-20422-asfand.git
cd cohort-10-mern-20422-asfand

# backend
cd server
cp .env.example .env    # fill in your values
npm install

# frontend
cd ../client
cp .env.example .env
npm install
```

2. Start the development servers:

```bash
# backend (from server/)
npm run dev

# frontend (from client/)
npm run dev
```

## Running tests

```bash
# backend
cd server
npm test

# frontend
cd ../client
npm test
```

## Contributing

This project follows a feature-branch workflow. Each feature gets its own branch and PR into `develop`. See the branching and commit conventions used in this repo.

## Author

Asfand Yar — 10 Pearls Cohort 10
