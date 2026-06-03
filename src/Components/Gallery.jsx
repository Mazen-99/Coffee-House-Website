import { motion } from "framer-motion";

const Gallery = () => {
    const images = [
        "gallery-1.jpg",
        "gallery-2.jpg",
        "gallery-3.jpg",
        "gallery-4.jpg",
        "gallery-5.jpg",
        "gallery-6.jpg",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div id="gallery" className='py-20 px-5 lg:px-14 bg-white w-full overflow-hidden'>
            <div className="flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:mb-20 mb-15"
                >
                    <h1 className="font-bold text-black text-3xl mb-2">GALLERY</h1>
                    <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                </motion.div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center justify-center"
            >
                {images.map((img, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="relative group overflow-hidden rounded-xl shadow-lg"
                    >
                        <img className="w-full h-[250px] object-cover select-none transition-transform duration-500 group-hover:rotate-1" src={img} alt={`Gallery ${index + 1}`} draggable="false" />
                        <div className="absolute inset-0 bg-[#3B141C] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Gallery

