import { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { AnimatedTextLine } from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";





const About = () => {
    
  const text = "I’m a MERN Stack Developer with a strong interest in building web applications that are clean, efficient, and future-ready. I focus on writing maintainable code, designing intuitive UIs, and continuously learning to improve my skills as a developer."
  const aboutText = "I’m Rohit Gupta, a passionate MERN Stack Developer who loves turning ideas into functional and user-friendly digital solutions. With experience in building responsive UIs using React and Tailwind CSS, and developing robust backends with Node.js, Express, and MongoDB, I aim to create web applications that are both efficient and scalable."

  const imgRef = useRef(null);
  useGSAP (() =>{
    gsap.to("#about",{
      // scale: 0.95,
      scrollTrigger :{
        trigger:"#about",
        start:"bottom 80%",
        end:"bottom 20%",
        scrub: true,
        markers: false,
      },
      ease:"power1.inOut", 
    });
    gsap.set(imgRef.current,{
      clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);"
    });
    gsap.to(imgRef.current,{
      clipPath:"polygon(0 100%, 100% 100%, 100% 0, 0 0);",
      duration:2,
      ease:"power4.out",
      scrollTrigger: {trigger: imgRef.current},
    })
  })
  return (
   <section id="about" className="m-0  w-full min-h-screen bg-black flex flex-col justify-center items-center rounded-3xl text-white">
    <AnimatedHeader 
    subtitle={"Code with Purpose, Built to Scale"} 
    title={"about"}
    text={text}
    textColor={"text-white"}
    withScrollTrigger = {true}
    />
    <div className="flex flex-col items-center justify-center gap-16  pb-0 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 " >
    <img
     ref = {imgRef}   
    src="image/man.jpg"
     alt="man"  
    className="w-md rounded-3xl"/>
    <AnimatedTextLine text={aboutText}  className={"w-full"}/>

    </div>
       </section>
    
  )
}

export default About