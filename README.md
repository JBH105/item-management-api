# Item Management API

A simple API for managing items with different types (product, service, subscription) built with Node.js and TypeScript.

## Features
- Add new items (`POST /api/items`)
- Retrieve all items categorized by type (`GET /api/items`)
- Centralized error handling
- Input validation with clear error messages
- Scalable folder structure

## Technologies
- Node.js
- Express.js
- TypeScript

## Project Structure
```plaintext
src/
├── configs/
│   └── app.config.ts        # Configuration settings
├── features/
│   ├── items/
│   │   ├── items.controller.ts # Controller logic for items
│   │   ├── items.service.ts    # Business logic and data handling
│   │   ├── items.types.ts      # Types and interfaces for items
│   │   ├── items.routes.ts     # Routes for items feature
├── libs/
│   └── validation.ts        # Validation utilities
├── shared/
│   ├── database.ts          # Simulated in-memory storage
│   └── utils.ts             # Shared utilities
├── setup/
│   └── server.ts            # Main server setup
└── routes/
    └── index.ts             # Centralized route management

