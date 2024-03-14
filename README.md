<div align="center">

<h3 align="center">Digital Artist Portfolio</h3>

<p>A SvelteKit website for a digital artist portfolio</p>

<br/>

<nav>
  
[View Portfolio](https://liliagraziely.com)
·
[Report a Bug](https://github.com/SILVAWesley/da-portfolio-web/issues)

</nav>

</div>

## About this project

As a digital artist, it is very important to show your work in a way that interested people and companies
can get in touch with you. That being said, it is very handy to have a website that is indexed by 
search engines, have a great performance, is accessible, reliable and responsive.
That's where this **website** built with **SvelteKit** comes into place. It uses a [strapi CMS](https://github.com/SILVAWesley/da-portfolio-cms) to get content,
serve the client and prerender pages. While offering:

- Internationalization (in english and brazilian portuguese)
- Image storage in an S3 Bucket
- Full CI/CD with Github Actions ([checkout the deployment workflow file](.github/workflows/deploy.yaml))
- Deployment on Vercel
- Unit tests using Vitest
- End to end tests using Playwright
- ESLint/Prettier as linting and formating tools
- Husky, commitzen and commitlint to help maintaining the patterns

### Built with

<div align="center">
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
  ![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
  ![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)
  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
  ![Playwright](https://img.shields.io/badge/Playwright-2EAD33.svg?style=for-the-badge&logo=Playwright&logoColor=white)
  ![Vitest](https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white)
  ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
  ![GithubActions](https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white)
  ![NGINX](https://img.shields.io/badge/NGINX-009639.svg?style=for-the-badge&logo=NGINX&logoColor=white)
  
</div>

## Getting Started

You can [access the production release](https://liliagraziely.com). Or, if you want to run the code locally, follow the steps described below.

### Prerequisites

- `node.js >= 18.x`
- `pnpm >= 8.x`
- You have to be running the strapi CMS project for it to work. [Follow the instructions here](https://github.com/SILVAWesley/da-portfolio-cms/blob/869d5bf999dade56ee939a001e4975612081f53c/README.md).
### Installing

1. Clone the repository using git

```
git clone https://github.com/SILVAWesley/da-portfolio-web.git
```

2. Install the dependencies

```
pnpm install
```

### Setup .env

1. Create a `.env` file in the `root` directory
2. Fill the file following [the template env file](.env.example)
3. Lastly, execute the dev script:
```
pnpm dev
```
