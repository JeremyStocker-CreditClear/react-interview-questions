import React from 'react';

const items = [
    {
        size: 'sm',
        price: 2.00
    },
    {
        size: 'md',
        price: 4.00
    },
    {
        size: 'lg',
        price: 4.00
    }
]

/**
 * === TEST ===
 * Lets pretend this component recieves a prop called `items` which is an array and has the same shape of the `items` array above.
 * Inside the component check if at least 1 item exists and if it does then map over each item and output a string with
 * the size and price, otherwise don't return anything if the array is empty.
 */
const TestComponent1 = () => {
    return (
        <>
            <h3>Items list:</h3>
        </>
    )
}

export { TestComponent1 };