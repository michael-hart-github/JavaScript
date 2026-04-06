/* Page 48 & 49 (pdf reader) / Page 18 & 19 (pdf) */

var globalVar = "global"; // globalVar is given the value global; globalVar is in global scope
function scope() {
  var foo = "1"; // foo is given the value 1; foo is in function scope
  if (true) {
    var bar = "2"; // bar is given the value 2; bar is in block scope
  }
  console.log(globalVar);
  console.log(window.globalVar);
  console.log(foo);
  console.log(bar);
}

scope();
