import React from 'react';
import FoodItem from './FoodItem';

interface FoodListProps {
    onAddItem: (item: FoodItem) => void;
    foodArr: FoodItem[];
}

const FoodList: React.FC<FoodListProps> = ({ onAddItem, foodArr }) => {
    return (
        <div className="foodList">
            <p>Food List</p>
            <div className="main_block">
                {foodArr.map((item, index) => (
                    <FoodItem
                        key={index}
                        item={item}
                        onAddItem={onAddItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodList;