'use strict';
var someValue = 5;
someValue = 'hello';
// someValue = true;
var price = 5;
price = 'free';
// price = false;
// Type 'boolean' is not assignable to type 'string | number'.
var itemPrice;
// const setItemPrice = (price: StrOrNum):void =>{
//   itemPrice = price;
// }
// setItemPrice(50);
var setItemPrice = function (price) {
  if (typeof price === 'string') {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};
setItemPrice(50);
