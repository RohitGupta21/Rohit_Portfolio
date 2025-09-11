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
    <section className="mt-16 mb-28 overflow-x-hidden font-light leading-snug text-center contact-center-responsive space-y-6">
  {/* Service Row 1 */}
  <div id="title-service-1" className="font-normal flex justify-center items-center">
    <p className="text-2xl">Architecture</p>
  </div>

  {/* Service Row 2 */}
  <div id="title-service-2" className="flex items-center justify-center gap-3">
    <p className="text-2xl">Development</p>
    <div className="w-8 h-1 md:w-24 bg-yellow-500" />
    <p className="text-2xl">Deployment</p>
  </div>

  {/* Service Row 3 */}
  <div id="title-service-3" className="flex items-center justify-center gap-3 flex-wrap">
    <p className="text-2xl">APIs</p>
    <div className="w-6 h-1 md:w-20 bg-yellow-500" />
    <p className="italic text-2xl">Frontends</p>
    <div className="w-8 h-1 md:w-24 bg-yellow-500" />
    <p className="text-2xl">Scalability</p>
  </div>

  {/* Service Row 4 */}
  <div id="title-service-4">
    <p className="text-2xl">Databases</p>
  </div>
</section>

  )
} 

export default ServiceSummary