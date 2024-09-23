function createRipple(event) {
  const button = event.target;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth * 2, button.clientHeight * 2);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - button.getBoundingClientRect().left - radius
  }px`;
  circle.style.top = `${
    event.clientY - button.getBoundingClientRect().top - radius
  }px`;

  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("ripple-btn")) {
    createRipple(event);
  }
});

let accordionOpened = null;

function accordion(event) {
  if (accordionOpened && accordionOpened !== event.target) {
    const item = accordionOpened.closest(".accordion-item");
    item.classList.remove("active");
  }
  const item = event.target.closest(".accordion-item");

  if (!item.classList.contains("active")) {
    item.classList.add("active");
    accordionOpened = event.target;
  } else {
    item.classList.remove("active");
    accordionOpened = null;
  }
}

document.addEventListener("click", function (event) {
  if (event.target.closest(".accordion-header")) {
    accordion(event);
  }
});

function tabsChange(tab) {
  const tabId = tab.getAttribute("tab-id");

  tab
    .closest(".tabs")
    .querySelectorAll(".tab")
    .forEach((element) => {
      element.classList.remove("active");
    });

  document.querySelectorAll(".tab-content").forEach((element) => {
    element.style.display = "none";
  });

  tab.classList.add("active");
  document.querySelector("#" + tabId).style.display = "block";
}

if (document.querySelectorAll(".tab.active").length) {
  tabsChange(document.querySelector(".tab.active"));
}
if (document.querySelectorAll(".tab").length) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", function (event) {
      tabsChange(tab);
    });
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  const slider = document.querySelector(".slider");

  if (slider) {
    const slides = slider.querySelectorAll(".slide");
    const activeSlide = slider.querySelector(".slide.active");
    const activeSlideIndex = [].indexOf.call(slides, activeSlide);
    const dots = slider.querySelector(".slider-dots");

    for (let i = 0; i < slides.length; i++) {
      dots.insertAdjacentHTML("beforeend", '<span class="slider-dot"></span>');
    }

    const dotsItems = dots.querySelectorAll(".slider-dot");

    dotsItems[activeSlideIndex].classList.add("active");

    function sliderScroll(item) {
      const itemIndex = [].indexOf.call(dotsItems, item);
      slides[itemIndex].scrollIntoView({ block: "center", behavior: "auto" });
    }

    dotsItems.forEach((dot) => {
      dot.addEventListener("click", function () {
        dotsItems.forEach((dot) => {
          dot.classList.remove("active");
        });
        this.classList.add("active");

        sliderScroll(this);
      });
    });

    window.addEventListener("optimizedResize", function () {
      const slideWidth = document
        .querySelector(".slide")
        .getBoundingClientRect().width;
      const activeDotIndex = [].indexOf.call(
        dotsItems,
        document.querySelector(".slider-dot.active")
      );

      document.querySelector(".slider-wrap").scrollLeft =
        slideWidth * activeDotIndex;
    });
  }
});
// Slider

(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();
