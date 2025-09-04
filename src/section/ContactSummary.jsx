import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=300 center", // shorter scroll distance
        scrub: 0.5,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen gap-8 mt-12 py-10"
    >
      <div className="overflow-hidden font-light text-center contain-text-responsive text-4xl md:text-5xl lg:text-6xl py-4">
        <p>
          "Let's build a <br />
          <span className="font-normal"> memorable</span> &{" "}
          <span className="italic">inspiring </span> <br />
          web-application{" "}
          <span className="text-yellow-600">together</span>"
        </p>
      </div>
    </section>
  );
};

export default ContactSummary;
