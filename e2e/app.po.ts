import { browser, element, by } from 'protractor';

export class SendaxClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sendax-root h1')).getText();
  }
}
