import { SendaxClientPage } from './app.po';

describe('sendax-client App', () => {
  let page: SendaxClientPage;

  beforeEach(() => {
    page = new SendaxClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sendax works!');
  });
});
