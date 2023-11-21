# [get-selector](https://github.com/jsmini/get-selector)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/get-selector/blob/master/LICENSE)
[![CI](https://github.com/jsmini/get-selector/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsmini/get-selector/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/@jsmini/get-selector)
[![NPM downloads](http://img.shields.io/npm/dm/get-selector.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/get-selector)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/get-selector.svg)](http://isitmaintained.com/project/jsmini/get-selector 'Percentage of issues still open')

获取 DOM 元素的 CSS 选择器，类似 Chrome 浏览器的 copy selector 功能，但支持获取更短的 CSS 选择器。

对于如下的 DOM 结构：

```html
<div class="a">
  <div class="b">
    <div></div>
    <p></p>
    <div></div>
    <div></div>
  </div>
</div>
```

使用 `getSelector` 方法，可以获取到如下的选择器：

```js
// 智能短路径
getSelector(document.querySelector('.b div:nth-of-type(3)'));
// => "div.b > div:nth-of-type(3)"

// 全路径
getSelector(document.querySelector('.b div:nth-child(3)'), false);
// => "body > div.a > div.b > div:nth-of-type(3)"
```

## :pill: 兼容性 单元测试保证支持如下环境：

| IE  | CH  | FF   | SF  | OP   | IOS   | Android | Node |
| --- | --- | ---- | --- | ---- | ----- | ------- | ---- |
| 11+ | 50+ | 100+ | 13+ | 100+ | 10.3+ | 4.1+    | 14+  |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```

.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能

```

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save @jsmini/get-selector
```

如果你是node环境

```js
var base = require('@jsmini/get-selector');
```

如果你是webpack等环境

```js
import base from '@jsmini/get-selector';
```

如果你是浏览器环境

```html
<script src="node_modules/@jsmini/get-selector/dist/index.aio.js"></script>
```

## :bookmark_tabs: 文档

[API](./doc/api.md)

## :kissing_heart: 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## 贡献者列表

[contributors](https://github.com/jsmini/get-selector/graphs/contributors)

## :gear: 更新日志

[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表

[TODO.md](./TODO.md)
