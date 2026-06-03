import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const About = () => {
    return (
        <div id="about" className="py-20 px-5 lg:px-14 bg-[#FBF4F6] w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10">
                {/* Image */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1 flex items-center justify-center"
                >
                    <img className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full select-none object-cover shadow-2xl border-4 border-white" draggable="false" src="about-image.jpg" alt="About Coffee House" />
                </motion.div>

                {/* Text */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left order-1 md:order-2"
                >
                    <div className="flex flex-col items-center md:items-start mb-6">
                        <h1 className="font-bold text-4xl mb-2 text-[#3B141C]">ABOUT US</h1>
                        <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-8 max-w-lg">
                        At Coffee House in Berndorf, Germany, we pride ourselves on being a 
                        go-to destination for coffee lovers and conversation seekers alike. 
                        We’re dedicated to providing an exceptional coffee experience in a 
                        cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
                    </p>
                    {/* Icons */}
                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <motion.a whileHover={{ y: -5 }} className="text-[#3B141C] hover:text-[#F3961C] transition-colors"><FaFacebook className="w-7 h-7 cursor-pointer" /></motion.a>
                        <motion.a whileHover={{ y: -5 }} className="text-[#3B141C] hover:text-[#F3961C] transition-colors"><FaInstagram className="w-7 h-7 cursor-pointer" /></motion.a>
                        <motion.a whileHover={{ y: -5 }} className="text-[#3B141C] hover:text-[#F3961C] transition-colors"><FaXTwitter className="w-7 h-7 cursor-pointer" /></motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About

