import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];
export default function ProductListings({ products }) {
    const [searchText, setSearchText] = useState("");
    const [selectedSort, setSelectedSort] = useState("Popularity");
    //Using memo to avoid the expensive calculations due to rendering where the dependencies are not changed 
    const filteredAndSortedProducts = useMemo(() => {     // is dependent on two values, first is the calculated value and the next is the dependencies -
        //Adding the products, sorting and searching logic insde the useMemo hook
        if (!Array.isArray(products)) {
            return [];
        }
        //Search Logic
        let filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
        );

        //Sorting Logic to Filterproducts according to the category
        return filteredProducts.slice().sort((a, b) => {
            switch (selectedSort) {
                case "Price Low to High":
                    return parseFloat(a.price) - parseFloat(b.price);

                    break;

                case "Price High to Low":
                    return parseFloat(b.price) - parseFloat(a.price);
                    break;

                case "Popularity":
                default:
                    return parseInt(b.popularity) - parseInt(a.popularity);
                    break;
            }
        });

    }, [products, searchText, selectedSort])


    //Function to handle the the change of text in the search box
    function handleSearchChange(inputSearch) {
        // searchText=inputSearch;
        setSearchText(inputSearch);
    }

    //Sorting Logic
    function handleSortChange(sortType) {
        //set Sort as the sort type
        setSelectedSort(sortType);
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
                <SearchBox label="Search" placeholder="Search Products..." value={searchText}
                    handleSearch={(value) => handleSearchChange(value)}
                />
                <Dropdown label="Sort By:" options={sortList} value={selectedSort} handleSort={(value) => handleSortChange(value)} />

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {filteredAndSortedProducts.length > 0 ? (
                    filteredAndSortedProducts.map((product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))
                ) : (
                    <p className="text-center font-primary font-bold text-lg text-primary">No products found</p>
                )}
            </div>

        </div>
    );

}