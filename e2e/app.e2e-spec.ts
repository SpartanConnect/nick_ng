import { NickWebAppPage } from './app.po';

describe('nick-web-app App', () => {
  let page: NickWebAppPage;

  beforeEach(() => {
    page = new NickWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
