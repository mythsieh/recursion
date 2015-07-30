// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(target) {
  if (Object.prototype.toString.call(target) ===  "[object String]") {
      return "\"" + target.valueOf() + "\"";
  } else if (target === null) {
      return "" + target;
  } else if (Object.prototype.toString.call(target) === "[object Number]" ||
    Object.prototype.toString.call(target) === "[object Boolean]"){
      return "" + target.valueOf();
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
    } else if (Object.prototype.toString.call(target) === "[object Object]") {
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

// Requirements for stringify also added per Mozilla's documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
