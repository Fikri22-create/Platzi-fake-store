import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import CardListComponent from "../components/CardListComponent";

export default function Productcategory() {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        const url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId;
        try{
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`response status: ${response.status}`)
            }

            const result = await response.json();
            setProducts(result);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    );
    return (
        <div className="px-10 py-5">
            <h1 className="text-4xl font-bold">Produk Kategori {products[0].category.name}</h1>
            <CardListComponent data={products} type="product" />
        </div>
    )
}