import { SCPage } from './app.po';

describe('sc App', function() {
  let page: SCPage;

  beforeEach(() => {
    page = new SCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
