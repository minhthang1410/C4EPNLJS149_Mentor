// let a = 2;
// let b = 3;
// let res = a ** b;
// console.log(res);
// a--;
// console.log(a);
// a += 10; // a = a + 10
// console.log(a);
let a = 10;

{
  // scope
  let a = 11;
  console.log(a);
  console.error("Đây là lỗi");
  console.warn("Đây là cảnh báo");
}

console.log(a);
