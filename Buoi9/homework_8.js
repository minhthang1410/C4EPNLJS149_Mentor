// let year = parseInt(prompt("Nhập năm: "));

// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//   console.log(`${year} là năm nhuận !`);
// } else {
//   console.log(`${year} không là năm nhuận !`);
// }

// let a = 110;
// let b = 40;
// let c = 30;
// let tong_3_goc = a + b + c;
// if (tong_3_goc == 180) {
//   if (a == 90 || b == 90 || c == 90) {
//     console.log("Tam giác vuông");
//   } else if (a == 60 && b == 60 && c == 60) {
//     console.log("Tam giác đều");
//   } else if (a > 90 || b > 90 || c > 90) {
//     console.log("Tam giác tù");
//   }
// } else {
//   console.log("Tam giác không hợp lệ");
// }

// let a = 4;
// let b = -2;
// let c = -6;

// if (a == 0) {
//   let x = -c / b;
//   console.log(`Phương trình bậc 1 có nghiệm x = ${x}`);
// } else {
//   let delta = b * b - 4 * a * c;
//   if (delta < 0) {
//     console.log("Vô nghiệm");
//   } else if (delta == 0) {
//     let x = (-b / 2) * a;
//     console.log(`Nghiệm kép x1 = x2 = ${x}`);
//   } else {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`2 nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`);
//   }
// }

let dtb = 9;

if (dtb < 5) {
  console.log("Hạng D");
} else if (dtb < 7) {
  console.log("Hạng C");
} else if (dtb < 9) {
  console.log("Hạng B");
} else if (dtb < 11) {
  console.log("Hạng A");
} else {
  console.log("Điểm không hợp lệ");
}
