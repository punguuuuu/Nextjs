function changePage(page) {
  if (!window.location.pathname.includes(page)) {
    window.location.href = page;
  } else {
    showMenu(false);
  }
}

let toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    toTopBtn.style.width = "200px";
  } else {
    toTopBtn.style.width = 0;
  }
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let menu = document.getElementById("menu");
let main = document.getElementById("main");

function showMenu(show) {
  if (show) {
    menu.style.left = 0;
    if(window.innerWidth >= 800){
      main.style.marginLeft = "300px";
    }
  } else {
    menu.style.left = "-800px";
    main.style.marginLeft = 0;
  }

  setTimeout(() => {
    window.scrollTo(0, window.scrollY);
  }, 0);
}

function mouseHover (event){
  if(event.clientX < 30){
    showMenu(true);
  }
}

function toggleMenu(){
  menu.style.left == "0px" ? showMenu(false) : showMenu(true);
}

let detail = document.getElementById("detail");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
// let quantity = document.getElementById("quantityValue");
// let value = parseInt(quantity.innerHTML);

function showDetail(show) {
  if (show) {
    showCart(false);
    detail.style.right = 0;
    message.style.opacity = 0;
    if(window.innerWidth >= 800 && window.innerWidth <= 1000){
      main.style.marginRight = "350px";
    } else if(window.innerWidth >= 800){
      main.style.marginRight = "500px";
    }
    // quantity.innerHTML = 1;
    // value = 1;
  } else {
    detail.style.right = "-800px";
    main.style.marginRight = 0;
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

let itemImg = document.getElementById("image");
let itemCaption = document.getElementById("caption");
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

let warning = document.getElementById("warning");

function showCart(show) {
  let cart = document.getElementById("cart");
  if (show) {
    showDetail(false);
    warning.style.opacity = 0;
    cart.style.right = 0;
    if(window.innerWidth >= 800 && window.innerWidth <= 1000){
      main.style.marginRight = "350px";
    } else if(window.innerWidth >= 800){
      main.style.marginRight = "500px";
    }
  } else {
    cart.style.right = "-800px";
    main.style.marginRight = 0;
  }
}

function toggleCart(){
  cart.style.right == "0px" ? showCart(false) : showCart(true);
}

function showEmailContainer(show) {
  let modal = document.getElementById("emailModal");
  let emailContainer = document.getElementById("emailContainer");
  if(show){
    modal.style.display = "block"
  } else {
    modal.style.display = "none"
  }
}

window.orderPlaced = false;
let email = sessionStorage.getItem("email");
let emailInput = document.querySelector(".lineEdit");
let invalid = document.getElementById("invalidEmail");

emailInput.value = email;

function checkout() {
  if (window.cartItems.length == 0) {
    warning.style.opacity = 1;
    window.orderPlaced = false;
    window.dispatchEvent(new Event("update"));
    return;
  }

  if (validateEmail()) {
    warning.style.opacity = 0;

    createEmail();

    window.cartItems.length = 0;
    window.orderPlaced = true;
    window.dispatchEvent(new Event("update"));
  } else {
    showEmailContainer(true);
  }
}

function checkEmail() {
  if (validateEmail()) {
    invalid.style.opacity = 0;
    showEmailContainer(false);
    sessionStorage.setItem("email", emailInput.value);
  } else {
    invalid.style.opacity = 1;
  }
}

function validateEmail() {
  return (
    emailInput.value.trim() !== "" &&
    emailInput.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
}

function createEmail() {
  const date = new Date();
  const orderItems = window.cartItems
    .map(
      (item) => `
      <tr style="vertical-align: top; height: 61px;">
        <td style="padding: 24px 8px 0 4px; display: inline-block; width: max-content;">
          <img style="height: 100px;" src=${item.src} alt="item" height="100px">
        </td>
        <td style="padding: 24px 8px 0 8px; width: 100%;">
          <div>${item.desc}</div>
          <div style="font-size: 14px; color: #888; padding-top: 4px;">&nbsp;</div>
        </td>
        <td style="padding: 24px 4px 0 0; white-space: nowrap;"><strong>0.00</strong></td>
      </tr>
    `
    )
    .join("");

  emailjs
    .send(
      "service_eqflx1d",
      "template_u9siuy8",
      {
        email: emailInput.value,
        orderItems: orderItems,
        time: date.toLocaleString(),
      },
      "LyjyTLGN4DHGtdTq1"
    )

    .then((response) => {
      console.log("Email sent successfully!", response);
    })

    .catch((error) => {
      console.error("Error sending email:", error);
    });
}
