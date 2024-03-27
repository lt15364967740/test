import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect } from "react";
import Room from "./room";
import Ecctrl, { EcctrlJoystick } from "ecctrl";
import { Physics } from "@react-three/rapier";
import CharacterModel from "./CharacterModel";
import { isMobile } from "react-device-detect";
import TouchControls from "./TouchControls.jsx";
function Model() {
  const set = useThree((state) => state.set);
  useEffect(() => {
    if (isMobile) {
      console.log(window);
      set({ size: { width: window.innerHeight, height: window.innerWidth } });
    }
  }, []);

  return (
    <>
      <color attach="background" args={["#000"]} />
      <Perf position="top-left" />
      <ambientLight intensity={5} />
      <OrbitControls />
      <Physics timeStep="vary">
        <Suspense fallback={null}>
          <Ecctrl>
            <CharacterModel />
          </Ecctrl>
          <Room scale={[3, 3, 3]} />
        </Suspense>
      </Physics>
    </>
  );
}
function App() {
  return (
    <>
      <div
        className="page-root"
        style={
          isMobile
            ? {
                width: window.innerHeight + "px",
                height: window.innerWidth + "px",
                top: 146 + "px",
                left: -146 + "px",
                transform: "rotate(90deg)",
                transformOrigin: "50% 50%",
              }
            : {}
        }
      >
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "backward", keys: ["ArrowDown", "KeyS"] },
            { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
            { name: "rightward", keys: ["ArrowRight", "KeyD"] },
            { name: "jump", keys: ["Space"] },
          ]}
        >
          <TouchControls />
          <Canvas dpr={window.devicePixelRatio}>
            <Model />
          </Canvas>
        </KeyboardControls>
      </div>
    </>
  );
}

export default App;
