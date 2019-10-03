# Project Structure
> An overview how how the project is structured

### Directory Overview

Source files are placed in a folder named `src` and `public`. These files are then
compiled to the distribution folder `build` ready for deployment.


```
Project Root/
│
├── build/
│
├── dist/
│
├── src/
│   ├── components/
│   │   └── title/
│   │       ├── Title.css
│   │       └── Title.tsx
│   │ 
│   ├── routes/
│   │   └── Home.tsx
│   │ 
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── serviceWorket.ts
│
├── docs/
│
├── node_modules/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│
├── scripts/
│   └── dictionary.js
│
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.scripts.json
└── yarn.lock
```

### File Structure

**build/**  
This folder should be used for app deployment.

**dist/**  
This folder should be used for scripts deployment.

**src/components/${groupName}/**  
`components` folder contains components groups. In groups are components and their styles.
Group name must be **camelCase** and component name **PascalCase**. Component stylesheet
must have same name as component.

**src/routes/**  
Contains all routes. Routes cannot be nested (All routes are on same level).
For route name use **PascalCase**.

**src/App.tsx**  
Main rendered component. Contains router.

**src/index.css**  
Main stylesheet for project. For global styles and variables.

**src/index.tsx**  
Main javascript file which loads and starts whole app. 

**src/serviceWorker.ts**  
Service worker to cache scripts and make app faster. 

**docs/**  
Documentation for the project.

**node_modules/**  
Required dependencies are installed here, do not add to version control.

**.gitignore**  
A standard `.gitignore` file for ignoring files/folders from being added the repo.

**package.json**  
Define project settings in this file. All dependencies are listed here too.

**README.md**  
The project readme.

**tsconfig.json**  
Define TypeScript settings for app.

**tsconfig.scripts.json**  
Define TypeScript settings for utility scripts.

**yarn.lock**
Store exactly which versions of each dependency were installed.