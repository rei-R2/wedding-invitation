import HomePage from "./pages/home";
import { ReactLenis } from "@studio-freight/react-lenis";
import OurStory from "./pages/ourStory";
import Itinerary from "./pages/itinerary";
import Photos from "./pages/photos";

function App() {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.07,
        gestureOrientation: "vertical",
        touchMultiplier: 2,
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <div className="flex flex-col gap-y-40">
        <HomePage />
        <OurStory />
        <Itinerary />
        <Photos />
      </div>
    </ReactLenis>
  );
}

export default App;
