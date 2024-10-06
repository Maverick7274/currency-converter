import React, { useState } from 'react'

import './App.css'


  const App = () => {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currency, setCurrency] = useState('EUR');

    const convertCurrency = () => {
        const conversionRates = {
            EUR: 0.85,
            GBP: 0.75,
            JPY: 110.57,
        };

        const rate = conversionRates[currency];
        setConvertedAmount(amount * rate);
    };

    return (
        <div className="App">
            <h1>Currency Converter</h1>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                </select>
                <button onClick={convertCurrency}>Convert</button>
            </div>
            <h2>Converted Amount: $ {convertedAmount}</h2>
        </div>
    );
};


export default App
