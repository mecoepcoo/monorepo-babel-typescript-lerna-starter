# Monorepo
This is a start seed based on [lerna](https://github.com/lerna/lerna). The goal of this project is to provide Out-of-box dev enviroment start with `rollup + typescript + babel + lint + jest`. This project also has built-in build and lint configuration.

## Prerequisites
- Node.js LTS
- npm 7+
- lerna 3+

## Local NPM registry
Use [verdaccio](https://github.com/verdaccio/verdaccio) to set up local NPM repository.

```shell
# installation
$ npm i -g verdaccio
# run verdaccio
$ verdaccio
# add user
$ npm set registry http://localhost:4873/
$ npm adduser --registry http://localhost:4873/
# test repo
$ npm i -g lerna
```

## Get Started
- initialize: `npm i & npm run bootstrap`
- run test：`npm test`
- build：`npm run build`
- lint：`npm run lint:ts`
- commit：`npm run commit`
