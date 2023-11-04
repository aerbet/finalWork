import React, { useState } from 'react';
import './App.css';
import FoodList from '../../components/FoodList';
import OrderDetails from '../../components/OrderDetails';

interface FoodItem {
    name: string;
    price: number;
    src: string;
}

interface OrderItem {
    name: string;
    price: number;
    count: number;
}

interface AppState {
    sign: {
        part1: string;
        part2: string;
    };
    orderList: OrderItem[];
    total: number;
}

const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        sign: { part1: 'Order is Empty!', part2: 'Please Add some items!' },
        orderList: [],
        total: 0,
    });

    const foodArr: FoodItem[] = [
        { name: 'Hamburger', price: 80, src: '../../assets/hamburger.png' },
        { name: 'Cheeseburger', price: 90, src: '/assets/cheeseburger.png' },
        { name: 'Fries', price: 45, src: '/assets/fries.png' },
        { name: 'Coffee', price: 70, src: '/assets/coffee.png' },
        { name: 'Tea', price: 50, src: '/assets/tea.png' },
        { name: 'Cola', price: 40, src: '/assets/cola.png' }
    ];

    const addItem = (item: FoodItem) => {
        const updatedState = { ...state };
        updatedState.sign.part1 = '';
        updatedState.sign.part2 = '';

        const index = updatedState.orderList.findIndex((orderItem) => orderItem.name === item.name);

        if (index !== -1) {
            updatedState.orderList[index].count += 1;
        } else {
            updatedState.orderList.push({ ...item, count: 1 });
        }

        updatedState.total = updatedState.orderList.reduce((acc, orderItem) => acc + orderItem.price * orderItem.count, 0);

        setState(updatedState);
    };

    const deleteItem = (itemName: string) => {
        const updatedState = { ...state };
        const index = updatedState.orderList.findIndex((orderItem) => orderItem.name === itemName);

        if (index !== -1) {
            if (updatedState.orderList[index].count > 1) {
                updatedState.orderList[index].count -= 1;
            } else {
                updatedState.orderList.splice(index, 1);
            }
        }

        if (updatedState.orderList.length === 0) {
            updatedState.sign.part1 = 'Order is Empty!';
            updatedState.sign.part2 = 'Please Add some items!';
        }

        updatedState.total = updatedState.orderList.reduce((acc, orderItem) => acc + orderItem.price * orderItem.count, 0);

        setState(updatedState);
    };


    return (
        <div className="App mainDiv">
            <OrderDetails
                sign={state.sign}
                orderList={state.orderList}
                deleteItem={deleteItem}
                total={state.total}
            />
            <FoodList onAddItem={addItem} foodArr={foodArr} />
        </div>
    );
};

export default App;