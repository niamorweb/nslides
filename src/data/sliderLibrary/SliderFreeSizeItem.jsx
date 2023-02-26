import React, { useEffect } from "react";

export default function SliderFreeSizeItem() {
  function createSlider(nextButton, prevButton, sliderSelector) {
    let btnNext = $(nextButton);
    let btnPrev = $(prevButton);
    let slider = $(sliderSelector);
    let currentPositionScroll = slider.scrollLeft();
    let totalWidth = slider[0].scrollWidth;
    let visibleWidth = slider.outerWidth();

    function checkDisabled() {
      if (currentPositionScroll + visibleWidth >= totalWidth) {
        btnNext.addClass("nslide_free__button--disabled");
      } else {
        btnNext.removeClass("nslide_free__button--disabled");
      }
      if (currentPositionScroll <= 0) {
        btnPrev.addClass("nslide_free__button--disabled");
      } else {
        btnPrev.removeClass("nslide_free__button--disabled");
      }
    }
    checkDisabled();

    btnNext.on("click", function () {
      if (currentPositionScroll + visibleWidth >= totalWidth) {
        return;
      } else {
        currentPositionScroll = currentPositionScroll + slider.width() * 0.4;
        slider.scrollLeft(currentPositionScroll);

        if (currentPositionScroll + visibleWidth >= totalWidth) {
          currentPositionScroll = totalWidth - visibleWidth;
        }
      }
      checkDisabled();
    });

    btnPrev.on("click", function () {
      if (currentPositionScroll <= 0) {
        return;
      } else {
        currentPositionScroll = currentPositionScroll + slider.width() * -0.4;
        slider.scrollLeft(currentPositionScroll);

        if (currentPositionScroll < 0) {
          currentPositionScroll = 0;
        }
      }
      checkDisabled();
    });
  }

  useEffect(() => {
    $(".nslide_free").each(function () {
      createSlider(
        $(this).find(".nslide_free__button--next"),
        $(this).find(".nslide_free__button--prev"),
        $(this).find(".nslide_free__slider")
      );
    });
  });

  return (
    <div className="main_container flex flex-col gap-10">
      <div className="nslide_free nslide1_free">
        <div className="nslide_free__slider">
          <div className="nslide_free__container_item">
            <div className="nslide_free__item">1</div>
            <div className="nslide_free__item">2</div>
            <div className="nslide_free__item">3</div>
            <div className="nslide_free__item">4</div>
            <div className="nslide_free__item">5</div>
            <div className="nslide_free__item">6</div>
            <div className="nslide_free__item">7</div>
            <div className="nslide_free__item">8</div>
            <div className="nslide_free__item">9</div>
            <div className="nslide_free__item">10</div>
            <div className="nslide_free__item">11</div>
            <div className="nslide_free__item">12</div>
            <div className="nslide_free__item">13</div>
          </div>
          <button className="nslide_free__button--prev">&#8592;</button>
          <button className="nslide_free__button--next">&#8594;</button>
        </div>
      </div>

      <div className="nslide_free nslide2_free">
        <div className="nslide_free__slider">
          <div className="nslide_free__container_item">
            <div className="nslide_free__item">1</div>
            <div className="nslide_free__item">2</div>
            <div className="nslide_free__item">3</div>
            <div className="nslide_free__item">4</div>
            <div className="nslide_free__item">5</div>
            <div className="nslide_free__item">6</div>
            <div className="nslide_free__item">7</div>
            <div className="nslide_free__item">8</div>
          </div>
          <button className="nslide_free__button--prev">&#8592;</button>
          <button className="nslide_free__button--next">&#8594;</button>
        </div>
      </div>
    </div>
  );
}
