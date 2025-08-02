import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="px-5 py-3 lg:px-14 w-full bg-[#3B141C]">
            <div className="md:flex justify-between items-center">
                <div className="md:mb-0 mb-5">
                    <h1 className="text-white text-lg">
                        @2025 <span className="text-[#F3961C] font-semibold">Coffee House</span>
                    </h1>
                </div>

                <div className="flex gap-5 items-center md:mb-0 mb-5">
                    <FaFacebook className="w-6 h-6 text-white hover:text-[#F3961C] cursor-pointer hover:scale-115 active:scale-95 transition duration-300 ease-in-out" />
                    <FaInstagram className="w-6 h-6 text-white hover:text-[#F3961C] cursor-pointer hover:scale-115 active:scale-95 transition duration-300 ease-in-out" />
                    <FaXTwitter className="w-6 h-6 text-white hover:text-[#F3961C] cursor-pointer hover:scale-115 active:scale-95 transition duration-300 ease-in-out" />
                </div>

                <div>
                    <h1 className="text-white text-lg text-center"><span className="text-[#F3961C]">By:</span> Mazen Ahmed</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
