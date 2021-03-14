
type StrOrNum = number | string;

let someValue: number | string = 5;
someValue = 'hello';
// someValue = true;

let price: StrOrNum = 5;
price = 'free';
// price = false;
// Type 'boolean' is not assignable to type 'string | number'.



let itemPrice : number;

// const setItemPrice = (price: StrOrNum):void =>{
//   itemPrice = price;
// }

// setItemPrice(50);


const setItemPrice = (price: StrOrNum):void =>{
  if(typeof price === 'string'){
    itemPrice = 0;
  }else{
  itemPrice = price;
}
}

setItemPrice(50);