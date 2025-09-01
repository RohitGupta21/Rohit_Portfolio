import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const ContactSummary = () => {
    const containerRef = useRef(null);
    const items =  
     ["Innovation ",
      "Precision",
      "Trust",
      "Collaboration",
      "Excellent",
      ];
      const items2=["contact us",
        "contact us",
        "contact us",
        "contact us",
        "contact us"
      ];
      
      useGSAP(() => {gsap.to(containerRef.current, {
        scrollTrigger :{
          trigger: containerRef.current,
          start:"center center",
          end:"+=350 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          markers: false,
        },
      })}, [])


  return (
   <section ref={containerRef} className="flex flex-col items-center justify-between 
   min-h-screen gap-12 mt-16"
   > 
   <Marquee items = {items} reverse />
{/* Marquee */}
<div className="overflow-hidden font-light text-center contain-text-responsive text-6xl py-2">
   <p>
     "Let's build a <br/>
    <span className="font-normal"> memorable</span> & <span className="italic">inspiring </span> <br />
    web-application <span className="text-yellow-600">
        together
    </span>"
   </p>
</div>

<Marquee items = {items2} reverse={true}  className="text-black bg-transparent border-y-2"
iconClassName="stroke-yellow-600 stoke-[2px]"
icon="material-symbols-light:square"/>
   </section>
  )
}

export default ContactSummary;