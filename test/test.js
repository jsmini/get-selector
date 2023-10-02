const expect = require('expect.js');
var jsdom = require('mocha-jsdom');

// ts 测试编译后文件
const { getSelector } = require('../src/index.ts');

describe('getSelector', function () {
  jsdom({
    url: 'http://localhost:8080',
    html: `<!doctype html>
      <html>
        <head></head>
        <body>
          <div class="a">
            <div class="b">
              <div></div>
              <p></p>
              <div></div>
              <div></div>
            </div>
          </div>

          <div id="a">
            <div></div>
          </div>
        </body>
      </html>`,
  });

  it('nth', function () {
    expect(
      getSelector(document.querySelector('.b div:nth-of-type(2)')),
    ).to.equal('div.b > div:nth-of-type(2)');

    expect(
      getSelector(document.querySelector('.b div:nth-of-type(1)')),
    ).to.equal('div.b > div');
  });
  it('class', function () {
    expect(getSelector(document.querySelector('.b'))).to.equal('div.b');
  });
  it('id', function () {
    expect(getSelector(document.querySelector('#a'))).to.equal('#a');
  });
  it('body', function () {
    expect(getSelector(document.body)).to.equal('body');
  });
  it('el error', function () {
    expect(getSelector()).to.equal('');
  });
  it('short = false', function () {
    expect(getSelector(document.querySelector('.b'), false)).to.equal(
      'body > div.a > div.b',
    );
  });
});
