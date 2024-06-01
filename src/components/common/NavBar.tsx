import { FaCartShopping } from "react-icons/fa6";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";

const handleOrder = () => {

};

const NavBar = () => {
    return (
        <div className="shadow-md bg-white duration-200 relative z-40">
            <div className="bg-primary py-2">
                <div className="container flex justify-between items-center">
                    <Logo />
                    <div className="flex justify-between items-center gap-4">
                        <SearchBar />
                        <Button 
                            handleClick={handleOrder}
                            render={() => (
                                <>
                                    <span className="group-hover:block hidden transition-all duration-200">Order</span>
                                    <FaCartShopping 
                                        className="text-xl text-white drop-shadow-sm cursor-pointer"
                                    />
                                </>
                            )}
                        />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default NavBar;