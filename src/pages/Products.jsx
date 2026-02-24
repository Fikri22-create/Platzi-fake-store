import { useEffect, useState } from "react";
import { Spinner, Card } from "flowbite-react";
import { Button } from "flowbite-react";


export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(
                    "https://api.escuelajs.co/api/v1/products"
                );

                if (!response.ok) {
                    throw new Error("Gagal mengambil data products");
                }

                const result = await response.json();
                setProducts(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);

    if(loading) {
        return (
        <div className="flex justify-center">
            <Spinner aria-label="Default status example"/>
            Loading...
        </div>
        ) 
    }

    return (
        <div className="px-10 py-10">
            <h3 className="text-5xl font-bold mb-8 text-center">Daftar Lengkap Produk</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <Card key={item.id} imgAlt={item.title} imgSrc={item.images[0]} className="hover:scale-105 transition duration-300">
                         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <p className="text-cyan-600 font-bold">${item.price}</p>
                        <div className="flex flex-wrap gap-2">
                            <Button>details</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}