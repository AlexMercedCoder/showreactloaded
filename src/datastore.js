import { createDataStore } from 'merced-react-hooks';

// Initial State
const initialState = {
  word: 'hello',
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'adios':
      return { ...state, word: 'goodbye' };
      break;
    default:
      return state;
      break;
  }
};

//create Data Store Provider and useDataStore hook
export const [DataStore, useDataStore] = createDataStore(initialState, reducer);
