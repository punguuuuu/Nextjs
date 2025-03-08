function changePage(page) {
  if (!window.location.pathname.includes(page)) {
    window.location.href = page;
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
