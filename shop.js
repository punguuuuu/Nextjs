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

  let image = item.querySelector('img');
  desc.innerHTML = image.alt;
  item.appendChild(desc);

  item.onclick = function () {
    showDetail(true);
    itemImg.src = image.src;
    itemCaption.innerHTML = image.alt;
  };
}

let detail = document.getElementById("detail");
let buyBtn = document.getElementById("buyBtn");

function showDetail(show) {
  void window
  if (show) {
    detail.style.width = "500px";
    main.style.marginRight = "500px";
  } else {
    detail.style.width = "0";
    main.style.marginRight = "0";
  }

  setTimeout(() => {
    window.scrollTo(0, window.scrollY);
  }, 0);
}
