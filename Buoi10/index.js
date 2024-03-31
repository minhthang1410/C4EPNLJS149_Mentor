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
// let students = [
//   {
//     student_name: "Thắng1",
//     student_age: 15,
//     student_class: "MindX",
//   },
// ];

// for (let i = 0; i < 4; i++) {
//   let student_name = prompt("Nhập tên học sinh:");
//   let student_age = prompt("Nhập tuổi học sinh:");
//   let student_class = prompt("Nhập tên lớp học sinh:");
//   add_student(student_name, student_class, student_age);
// }

// function add_student(student_name, student_class, student_age) {
//   let new_student = {
//     student_name: student_name,
//     student_age: student_age,
//     student_class: student_class,
//   };

//   students.push(new_student);
// }

// console.log(students);
// 2. Thực hiện code tính năng đăng nhập, đăng ký, đổi mật khẩu cho người dùng (khai báo danh sách người dùng, code các hàm tương ứng với từng chức năng, input chỉ cần truyền tham số trực tiếp)
let users = [
  {
    username: "thang1",
    password: "123123",
  },
  {
    username: "thang2",
    password: "123123",
  },
  {
    username: "thang3",
    password: "123123",
  },
  {
    username: "thang4",
    password: "123123",
  },
];

function login(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      console.log("Đăng nhập thành công");
      break;
    } else {
      console.log("Sai username hoặc password !");
    }
  }
}

function register(username, passsword, retype_password) {
  if (validate_user_input(username, passsword)) {
    if (!is_username_exist(username) && passsword == retype_password) {
      console.log("Đăng ký thành công");
      users.push({
        username: username,
        password: password,
      });
    } else {
      console.log("Username đã tồn tại hoặc password nhập lại không đúng");
    }
  }
}

function is_username_exist(username) {
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username) {
      return true;
    }
  }
  return false;
}

function validate_user_input(username, password) {
  if (
    username == "" ||
    username.includes(" ") ||
    password == "" ||
    password.includes(" ") ||
    password.length < 8
  ) {
    console.log("Username hoặc password không hợp lệ");
    return false;
  } else {
    return true;
  }
}

function change_password(
  username,
  old_password,
  new_password,
  retype_new_password
) {
  if (validate_user_input(username, old_password)) {
    for (let user of users) {
      if (
        user.password == old_password &&
        user.username == username &&
        new_password == retype_new_password &&
        new_password != old_password
      ) {
        user.password = new_password;
        console.log("Thay đổi mật khẩu thành công");
      } else {
        console.log("Lỗi");
      }
    }
  }
}

for (let user of users) {
  console.log(user);
}

// console.log(is_username_exist("thang10"));
console.log(users);
let username = "thang10";
let password = "123123123";
let retype_password = "123123123";
// register(username, password, retype_password);
// console.log(users);
change_password("thang1", "123123", "12345678", "12345678");
console.log(users);
