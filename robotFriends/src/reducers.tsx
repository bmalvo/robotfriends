// import { setSearchField } from './actions';
// import { CHANGE_SEARCH_FIELD } from './constants'

// const initialState = {

//     searchField: ''
// }

interface Action {
    type: string;
    payload?: object;
}

export const searchRobots = (state = { searchField: '' }, action: Action): { searchField: string } => {
    switch (action.type) {
      case 'CHANGE_SEARCH_FIELD':
        return { searchField: String(action.payload) };
      default:
        return state;
    }
};
  
