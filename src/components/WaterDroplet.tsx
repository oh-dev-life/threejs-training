import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
type TDropletPoint = {
  x: number;
  y: number;
};
function WaterDroplet({ x, y }: TDropletPoint) {
  const dropletShape = new THREE.Shape();
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color("white"),
    // specular: 0x111111,
    // shininess: 200,
    reflectivity: 0.8,
  });
  dropletShape.moveTo(x, y);
  dropletShape.bezierCurveTo(x + 0.2, y + 0, x + 0.5, y + 1, x + 1, y + 4);
  dropletShape.bezierCurveTo(x - 1, y + 1, x - 0.4, y, x, y);

  const geometry = new THREE.ShapeGeometry(dropletShape);

  const dropRef = useRef<any>();

  useFrame(({ clock }) => {
    const delta = clock.getElapsedTime();
    const speed = Math.random() * 0.5;
    const dropPosition = dropRef.current.position;
    dropPosition.x -= speed;
    dropPosition.y -= speed;

    if (dropPosition.y < -10) {
      dropPosition.x = 10;
      dropPosition.y = 10;
    }
  });

  return (
    <mesh
      scale={Math.random() * 0.1}
      geometry={geometry}
      material={material}
      ref={dropRef}
    />
  );
}

export default WaterDroplet;
