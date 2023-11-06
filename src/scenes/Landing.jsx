import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-36"
    >
      {/* Image Section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
          className="relative z-0 ml-20 before:absolute before:rounded-full  before:-left-6
          before:w-[500px] before:max-w-[500px] md:before:max-w-[600px] before:h-full before:bg-white before:z-[-1] before:rotate-90"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[350px] md:max-w-[450px] rounded-full"
              src="assets/medin.JPG"
            />
          </div>
        ) : (
          <div>
            <img
              alt="profile"
              className="z-10 w-full max-w-[350px] md:max-w-[450px] rounded-full"
              src="assets/medin.JPG"
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Rubriker */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-black text-6xl font-playfair z-10 text-center md:text-start">
            Medin {""}
            <span
              className="text-black xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Grozdanic
            </span>
          </p>

          <p className="mt-10 mb-7 text-center md:text-start flex flex-col items-center md:items-start text-black text-base">
            <span className="block">Fullstack-developer</span>
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-black text-beige rounded-sm py-3 px-7 font-semibold hover:text-white transition duration-500"
            onClick={() => setSelectedPage("Contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-yellow-black py-0.5 pr-0.5"
            onClick={() => setSelectedPage("Contact")}
            href="#contact"
          >
            <div className="bg-beige text-black hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair text-lg">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        {/* Sociala medier */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;