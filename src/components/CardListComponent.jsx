import CardCategoryComponent from "./CardcategoryComponent"
import CardProductComponent from "./CardProductComponent"

export default function CardListComponent({ data, type, children }) {
    //pembungkus card sejajar 4 kesamping
    return (
        <div className="block mx-auto w-4xl">
            {children}
            <div className="grid grid-cols-4 gap-4 my-10">
            {
                // dari app dikirim data useState([]), ke CardCategory kirim 1 1 yang di loop (item)
                data.map((item,index) => type == "category" ? (
                     <CardCategoryComponent item={item} key={index} />
                ) : (
                    <CardProductComponent item={item} key={index} />
                ))
            }
        </div>
        </div>
    )
}