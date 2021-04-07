[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

# Next.js Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run:

```bash
npm install # If you're using npm
# or
yarn # If you're using yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

This project uses [`Styled Components`](https://styled-components.com/) with [`Server Side Rendering`](https://nextjs.org/docs/basic-features/pages).

## ESLint config

This project uses the [`Airbnb code pattern`](https://github.com/airbnb/javascript). If you want to edit, remove or add a new rule, please edit the `.eslintrc.json` file.

If you're having trouble with ESLint rules, check the [`ESLint Documentation`](https://eslint.org/docs/user-guide/getting-started).

The recommended VSCode config on `.vscode/settings.json`, but make sure you have this options checked:

`File > Preferences > Settings > Extensions > ESLint`

![ESLint Formater](/examples/images/eslint-save.png)

`File > Preferences > Settings > Text Editor`

![Editor Format](/examples/images/eslint-format.png)

## Recommended Extensions

There's a file with the recommended extensions and a nstalation script in `.vscode` folder.

You can run the script like this:

```bash
chmod +x install-ext.sh # Permission to execute
# And then
./install-ext.sh # Execute the script
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
