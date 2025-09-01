import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLine = ({text, className}) => {
    const lines =text.split("\n").filter((line) => line.trim()!=="");

    const containerRef = useRef(null);
    const lineRefs = useRef([]);

    useGSAP(() =>{
        if(lineRefs.current.length > 0){
            gsap.from(lineRefs.current,{
                y:100,
                opacity:0,
                duration:1,
                stagger:0.3,
                ease: "power3.out",
                scrollTrigger:{
                    trigger: containerRef.current,
                    start: "top 80%",
                     toggleActions: "play none none reset",
                }
            })
        }
    })

  return (
    <div ref={containerRef} className={className}>
        {lines.map((line,index)=>(
            <span key={index} 
            ref={(el)=>(lineRefs.current[index] = el)}
            className="block leading-relaxed tracking-wide text-pretty ">{line}</span>
        ))}
        </div>
  )
}
