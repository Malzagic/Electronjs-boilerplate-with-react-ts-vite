# Electronjs Boilerplate with React + TypeScript + Vite

Boilerplate pozwalający na szybkie rozpoczęcie pracy z Electron.js, Reactem, TypeScriptem oraz Vite. Ten szablon zawiera minimalne konfiguracje do uruchomienia aplikacji React w Vite, z obsługą HMR (Hot Module Replacement) oraz ESLint.

## Technologie użyte w projekcie

- [Electron.js](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/) lub [SWC](https://swc.rs/) (zależnie od konfiguracji)

## Instrukcja instalacji

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/Malzagic/Electronjs-boilerplate-with-react-ts-vite.git
   ```

2. Przejdź do folderu projektu:

   ```bash
   cd Electronjs-boilerplate-with-react-ts-vite
   ```

3. Zainstaluj zależności:

   ```bash
   npm install
   ```

4. Zbuduj aplikację React:

   ```bash
   npm run build
   ```

   To polecenie utworzy folder `dist-react`, który zawiera zbudowaną aplikację React.

5. Transpiluj kod Electron:

   ```bash
   npm run transpile:electron
   ```

   To polecenie utworzy folder `dist-electron` z przetranspilowanym kodem Electron.

6. Uruchom aplikację w trybie deweloperskim:

   ```bash
   npm run dev:electron
   ```

   Aplikacja zostanie uruchomiona w trybie deweloperskim z aktywnym HMR dla React.

## Notka dotycząca Vite:

Ten szablon zapewnia minimalną konfigurację do uruchomienia React z TypeScript w Vite oraz HMR, a także kilka reguł ESLint. Aktualnie dostępne są dwa oficjalne pluginy:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) używa [Babel](https://babeljs.io/) do obsługi Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) używa [SWC](https://swc.rs/) do obsługi Fast Refresh.

### Rozszerzanie konfiguracji ESLint

Jeśli tworzysz aplikację produkcyjną, zaleca się zaktualizowanie konfiguracji ESLint, aby włączyć reguły uwzględniające typy:

1. Skonfiguruj właściwość `parserOptions` na najwyższym poziomie, jak poniżej:

   ```js
   export default tseslint.config({
     languageOptions: {
       // inne opcje...
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Zastąp `tseslint.configs.recommended` na `tseslint.configs.recommendedTypeChecked` lub `tseslint.configs.strictTypeChecked`.

3. Opcjonalnie dodaj `...tseslint.configs.stylisticTypeChecked`.

4. Zainstaluj [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) i zaktualizuj konfigurację:

   ```js
   // eslint.config.js
   import react from "eslint-plugin-react";

   export default tseslint.config({
     // Ustaw wersję React
     settings: { react: { version: "18.3" } },
     plugins: {
       // Dodaj plugin react
       react,
     },
     rules: {
       // inne reguły...
       // Włącz rekomendowane reguły
       ...react.configs.recommended.rules,
       ...react.configs["jsx-runtime"].rules,
     },
   });
   ```

## Licencja

Projekt dostępny na licencji MIT.
