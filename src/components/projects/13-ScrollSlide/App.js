import React, { useEffect } from "react";
import SiteWrap from "./SiteWrap";
import debounce from "./debounce";
import "./12-style.css";

const App = () => {
  useEffect(() => {
    const sliderImages = document.querySelectorAll(".slide-in");
    function checkSlide(e) {
      sliderImages.forEach(img => {
        // halfway through image
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        // bottom of image
        const imgBottom = img.offsetTop + img.height;
        // State?
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;
        // console.log(imgBottom, isHalfShown, isNotScrolledPast);
        if (isHalfShown && isNotScrolledPast) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    }
    window.addEventListener("scroll", debounce(checkSlide));
  }, []);

  return (
    <div>
      <SiteWrap altProp={"an image"} />
    </div>
  );
};

export default App;
