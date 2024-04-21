export function create_element(tag_name, attributes) {
  let element = document.createElement(tag_name);

  if (attributes) {
    for (let key in attributes) {
      element[key] = attributes[key];
    }
  }

  return element;
}

export function show_noti(message, success) {
  const noti = document.getElementById("noti");

  if (success) {
    noti.classList.add("bg-success");
    noti.classList.remove("bg-danger");
  } else {
    noti.classList.add("bg-danger");
    noti.classList.remove("bg-success");
  }

  noti.innerText = message;
  noti.classList.add("show");
  setTimeout(() => {
    noti.classList.remove("show");
  }, 2000);
}

document.getElementById("test").innerText = "nội dung mới";
document.getElementById("test").style = "width: 100%; height: 100px;";

console.log(the_html.innerText);
console.log(the_html.style);
