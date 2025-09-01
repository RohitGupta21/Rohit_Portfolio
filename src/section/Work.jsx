import AnimatedHeader from "../components/AnimatedHeader";
import { projects } from "../constants";

const Work = () => {
  const text = `From backend logic to polished UI, every detail matters`;
  
  return (
    <section
      id="work"
      className="flex flex-col min-h-screen bg-black text-white px-6"
    >
      <AnimatedHeader
        subtitle={"Code with precision — a glimpse into my journey as a developer"}
        title={"Works"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={index} // ✅ using index or project.id (if added in constants)
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
          >
            <div className="flex justify-between px-10 text-white/80 transition-all duration-500 
            md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
              {project.title}
            </h2>
            </div>
            {/* {Divider} */}
          <div className="w-full h-0.5 bg-white/80 "/>
          {/* FrameWork */}
          {/* <div>
            {project.frameworks.map((framework) =>(<p>
              {framework.name}
            </p>))}
          </div> */}
          
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
