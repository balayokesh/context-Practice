import { useState } from 'react';
import Header from './Components/Header';
import { UserContext } from './Contexts/UserContext';

export default function App() {

	const [user, setUser] = useState("John Doe");

	return (
		<UserContext.Provider value={user}>
			<Header />
			<p>Hello, World!</p>
		</UserContext.Provider>
	);
}