import { useState } from 'react';
import './App.css';
import FoodList from '../components/FoodList';

const App = () => {

    const addItem = () => {
    };


    return (
        <div className="App mainDiv">
            <FoodList onAddItem={addItem} />
        </div>
    );
};

export default App;