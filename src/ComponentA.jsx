import { useContext } from 'react';
import { MyContext } from './MyContext';

import ComponentB from './ComponentB';

export default function ComponentA () {
    const {
        user,
        setUser, 
    } = useContext(MyContext);

    const handleClick = () => {
        setUser('Bala');
    }

    return (
        <div>
            <h1>Hello {user}</h1>
            <button onClick={handleClick}>Change</button>
            <ComponentB />
        </div>
    );
}
