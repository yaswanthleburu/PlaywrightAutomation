// // // world.ts
// // import { setWorldConstructor, World } from '@cucumber/cucumber';
// // import { Page, BrowserContext, Browser } from '@playwright/test';

// // export class CustomWorld extends World {
// //   browser!: Browser;
// //   context!: BrowserContext;
// //   page!: Page;

// //   constructor(options: any) {
// //     super(options); // 👈 Required to inherit Cucumber's World
// //   }
// // }

// // setWorldConstructor(CustomWorld);
// import { setWorldConstructor, World } from '@cucumber/cucumber';
// import { Browser, BrowserContext, Page } from '@playwright/test';

// export class CustomWorld extends World {
//   browser!: Browser;
//   context!: BrowserContext;
//   page!: Page;
// }

// setWorldConstructor(CustomWorld);
