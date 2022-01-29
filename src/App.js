import MyContextProvider from './MyContext';

import ComponentA from './ComponentA';

export default function App () {

    return (
        <MyContextProvider >
            <ComponentA />
        </MyContextProvider>
    );
}
