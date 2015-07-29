// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    //Base cases
    if (typeof target === "string") {
        return "\"" + target + "\"";
    } else if (target === null || typeof target === "number" || typeof target === "boolean") {
        return "" + target;
    } else if (target === undefined) {
        return undefined;
    }
};
