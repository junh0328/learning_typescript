interface INum {
  a?: number;
  b?: number;
}
function add(a: number, b: number): any {
  return a + b;
}

const add2 = (a: number, b: number): void => {
  console.log(a + b);
};

console.log(add(1, 2));
add2(1, 2);
