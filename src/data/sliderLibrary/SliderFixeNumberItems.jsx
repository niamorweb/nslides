import React, { useEffect } from "react";

export default function SliderFixeNumberItems() {
  function slider(sliderClass, options, breakpoint) {
    const mainContainer = $(sliderClass);
    let containerSlider = mainContainer.find(".nslide__slider");
    let item = mainContainer.find(".nslide__item");
    let numberItems = item.length;
    let itemsPerSlide = options.itemsPerSlideSelected || 3;
    let widthScreenMobile = 500 || breakpoint.mobile;
    let widthScreenTablet = 800 || breakpoint.tablet;
    function viewportHandle() {
      if ($(window).width() <= widthScreenMobile) {
        itemsPerSlide = options.itemsVisibleMobile;
      }
      if ($(window).width() <= widthScreenTablet) {
        itemsPerSlide = options.itemsVisibleTablet;
      }
      if ($(window).width() > widthScreenTablet) {
        itemsPerSlide = itemsPerSlide;
      }
    }
    viewportHandle();
    $(window).resize(function () {
      viewportHandle();
    });

    let widthItem;
    let gap = options.gapSelected || 30;
    let gapTotal = (numberItems - 1) * gap;
    let gapPerSlide = (itemsPerSlide - 1) * gap;
    let currentTranslation = 0;
    let nbItemsWithoutFirstItems = numberItems - itemsPerSlide;
    let nextButton = mainContainer.find(".nslide__button--next");
    let prevButton = mainContainer.find(".nslide__button--prev");

    widthItem = (mainContainer.width() - gapPerSlide) / itemsPerSlide;
    item.css("width", widthItem + "px");
    containerSlider.css("gap", gap);
    containerSlider.css("width", widthItem * numberItems + gapTotal);

    let widthItemPlusGap = widthItem + gap;
    let widthTotalWithoutFirstItem =
      nbItemsWithoutFirstItems * (gap + widthItem);
    function checkDisableButton() {
      if (currentTranslation < -widthTotalWithoutFirstItem + 1) {
        nextButton.addClass("nslide__button--disabled");
      } else {
        nextButton.removeClass("nslide__button--disabled");
      }
      if (currentTranslation >= 0) {
        prevButton.addClass("nslide__button--disabled");
      } else {
        prevButton.removeClass("nslide__button--disabled");
      }
    }
    checkDisableButton();

    var initPosX;
    let isDragging = false;
    let distance;
    mainContainer.mousedown(function (event) {
      initPosX = event.pageX;
      $(this).on("mousemove", function (event) {
        distance = event.pageX - initPosX;
        isDragging = true;
      });
    });

    mainContainer.mouseup(function () {
      // $(this).off("mousemove");
      if (distance < -widthItem && isDragging) {
        translationSlider(-1);
      } else if (distance > widthItem && isDragging) {
        translationSlider(1);
      }
      distance = 0;
      isDragging = false;
    });

    function translationSlider(e) {
      if (e === -1 && currentTranslation < -widthTotalWithoutFirstItem + 1) {
        return;
      }
      if (e === 1 && currentTranslation >= 0) {
        return;
      } else {
        currentTranslation += widthItemPlusGap * e;
        containerSlider.css(
          "transform",
          "translateX(" + currentTranslation + "px)"
        );
      }
      checkDisableButton();
    }

    nextButton.on("click", () => {
      translationSlider(-1);
    });

    prevButton.on("click", () => {
      translationSlider(1);
    });
  }

  useEffect(() => {
    slider(
      ".nslide1", // Class name of your html
      {
        gapSelected: 45, // Gap between items
        itemsPerSlideSelected: 3, // Number of items visible on DESKTOP screen
        itemsVisibleTablet: 2, // Number of items visible on TABLET screen
        itemsVisibleMobile: 1, // Number of items visible on MOBILE screen
      },
      { mobile: 500, tablet: 800 } // Breakpoint for mobile and tablet screen
    );

    slider(
      ".nslide2", // Class name of your html
      {
        gapSelected: 10, // Gap between items
        itemsPerSlideSelected: 5, // Number of items visible on DESKTOP screen
        itemsVisibleTablet: 2, // Number of items visible on TABLET screen
        itemsVisibleMobile: 1, // Number of items visible on MOBILE screen
      },
      { mobile: 500, tablet: 800 } // Breakpoint for mobile and tablet screen
    );
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="nslide__container_slider nslide1">
        <div className="nslide__slider">
          <div className="nslide__item">1</div>
          <div className="nslide__item">2</div>
          <div className="nslide__item">3</div>
          <div className="nslide__item">4</div>
          <div className="nslide__item">5</div>
          <div className="nslide__item">6</div>
          <div className="nslide__item">7</div>
          <div className="nslide__item">8</div>
          <div className="nslide__item">9</div>
        </div>

        <button className="nslide__button--prev nslide__button">&#8592;</button>
        <button className="nslide__button--next nslide__button">&#8594;</button>
      </div>

      <div className="nslide__container_slider nslide2">
        <div className="nslide__slider">
          <div className="nslide__item">1</div>
          <div className="nslide__item">2</div>
          <div className="nslide__item">3</div>
          <div className="nslide__item">4</div>
          <div className="nslide__item">5</div>
          <div className="nslide__item">6</div>
          <div className="nslide__item">7</div>
          <div className="nslide__item">8</div>
          <div className="nslide__item">9</div>
          <div className="nslide__item">10</div>
          <div className="nslide__item">11</div>
          <div className="nslide__item">12</div>
          <div className="nslide__item">13</div>
          <div className="nslide__item">14</div>
          <div className="nslide__item">15</div>
          <div className="nslide__item">16</div>
        </div>

        <button className="nslide__button--prev nslide__button">&#8592;</button>
        <button className="nslide__button--next nslide__button">&#8594;</button>
      </div>
    </div>
  );
}
