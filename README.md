<div align="center" justify="center">

![nxt](https://user-images.githubusercontent.com/65926741/115777782-1a7bc500-a38c-11eb-8312-927963bab346.png)

<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/Gabb-c/next-ts-setup/Build?color=000000&labelColor=f72585&style=for-the-badge">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/Gabb-c/next-ts-setup/Build?color=000000&labelColor=480ca8&label=Lint&style=for-the-badge">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/Gabb-c/next-ts-setup/Test?color=000000&labelColor=4cc9f0&label=TESt&style=for-the-badge">
  <img alt="GitHub" src="https://img.shields.io/github/license/Gabb-c/next-ts-setup?color=000000&labelColor=ff9e00&style=for-the-badge">
</p>

# Configure less, Code more!

A Next.js setup integrating with TypeScript

</div>


## Features

- Next.js integrating with TypeScript
- [Styled Components](https://styled-components.com/) with [SSR](https://nextjs.org/docs/basic-features/pages) (Server Side Rendering)
- Webpack 5
- [ESLint Airbnb configuration](https://github.com/airbnb/javascript)
- Editorconfig
- Jest with Enzyme
- Test, Build and Lint workflows
- [Commit Lint](https://commitlint.js.org/#/) with [Husky](https://typicode.github.io/husky/#/)

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

## ESLint

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

## Update your repository with this template

As Next.js releases more features, this template will be updated. So keep your repository up to date
by doing these steps:

```bash
git remote add template https://github.com/Gabb-c/gabbc-page.git
git fetch --all
git merge template/[branch to merge] # If git refuses, add the flag --allow-unrelated-histories
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
