import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const About = () => {
    return (
        <div id="about" className="py-15 px-5 lg:px-14 bg-[#FBF4F6] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
                {/* Image */}
                <div className="order-2 md:order-0 flex items-center justify-center">
                    <img className="md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-full select-none" draggable="false" src="about-image.jpg" alt="" />
                </div>

                {/* Text */}
                <div className="text-center md:mb-0 mb-10">
                    <div className="flex flex-col items-center md:mb-10 mb-7">
                        <h1 className="font-bold text-3xl mb-2">ABOUT US</h1>
                        <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                    </div>
                    <p className="text-[14px] md:mb-10 mb-7">
                        At Coffee House in Berndorf, Germany, we pride our selves on being a <br />
                        go-to destination for coffee lovers and conversaton seekers alike. <br />
                        We’re dedicated to providing an exceptional coffee experience in a <br />
                        cozy and inviting atmosphere, where guests can relax, unwind, and <br />enjoy their time in comfort.
                    </p>
                    {/* Icons */}
                    <div className="flex items-center justify-center gap-5">
                        <FaFacebook className="w-7 h-7 cursor-pointer text-[#3B141C] hover:scale-115 active:scale-95 transition duration-300 ease-in-out" />
                        <FaInstagram className="w-7 h-7 cursor-pointer text-[#3B141C] hover:scale-115 active:scale-95 transition duration-300 ease-in-out" />
                        <FaXTwitter className="w-7 h-7 cursor-pointer text-[#3B141C] hover:scale-115 active:scale-95 transition duration-300 ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
