import "./App.css";
import Home from "./components/Home/Home";
import LowerHomeBar from "./components/LowerHomeBar/LowerHomeBar";
import Discover from "./components/Discover/Discover";
import VideoRender from "./components/VideoRender/VideoRender";
import Socials from "./components/Socials/Socials";
import { useEffect } from "react";

const pages = [];
for (let i = 0; i < 3; i++) {
  pages.push("");
}
function App() {
  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.style);
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0px)";
        }
      });
    };
    let options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    let observer = new IntersectionObserver(callback, options);
    const obsEles = document.body.querySelectorAll('div[name="page-content"]');
    obsEles.forEach((ele) => {
      observer.observe(ele);
    });
  }, []);
  return (
    <div className="App">
      <Home></Home>
      <LowerHomeBar></LowerHomeBar>
      {[
        pages.map((ele, i) => {
          return (
            <>
              <Discover index={i}></Discover>
            </>
          );
        }),
      ]}
      <VideoRender></VideoRender>
      <Socials></Socials>
    </div>
  );
}

export default App;
