B232270018
Б. Энхбаяр


# Lab 1 - UI Test Playwright

Энэхүү лабораторийн ажлаар Playwright фрэймворк ашиглан [SauceDemo](https://www.saucedemo.com/) веб сайтад автоматжуулсан E2E (End-to-End) тестүүдийг бичиж, гүйцэтгэсэн.

# Ашигласан технологи

* **Language:** TypeScript 
* **Test Runner:** Playwright Test
* **Target Application:** Swag Labs (SauceDemo)

## Төслийг ажиллуулах заавар

1. **Хамаарлуудыг суулгах:**
   ```bash
   npm install


1  **Тестүүдийг ажиллуулах:**
# Бүх тестийг headless горимд ажиллуулах
npx playwright test

# UI горимоор ажиллуулах
npx playwright test --ui

2 **Тестийн тайлан (HTML Report) харах:**

npx playwright show-report


**Playwright болон Selenium харьцуулалт**

1. Архитектур ба Гүйцэтгэл
Selenium нь WebDriver JSON Wire Protocol (буюу HTTP REST API)-аар дамжуулан хөтөчтэй харилцдаг тул команд бүрт сүлжээний хоцролт (overhead) үүсдэг. Харин Playwright нь хөтөчийн зангилаатай WebSocket протоколуудаар (CDP - Chrome DevTools Protocol гэх мэт) шууд харилцдаг тул тест ажиллах хурд маш өндөр.

2. Auto-waiting механизм
Selenium дээр элемент ачаалагдахыг хүлээхэд Implicit Wait эсвэл Explicit Wait гар аргаар зааж өгөх шаардлагатай байдаг бөгөөд энэ нь тест Flaky (тогтворгүй) болох гол шалтгаан болдог. Playwright нь элемент дээр дарах, текст бичихээс өмнө тухайн элемент харагдаж буй эсэх, идэвхтэй байгаа эсэхийг цаанаа автоматаар хүлээдэг (Auto-waiting).

3. XPath-аас зайлсхийх шалтгаан
Selenium-д DOM-ийн бүтцээс хамаарсан урт XPath (//div[2]/form/div[1]/input) ашиглах нь түгээмэл байдаг бөгөөд энэ нь дизайн эсвэл HTML бөгөөд жаахан л өөрчлөгдөхөд тест шууд унадаг. Playwright нь хэрэглэгчийн харах өнцөгт суурилсан Built-in Locators (getByRole, getByText, getByTestId г.м)-ыг санал болгодог. Энэ нь кодын уншигдах чанарыг дээшлүүлж, DOM-ийн бүтцийн өөрчлөлтөд илүү тогтвортой болгодог.

4. Codegen болон Debugging хэрэгсэл
Selenium IDE нь хязгаарлагдмал функцтэй бөгөөд орчин үеийн веб аппликейшн дээр код үүсгэхдээ хангалтгүй байдаг. Playwright-ийн Codegen нь хэрэглэгчийн үйлдэл бүрийг цэвэрхэн TypeScript/JavaScript код болгон хөрвүүлдэг. Мөн унасан тестийг шинжлэхэд Trace Viewer нь алхам бүрийн screenshot, network request, console log-ийг хугацааны шугамаар (timeline) харуулдгаараа Selenium-аас хавьгүй илүү давуу талтай.

5. Санаатай унагаах тест ба Ажиглалт
Даалгаврын дагуу селекторыг санаатай буруу зааж тестийг унагааж үзсэн. Энэ үед Playwright нь тохируулсан тайм-аут (30 сек) хүртэл элементийг автоматаар хүлээгээд, унасан цэг дээрх visual screenshot, DOM snapshot болон уналтын шалтгааныг тодорхой мэдээлсэн HTML report ба Trace файл үүсгэж байв.