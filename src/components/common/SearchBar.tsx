import { IoMdSearch }  from "react-icons/io";

const SearchBar = () => {
    return (
        <div className="group relative hidden sm:block">
            <input 
                type="text" 
                placeholder="Search for product"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
            />
            <IoMdSearch 
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
            />
        </div>
    )
}

export default SearchBar;