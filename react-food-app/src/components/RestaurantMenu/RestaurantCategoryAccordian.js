const RestaurantCategoryAccordian = ({ data }) => {

    return (
        <div className="flex justify-center" style={{ margin: '16px' }}>
            <div className="w-6/12 bg-yellow-200 shadow-md rounded-lg px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition"style={{ padding: '18px' }}>
                <span className="font-semibold text-lg">
                    {data.title}
                </span>
                <span className="text-lg">
                    ▼
                </span>

            </div>
        </div>

    );
};

export default RestaurantCategoryAccordian;