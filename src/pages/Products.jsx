import { useEffect, useState } from "react";
import { Spinner, Card } from "flowbite-react";
import { Button } from "flowbite-react";
import CardListComponent from "../components/CardListComponent";
import SearchComp from "../components/SearchComp";
import DropDownFilter from "../components/DropDownFilter";
import PaginationComp from "../components/PaginationComp";


export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTitle, setSearchTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => {
        setCurrentPage(page);
        setLoading(true);
        getProducts();
    };

    function processSearch(event) {
        setSearchTitle(event.target.value);
        setLoading(true);
        let url = "";   
        if (searchTitle != "") {
            url ="https://api.escuelajs.co/api/v1/products/?title=" + searchTitle;
        } else {
            url = "https://api.escuelajs.co/api/v1/products/?title=" + "&limit=8" + "&offset=" + currentPage
        }
        getProducts(url);
    }

    function processSort(type) {
        let sortedProducts = [...products];

        if (type == 'harga-murah') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (type == 'harga-mahal') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (type == 'alfabet-turun') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type == 'alfabet-naik') { 
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        setProducts(sortedProducts);    
    }

    async function getProducts(url = "https://api.escuelajs.co/api/v1/products/?limit=8" + "&offset=" + currentPage ) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`response status: ${response.status}`);
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


    return (
        <div className="block mx-auto w-4xl">
            <h5 className="text-5xl font-bold mb-8 text-center">Daftar Lengkap Produk</h5>
            <div className="flex gap-2 mb-6">
                <SearchComp onKeyUpAction={processSearch} />
                <DropDownFilter onClickAction={processSort} />
            </div>
            {
            loading ?(
                <div className="min-h-screen flex items-center justify-center">
                    <Spinner aria-label="deffault status example" />
                    Loading...
                </div>
                ) : (
                    <CardListComponent data={products} type="product" />
                )}
                {
                    searchTitle == "" ?
                        (<div className="my-5">
                            <PaginationComp currentPage={currentPage} onPageChange={onPageChange}/>
                        </div> ) : ""
                }
        </div>
    );
}