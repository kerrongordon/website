import { browser, element, by } from 'protractor';

export class KgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kg-root h1')).getText();
  }
}
