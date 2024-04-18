# Blog-React TypeScript Project

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **Prettier**: An opinionated code formatter.
- **React Router**: Declarative routing for React, used to manage navigation from one view to another.

## Application Structure

The application contains the following main routes:

- `/posts`: Displays the main page listing all posts.
- `/posts/{id}`: Displays details for a specific post, where `{id}` is the unique identifier of the post.
- `/`: Redirects automatically to the `/posts` page.

Other undefined routes will show a "Not Found" page, handling all navigation cases that do not match the existing routes.

## Setup and Installation

To get started with this project, clone the repository and follow the steps below:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the local server at http://localhost:5173.

## Building for Production

To build the application for production, run the following command:

```bash
 npm run build
```

This command triggers the Vite build process, optimizing and bundling the code for deployment.

## Approximate time needed for building the application

~10 hours
