import { Angular2SimplecalendarPage } from './app.po';

describe('angular2-simplecalendar App', function() {
  let page: Angular2SimplecalendarPage;

  beforeEach(() => {
    page = new Angular2SimplecalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
