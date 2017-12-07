import { Lw7ListPage } from './app.po';

describe('lw7-list App', () => {
  let page: Lw7ListPage;

  beforeEach(() => {
    page = new Lw7ListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
