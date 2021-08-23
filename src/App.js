import "./App.css";
import Home from "./components/Home/Home";
import LowerHomeBar from "./components/LowerHomeBar/LowerHomeBar";
import Discover from "./components/Discover/Discover";
import VideoRender from "./components/VideoRender/VideoRender";
import Socials from "./components/Socials/Socials";

const pages = [];
for (let i = 0; i < 3; i++) {
  pages.push("");
}
function App() {
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
