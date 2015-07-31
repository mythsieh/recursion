// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   var arr = document.getElementsByClassName(className);
//   return Array.prototype.slice.apply(arr);
// };

// You should use document.body, element.childNodes, and element.classList
// document.body selects the body
// element.childNodes checks for child nodes
// element.classList checks for the class

// The return value i want is an array-like object of all child elements which have all of the given class names
// For each iteration of the loop i want [body.targetClassName, p.targetClassName] etc.  not necessarily the same length

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var arr = [];
  for (var i = 0; i < body.childNodes.length; i++) {
    if (body.childNodes[i].nodeType === 1) {
      if (body.childNodes[i].classList.contains(className)){
        arr.push(body.childNodes[i]);
      }
    }
  }
  return arr;
};

// My work
// https://jsfiddle.net/mythsieh/x7sp93as/3/
// ============================================
// NOTES:
// 1) unable to do new HTMLCollection
// 2) unable to make array-like object and add read only length property
// 3) I will make do with an array

//  OLD CODE/GOT NOWHERE

// var list = body.childNodes;
// var obj = {};
// for (var i = 0; i < list.length; i++) {
//   if (list[i].nodeType === 1) {
//     if (list[i].classList.contains('targetClassName')){
//       // console.log(list[i]);
//       // console.log(list[i].classList);
//     }
//   }
// }
// // start in document.body
// check element for child nodes

// check if dom element has
