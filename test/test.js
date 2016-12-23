var assert = require('assert');

var home = require('../controllers/home.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Controllers', function() {
  describe('Home', function() {
    it('should consist title key', function() {
      var result = home.Index();

      assert.equal(true, 'title' in result);
    });

    it('should title has length of 5', function() {
      var result = home.Index();

      assert.equal(true, result['title'].length === 5);
    });
  });
});
