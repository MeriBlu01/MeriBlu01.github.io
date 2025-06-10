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

## Environment Variables (.env.local)

This project uses a .env.local file to store sensitive information and personalized links related to the gift registry. These variables are accessed from the frontend using the NEXT*PUBLIC* prefix.

### Gift Registry Links

External gift registry links were configured for the following platforms:

-NEXT_PUBLIC_LIVERPOOL_GIFT_URL – Link to the gift registry on Liverpool
-NEXT_PUBLIC_LIVERPOOL_NUMBER – Event number on Liverpool
-NEXT_PUBLIC_AMAZON_GIFT_URL – Link to the gift registry on Amazon

### Bank Account Details (Bank)

Bank account details were also included for anyone who wishes to make a deposit:

-NEXT_PUBLIC_BANK_NAME – Name of the account holder
-NEXT_PUBLIC_BANK_CODE_NUMBER – Interbank CLABE (transfer code)
-NEXT_PUBLIC_BANK_ACCOUNT_NUMBER – Bank account number

### Example of `.env.local`

```env
NEXT_PUBLIC_LIVERPOOL_GIFT_URL=https://www.liverpool.com.mx/evento/your-event
NEXT_PUBLIC_LIVERPOOL_NUMBER=12345678
NEXT_PUBLIC_AMAZON_GIFT_URL=https://www.amazon.com.mx/hz/wishlist/ls/XXXXXXXXXXX
NEXT_PUBLIC_SANTANDER_NAME=AccountHolderName
NEXT_PUBLIC_SANTANDER_CODE_NUMBER=012345678901234567
NEXT_PUBLIC_SANTANDER_ACCOUNT_NUMBER=12345678901
```

---

## Airtable API for 'Wedding RSVPs' base

- API Guide for [Wedding RSVPs](https://airtable.com/app2JIqG8iCFMvMbG/api/docs#curl/introduction) base

- Community-built API clients: [airtable.js](https://github.com/Airtable/airtable.js)

- [Graphical Airtable interface](https://airtable.com/app2JIqG8iCFMvMbG/tblTEj2ByztHryp67/viwSyiZAGiOct4rj1?blocks=hide) for 'Wedding RSVPs' base

---

## Best Practices Followed

- Keep components **small** and **reusable**
- Keep logic out of UI components (place it in `/lib`)
- Organize routes clearly in `/app`
- Store only static, public assets in `/public`

## Licenses

Music by [Clavier Clavier](https://pixabay.com/es/users/clavier-music-16027823/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=272714) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=272714)
