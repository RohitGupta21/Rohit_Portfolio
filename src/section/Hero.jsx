
import { Planet } from "../components/Planet";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Lightformer } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeader from "../components/AnimatedHeader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth:853 })
   const text = `Hi, I’m Rohit Gupta 👋 A fresher MERN stack developer who loves crafting clean, user-friendly web apps.
         I enjoy solving problems with code, experimenting with new frameworks, and continuously learning to stay ahead in tech.
         Welcome to my world of design, code, and quiet obsession.
      Crafted with love. Driven by desire.`;
  

return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeader  
      subtitle={"Rohit Gupta"}
      title={"Rohit Here"}
      text={text}
       textColor={"text-black"}/>
      
      <figure className="absolute inset-0 -z-50" style={{width:"100vw", height:"100vh"}}> 
        <Canvas shadows

        camera={{ position:[0,0,-10], fov: 17.5, near:1, far: 20}}
        >
          <ambientLight intensity={0.5}/>
         <Float speed={0.7}>

           <Planet scale = {isMobile? 0.7 : 1 }/>

         </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI/3, 4, 1]}>
              <Lightformer 
              form={"circle"} 
              intensity={2}
               position={[0 , 5, -9]}
               scale={10}
               
               />
               <Lightformer 
              form={"circle"} 
              intensity={2}
               position={[0 , 3, 1]}
               scale={10}
               />
               <Lightformer 
              form={"circle"} 
              intensity={2}
               position={[-5 , -5, -1]}
               scale={10}
               />
               <Lightformer 
              form={"circle"} 
              intensity={2}
               position={[10 , 1, 0]}
               scale={16}
               />

               

            </group>
          </Environment>

        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
