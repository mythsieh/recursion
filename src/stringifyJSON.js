// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(target) {
  if (typeof target === "string") {
      return "\"" + target + "\"";
  } else if (target === null || typeof target === "number" || typeof target === "boolean") {
      return "" + target;
  } else if (target === undefined || typeof target === "symbol") {
      return undefined;
  } else if (Array.isArray(target)) {
      var result = '[';
      for(var i = 0; i < target.length; i++) {
          if (typeof target[i] === "function" || typeof target[i] === "undefined" || typeof target[i] === "symbol"){
            result += null;
          } else {
            result += stringifyJSON(target[i]);
          }
          if (i < target.length - 1) {
              result += ',';
          }
      }
      return result += ']';
    } else if (typeof target === "object") {
        var objResult = '{';
        var objLength = Object.keys(target).length;
        var counter = 0;
        for (var key in target) {
            if (target[key] === undefined || typeof target[key] === "symbol" || typeof target[key] === "function") {
                return "{}";
            }
            objResult += "\"" + key + "\"";
            objResult += ":";
            objResult += stringifyJSON(target[key]);
            if (counter < objLength - 1) {
                objResult += ",";
            }
            counter++;
        }
        return objResult += '}';
    }
  };

// Saved at http://repl.it/zJh/11
// Requirements for stringify also added per Mozilla's documentation
// *** KNOWN BUG *** - The condition below I could not get to pass for my version of stringify at this time ***
// Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics
// JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
// SHOULD EVALUATE TO --> // '[1,"false",false]'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
