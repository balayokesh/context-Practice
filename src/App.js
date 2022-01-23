import UserContextProvider from './Contexts/UserContext';
import Children from './Components/Children';

function App() {
  return (
    <UserContextProvider>
      <Children />
    </UserContextProvider>
  );
}

export default App;
