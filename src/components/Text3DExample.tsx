import { Perf } from "r3f-perf";
import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const matcapMaterial = new THREE.MeshMatcapMaterial();

type TPosition = [number, number, number];
function Text3DExample() {
  const [matcapTexture] = useMatcapTexture("877C72_B6ACBB_36322D_4C443B", 256);
  const [positions, setPostions] = useState<TPosition[]>(
    [...Array(40)].map((item) => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ])
  );
  // const [torusGeometry, setTorusGeometry] = useState<any>();
  // const [matcapMaterial, setMatcapMaterial] = useState<any>();
  const donuts = useRef<any[]>([]);
  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;
    matcapMaterial.matcap = matcapTexture;
    matcapMaterial.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <Perf position="top-left" />
      {/* <torusGeometry ref={setTorusGeometry} />
      <meshMatcapMaterial ref={setMatcapMaterial} matcap={matcapTexture} /> */}
      <Center>
        <Text3D
          font="./fonts/rubik-font.json"
          size={0.75}
          curveSegments={12}
          height={0.2}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={matcapMaterial}
        >
          HELLO R3F
        </Text3D>
      </Center>

      {[...Array(40)].map((item, index) => (
        <mesh
          ref={(element) => (donuts.current[index] = element)}
          key={index}
          geometry={torusGeometry}
          material={matcapMaterial}
          position={positions[index]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * 3, Math.random() * 2, 0]}
        />
      ))}
    </>
  );
}

export default Text3DExample;
