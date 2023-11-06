import { motion } from "framer-motion";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const slides = [
  {
    title: 'Sweco',
    text: 'Jag jobbade med att lägga till nya funktioner, förnya, samt ändra backend strukturen på deras egna tjänst, Sweco xplorer. Fixade även buggar som de haft problem med sen tidigare. Jag använde mig utav specflow för att fixa tester för koden som skrevs.',
  },
  {
    title: 'Doctech',
    text: 'Jag hade 6 veckors praktik på Doctech där jag skapade en back-end applikation som kombinerade sökvägar med information för olika företag med hjälp utav webrequests. Jag använde mig främst av C# .net.',
  },
  {
    title: 'Gb glace',
    text: 'Som maskinoperatör var jag med under hela produktionslinjen där jag arbetade med allt från uppstart till avslut. I arbetsuppgifterna ingår bland annat kvalitetssäkring och omställning av maskiner mellan olika glass-sorter. Jag var även kontaktperson mellan olika avdelningar. Under tiden har jag även fått erfarenhet inom process samt teamledning där jag såg till att laget utförde arbetet på rätt sätt och att trivseln var bra i gruppen.',
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <section id="experience" className="pt-12 pb-24 h-screen">
     <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
      <div className="flex justify-center items-center mt-24">
        <div className="w-full md:w-4/6 h-screen relative">
          <p className="font-playfair font-semibold text-3xl md:text-4xl flex justify-center mt-10 mb-7">
            <span className="text-black mb-8">Experience</span>
          </p>
          <div className="w-full h-4/6 rounded-2xl bg-black relative overflow-hidden">
            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center m-4 md:m-24">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-12">{slides[currentIndex].title}</h1>
              <p className="text-base md:text-lg lg:text-xl text-center md:w-3/4">{slides[currentIndex].text}</p>
            </div>
            {/* Left Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex justify-center py-2 absolute bottom-0 w-full mb-8">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-yellow' : ''}`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Experience;