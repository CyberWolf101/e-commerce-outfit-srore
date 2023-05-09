import React, { useState } from 'react';
import { createContext } from 'react';

export const priceContext = createContext()


function PriceContextProvider({ children }) {
    const [price, setPrice] = useState()


    return (
        <priceContext.Provider value={[price, setPrice]} >
            {children}
        </priceContext.Provider>
    );
}

export default PriceContextProvider;