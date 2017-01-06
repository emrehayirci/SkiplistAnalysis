var assert = require('assert');

var home = require('../analysis.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
/*
describe('Controllers', function() {
  describe('Home', function() {
    it('should consist title key', function() {
      var result = home.DoAnalysis();
      assert.equal(true, 'title' in result);
    });
  });
});
*/