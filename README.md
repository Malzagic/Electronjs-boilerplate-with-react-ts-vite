# 🛡️ Electron + React + Vite (Security-First Boilerplate)

A professional, high-performance desktop application boilerplate where security is the foundation, not an afterthought. This project utilizes the latest standards of **Electron**, **React**, and **Vite**, eliminating the risk of data leaks and unauthorized system access by strictly isolating the frontend from the backend.

---

## 🔒 Security Architecture (The Shield)

This boilerplate is strictly configured to ensure the rendering process is completely isolated from the system layer:

- **No Node.js in Renderer:** `nodeIntegration` is disabled. Attempting to access Node.js modules (like `fs` or `path`) directly from the React UI or the browser console will fail.
- **Context Isolation:** Full separation between the Main process and the UI process prevents prototype pollution and unauthorized access to Electron's internal APIs.
- **Secure Preload Bridge:** All communication with the system layer is handled through `src/electron/preload.cts`. The UI only interacts with a strictly defined and sanitized API exposed via the `contextBridge`.
- **Zero-Leak Principle:** Sensitive backend logic, system paths, and Node.js capabilities remain hidden from the frontend, ensuring maximum security and a "clean" console.
- **Type-Safe IPC:** Full TypeScript integration ensures that data passed through the bridge is validated and consistent across the entire application.

---

## 🛠️ Tech Stack

- **Core:** [Electron](https://www.electronjs.org/)
- **Frontend:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Communication:** IPC via `contextBridge`

---

## 📂 Project Structure

This project follows a clean, modular structure designed for safety and scalability:

```text
├── src/
│   ├── electron/             # Main process & System logic
│   │   ├── main.ts           # Entry point for the Main process
│   │   ├── preload.cts       # Secure bridge (IPC Gateway)
│   │   ├── pathResolver.ts   # Asset and path management
│   │   ├── util.ts           # Backend utility functions
│   │   └── tsconfig.json     # Electron-specific TS configuration
│   └── UI/                   # React Frontend
│       ├── App.tsx           # Main React component
│       ├── main.tsx          # Frontend entry point
│       └── assets/           # UI-specific resources
├── public/                   # Static assets
├── index.html                # Vite entry template
├── vite.config.ts            # High-performance build configuration
└── package.json              # Project dependencies & scripts
```

## 🚀 Getting Started

1. Installation
   Clone the repository and install dependencies using npm:

Bash

```
npm install
```

## 2. Development

Run the application in development mode with Hot Module Replacement (HMR):

Bash

```
npm run dev
```

## 3. Production Build

Package the application for production:

Bash

```
npm run build
```

## 📝 Coding Principles & Best Practices

- To maintain the professional quality and security of this boilerplate, please follow these rules:

- Code Quality: Keep the code clean, readable, and well-organized so that others can easily understand and maintain it.

- English Comments: All comments, documentation, and technical descriptions within the code must be written in English.

- Strict Security: Never enable nodeIntegration in the renderer. Only expose necessary functionality through the preload script.

- No Hallucinations: Always implement solutions based on official documentation and verified best practices. If a solution is unknown, verify it before implementation.

- Preserve Integrity: When expanding the boilerplate, do not break existing features. Only add what is necessary and keep the codebase optimal.

- Professional Standards: Always verify compatibility with the latest documentation and maintain a professional level of engineering throughout the project.
