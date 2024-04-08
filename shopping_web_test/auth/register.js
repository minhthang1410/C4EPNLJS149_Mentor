import { show_noti } from "../utils.js";

const register_form = document.getElementById("register_form");
register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let password = document.getElementById("password").value;
  let retype_password = document.getElementById("retype_password").value;

  if (
    email.length == 0 ||
    phone_number.length == 0 ||
    password.length == 0 ||
    retype_password.length == 0
  ) {
    show_noti("Không được để trống ô input", false);
  } else if (password != retype_password) {
    show_noti("Password nhập lại chưa đúng", false);
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      users.push({
        email: email,
        phone_number: phone_number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      let users = [];
      users.push({
        email: email,
        phone_number: phone_number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
    show_noti("Đăng ký thành công", true);
    location = "login.html";
  }
});

users = [
  {
    email: "Thang",
    phone_number: 981023989123,
    password: "123",
  },
];
