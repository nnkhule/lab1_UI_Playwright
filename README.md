\# Lab 1 - UI Test Playwright

\## Ашигласан технологи

\- Playwright
\- TypeScript
\- Node.js

\## Website

https://www.saucedemo.com/

\## Tests

\- Login test
\- Logout test
\- Test isolation
\- Playwright Codegen
\- Trace Viewer

\## Run tests

npx playwright test

\## Show the test result 

npx playwright show-result

\## Run tests with trace

npx playwright test --trace on

\## Open trace

npx playwright show-trace test-results/.../trace.zip

Playwright vs Selenium

Playwright нь modern browser automation-д зориулсан tool бөгөөд Chromium, Firefox, WebKit зэрэг browser-уудыг дэмждэг. Locator болон auto-waiting механизм нь UI тестийг илүү тогтвортой бичихэд тусалдаг.

Selenium нь browser automation-ийн өргөн хэрэглэгддэг framework бөгөөд олон хэл болон browser-ийг дэмждэг. Харин Playwright нь modern web application testing болон end-to-end testing-д илүү нэгдсэн боломжуудтай гэж үзэж болно.

Миний хувьд Playwright нь суулгалт, locator, auto-waiting, trace viewer зэрэг боломжуудаас шалтгаалан ашиглахад илүү хялбар санагдсан.