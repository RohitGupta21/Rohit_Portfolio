import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './section/Navbar';
import Hero from './section/hero';
import ServiceSummary from './section/ServiceSummary';
import Services from './section/Services';
import About from './section/About';
import Work from './section/Work';
import ContactSummary from './section/ContactSummary';
import Contact from './section/Contact';
import ReactLenis from 'lenis/react';
import { useProgress } from '@react-three/drei';



const App = () => {
  const { progress }= useProgress();
  console.log(progress);
  const [isReady, setIsReady] = useState(false);
 useEffect(() => {
  if(progress == 100){
    setIsReady(true);
  }
  },[progress]);



   useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0); // ensures start at top
  }, []);

  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-hidden bg-black'>
      {!isReady && (
        <div className='fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white
        transition-opacity duration-700 font-light'>
          <p className='mb-4 text-xl tracking-widest animate-pulse '>
            Loading {Math.floor(progress)} %
          </p>
              <div className='relative h-1 overflow-hidden rounded w-60 bg-white/20'>
                <div className='absolute top-0 left-0 h-full transition-all duration-300 bg-white' 
                style={{width: `${progress}%`}}></div>
              </div>
        </div>
      )}
   <div 
   className={`${
    isReady? "opacity-100" : "opacity-0"}
    transition-opacity duration-1000`}>
    <Navbar />
   <Hero/>
   <ServiceSummary />
   <Services />
   <About />   
   <Work />
   <ContactSummary />
   <Contact />
   </div>
     
   </ReactLenis>
  );
};

export default App;