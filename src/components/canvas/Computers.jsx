import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={30} />
      
      <primitive 
      object={computer.scene} 
        scale = {isMobile ? 0.6 : 0.75}
        position = {isMobile ? [0, -3, -1.9]: [0, -3.9, -1.5]}
        
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChnage = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChnage);

    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChnage);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
