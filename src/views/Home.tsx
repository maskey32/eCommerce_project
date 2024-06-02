import Hero from "../components/Hero";
import Products from "../components/Products";
import NavBar from "../components/common/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Products />
        </div>
    )
}

export default Home;