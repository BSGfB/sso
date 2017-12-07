import { browser, by, element } from 'protractor';

export class Lw7ListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
