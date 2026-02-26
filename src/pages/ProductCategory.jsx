import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import CardListComponent from "../components/CardListComponent";
import SearchComp from "../components/SearchComp";
import DropDownFilter from "../components/DropDownFilter";
import PaginationComp from "../components/PaginationComp";

export default function Productcategory() {
    const {categoryId} = useParams();
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
        let url ="";
        if(searchTitle != "") {
            url =  "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&title=" + searchTitle;
        } else {
            url = url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&limit=8" + "&offset=" + currentPage
        }
        // console.log(searchTitle);
        getProducts(url);
    }

    function processSort(type) {
        //...products -> nyalin data API
        let sortedProducts = [...products];

        if(type == 'harga-murah') {
            //mengurutkan number / harga
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (type == 'harga-mahal') {
             sortedProducts.sort((a, b) => b.price - a.price);  
        } else if (type == 'alfabet-turun') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
        } else if (type == 'alfabet-naik') {
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title))
        }  
        setProducts(sortedProducts);
    }

    async function getProducts(url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&limit=8" + "&offset=" + currentPage) {
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

    return (
        <div className="block mx-auto w-4xl">
            <h1 className="text-5xl font-bold mb-8 text-center">Produk Kategori {products[0]?.category.name}</h1>
            <div className="flex gap-2">
                <SearchComp onKeyUpAction={processSearch}/>
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
    )
}