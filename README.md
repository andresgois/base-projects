## ESLint com Typescript

### para utilizarmos o ESLint com Typescript é necessário a instalação de diversas bibliotecas de apoio.

```
npm install --save-dev eslint@6 eslint-plugin-standard@4 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@2 eslint-config-standard-with-typescript
```

- Plugin EsLint para VSCode
- inicia:
- yarn eslint --init || npx eslint --init || npm init @eslint/config
- _Corrigir problemas_
- _javascript(import/export)_
- _qual framework está usando?_
- _TypeScript?_
- _Node()_
- _use popular style guide_
- _AirBnB_
- _JavaScript_
- _Instalar via NPM_

- **package.json**
- "lint": "eslint . --ext .ts"
- npm run lint

- **Habilitar auto save com ESLint**
- settings
- open settings

```
 "editor.formatOnSave": true,
 "prettier.eslintintegration": true,
```

## Prettier

- npm install --save-dev --save-exact prettier
- npx prettier --write .

## Typescript

- _Gera tsconfig_
- npx tsc --init

## References

[Eslint Oficial](https://github.com/eslint/eslint)
[npm eslint](https://www.npmjs.com/package/eslint)
[rules](https://eslint.org/docs/user-guide/configuring/)
[Mais sobre lint](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

[Prettier](https://prettier.io/docs/en/install.html)

[Documentação TS](https://www.typescriptlang.org/docs/handbook/intro.html)
[tsconfig]()
