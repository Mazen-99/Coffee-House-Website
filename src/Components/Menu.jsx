const Menu = () => {
    return (
        <div id="menu" className="py-15 px-5 lg:px-14 w-full bg-[#252525]">

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center md:mb-20 mb-15">
                    <h1 className="font-bold text-white text-3xl mb-2">OUR MENU</h1>
                    <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-15 items-center justify-center">

                <div className="flex flex-col items-center md:mb-0 mb-10">
                    <img className="w-50 h-50 mb-5 select-none" src="hot-beverages.png" alt="" draggable="false" />
                    <h1 className="text-white text-2xl font-semibold mb-2">Hot Beverages</h1>
                    <p className="text-center text-[#DBDBDB] leading-tight ">Wide range of Steaming hot <br /> coffee to make you fresh and light.</p>
                </div>

                <div className="flex flex-col items-center md:mb-0 mb-10">
                    <img className="w-50 h-50 mb-5 select-none" src="cold-beverages.png" alt="" draggable="false" />
                    <h1 className="text-white text-2xl font-semibold mb-2">Cold Beverages</h1>
                    <p className="text-center text-[#DBDBDB] leading-tight ">Creamy and frothy cold coffee to <br /> make you cool.</p>
                </div>

                <div className="flex flex-col items-center md:mb-0 mb-10">
                    <img className="w-50 h-50 mb-5 select-none" src="refreshment.png" alt="" draggable="false" />
                    <h1 className="text-white text-2xl font-semibold mb-2">Refreshment</h1>
                    <p className="text-center text-[#DBDBDB] leading-tight">Fruit and icy refreshing drink to <br /> make feel refresh.</p>
                </div>


                <div className="flex flex-col items-center md:mb-0 mb-10">
                    <img className="w-50 h-50 mb-5 select-none" src="special-combo.png" alt="" />
                    <h1 className="text-white text-2xl font-semibold mb-2">Special Combos</h1>
                    <p className="text-center text-[#DBDBDB] leading-tight">Your favorite eating and drinking <br /> combotions.</p>
                </div>

                <div className="flex flex-col items-center md:mb-0 mb-10">
                    <img className="w-50 h-50 mb-5 select-none" src="desserts.png" alt="" />
                    <h1 className="text-white text-2xl font-semibold mb-2">Dessert</h1>
                    <p className="text-center text-[#DBDBDB] leading-tight">Satiate your palate and take you <br /> an a culinary treat.</p>
                </div>

                <div className="flex flex-col items-center md:mb-0 mb-10">
                    <img className="w-50 h-50 mb-5 select-none" src="burger-frenchfries.png" alt="" />
                    <h1 className="text-white text-2xl font-semibold mb-2">Burger & French Fries</h1>
                    <p className="text-center text-[#DBDBDB] leading-tight">Quick bites to satisfy your small <br /> size hunger.</p>
                </div>

            </div>
        </div>
    )
}

export default Menu
