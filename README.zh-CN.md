# Monorepo
这是一个基于[lerna](https://github.com/lerna/lerna)的起步种子项目，旨在为工具库的开发提供开箱即用的 `rollup + typescript + babel + lint + jest` 开发环境。

项目中也已经集成了打包和lint相关的基础配置。

## 环境准备
- Node.js LTS
- npm 7+
- lerna 3+

## 本地私有仓库
使用 [verdaccio](https://github.com/verdaccio/verdaccio) 部署本地npm仓库非常得方便。

```shell
# 安装
$ npm i -g verdaccio
# 运行
$ verdaccio
# 新增用户
$ npm set registry http://localhost:4873/
$ npm adduser --registry http://localhost:4873/
# 测试
$ npm i -g lerna
```

可以修改远程npm源为淘宝源。

根据运行verdaccio时控制台的输出 `config file  - C:\Users\yourname\.config\verdaccio\config.yaml` 找到配置文件，修改 `uplinks/npmjs/url` 为 `https://registry.npm.taobao.org/`

## 起步
- 初始化: `npm i & npm run bootstrap`
- 测试：`npm test`
- 编译：`npm run build`
- lint：`npm run lint:ts`
- 提交代码：`npm run commit`
