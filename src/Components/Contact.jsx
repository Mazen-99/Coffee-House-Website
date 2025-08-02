import { FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { FaRegClock } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"

const Contact = () => {
    return (
        <div id="contact" className="py-15 px-5 lg:px-14 bg-[#252525] w-full">

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center md:mb-20 mb-15">
                    <h1 className="font-bold text-white text-3xl mb-2">CONTACT US</h1>
                    <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
                <div className="text-left mb-10">
                    <p className="text-white flex mb-3">
                        <FaMapMarkerAlt className="mt-1 mr-2" />123 Campsite Avenue, Wilderness, CA 98765
                    </p>

                    <p className="text-white flex mb-3">
                        <MdOutlineMail className="mt-1 mr-2" /> info@coffeeshopwebsite.com
                    </p>

                    <p className="text-white flex mb-3">
                        <FaPhone className="mt-1 mr-2" /> +1 (123) 456-7890
                    </p>

                    <p className="text-white flex mb-3">
                        <FaRegClock className="mt-1 mr-2" /> Monday - Friday: 9:00 AM - 5:00 PM
                    </p>

                    <p className="text-white flex mb-3">
                        <FaRegClock className="mt-1 mr-2" /> Saturday: 10:00 AM - 3:00 PM
                    </p>

                    <p className="text-white flex mb-3">
                        <FaRegClock className="mt-1 mr-2" /> Sunday: Closed
                    </p>

                    <p className="text-white flex mb-3">
                        <FaGlobe className="mt-1 mr-2" /> www.CoffeeHouse.com
                    </p>
                </div>

                <div className="text-center">
                    <input type="text" className="bg-white md:w-100 rounded-lg border-2 focus:outline focus:border-[#F3961C] hover:border-[#F3961C] p-2 mb-5" placeholder="Your name" />
                    <input type="email" className="bg-white md:w-100 rounded-lg border-2 focus:outline focus:border-[#F3961C] hover:border-[#F3961C] p-2 mb-5" placeholder="Your email" />
                    <input type="message" className="bg-white md:w-100 rounded-lg border-2 focus:outline focus:border-[#F3961C] hover:border-[#F3961C] p-2 pb-30 mb-5" placeholder="Your massege" /> <br />
                    <button className="bg-[#F3961C] text-white cursor-pointer py-2 px-4 rounded-full hover:scale-110 active:scale-90 transition duration-300 ease-in-out">Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Contact
