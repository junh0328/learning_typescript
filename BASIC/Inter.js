"use strict";
function add(a, b) {
    return a + b;
}
var add2 = function (a, b) {
    console.log(a + b);
};
console.log(add(1, 2));
add2(1, 2);
