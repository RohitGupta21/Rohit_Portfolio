import React from "react";
import { useRef } from "react";
import { AnimatedTextLine } from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const AnimatedHeader = ({subtitle, title,text,textColor,withScrollTrigger=false,}) => {
    const contextRef = useRef(null);
      const headerRef = useRef(null);
    
     
    
    useGSAP(() =>{
      const tl = gsap.timeline({
        scrollTrigger: withScrollTrigger?{
            trigger: contextRef.current,
        }
        :undefined,
      });
      tl.from(contextRef.current,{
          y: "50vh",
          duration: 1,
          ease: "circ.out",
      });
      tl.from(headerRef.current,{
        opacity:0,
        y: 200,
        duration:1,
        ease:"circ.out",
      },
        "<+0.2");
    },[]);
  return (
     <div ref={contextRef}>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            className="">
              <div
                ref={headerRef}
                className="flex flex-col justify-center gap-12 pt-10 sm:gap-16"
              >
                <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}>
                 {subtitle}
                </p>
                <div className="px-10">
                  <h1 className={`text-4xl flex flex-col flex-wrap gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
    
            <div className={`relative px-10 ${textColor}`}>
              <div className="absolute inset-x-0 top-0 border-t-2" />
              <div className="py-12 sm:py-16 text-end">
                <AnimatedTextLine
                  text={text}
                  className={`font-light uppercase value-text-responsive break-words ${textColor}`}
                />
              </div>
            </div>
          </div>
  )
}

export default AnimatedHeader