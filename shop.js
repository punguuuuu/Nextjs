function changePage(page) {
  if (!window.location.pathname.includes(page)) {
    window.location.href = page;
  } else {
    showMenu(false);
  }
}

let menu = document.getElementById("menu");
let main = document.getElementById("main");

function showMenu(show) {
  if (show) {
    menu.style.width = "300px";
    main.style.marginLeft = "300px";
  } else {
    menu.style.width = "0";
    main.style.marginLeft = "0";
  }

  setTimeout(() => {
    window.scrollTo(0, window.scrollY);
  }, 0);
}

let items = document.getElementsByClassName("item");
let itemImg = document.getElementById("image");
let itemCaption = document.getElementById("caption");
for (let count = 0; count < items.length; count++) {
  let item = items[count];
  let desc = document.createElement("p");
  desc.classList.add("desc");

  let image = item.querySelector("img");
  desc.innerHTML = image.alt;
  item.appendChild(desc);

  item.onclick = function () {
    showDetail(true);
    itemImg.src = image.src;
    itemCaption.innerHTML = image.alt;
    // window.cartDesc = image.alt;
    // window.cartImgSrc = image.src;
  };
}

let detail = document.getElementById("detail");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
// let quantity = document.getElementById("quantityValue");
// let value = parseInt(quantity.innerHTML);

function showDetail(show) {
  if (show) {
    showCart(false);
    detail.style.right = "0";
    main.style.marginRight = "500px";
    message.style.opacity = 0;
    // quantity.innerHTML = 1;
    // value = 1;
  } else {
    detail.style.right = "-500px";
    main.style.marginRight = "0";
  }

  setTimeout(() => {
    window.scrollTo(0, window.scrollY);
  }, 0);
}

function changeQuantity(increment) {
  if (increment) {
    value++;
  } else if (value > 1) {
    value--;
  }
  quantity.innerHTML = value;
}

window.cartItems = window.cartItems || [];
function addToCart() {
  let addBtn = document.getElementById("addBtn");
  addBtn.style.display = "none";
  message.style.opacity = 0;
  // window.cartQuantity = value;

  const itemInfo = {
    desc: itemCaption.innerHTML,
    src: itemImg.src,
  };

  window.cartItems.push(itemInfo);

  setTimeout(() => {
    addBtn.style.display = "block";
    message.style.opacity = 1;
    window.dispatchEvent(new Event("update"));
  }, 1700);
}

function showCart(show) {
  let cart = document.getElementById("cart");
  if (show) {
    showDetail(false);
    cart.style.right = "0";
    main.style.marginRight = "500px";
  } else {
    cart.style.right = "-500px";
    main.style.marginRight = "0";
  }
}

function checkout() {
  window.open("resume.pdf", "_blank");
}
