import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Iproduct } from "../types/components";
import HeroImage from "../assets/shoppingImage.png";
import Button from "./common/Button";
import productsData from "../db/productData.json";

const ProductsListing = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {productsData.map((product: Iproduct) => (
                <div 
                    key={product.id}
                    className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px] mb-20"
                >
                    <div className="h-[100px]">
                        <img 
                            src={HeroImage} 
                            alt="Product Image" 
                            className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h1 className="text-xl font-bold">{product.name}</h1>
                        <p 
                            className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2"
                        >
                            ₦{product.price}
                        </p>
                        <div className="mb-4 text-sm hover:text-secondary">
                            <Link to={`/product-details/${product.id}`}>
                                More Details
                            </Link>
                        </div>
                        <Button handleClick={() => {}}>
                            Add to Cart
                            <FaCartShopping 
                                className="text-xl text-white drop-shadow-sm cursor-pointer"
                            />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsListing;