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

let images = document.getElementsByTagName("img");
let modalImg = document.getElementById("image");
let captionText = document.getElementById("caption");
let count;
for (count = 0; count < images.length; count++) {
  images[count].onclick = function () {
    showDetail(true);
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

let detail = document.getElementById("detail");

function showDetail(show) {
  console.log("HERE");
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
