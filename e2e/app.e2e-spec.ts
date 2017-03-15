import { KhatoonTestPage } from './app.po';

describe('khatoon-test App', () => {
  let page: KhatoonTestPage;

  beforeEach(() => {
    page = new KhatoonTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
