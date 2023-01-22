import { createContext } from 'react';

export const UserContext = createContext();

const UserContentProvider = UserContext.Provider;
const UserContextConsumer = UserContext.Consumer;

export default { UserContentProvider, UserContextConsumer };