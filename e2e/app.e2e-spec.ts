import { KgPage } from './app.po';

describe('kg App', () => {
  let page: KgPage;

  beforeEach(() => {
    page = new KgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kg works!');
  });
});
