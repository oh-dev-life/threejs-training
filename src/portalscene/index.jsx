import { Center, Sparkles, useGLTF, useTexture } from "@react-three/drei";
// import portalVertexShader from "./shaders/portal/vertex.glsl";
// import portalFragmentShader from "./shaders/portal/fragment.glsl";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export default function PortalScene() {
  const { nodes } = useGLTF("./model/portal.glb");
  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;
  // const vertexShaderCode = useLoader(
  //   THREE.RawShaderMaterial,
  //   portalVertexShader
  // );
  // const fragmentShaderCode = useLoader(
  //   THREE.RawShaderMaterial,
  //   portalFragmentShader
  // );
  return (
    <Center>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      <mesh
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      />

      <mesh
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
      ></mesh>

      <mesh
        geometry={nodes.portalLight.geometry}
        position={nodes.portalLight.position}
        rotation={nodes.portalLight.rotation}
        scale={nodes.portalLight.scale}
      >
        {/* <shaderMaterial
          vertexShader={vertexShaderCode}
          fragmentShader={fragmentShaderCode}
          uniforms={{
            uTime: { value: 0 },
            uColor: { value: new THREE.Color("#fff") },
            uColorEnd: { value: new THREE.Color("#000") },
          }}
        /> */}
      </mesh>
      <Sparkles
        size={6}
        scale={[4, 2, 4]}
        position-y={1}
        speed={0.2}
        count={40}
      />
    </Center>
  );
}
