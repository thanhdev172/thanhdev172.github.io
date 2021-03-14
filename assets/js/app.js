//loader
window.addEventListener("load", function () {
  document
    .querySelector("ul.list-items li:first-child")
    .classList.add("active");
  document.querySelector(".loader").classList.add("opacity-0");

  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
  }, 1000);
});

const wpBtnElement = document.querySelector(".wp-btn");
const allBtnsElement = document.querySelectorAll(".wp-btn button");

const totalBtnsElement = allBtnsElement.length;

for (let i = 0; i < totalBtnsElement; i++) {
  allBtnsElement[i].addEventListener("click", function () {
    //xu li click chuot active
    wpBtnElement.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    //xu li chuyen noi dung
    const dataFilter = this.getAttribute("data-filter");
    const pictureItemsElement = document.querySelectorAll(
      "ul.list-pictures li"
    );
    console.log(pictureItemsElement);
    const totalPictureItemsElement = pictureItemsElement.length;
    for (let j = 0; j < totalPictureItemsElement; j++) {
      if (dataFilter == pictureItemsElement[j].getAttribute("data-category")) {
        pictureItemsElement[j].classList.remove("hide");
        pictureItemsElement[j].classList.add("show");
      } else {
        pictureItemsElement[j].classList.remove("show");
        pictureItemsElement[j].classList.add("hide");
      }

      if (dataFilter == "all") {
        pictureItemsElement[j].classList.remove("hide");
        pictureItemsElement[j].classList.add("show");
      }
    }
  });
}

//slider
const picturesElement = document.querySelectorAll("ul.list-pictures li"),
  totalPicturesElement = picturesElement.length,
  lightBoxElement = document.querySelector(".light-box"),
  imgLightBoxElement = lightBoxElement.querySelector("img"),
  titleElement = lightBoxElement.querySelector(".box-title"),
  orderElement = lightBoxElement.querySelector(".order"),
  exitElement = lightBoxElement.querySelector(".exit");
let itemIndex = 0;

function changeItem() {
  let srcValue = picturesElement[itemIndex]
    .querySelector("img")
    .getAttribute("src");
  imgLightBoxElement.src = srcValue;
  titleElement.innerHTML = picturesElement[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  orderElement.innerHTML = itemIndex + 1 + " of " + totalPicturesElement;
}

function toggleLightBox() {
  lightBoxElement.classList.toggle("open");
}

function next() {
  if (itemIndex == totalPicturesElement - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prev() {
  if (itemIndex == 0) {
    itemIndex = totalPicturesElement - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

for (let i = 0; i < totalPicturesElement; i++) {
  picturesElement[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightBox();
  });
}

exitElement.addEventListener("click", function () {
  toggleLightBox();
});

//active nav item
const navElement = document.querySelector("nav ul.list-items"),
  navItemElement = navElement.querySelectorAll("li"),
  totalNavItems = navItemElement.length;

for (let i = 0; i < totalNavItems; i++) {
  navItemElement[i].addEventListener("click", function (e) {
    for (let j = 0; j < totalNavItems; j++) {
      navItemElement[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

//chuyen slide
for (let i = 0; i < totalNavItems; i++) {
  const aElement = navItemElement[i].querySelector("a");
  aElement.addEventListener("click", function () {
    let sectionName = this.getAttribute("href").split("#")[1];
    // document.querySelector("#" + sectionName).classList.add("active");
  });
}

//xu li click vao nav-toggler
const navToggleElement = document.querySelector(".nav-toggler");
navToggleElement.addEventListener("click", function () {
  const asideElement = document.querySelector(".aside"),
    contentElement = document.querySelector(".content");

  navToggleElement.classList.toggle("open");
  asideElement.classList.toggle("open");
  contentElement.classList.toggle("open");
});

//scroll
window.addEventListener("scroll", function () {
  let postion = pageYOffset;
  switch (postion) {
    case 589:
      console.log(1);
      break;
  }
});
