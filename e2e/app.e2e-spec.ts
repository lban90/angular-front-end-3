import { FrontEnd30Page } from './app.po';

describe('front-end30 App', () => {
  let page: FrontEnd30Page;

  beforeEach(() => {
    page = new FrontEnd30Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
