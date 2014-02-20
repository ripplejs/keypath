var keypath = require('keypath');
var assert = require('assert');

describe('Keypath', function(){

  it('should set properties', function(){
    var obj = {};
    keypath.set(obj, 'foo.bar', 'baz');
    assert( obj.foo.bar === 'baz' );
  });

  it('should get properties', function(){
    var obj = {
      foo: {
        bar: 'baz'
      }
    };
    assert( keypath.get(obj, 'foo.bar') === 'baz' );
  });

  it('should return undefined for missing nested properties', function(){
    var obj = {};
    keypath.set(obj, 'razz.tazz', 'bar');
    assert( keypath.get(obj, 'foo') === undefined );
    assert( keypath.get(obj, 'foo.bar') === undefined );
    assert( keypath.get(obj, 'razz.tazz.jazz') === undefined );
  })

});