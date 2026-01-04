import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
// import products from "../data/products"
import apiClient from "../api/apiClient";
import { useLoaderData } from "react-router-dom"; // Rerturns data from the closest route loader or clientloader function client loader - use this instead of useState and useEffect


//Using Hooks 
export default function Home() {
    const products= useLoaderData();
     return (
        <div className="max-w-6xl mx-auto px-6 py-8 " >
            <PageHeading title="Explore Eazy Stickers">
                Add a touch of creativity to your space with our wide range of fun and unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}

export async function productsLoader(){
    try {
            
            const response = await apiClient.get("/products");  //Axios GET Request
            return response.data; 
        } catch (error) {
           throw new Response(error.message || "Failed to fetch the products. Plase try again",
            {status: error.status || 500}
           );
        }
}