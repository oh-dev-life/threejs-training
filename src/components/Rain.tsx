import { useMatcapTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import WaterDroplet from "./WaterDroplet";

const matcapMaterial = new THREE.MeshMatcapMaterial();

function Rain() {
  const [matcapTexture] = useMatcapTexture("877C72_B6ACBB_36322D_4C443B", 256);
  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;
    matcapMaterial.matcap = matcapTexture;
    matcapMaterial.needsUpdate = true;
  }, []);

  return (
    <>
      {[...Array(300)].map((item, index) => (
        <WaterDroplet
          key={index}
          x={(Math.random() - 0.2) * 200}
          y={(Math.random() - 0.2) * 200}
        />
      ))}
    </>
  );
}

export default Rain;
