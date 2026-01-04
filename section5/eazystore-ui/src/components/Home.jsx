import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
// import products from "../data/products"
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

//Using Hooks 
export default function Home() {
    const [products, setProducts] = useState([]); //adds a state to the component
    const [loading, setLoading] = useState(true); //loading time to load the products
    const [error, setError] = useState(null); //Add error if any
    //Runs once when the component mounts
    //Mounting is the process of creating and adding the component into the DOM
    useEffect(() => {
        fetchProducts();
    }, []); //lets you synchronize a component with an external system
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get("/products");  //Axios GET Request
            setProducts(response.data); //Update products state with the fetched data
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Failed to fetch the  products. Please try again."
            ); //Extract error message if available
        } finally {
            setLoading(false);
        }
    };
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="text-xl text-red-500">Error: {error}</span>
            </div>
        );
    }
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="text-xl font-semibold">Loading Products...</span>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-8 " >
            <PageHeading title="Explore Eazy Stickers">
                Add a touch of creativity to your space with our wide range of fun and unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}