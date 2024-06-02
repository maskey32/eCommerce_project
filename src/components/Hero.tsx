import Button from "./common/Button";
import HeroImage from '../assets/shoppingImage.png';

const Hero = () => {
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-between items-center duration-200">
            <div className="h-[700px] w-[700px] bg-primary/10 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
            <div className="container pb-8 sm:pb-0">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Product Listing</h1>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia dolore modi esse dignissimos. Omnis tempora quasi consectetur in commodi.
                            </p>
                            <div>
                                <a href="#products">
                                    <Button handleClick={() => {}}>
                                        Order Now
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="order-1 sm:order-2">
                            <div className="relative z-10">
                                <img 
                                    src={HeroImage}
                                    alt="Shopping Image" 
                                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105  lg:scale-120 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;