import { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { servicesData } from "../constants/servicesData";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Services = () => {
  const text =
    "From designing robust architectures to developing interactive frontends and secure APIs, I ensure smooth deployment and optimized performance. With a strong focus on databases, cloud hosting, and scalability, I create solutions that are both efficient and future-ready.";
  
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });
  useGSAP(() =>{
    serviceRefs.current.forEach((el) =>{
        if(!el) return;
        gsap.from(el,{
            y:200,
            scrollTrigger:{
                trigger: el,
                start: "top 80%"
            },
            duration:1,
            ease:"circ.Out",
        });
    });
  },[])

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl pb-[10rem]">
      <AnimatedHeader
        subtitle={"Behind the Scene, Beyond the Screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="px-10 pt-6 text-white bg-black border-t-2 border-white/30 "
          style={
            isDesktop
              ? {
                  position:"sticky",
                  top: `calc(10vh + ${index * 5}rem)`,
                  marginBottom: `${(servicesData.length - index - 1)*5}rem`,  
                }
              : {top:0}
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>

              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>

                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
