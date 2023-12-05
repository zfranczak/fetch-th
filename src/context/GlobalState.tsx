import React, { createContext, useReducer, useEffect } from 'react';

// Define the Dog type
interface Dog {
  id: string;
  // Other properties of Dog
}

// Define the initial state type
interface InitialState {
  doglist: Dog[];
}

// Initial state
const initialState: InitialState = {
  doglist: localStorage.getItem('doglist')
    ? JSON.parse(localStorage.getItem('doglist'))
    : [],
};

// Create context
export const GlobalContext = createContext<InitialState>(initialState);

// Actions
interface AddDogAction {
  type: 'ADD_DOG_TO_DOGLIST';
  payload: Dog;
}

interface RemoveDogAction {
  type: 'REMOVE_FROM_DOGLIST';
  payload: string; // Assuming payload is the dog ID
}

type ActionType = AddDogAction | RemoveDogAction;

// Provider component
export const GlobalProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('doglist', JSON.stringify(state.doglist));
  }, [state.doglist]);

  // Actions
  const addDogToDoglist = (dog: Dog) => {
    dispatch({ type: 'ADD_DOG_TO_DOGLIST', payload: dog });
  };

  const removeDogFromDoglist = (dogId: string) => {
    dispatch({
      type: 'REMOVE_FROM_DOGLIST',
      payload: dogId,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        doglist: state.doglist,
        addDogToDoglist,
        removeDogFromDoglist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
