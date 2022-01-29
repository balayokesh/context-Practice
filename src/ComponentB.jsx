import { useContext } from 'react';
import { MyContext } from './MyContext';

export default function ComponentB () {
    const {
        user,
        setUser, 
    } = useContext(MyContext);

    const handleClick = () => {
        setUser('Arun');
    }

    return (
        <div>
            <h1>Hello {user}</h1>
            <button onClick={handleClick}>Change</button>
        </div>
    );
}
