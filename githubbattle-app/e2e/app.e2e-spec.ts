import { GithubbattleAppPage } from './app.po';

describe('githubbattle-app App', () => {
  let page: GithubbattleAppPage;

  beforeEach(() => {
    page = new GithubbattleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
