<h1 align='center'>
  GitHapp app
</h1>

<p align='center'>
  Una aplicación para consultar usuarios y repositorios de github
</p>

<p align='center'>
<img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img alt="Next JS" src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img alt="Shadcn" src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white">
<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img alt="Eslint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
<img alt="Prettier" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">

</p>

## Pre requisitos

- Node.js 20

## Instalación

Clona el repositorio a tu local

```bash
git clone https://github.com/Axoluchin/next-RCCM.git
```

Accede al directorio del proyecto e instala las dependencias

```bash
npm i
```

Agrega tu [token de Github](https://github.com/settings/tokens) en `.env.local`

```
GITHUB_API=<YOUR_TOKEN>
```

Ahora ya puedes correr el proyecto en tu local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador y listo, diviértete :D

## Deploy

Este repositorio esta vinculado a Vercel, los cambios lanzados a `main` serán enviados a [la pagina web](https://githapp-technical-test.vercel.app/)

## TechnicalTest

Esta es una prueba técnica, puedes consultar los requisitos [aquí](./TechnicalTest.md)
