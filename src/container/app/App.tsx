import React, { useState } from 'react';
import './App.css';
import FoodList from '../../components/FoodList';
import OrderDetails from '../../components/OrderDetails';

import HamburgerImage from '../../assets/hamburger.jpg';
import FishSandwichImage from '../../assets/fishsandwich.jpg';
import FriesImage from '../../assets/fries.jpg';
import CoffeeImage from '../../assets/coffee.jpg';
import TeaImage from '../../assets/tea.jpg';
import ColaImage from '../../assets/cola.jpg';

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
        sign: { part1: 'Order is empty', part2: 'Please order some food' },
        orderList: [],
        total: 0,
    });

    const foodArr: FoodItem[] = [
        { name: 'Hamburger', price: 80, src: HamburgerImage },
        { name: 'FishSandwich', price: 90, src: FishSandwichImage },
        { name: 'Fries', price: 45, src: FriesImage },
        { name: 'Coffee', price: 70, src: CoffeeImage },
        { name: 'Tea', price: 50, src: TeaImage },
        { name: 'Cola', price: 40, src: ColaImage }
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
            updatedState.sign.part1 = 'Order is empty';
            updatedState.sign.part2 = 'Please order some food';
        }

        updatedState.total = updatedState.orderList.reduce((acc, orderItem) => acc + orderItem.price * orderItem.count, 0);

        setState(updatedState);
    };

    const clearOrder = () => {
        setState({
            sign: { part1: 'Order is empty', part2: 'Please order some food' },
            orderList: [],
            total: 0,
        });
    };

    return (
        <div className="mainDiv">
            <OrderDetails
                sign={state.sign}
                orderList={state.orderList}
                deleteItem={deleteItem}
                total={state.total}
                clearOrder={clearOrder}
            />
            <FoodList onAddItem={addItem} foodArr={foodArr} />
        </div>
    );
};

export default App;
