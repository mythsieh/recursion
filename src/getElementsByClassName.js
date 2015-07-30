// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   var arr = document.getElementsByClassName(className);
//   return Array.prototype.slice.apply(arr);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  return document.getElementsByClassName(className);
};
