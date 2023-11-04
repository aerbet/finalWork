import React from 'react';
import FoodItem from './FoodItem';

interface FoodListProps {
    onAddItem: (item: FoodItem) => void;
}

const FoodList: React.FC<FoodListProps> = () => {
    return (
        <div className="foodList">
            <p>Food List</p>
            <div className="main_block">

            </div>
        </div>
    );
};

export default FoodList;