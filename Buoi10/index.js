// Bài 1
// const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
// const targetCounting = 1;
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == targetCounting) {
//     count++;
//   }
// }

// console.log(numbers);
// console.log(`Số ${targetCounting} xuất hiện ${count} lần`);

// Bài 2
// const numbers = [5, 20, 9, 3, 7, 11, 8];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log(`max = ${max}`);
// Bài 3
// const array = [1, 2, 3, 4, 5];
// let arr_reverse = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   arr_reverse.push(array[i]);
//   console.log(arr_reverse);
// }
// Bài 4
// const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
// // tạo 1 mảng mới thêm từng phần tử từ mảng đã cho vào tuy nhiên trước khí thêm thì kiểm tra xem phần tử đã có trong mảng mới hay chưa
// let new_arr = [];

// for (let i = 0; i < duplicatesArray.length; i++) {
//   if (!new_arr.includes(duplicatesArray[i])) {
//     new_arr.push(duplicatesArray[i]);
//   }
// }

// console.log(new_arr);
// 1. Thực hiện code nhập và lưu trữ danh sách học sinh lưu thông tin của từng học sinh được nhập từ trang web
let students = [
  {
    student_name: "Thắng1",
    student_age: 15,
    student_class: "MindX",
  },
];

for (let i = 0; i < 4; i++) {
  let student_name = prompt("Nhập tên học sinh:");
  let student_age = prompt("Nhập tuổi học sinh:");
  let student_class = prompt("Nhập tên lớp học sinh:");

  let new_student = {
    student_name: student_name,
    student_age: student_age,
    student_class: student_class,
  };

  students.push(new_student);
}

console.log(students);
