import React from 'react';

interface OrderItemProps {
    orderItem: {
        name: string;
        price: number;
        count: number;
    };
    onDeleteItem: () => void;
}

const OrderItems: React.FC<OrderItemProps> = ({ orderItem, onDeleteItem }) => {
    return (
        <div className="orderItem">
            {orderItem.name + ' X ' + orderItem.count}
            <p>{orderItem.price * orderItem.count + ' KGS'}</p>
            <button onClick={onDeleteItem}>delete</button>
        </div>
    );
};

export default OrderItems;