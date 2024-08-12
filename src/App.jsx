import { homeBackground } from "./assets";
import About from "./components/About";
import Academics from "./components/Academics";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import { Infrastructure } from "./components/Infrastructure";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="relative bg-color-6">
        <div
          className="absolute top-0 left-0 right-0 bg-cover w-full h-[800px] bg-no-repeat opacity-15 z-2"
          style={{
            backgroundImage: `url(${homeBackground})`,
          }}
        ></div>
        <Header />
        <Hero />
      </div>

      <Highlights />
      <About />
      <Infrastructure />
      <Academics/>
    </div>
  );
}

export default App;
