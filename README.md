# Update These Site

## Requirements

- Node.js
- NPM
- Typescript (installed globally)

### Steps for Requirements

- Download Node.js from [Here](https://nodejs.org/en/download/package-manager)
- NPM also will be installed with Node.js
- Install Typescript Globally

```bash
npm install -g typescript@latest
```

## Update The info

1. Edit `.ts` file for projects, research papers.
2. after editing, run this in terminal (from base folder that contains `index.html`) to generate equivalent `.js` file
    ```bash
    tsc scripts/assets.ts
    ```
3. Upload the Changes to Git Repository
4. The Website will be automatically redeployed.