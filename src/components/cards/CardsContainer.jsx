import { useParams } from "react-router";
import { useMenuFetchData } from "../shared/Fetch/MenuFetchData";
import FoodCard from "./FoodCard";

function CardsContainer() {
    const { category } = useParams();
    console.log("category", category);

    const { Menu } = useMenuFetchData();
    console.log("Menu", Menu);

    if (!Menu || !Menu.length) {
        return <div>Loading....</div>
    } 

    const filteredProducts = category
        ? Menu.filter((product) => product.category === category)
        : Menu;

        console.log("filteredProducts", filteredProducts);

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 lg:ml-32">
            {filteredProducts.map((product) => (
                <FoodCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CardsContainer;
