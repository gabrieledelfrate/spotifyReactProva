const initialState = {
    searchResults: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload };
      case 'ADD_RANDOM_ARTIST':
        
        return state;
      
      default:
        return state;
    }
  };
  
  export default rootReducer;
  