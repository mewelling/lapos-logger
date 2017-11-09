Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, '__line', {
  get: function(){
    return [__stack[2].getFileName().split('\\').pop().split('/').pop(),__stack[2].getLineNumber()].join(':');
  }
});

const logger = function () {
  return console.log(__line, ...Object.keys(arguments).map(key => arguments[key]))
};

module.exports = function(logName, getterName) {
  if (!logName) logName = 'l';
  if (!getterName) getterName = 'logg';
  global[logName] = logger;
  global.__defineGetter__(getterName, logger);
};
