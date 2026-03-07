import { useEffect, useState } from "react";
import { MENU_API } from "./constant";


const useRestaurantMenu = (resId) => {
    const [restName, setRestName] = useState("");

    const [restInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API(resId));
        const json = await data.json();

        const items =
            json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
                ?.card?.itemCards;
        console.log("res", items);

        setResInfo(items);
        setRestName(json?.data?.cards[0].card.card.text)
    };

    return { restInfo, restName };

}

export default useRestaurantMenu;