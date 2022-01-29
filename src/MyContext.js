import React, { createContext, useState } from 'react';

export const MyContext = createContext('test');

const MyContextProvider = (props) => {

    const [user, setUser] = useState('');
    
    return (
        <MyContext.Provider value={{user, setUser}}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;
