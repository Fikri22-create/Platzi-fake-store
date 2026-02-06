import { Card } from "flowbite-react";

export default function CardCategoryComponent({item}) {
    return (
        <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={item.image}
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
        </h5>
        </Card>
    );
}