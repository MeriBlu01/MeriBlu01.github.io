# wedding-invitation

## Current Deployment Flow

1. **Team commits code to `develop` branch**

   - They can push directly or via PRs (pull requests), depending on the repo settings.

2. **GitHub Actions triggers on push to `develop`**

   - The workflow builds the app and publishes the output to the `gh-pages` branch using `gh-pages -d out`.

3. **GitHub Pages serves the app from `gh-pages`**

   - The latest deployed version is available at the GitHub Pages URL (e.g., `https://meriblu01.github.io/wedding-invitation`).

---

## Team Dynamic

| Step                | What to Do                                                                 |
| ------------------- | -------------------------------------------------------------------------- |
| Make a code change  | Edit files in the `develop` branch (or feature branch + PR into `develop`) |
| Push to `develop`   | `git push origin develop` (or merge PR)                                    |
| Wait for deployment | GitHub Actions will build and deploy automatically                         |
| Check the live app  | Go to your GitHub Pages site URL                                           |

---

## Project Structure Overview

This section provides a high-level overview of the folder structure used in this project. Understanding where to place files will help you maintain clarity and scalability as the application grows.

---

### `/app`

This is the core directory of your application. It contains:

- **Pages (Routes)**: Each folder under `/app` can represent a route in your application.
- **Components**: Logic and UI tied to specific routes or reusable elements.
- **APIs or Utilities**: Supporting functionality (such as fetching or transforming data).

You’ll be spending most of your development time here.

---

### `/app/lib`

This folder contains **utility functions** and **logic helpers** used across your application.

Examples:

- Data fetching utilities
- Date formatting functions
- API interaction helpers

Keeping logic here helps promote reusability and clean separation of concerns.

---

### `/app/components`

This directory holds all the **UI components** used throughout your application. These could be:

- Buttons
- Cards
- Modals
- Tables
- Forms

All components here are pre-styled to save you time and promote design consistency.

---

### `/public`

The `/public` folder holds **static assets** that do not require processing by Webpack. Files in this directory are accessible directly via the base URL.

Use this folder for:

- Images (`.jpg`, `.png`, `.svg`)
- Fonts
- Robots.txt or sitemap.xml

Example: An image stored at `/public/hero.png` can be accessed via `https://yourdomain.com/hero.png`.

---

## Best Practices Followed

- Keep components **small** and **reusable**
- Keep logic out of UI components (place it in `/lib`)
- Organize routes clearly in `/app`
- Store only static, public assets in `/public`
