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
    menu.style.left = "0px";
    if(window.innerWidth >= 1000){
      main.style.marginLeft = "300px";
    }
  } else {
    if(window.innerWidth >= 800){
      menu.style.left = "-300px";
    } else {
      menu.style.left = "-800px";
    }
    main.style.marginLeft = "0";
  }

  setTimeout(() => {
    window.scrollTo(0, window.scrollY);
  }, 0);
}

function toggleMenu(){
  menu.style.left == "0px" ? showMenu(false) : showMenu(true);
}

let gifPlaying = false;
function playGif() {
  if (gifPlaying) {
    return;
  }

  img = document.getElementById("gif");
  img.src = "spin.gif";
  gifPlaying = true;

  setTimeout(function () {
    img.src = "spin0.png";
    gifPlaying = false;
  }, 2100);
}

function submitText() {
  let inputText = document.querySelector(".lineEdit");
  let reward = document.getElementById("reward");
  let text = document.getElementById("message");

  text.innerHTML =
    inputText.value.trim() === ""
      ? "It's EMPTY !"
      : "Thanks ! Here's your reward \";";

  if (inputText.value.trim() !== "") {
    reward.style.height = "600px";

    emailjs
      .send(
        "service_eqflx1d",
        "template_smc934h",
        {
          time: new Date(),
          suggestion: inputText.value,
        },
        "LyjyTLGN4DHGtdTq1"
      )

      .then((response) => {
        console.log("Email sent successfully!", response);
      })

      .catch((error) => {
        console.error("Error sending email:", error);
      });
  } else {
    reward.style.height = "0px";
  }
}
