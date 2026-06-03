import { motion } from "framer-motion";

const Menu = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const menuItems = [
        { img: "hot-beverages.png", title: "Hot Beverages", desc: "Wide range of Steaming hot coffee to make you fresh and light." },
        { img: "cold-beverages.png", title: "Cold Beverages", desc: "Creamy and frothy cold coffee to make you cool." },
        { img: "refreshment.png", title: "Refreshment", desc: "Fruit and icy refreshing drink to make feel refresh." },
        { img: "special-combo.png", title: "Special Combos", desc: "Your favorite eating and drinking combinations." },
        { img: "desserts.png", title: "Dessert", desc: "Satiate your palate and take you on a culinary treat." },
        { img: "burger-frenchfries.png", title: "Burger & French Fries", desc: "Quick bites to satisfy your small size hunger." },
    ];

    return (
        <div id="menu" className="py-20 px-5 lg:px-14 w-full bg-[#252525]">
            <div className="flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:mb-20 mb-15"
                >
                    <h1 className="font-bold text-white text-3xl mb-2">OUR MENU</h1>
                    <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                </motion.div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-15 items-center justify-center"
            >
                {menuItems.map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="flex flex-col items-center group"
                    >
                        <div className="relative mb-5 overflow-hidden rounded-full bg-[#333] p-4 group-hover:bg-[#3B141C] transition-colors duration-300">
                            <img className="w-40 h-40 select-none transform group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.title} draggable="false" />
                        </div>
                        <h1 className="text-white text-2xl font-semibold mb-2">{item.title}</h1>
                        <p className="text-center text-[#DBDBDB] leading-tight max-w-[250px]">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Menu

