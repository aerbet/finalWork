import React from 'react';

interface TotalProps {
    total: number;
}

const Total: React.FC<TotalProps> = ({ total }) => {
    return <div className="total">Total: {total} </div>;
};

export default Total;