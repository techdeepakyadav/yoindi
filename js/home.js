function rpbsCarousel(itemsPerPage = 2) {
  let allItems = document.querySelectorAll(".testi-card");
  let allItemsArr = Array.from(allItems);
  let totalCarouselItems = Math.ceil(allItemsArr.length / itemsPerPage);

  start = 0;
  end = itemsPerPage;
  let crslWrapDiv = document.querySelector(".testi-carousel-inner");
  console.log(crslWrapDiv.innerWidth);
  crslWrapDiv.innerHTML = "";
  let crslIndicators = document.querySelector(".testi-carousel-indicators");

  crslIndicators.innerHTML = "";
  for (let i = 0; i < totalCarouselItems; i++) {
    var wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("carousel-item");

    var indicatorButton = document.createElement("button");
    indicatorButton.setAttribute("type", "button");
    indicatorButton.setAttribute("data-bs-target", "#testiIndicators");
    indicatorButton.setAttribute("data-bs-slide-to", i);
    indicatorButton.setAttribute("aria-label", `Slide-${i + 1}`);

    console.log(indicatorButton);
    crslIndicators.append(indicatorButton);
    const cardStyle = {
      marginRight: "30px",
    };
    if (i == 0) {
      indicatorButton.setAttribute("class", "active");
      indicatorButton.setAttribute("aria-current", true);
      wrapperDiv.classList.add("active");
    }
    let itemArr = allItemsArr.slice(start, end);
    itemArr.map((item, index) => {
      let wrapperDivInner = document.createElement("div");
      wrapperDivInner.classList.add("carousel-item-inner");
      wrapperDiv.append(wrapperDivInner);
      wrapperDivInner.append(item);
      wrapperDivInner.style.width =
        crslWrapDiv.offsetWidth / itemsPerPage + "px";
      //Object.assign(item.style, cardStyle);
    });
    crslWrapDiv.append(wrapperDiv);
    start = end;
    end = end + itemsPerPage;
  }
}
rpbsCarousel(3);
if (screen.width < 767) {
  rpbsCarousel(1);
} else if (screen.width < 991) {
  rpbsCarousel(2);
}

window.addEventListener("resize", function (event) {
  if (screen.width < 767) {
    rpbsCarousel(1);
  } else if (screen.width < 991) {
    rpbsCarousel(2);
  } else {
    rpbsCarousel(3);
  }
});
