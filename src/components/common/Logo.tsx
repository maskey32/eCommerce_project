import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl text-white">
                <h1>eShop</h1>
            </Link>
        </div>
    )
}

export default Logo;