import { show_noti } from "../utils.js";

const login_form = document.getElementById("login_form");
login_form.addEventListener("submit", function login(e) {
  e.preventDefault();
  let email_value = document.getElementById("email").value;
  let password_value = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users"));

  for (let user of users) {
    if (email_value == user.email && password_value == user.password) {
      const toast = document.getElementById("toast");
      const toast_bs = bootstrap.Toast.getOrCreateInstance(toast);
      toast_bs.show();
      show_noti("Đăng nhập thành công", true);
      // location = "../index.html";
      return;
    }
  }

  show_noti("Đăng nhập thất bại", false);
});
