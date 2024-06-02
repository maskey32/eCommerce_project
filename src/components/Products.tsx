import ProductsListing from "./ProductsListing";

const Products = () => {
    return (
        <div id="products" className="mt-14 mb-12">
            <div className="container">
                <div className="text-center mb-24  max-w-[600px] mx-auto">
                    <p className="text-sm text-primary">Available Products</p>
                    <h1 className="text-3xl font-bold">Products Listings</h1>
                    <p className="text-xs text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora aliquid blanditiis.
                    </p>
                </div>
                <ProductsListing />
            </div>
        </div>
    )
}

export default Products;