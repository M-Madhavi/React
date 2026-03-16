import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategoryAccordian = ({ data }) => {
    const [showItems, setShowItems] = useState(false)
    const handleClick = () => {
        console.log("clickeddddd")
        setShowItems(!showItems)
    }

    return (
        <div className="flex justify-center" style={{ margin: '20px' }}>
            <div className="w-6/12 bg-yellow-200 shadow-md rounded-lg px-6 py-4 items-center cursor-pointer hover:bg-gray-50 transition" style={{ padding: '18px' }}>
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-semibold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="text-lg">
                        {showItems ?"▲":"▼"}
                    </span>
                </div>
                {/* {Accordion Body} */}
                {showItems && <RestaurantItemList itemList={data.itemCards} />}
            </div>

        </div>

    );
};

export default RestaurantCategoryAccordian;