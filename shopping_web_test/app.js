import { create_element } from "./utils.js";

let products = {
  data: [
    {
      name: "MATRIX 1999 DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/matrix-1999-1.jpg",
    },

    {
      name: "RAEDA DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Raeda-Deck.jpg",
    },

    {
      name: "MUSTY DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Musty-Deck.jpg",
    },

    {
      name: "TRISTIQUE DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Tristique-deck.jpg",
    },

    {
      name: "FIELD TRIP DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Fied-Trip-deck.jpg",
    },

    {
      name: "TARO RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-5.jpg",
    },

    {
      name: "NEON RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-1.jpg",
    },

    {
      name: "ORANAGE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-2.jpg",
    },

    {
      name: "BLUE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-3.jpg",
    },

    {
      name: "WHITE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-4.jpg",
    },

    {
      name: "CUTIS MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cutis.jpg",
    },

    {
      name: "CAM VU MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cam-vu.jpg",
    },

    {
      name: "SON NGUYEN MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/son-nguyen.jpg",
    },

    {
      name: "Test new product",
      price: "new price",
      image: "404",
    },

    {
      name: "Test new product",
      price: "new price",
      image: "404",
    },
  ],
};

function display_product(data) {
  for (let product of data) {
    let div_card = create_element("div", {
      className: "card",
    });

    let div_image_container = create_element("div", {
      className: "image-container",
    });

    let image = create_element("img", {
      src: product.image,
    });

    let div_container = create_element("div", {
      className: "container",
    });

    let h5_name = create_element("h5", {
      className: "product-name",
      innerText: product.name,
    });

    let h6_price = create_element("h6", {
      innerHTML: "<b>Price: </b>" + product.price,
    });

    let btn = create_element("button", {
      innerText: "Thêm vào giỏ hàng",
    });

    div_image_container.appendChild(image);
    div_container.appendChild(h5_name);
    div_container.appendChild(h6_price);
    div_container.appendChild(btn);
    div_card.appendChild(div_image_container);
    div_card.appendChild(div_container);
    div_card.setAttribute("data-bs-toggle", "modal");
    div_card.setAttribute("data-bs-target", "#product_modal");
    div_card.addEventListener("click", () => {
      document.getElementById("product_name").innerText = product.name;
      document.getElementById("product_image").src = product.image;
      document.getElementById("product_price").innerText = product.price;
    });

    document.getElementById("products").appendChild(div_card);
  }
}

display_product(products.data);

const search_input = document.getElementById("search_input");

search_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let search_input_value = document.getElementById("search_input").value;
    let list_product = document.getElementsByClassName("card");
    let product_names = document.getElementsByClassName("product-name");

    for (let i = 0; i < list_product.length; i++) {
      if (
        product_names[i].innerText.includes(search_input_value.toUpperCase())
      ) {
        list_product[i].style = "display: block";
      } else {
        list_product[i].style = "display: none";
      }
    }
  }
});
