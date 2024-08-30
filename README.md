## Demo Url : [here](https://poetic-khapse-6a09ba.netlify.app)

## how to run
 - install all depedencies
 ```bash 
 npm install
```

- build the project
 ```bash
 npm run build
 ```
  
- run the project
```bash
 npm run preview
 ```

## Design explanation

### Button Component:
I designed the button component to handle various button styles needed across the application. Given that our app utilizes many buttons with different variations—such as filled, outlined, subtle, or with icons—I wanted to create a flexible and reusable solution. By consolidating the logic for different button types into a single component, I’ve ensured ease of integration and streamlined maintenance. This approach allows us to manage button styles consistently and efficiently, reducing redundancy and simplifying updates.
________________________________________

### Popup Component:
To manage multiple popups within the app, I developed a custom popup wrapper component. The goal was to create a reusable and easily integrable solution that simplifies the process of opening, closing, and rendering popups. This approach minimizes code duplication and enhances maintainability by centralizing the popup logic. With this component, any modifications to popup behavior are made in one place, making it a more efficient and organized solution for handling UI elements.
________________________________________

### Store Management:
In the application, I chose to leverage a global state management solution (store) to handle complex state streams effectively. This decision was driven by the need to avoid the challenges associated with props drilling, which can become cumbersome and error-prone as the app scales. By centralizing state management, I can streamline the integration of new features and ensure that state changes are consistently and efficiently propagated throughout the app. This approach not only simplifies development but also enhances scalability and maintainability, allowing us to manage complex state interactions in a more organized and manageable way.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
