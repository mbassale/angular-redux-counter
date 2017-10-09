import { AngularReduxCounterPage } from './app.po';

describe('angular-redux-counter App', () => {
  let page: AngularReduxCounterPage;

  beforeEach(() => {
    page = new AngularReduxCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
