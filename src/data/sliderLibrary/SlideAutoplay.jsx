import React, { useEffect } from "react";

export default function SlideAutoplay() {
  function slideShow(classSelected, options, breakpoints) {
    const itemWrapper = $(classSelected);
    const item = itemWrapper.find(" > *");
    const numberOfItems = item.length;
    let itemPerView;
    let totalScroll = 0;
    const delay = options.delaySelected || 2000;
    let viewportTablet = breakpoints.tablet || 800;
    let viewportMobile = breakpoints.mobile || 500;

    function viewportHandle() {
      if ($(window).width() <= viewportMobile) {
        itemPerView = options.itemPerViewMobile;
        return;
      }
      if ($(window).width() <= viewportTablet) {
        itemPerView = options.itemPerViewTablet;
      }
      if ($(window).width() > viewportTablet) {
        itemPerView = options.itemPerViewDesktop;
      }
    }
    viewportHandle();
    $(window).resize(function () {
      viewportHandle();
    });

    itemWrapper.css("--per-view", itemPerView);
    for (let i = 0; i < numberOfItems; i++) {
      itemWrapper.append(item[i].outerHTML);
    }

    let autoScroll = setInterval(scrolling, delay);

    function scrolling() {
      totalScroll++;
      if (totalScroll == numberOfItems + 1) {
        clearInterval(autoScroll);
        totalScroll = 1;
        itemWrapper.css("transition", "0s");
        itemWrapper.css("left", "0");
        autoScroll = setInterval(scrolling, delay);
      }
      const widthEl = itemWrapper.find(" > :first-child").outerWidth() + 24;
      itemWrapper.css("left", `-${totalScroll * widthEl}px`);
      itemWrapper.css("transition", ".3s");
    }
  }

  useEffect(() => {
    slideShow(
      ".slideshow__wrapper1", // class on your html
      {
        delaySelected: 3000, // delay for autoplay (1000 === 1s)
        itemPerViewDesktop: 4, // Number of item that you want to see on DESKTOP screen
        itemPerViewTablet: 2, // Number of item that you want to see on TABLET screen
        itemPerViewMobile: 1, // Number of item that you want to see on MOBILE screen
      },
      { mobile: 500, tablet: 800 } // value in px for the breakpoints for the mobile and tablet size
    );

    slideShow(
      ".slideshow__wrapper2", // class on your html
      {
        delaySelected: 2000, // delay for autoplay (1000 === 1s)
        itemPerViewDesktop: 5, // Number of item that you want to see on DESKTOP screen
        itemPerViewTablet: 3, // Number of item that you want to see on TABLET screen
        itemPerViewMobile: 2, // Number of item that you want to see on MOBILE screen
      },
      { mobile: 500, tablet: 800 } // value in px for the breakpoints for the mobile and tablet size
    );
  }, []);

  return (
    <div className="w-full flex flex-col gap-10 ">
      <div className="slideshow__container">
        <div className="slideshow__wrapper slideshow__wrapper1">
          <div className="slideshow__item">1</div>
          <div className="slideshow__item">2</div>
          <div className="slideshow__item">3</div>
          <div className="slideshow__item">4</div>
          <div className="slideshow__item">5</div>
        </div>
      </div>

      <div className="slideshow__container">
        <div className="slideshow__wrapper slideshow__wrapper2">
          <div className="slideshow__item">1</div>
          <div className="slideshow__item">2</div>
          <div className="slideshow__item">3</div>
          <div className="slideshow__item">4</div>
          <div className="slideshow__item">5</div>
          <div className="slideshow__item">6</div>
          <div className="slideshow__item">7</div>
        </div>
      </div>
    </div>
  );
}
