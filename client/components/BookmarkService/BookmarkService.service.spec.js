'use strict';

describe('Service: BookmarkService', function () {

  // load the service's module
  beforeEach(module('bookmanagerApp'));

  // instantiate service
  var BookmarkService;
  beforeEach(inject(function (_BookmarkService_) {
    BookmarkService = _BookmarkService_;
  }));

  it('should do something', function () {
    expect(!!BookmarkService).toBe(true);
  });

});
