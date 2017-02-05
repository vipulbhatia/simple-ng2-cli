import { SimpleNg2CliPage } from './app.po';

describe('simple-ng2-cli App', function() {
  let page: SimpleNg2CliPage;

  beforeEach(() => {
    page = new SimpleNg2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
