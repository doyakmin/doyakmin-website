This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

made by sionwer5@gmail.com

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact

If you have any question about this project,
search for username "millwheel" in github or
send email to sionwer5@gmail.com

## Contact Form -> Google Sheets Setup

The `/contact` and `/support/walkerholic` pages support form submission to Google Apps Script.

1. Create a Google Sheet and copy its Spreadsheet ID.
2. Open **Extensions > Apps Script** in that Sheet.
3. Add a `doPost(e)` script that appends these fields to a row:
   `submittedAt, source, service, name, email, category, message`
4. Deploy as **Web app**:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the deployed Web App URL and set:

```bash
NEXT_PUBLIC_CONTACT_SCRIPT_URL=https://script.google.com/macros/s/xxxx/exec
```

If this env var is not set, the form submit button is disabled and users will see an email fallback message.
