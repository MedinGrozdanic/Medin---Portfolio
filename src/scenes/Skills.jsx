import { motion } from 'framer-motion';

const Skills = () => {

    return (
        <section id="skills" className="pt-12 pb-40">
            {/* Rubrik  */}
            <div className="md:flex md:justify-center sm:mt-10 ml-8">
                <div className="md:w-1/3">
                    <p className="font-playfair font-semibold text-3xl md:text-4xl flex justify-center mt-10 mb-7">
                        <span className="text-black">MY</span>
                        <span className="text-blue">SKILLS</span>
                    </p>
                </div>
            </div>
            <section className="flex flex-col md:flex-row justify-between gap-16 px-4 mt-12">
                {/* Frontend skills */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="bg-black rounded-lg p-8 w-full md:max-w-[550px] lg:max-w-[650px] h-750px flex flex-col group hover:border-b-8 hover:border-blue"
                >
                    <h2 className="text-white font-semibold text-center text-2xl md:text-4xl mb-8">Frontend</h2>
                    <ul className="mt-4 space-y-12 md:text-2xl">
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">React</h3>
                            <img alt="skill" className="ml-6" src="assets/react-logo.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">Javascript</h3>
                            <img alt="skill" className="ml-6" src="assets/javascript-icon.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">HTML</h3>
                            <img alt="skill" className="ml-6" src="assets/html-icon.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">CSS</h3>
                            <img alt="skill" className="ml-6" src="assets/css-icon.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">Ant-design</h3>
                        </li>
                    </ul>

                </motion.div>
                {/* Backend skills */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="bg-black rounded-lg p-8 w-full md:max-w-[550px] lg:max-w-[650px] h-750px flex flex-col group hover:border-b-8 hover:border-blue"
                >
                    <h2 className="text-white font-semibold text-center text-2xl md:text-4xl mb-8">Backend</h2>
                    <ul className="mt-4 space-y-12 md:text-2xl">
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">C#</h3>
                            <img alt="skill" className="ml-6" src="assets/csharp-icon.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">SQL</h3>
                            <img alt="skill" className="ml-6" src="assets/sql-icon.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">Blazor</h3>
                            <img alt="skill" className="ml-6" src="assets/blazor-icon.png" />
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">MVC</h3>
                        </li>
                        <li className="flex items-center justify-between">
                            <h3 className="text-white">Chilcat</h3>
                        </li>
                    </ul>
                </motion.div>
            </section>
        </section>
    );
};

export default Skills;