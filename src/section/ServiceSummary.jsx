import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(()=>{
    gsap.to("#title-service-1",{
      xPercent:20,
      scrollTrigger:{
           trigger:"#title-service-1",
          scrub:true,
           invalidateOnRefresh: true,
      }
    });
     gsap.to("#title-service-2",{
      xPercent:-30,
      scrollTrigger:{
          trigger:"#title-service-2",
          scrub:true,
      }
    });
     gsap.to("#title-service-3",{
      xPercent:50,
      scrollTrigger:{
          trigger:"#title-service-3",
          scrub:true,
      }
    });
     gsap.to("#title-service-4",{
      xPercent:-70,
      scrollTrigger:{
          trigger:"#title-service-4",
          scrub:true,
      }
    });
  })
  return (
    <section className="mt-20 overflow-x-hidden font-light leading-snug text-center mb-40 
    contact-center-responsive">
     <div id="title-service-1" className="font-normal">
      <p className="font-normal text-2xl">Architecture</p>
     </div>
     <div id="title-service-2" className="flex items-center justify-center gap-3 ">

   
     <p className="font-normal text-2xl">Development</p>
     <div className="w-10 h-1 md:w-32 bg-yellow-500"/>
     <p className="font-normal text-2xl">Deployment</p>
       </div>
       <div id="title-service-3" className="flex items-center justify-center gap-3 ">
          <p className="font-normal text-2xl">
            APIs
          </p> <div className="w-5 h-1 md:w-32 bg-yellow-500"/>
          <p className="italic font-normal text-2xl">Frontends</p>
           <div className="w-10 h-1 md:w-32 bg-yellow-500"/>
           <p className="font-normal text-2xl">Scalability</p>
           
       </div>
       <div id="title-service-4">
        
       </div>
       <p className="font-normal text-2xl ">Databases</p>
    </section>
  )
} 

export default ServiceSummary