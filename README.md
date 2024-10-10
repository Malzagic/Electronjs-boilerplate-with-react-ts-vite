# Electron.js Boilerplate with React + TypeScript + Vite

A boilerplate to quickly start working with Electron.js, React, TypeScript, and Vite. This template includes minimal configurations to run a React app with Vite, featuring Hot Module Replacement (HMR) support and ESLint for code quality.

## Technologies used in the project

- [Electron.js](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/) or [SWC](https://swc.rs/) (depending on the configuration)

## Installation Instructions

To run the project locally, follow these steps:

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/Malzagic/Electronjs-boilerplate-with-react-ts-vite.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd Electronjs-boilerplate-with-react-ts-vite
   \`\`\`

3. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

4. Run the application in development mode:

   \`\`\`bash
   npm run dev
   \`\`\`

   This command will handle:

   - Building and running the React application with Vite and HMR.
   - Transpiling the Electron code (if needed) and starting Electron in development mode.

   You no longer need to manually run multiple commands (\`npm run build\`, \`npm run transpile:electron\`, \`npm run dev:electron\`). Running \`npm run dev\` will handle everything in one step.

## Vite Note:

This template provides a minimal setup to get React working with TypeScript in Vite, along with HMR and some ESLint rules. Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

### Expanding the ESLint configuration

If you are developing a production application, it's recommended to update the ESLint configuration to enable type-aware rules:

1. Configure the top-level \`parserOptions\` property as follows:

   \`\`\`js
   export default tseslint.config({
   languageOptions: {
   // other options...
   parserOptions: {
   project: ["./tsconfig.node.json", "./tsconfig.app.json"],
   tsconfigRootDir: import.meta.dirname,
   },
   },
   });
   \`\`\`

2. Replace \`tseslint.configs.recommended\` with \`tseslint.configs.recommendedTypeChecked\` or \`tseslint.configs.strictTypeChecked\`.

3. Optionally, add \`...tseslint.configs.stylisticTypeChecked\`.

4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the configuration:

   \`\`\`js
   // eslint.config.js
   import react from "eslint-plugin-react";

   export default tseslint.config({
   // Set the React version
   settings: { react: { version: "18.3" } },
   plugins: {
   // Add the React plugin
   react,
   },
   rules: {
   // other rules...
   // Enable its recommended rules
   ...react.configs.recommended.rules,
   ...react.configs["jsx-runtime"].rules,
   },
   });
   \`\`\`

## License

This project is licensed under the MIT License.
