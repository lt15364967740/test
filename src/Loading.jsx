import { useProgress } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/loading.css";

const LoadingScreen = () => {
  const num = useRef(null);
  const counter3 = useRef(null);
  const counter2 = useRef(null);
  const counter1 = useRef(null);
  const { active, progress, errors, item, loaded, total } = useProgress();
  const animate = (counter, duration, delay = 0) => {
    const numHeight = num.current.clientHeight;
    const totalDistance = (counter.childNodes.length - 1) * numHeight;
    console.log(counter);
    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  };
  useGSAP(() => {
    if (active) {
      animate(counter3.current, 5);
      animate(counter2.current, 6);
      animate(counter1.current, 2, 4);
    }
  });
  return (
    <div className="loading-screen">
      <div className="loading">
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>
      <div className="counter">
        <div className="counter-1 dight" ref={counter1}>
          <div className="num" ref={num}>
            0
          </div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 dight" ref={counter2}>
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num ">2</div>
          <div className="num ">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 dight" ref={counter3}>
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;
