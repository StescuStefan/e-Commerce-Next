import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r
        from-purple-800 to-indigo-600 mb-8">
            <div className="mx-auto px-8 py-12 flex
            flex-col gap-2 md:flex-row items-center
            justify-evenly">
                <div className="mb-8 md:mb-9 text-center">
                    <h1 className="text-4xl md:text-6xl
                    font-bold text-white mb-4">Summer Sale</h1>
                    <p className="text-lg
                    md:text-xl
                    text-white mb-2">Enjoy the discount if the shopping cart is more than 2000$</p>
                    <p className="text-2xl
                    md:text-5xl text-orange-400 font-bold">GET 20% OFF</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image src='/banner-image.png'
                    fill 
                    alt='Banner Image'
                    className="object-contain"/>
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner;