function str2classNames(str: string | undefined | null) {
  if (!str) {
    return [];
  }
  return str.split(/\s+/).filter(Boolean);
}

function classNames(el: Element): string[] {
  return str2classNames(el.className);
}

function getNthOfType(el: Element) {
  let sib: Element | null = el;
  let nth = 1;
  while ((sib = sib.previousElementSibling)) {
    if (sib.nodeName.toLowerCase() == el.nodeName.toLowerCase()) {
      nth++;
    }
  }
  return nth;
}

export function getSelector(el: Element | null, short = true) {
  if (!el) {
    return '';
  }
  if (el.tagName.toLowerCase() === 'body') {
    return 'body';
  }
  if (el.id) {
    return `#${el.id}`;
  }

  let cssSelector = el.tagName.toLowerCase();

  const classes = classNames(el);
  if (classes.length) {
    cssSelector += `.${classes.join('.')}`;
  }

  // 如果页面中能够找到唯一的则返回，这样可以让选择器更短一些
  if (short && document.querySelectorAll(cssSelector).length === 1) {
    return cssSelector;
  }

  // 如果当前父元素下有多个同类型的元素，则需要加上 nth-of-type
  if (
    el.parentElement &&
    el.parentElement.querySelectorAll(cssSelector).length > 1
  ) {
    const nthOfType = getNthOfType(el);
    // 如果是第一个，则不需要加 nth of type
    if (nthOfType > 1) {
      cssSelector += `:nth-of-type(${nthOfType})`;
    }
  }

  const parentSelector = getSelector(el.parentElement, short);
  if (parentSelector) {
    cssSelector = `${parentSelector} > ${cssSelector}`;
  }
  return cssSelector;
}
