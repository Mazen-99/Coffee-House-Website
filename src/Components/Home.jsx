import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="pt-15 px-5 lg:px-14 bg-[#3B141C] w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between md:pt-35 pt-10 md:pb-18">

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h1 className="text-5xl miniver-regular text-[#F3961C] pb-3">Best Coffee</h1>
          <h2 className="text-2xl font-semibold text-white pb-8">Make your day great with our <br />special coffee!</h2>
          <p className="text-[#DBDBDB] text-sm pb-8">Welcome to our coffee paradise, where every bean tells <br /> a story and every cup sparks joy.</p>
          <div className="flex gap-4">
            <button className="bg-[#F3961C] border-1 border-[#F3961C] text-[18px] text-black cursor-pointer px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition duration-300 ease-in-out font-medium">Order Now</button>
            <button className="bg-transparent border-1 border-white text-white text-[18px] px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-300 ease-in-out">Contact Us</button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img className="md:w-[450px] md:h-[450px] md:mt-[-5rem] mt-10 w-[350px] h-[350px] select-none drop-shadow-2xl" draggable="false" src="coffee-hero-section.png" alt="Coffee" />
        </motion.div>
      </div>
    </div>
  )
}
export default Home