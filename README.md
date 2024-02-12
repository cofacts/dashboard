# Cofacts Dashboard

[![CI test](https://github.com/cofacts/dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/cofacts/dashboard/actions/workflows/ci.yml)

Visualize the data of Cofacts fact-checking platform.

## Getting Started

### Initial setup

Copy `.env.sample` to `.env.local` and fill in the required environment variables.

### Run the server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The main branch of this repository is automatically deployed to `https://dash.cofacts.tw`.


## Other scripts
- `npm run lint`: Run eslint (includes prettier).
- `npm run codegen`: Generates types for graphql queries. Useful when Typescript complains about.`TypedDocumentNode<unknown, Variables>` for new or updated GraphQL queries.
- `npm run build` and `npm start`: Generate production build and start, respectively.
