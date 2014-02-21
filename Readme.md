# keypath [![Build Status](https://travis-ci.org/ripplejs/keypath.png?branch=master)](https://travis-ci.org/ripplejs/keypath) ![stable](http://img.shields.io/badge/stability-stable-green.svg)

  Get or set a property on an object using a keypath

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/keypath

## API

```js
var keypath = require('keypath');

var obj {
  foo: {
    bar: {
      baz: 1
    }
  }
};

keypath.get(obj, 'foo.bar.baz') // 1
keypath.set(obj, 'foo.bar.baz', 2);
```


## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
