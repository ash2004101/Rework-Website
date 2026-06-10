# Project Architecture

This document serves as a live map of the codebase.

## Directory Structure

*   **`.core/`**: AI-Memory system and strict documentation rules.
*   **`reworkiq-app/`**: The main React application (Vite + React + TS).
*   **`reworkiq-app/src/components/`**: Reusable UI components like `Header.tsx`, `Footer.tsx`.
*   **`reworkiq-app/src/pages/`**: React Page components (`Home.tsx`, `About.tsx`, `Services.tsx`, `Contact.tsx`).

## Core Components

### React Application (Frontend)
*   **Description**: A modern Single Page Application built with Vite, React, TypeScript, and Tailwind CSS. Employs `framer-motion` for premium scroll animations.
*   **Key Files**: `reworkiq-app/src/App.tsx`, `reworkiq-app/tailwind.config.js`
*   **Routing**: Uses `react-router-dom` with a global `ScrollToTop` listener to ensure clean page transitions.

### Google Apps Script (Backend)
*   **Description**: A serverless function bound to a Google Sheet. It accepts CORS `POST` requests from the frontend, logs lead data to the Sheet with auto-formatting, and sends beautiful HTML email notifications via `MailApp`.
*   **Key Files**: Configured via `.env` pointing to the deployed Web App URL.
