import { Canvas } from "@react-three/fiber";
import Text3DExample from "./components/Text3DExample";
import Rain from "./components/Rain";
import WaterDroplet from "./components/WaterDroplet";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas flat linear>
        <Perf position="top-left" />
        <color attach="background" args={['#000']} />
        {/* <OrbitControls makeDefault /> */}
        {/* <Physics>
          <Lights />
          <Level />
        </Physics> */}
        {/* <Text3DExample /> */}
        <Rain />
      </Canvas>
    </div>
  );
}

export default App;
