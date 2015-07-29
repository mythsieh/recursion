// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*  TEST CASES (NON RECURSIVE passed)
9,
null,
true,
false,
"Hello world",
[],
[8],
["hi"],
[8, "hi"],
[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]
*/

var stringifyJSON = function(obj) {
  if (typeof target === "string") {
    return "\"" + target + "\"";
  }
  if (Array.isArray(target)) {
    var result = '[';
      for (var i = 0; i < target.length; i++) {
        if (typeof target[i] === "string") {
          result += "\"" + target[i] + "\"" ;
        } else {
          result += target[i];
        }
        if (i < target.length - 1) {
          result += ',';
        }
      }
      return result += ']';
  }
  return "" + target;
};
