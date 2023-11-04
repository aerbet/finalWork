import React from 'react';
import OrderItems from './OrderItems';
import Total from './Total';

interface OrderDetailsProps {
    sign: {
        part1: string;
        part2: string;
    };
    orderList: OrderItems[];
    deleteItem: (itemName: string) => void;
    total: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ sign, orderList, deleteItem, total }) => {
    return (
        <div className="orderDetails">
            <p>Order Details</p>
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
        </div>
    );
};

export default OrderDetails;