import { Canvas } from "@react-three/fiber";
import Text3DExample from "./components/Text3DExample";
import Rain from "./components/Rain";
import WaterDroplet from "./components/WaterDroplet";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import PortalScene from "./portalscene";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [1, 5, 6],
        }}
      >
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <color args={["#030202"]} attach="background" />
        {/* <Physics>
          <Lights />
          <Level />
        </Physics> */}
        {/* <Text3DExample /> */}
        {/* <Rain /> */}
        <PortalScene />
      </Canvas>
    </div>
  );
}

export default App;
