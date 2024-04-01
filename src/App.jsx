import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import { isMobile } from "react-device-detect";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";
function Scene() {
  const boxRef = useRef();
  const orbitControlsRef = useRef();
  const [rotationAngle, setRotationAngle] = useState(0);

  const set = useThree((state) => state.set);
  const { size, camera, raycaster } = useThree();
  useEffect(() => {
    if (isMobile) {
      set({ size: { width: window.innerHeight, height: window.innerWidth } });
    }
  }, []);

  // useEffect(() => {
  //   function handleMouseMove(event) {
  //     // 获取event.clientX和event.clientY并且根据Canvas的旋转方向进行调整
  //     const x = event.clientY;
  //     const y = size.width - event.clientX;
  //     console.log(x, y);
  //     // 将x和y转换为NDC（规范化设备坐标）
  //     const normalizedX = (x / size.height) * 2 - 1;
  //     const normalizedY = -(y / size.width) * 2 + 1;
  //     console.log(normalizedX, normalizedY);
  //     // 使用raycaster更新鼠标位置
  //     raycaster.setFromCamera({ x: normalizedX, y: normalizedY }, camera);
  //   }

  //   window.addEventListener("touchmove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("touchmove", handleMouseMove);
  //   };
  // }, [size, camera, raycaster]);

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
      <mesh ref={boxRef}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}

function App() {
  return (
    <div
      className="page-root"
      style={
        isMobile
          ? {
              transform: "rotate(90deg)",
              transformOrigin: "0px 0px 0px",
              margin: "0px 0px 0px 375px",
              width: "667px",
              height: "375px",
            }
          : {}
      }
    >
      <Canvas
        onTouchStart={(event) => {
          console.log(
            "Touch start:",
            event.touches[0].clientX,
            event.touches[0].clientY
          );
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
