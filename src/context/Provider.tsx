import React, {createContext, useReducer} from 'react';
import authInitState, {AuthState} from './initialStates/auth';
import contactInitState, {ContactState} from './initialStates/contact';
import auth from './reducers/auth';
import contact from './reducers/contact';

interface AppContextInterface {
  auth: AuthState;
  contacts: ContactState;
  authDispatch: React.Dispatch<any>;
  contactDispatch: React.Dispatch<any>;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<AppContextInterface | null>(null);

const GlobalProvider = ({children}: GlobalProviderProps) => {
  const [authState, authDispatch] = useReducer(auth, authInitState);
  const [contactState, contactDispatch] = useReducer(contact, contactInitState);

  return (
    <GlobalContext.Provider
      value={{
        auth: authState,
        contacts: contactState,
        authDispatch,
        contactDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
