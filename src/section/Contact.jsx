
import AnimatedHeader from "../components/AnimatedHeader"


const Contact = () => {
    const text =`Get in touch with me for collaborations, opportunities, or just a friendly chat.`
  return (
   <section id="contact" className="flex flex-col justify-between min-h-screen bg-black"
   >
    <div>
       <AnimatedHeader
        subtitle={"You Dream It, I Code It"}
        title={"Conatct"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10 "
        >
            <div className="flex flex-col w-full gap-1"
            >
                <div className="social-link ">
                  <h2> E-mail </h2>
                  <div className="w-full h-px my-2 bg-white/30"/>
                  <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl mb-6">guptarohitdilip@gmail.com</p>
                </div>
                <div className="social-link">
                    <h2 >Phone</h2>
                    <div className="w-full h-px my-2 bg-white/30"/>
                    <p className="text-xl lowercase md:text-2xl lg:text-3xl mb-6">
                        9029207985
                    </p>
                    <div className="social-link">
                        <h2>Social Media</h2>
                         <div className="w-full h-px my-2 bg-white/30"/>
                         <div className="flex flex-wrap gap-2">

                         </div>
                        
                    </div>
                </div>
                

            </div>

        </div>
    </div>

   </section>
  )
}

export default Contact