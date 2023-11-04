import React from 'react';
import OrderItems from './OrderItems';
import Total from './Total';

interface OrderDetailsProps {
    sign: {
        part1: string;
        part2: string;
    };
    orderList:  OrderItem[];
    deleteItem: (itemName: string) => void;
    total: number;
    clearOrder: () => void;
}

interface OrderItem {
    name: string;
    price: number;
    count: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ sign, orderList, deleteItem, total, clearOrder }) => {
    return (
        <div className="orderDetails">
            <p>Order Details:</p>
            <div className="sign">
                {sign.part1}
                <p>{sign.part2}</p>
            </div>
            {orderList.map((orderItem, index) => (
                <OrderItems
                    key={index}
                    orderItem={orderItem}
                    onDeleteItem={() => deleteItem(orderItem.name)}
                />
            ))}
            <Total total={total} />
            <button className="ClearBtn" onClick={clearOrder}>Clear Order</button>
        </div>
    );
};
export default OrderDetails;