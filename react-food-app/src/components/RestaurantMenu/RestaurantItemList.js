import { CDN_URL, RESTAURANT_IMAGES } from "../../../utils/constant";

const RestaurantItemList = ({ itemList }) => {
    return (
        <div className="mt-4">
            {itemList.map((item, index) => {

                const fallbackImage =
                    RESTAURANT_IMAGES[index % RESTAURANT_IMAGES.length];

                const imageUrl = item?.card?.info?.imageId
                    ? CDN_URL + item.card.info.imageId
                    : fallbackImage;

                return (
                    <div
                        key={item.card.info.id}
                        className="flex justify-between items-start border-b border-gray-300 py-5 gap-4 " style={{ marginBottom: "16px" }}
                    >
                        <div className="flex-1 min-w-0">

                            <h3 className="font-semibold text-base">
                                {item.card.info.name}
                            </h3>

                            <p className="text-sm mt-1 font-medium">
                                ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </p>

                            <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                                {item.card.info.description}
                            </p>

                        </div>


                        <div className="w-28 h-28 flex-shrink-0 relative rounded-lg overflow-hidden">

                            <button className="absolute px-4 bottom-2 left-1/2 -translate-x-1/2 bg-black text-cyan-50 font-semibold text-sm  py-1 rounded-sm shadow-md hover:bg-green-600 transition" style={{ padding: "6px" }}>
                                Add +
                            </button>

                            <img
                                src={imageUrl}
                                alt={item.card.info.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = fallbackImage;
                                }}
                            />

                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantItemList;