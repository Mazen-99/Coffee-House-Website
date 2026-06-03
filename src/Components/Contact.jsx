import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { FaRegClock } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"

const Contact = () => {
    return (
        <div id="contact" className="py-20 px-5 lg:px-14 bg-[#252525] w-full overflow-hidden">

            <div className="flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:mb-20 mb-15"
                >
                    <h1 className="font-bold text-white text-3xl mb-2">CONTACT US</h1>
                    <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 items-start justify-center gap-10">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-left space-y-4"
                >
                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <FaMapMarkerAlt className="mr-3 text-[#F3961C] text-xl" /> 123 Campsite Avenue, Wilderness, CA 98765
                    </p>

                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <MdOutlineMail className="mr-3 text-[#F3961C] text-xl" /> info@coffeeshopwebsite.com
                    </p>

                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <FaPhone className="mr-3 text-[#F3961C] text-xl" /> +1 (123) 456-7890
                    </p>

                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <FaRegClock className="mr-3 text-[#F3961C] text-xl" /> Monday - Friday: 9:00 AM - 5:00 PM
                    </p>

                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <FaRegClock className="mr-3 text-[#F3961C] text-xl" /> Saturday: 10:00 AM - 3:00 PM
                    </p>

                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <FaRegClock className="mr-3 text-[#F3961C] text-xl" /> Sunday: Closed
                    </p>

                    <p className="text-white flex items-center hover:text-[#F3961C] transition-colors duration-300">
                        <FaGlobe className="mr-3 text-[#F3961C] text-xl" /> www.CoffeeHouse.com
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-4"
                >
                    <input type="text" className="bg-white w-full rounded-lg border-2 border-transparent focus:outline-none focus:border-[#F3961C] hover:border-[#F3961C]/50 p-3 transition-all duration-300" placeholder="Your name" />
                    <input type="email" className="bg-white w-full rounded-lg border-2 border-transparent focus:outline-none focus:border-[#F3961C] hover:border-[#F3961C]/50 p-3 transition-all duration-300" placeholder="Your email" />
                    <textarea className="bg-white w-full rounded-lg border-2 border-transparent focus:outline-none focus:border-[#F3961C] hover:border-[#F3961C]/50 p-3 h-32 transition-all duration-300" placeholder="Your message"></textarea>
                    <button className="bg-[#F3961C] text-white font-bold cursor-pointer py-3 px-8 rounded-full hover:bg-white hover:text-[#F3961C] hover:scale-105 active:scale-95 transition duration-300 shadow-lg">Send Message</button>
                </motion.div>
            </div>

        </div>
    )
}

export default Contact

