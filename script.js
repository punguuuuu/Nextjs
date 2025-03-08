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
  }, 2000);
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
  } else {
    reward.style.height = "0px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let galleryContainers = document.querySelectorAll(".gallery-container");

  galleryContainers.forEach((container) => {
    let gallery = container.querySelector(".gallery");
    let prevBtn = container.querySelector(".prev");
    let nextBtn = container.querySelector(".next");

    let images = gallery.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            updateButtons();
          }
        };
      }
    });

    if (loadedCount === images.length) {
      updateButtons();
    }

    function updateButtons() {
      prevBtn.classList.toggle("disabled", gallery.scrollLeft <= 0);
      nextBtn.classList.toggle(
        "disabled",
        gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth
      );
    }

    prevBtn.addEventListener("click", function () {
      gallery.scrollBy({ left: -1200, behavior: "smooth" });
      setTimeout(updateButtons, 1200);
    });

    nextBtn.addEventListener("click", function () {
      gallery.scrollBy({ left: 1200, behavior: "smooth" });
      setTimeout(updateButtons, 1200);
    });

    gallery.addEventListener("scroll", updateButtons);
    updateButtons();
  });
});

let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

let images = document.getElementsByTagName("img");
let modalImg = document.getElementById("image");
let captionText = document.getElementById("caption");
let count;
for (count = 0; count < images.length; count++) {
  images[count].onclick = function () {
    if (this.classList.contains("no-model")) {
      playGif();
      return;
    }

    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  };
}

let secret = document.getElementsByClassName("secret")[0];
secret.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "axolotl.png";

  let secretAlt = "ULTRA RARE ONE OF A KIND LIMITED EDITION NFT :REAL;";
  modalImg.alt = secretAlt;
  captionText.innerHTML = secretAlt;
};

let toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    toTopBtn.style.width = "180px";
  } else {
    toTopBtn.style.width = "0px";
  }
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
