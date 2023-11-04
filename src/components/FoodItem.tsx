import React from 'react';

interface FoodItemProps {
    item: FoodItem;
    onAddItem: (item: FoodItem) => void;
}

interface FoodItem {
    name: string;
    price: number;
    src: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ item, onAddItem }) => {
    return (
        <div className={item.name} id="block" onClick={() => onAddItem(item)}>
            <img className={item.name} alt={item.name} src={item.src} />
            {item.name} <p>{item.price + ' KGS'}</p>
        </div>
    );
};

export default FoodItem;