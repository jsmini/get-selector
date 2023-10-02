# 文档

主要用于从DOM元素获得CSS选择器，可以用于自动化测试，网络爬虫等。

## getSelector

getSelector函数获取指定DOM元素的CSS选择器。 它返回一个标识符，可以用选择器在整个文档中找到这个元素。

函数详细介绍

函数参数和返回值（要遵守下面的例子的规则）

- param {Element | null} el 目标元素，如果输入null，将返回空字符串
- param {boolean} [short] 是否优先返回短的选择器，即如果页面中只有一个元素符合选择器，默认为真
- return {string} 返回对应元素的CSS选择器

举个例子（要包含代码用例）

```js
// 智能短路径
getSelector(document.querySelector('.b div:nth-of-type(3)'));
// => "div.b > div:nth-of-type(3)"

// 全路径
getSelector(document.querySelector('.b div:nth-child(3)'), false);
// => "body > div.a > div.b > div:nth-of-type(3)"
```

特殊说明，比如特殊情况下会报错等

- 如果元素是body,将返回body；
- 如果元素有ID,将返回#ID；
- 如果需要获取短的选择器并且页面中唯一符合这个选择器的元素，直接返回这个选择器；
- 如果cssSelector对应的元素在其父元素中不唯一，或者禁用了短选择器，还需要加上:nth-of-type后缀，除非是第一个元素；
- 如果存在父选择器，需要递归形式将父选择器加在前面，并用>连接。
