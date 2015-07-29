// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (typeof target === "string") {
      return "\"" + target + "\"";
  } else if (target === null || typeof target === "number" || typeof          target === "boolean") {
      return "" + target;
  } else if (target === undefined) {
      return undefined;
  } else if (Array.isArray(target)) {
      var result = '[';
      for(var i = 0; i < target.length; i++) {
          result += rStringTransform(target[i]);
          if (i < target.length - 1) {
              result += ',';
          }
      }
      return result += ']';
  }
};
