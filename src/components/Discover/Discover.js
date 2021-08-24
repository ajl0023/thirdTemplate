import React, { useEffect, useState } from "react";
import styles from "./Discover.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import leftArrow from "./arrows/Arrow Left.png";
import rightArrow from "./arrows/Arrow Right.png";
import imageCompression from "browser-image-compression";

const texts = [
  <div>
    <h4>Discover</h4>
    <p>
      The villa will have open space plan with high ceilings with a touch of
      nature coming indoors. The home includes 4 perfectly placed bedrooms with
      views to admire the scenery as well as 4.5 bathrooms. All of the interior
      will be featuring custom interior design by Amit Apel Design, Inc. From an
      infinity pool you will be enjoying the ocean in the horizon, the view of
      Santa Monica Mountains, and overwhelming sunrises, and sunsets.
    </p>
    <p>
      Currently under construction with a completion date early fall. Please
      note that both exterior and interior paint colors can be changed.
    </p>
  </div>,
  <div>
    <h4>Equestrian</h4>
    <p>
      This equestrian property will present a barn with stalls on a lower
      portion of a four-acre space with its own separate driveway and plenty of
      room for the horses, other equestrians, or your trailer. You will have
      access to trails directly from the property and a creek of your own. You
      can call this paradise your home!
    </p>
    <p>(More Equestrian Info Here)</p>
    <p>
      As much as it feels remote, you will be only 15 minutes away from PCH and
      less than 20 minutes away from Westlake Village. Great school district
      with plenty of activities. Come by to see this beautifully planned home in
      the making for yourself.
    </p>
  </div>,
  <div>
    <h4>Background</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat
      dignissimos iusto quis, voluptatem, quia possimus, minus accusamus
      consectetur dolorem dolores. Officia voluptatibus, facere consequatur cum
      reprehenderit autem sapiente necessitatibus. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Est placeat dignissimos iusto quis,
      voluptatem, quia possimus, minus accusamus consectetur dolorem dolores.
      Officia voluptatibus, facere consequatur cum reprehenderit autem sapiente
      necessitatibus.
    </p>
    <p>(More Equestrian Info Here)</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat
      dignissimos iusto quis, voluptatem, quia possimus, minus accusamus
      consectetur dolorem dolores. Officia voluptatibus, facere consequatur cum
      reprehenderit autem sapiente necessitatibus.
    </p>
  </div>,
];
const cache = {};
const cache2 = {};
function importAll(imports) {
  imports.forEach((r, i) => {
    r.keys().forEach((key) => {
      if (i === 1) {
        cache2[key] = r(key);
      } else {
        cache[key] = r(key);
      }
    });
  });
}

importAll([
  require.context("./carouselImages/", false, /\.(png|jpe?g|svg)$/),
  require.context("./carouselImages2/", false, /\.(png|jpe?g|svg)$/),
]);

const renders = Object.keys(cache).map((name) => {
  return cache[name];
});
const renders2 = Object.keys(cache2).map((name) => {
  return cache2[name];
});

const links = ["discover", "background", "equest"];
const Discover = (props) => {
  useEffect(() => {}, []);
  return (
    <div id={links[props.index]} className={styles["discover-wrapper"]}>
      <div
        name="page-content"
        style={{ justifyContent: props.rev ? "flex-start" : "test" }}
        className={styles["container"]}
      >
        <div
          style={{
            flexDirection: props.index % 2 > 0 ? "row-reverse" : "test",
            backgroundColor: props.index % 2 ? "black" : "test",
            color: props.index % 2 ? "white" : "black",
          }}
          className={styles["content-container"]}
        >
          <div className={styles["text-container"]}>{texts[props.index]}</div>
          <div className={styles["gallery-container"]}>
            {/* <img className="splide-image" src={renders[props.index].default} alt="" /> */}

            <Carousel
              renderArrowPrev={(onClickHandler, hasPrev, label) => {
                return (
                  <button
                    className={`${styles["arrow-left"]} ${
                      styles[`arrow-left-${props.index}`]
                    } `}
                    type="button"
                    onClick={onClickHandler}
                  >
                    <img src={leftArrow} alt="" />
                  </button>
                );
              }}
              renderArrowNext={(onClickHandler, hasNext, label) => (
                <button
                  className={`${styles["arrow-right"]} ${
                    styles[`arrow-right-${props.index}`]
                  } `}
                  type="button"
                  onClick={onClickHandler}
                >
                  <img src={rightArrow} alt="" />
                </button>
              )}
              width="100%"
              showThumbs={false}
            >
              {props.index === 0
                ? renders.map((img, i) => {
                    return (
                      <div key={i}>
                        {" "}
                        <img src={img.default} alt="" />
                      </div>
                    );
                  })
                : renders2.map((img, i) => {
                    return (
                      <div key={i}>
                        {" "}
                        <img src={img.default} alt="" />
                      </div>
                    );
                  })}
            </Carousel>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Discover;
