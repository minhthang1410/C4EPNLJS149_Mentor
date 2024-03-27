// // tính tổng từ 0 đến n là biến đc khai báo
// let n = 10;
// let tong = 0;
// for (let i = 0; i <= n; i++) {
//   tong += i;
// }
// console.log(tong);
// // tính tích từ 0 đến n là biến đc khai báo
// let tich = 1;
// for (let i = 1; i <= n; i++) {
//   tich *= i;
// }
// console.log(tich);
// let username = "admin";
// let pwd = "admin";
// let username_input = prompt("Nhập username: ");
// let pwd_input = prompt("Nhập password: ");

// let count = 0;

// while (true) {
//   if (username_input == username && pwd_input == pwd) {
//     console.log("Đăng nhập thành công");
//     break;
//   } else {
//     console.log("Đăng nhập thất bại");
//     count++;
//     if (count == 3) {
//       console.log("Tài khoản bị khoá");
//       break;
//     } else {
//       let username_input = prompt("Nhập username: ");
//       let pwd_input = prompt("Nhập password: ");
//     }
//   }
// }
let numbers = [1, 2, 3, 4, 5, 6, 12389712];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
