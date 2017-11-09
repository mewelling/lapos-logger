# lapos-logger [![License](https://img.shields.io/:license-apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Is debugging javascript keeping you up at night?

Are you tired of having to `console.log('foo')` your terribly written code?

Is it a struggle to finish reading this line?

Are you a _L_ azy _A_ ss _P_ iece _O_ f _S_ hit?

... Then this is the logger for you!

This logger will create two minimalistic helpers in the global name space to enable you to lazily log as quickly and efficiently as possible, wherever you are in your code base.

## Configuration
```javascript
// import the lapos logger
require('lapos-logger')();

// you can also provide override names for the global helpers
require('lapos-logger')('logger', 'getter');

// By default, this provides the `l` method and the logg `getter` on the global scope
new l;    //test.js:8
l();      //test.js:9
logg      //test.js:10

// The `l` function can also take parameters!
const a = "message";
l(a);                               //test.js:14 message
l("Hello World", 3, [1,2]);         //test.js:15 Hello World 3 [ 1, 2 ]
l({ lazy: true, ugly: 'michael'})   //test.js:16 { lazy: true, ugly: 'michael'}

```

Each invocation will return the current filename and line number, followed by any additional parameters.

### Notes
This is the global logger for all micro based libraries which makes use of [this Stackoverlow answer](https://stackoverflow.com/a/11386493/5045191).
