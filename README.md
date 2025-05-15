# wedding-invitation

# Project Structure Overview

This document provides a high-level overview of the folder structure used in this project. Understanding where to place files will help you maintain clarity and scalability as the application grows.

---

## `/app`

This is the core directory of your application. It contains:

- **Pages (Routes)**: Each folder under `/app` can represent a route in your application.
- **Components**: Logic and UI tied to specific routes or reusable elements.
- **APIs or Utilities**: Supporting functionality (such as fetching or transforming data).

You’ll be spending most of your development time here.

---

## `/app/lib`

This folder contains **utility functions** and **logic helpers** used across your application.

Examples:

- Data fetching utilities
- Date formatting functions
- API interaction helpers

Keeping logic here helps promote reusability and clean separation of concerns.

---

## `/app/components`

This directory holds all the **UI components** used throughout your application. These could be:

- Buttons
- Cards
- Modals
- Tables
- Forms

All components here are pre-styled to save you time and promote design consistency.

---

## `/public`

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
