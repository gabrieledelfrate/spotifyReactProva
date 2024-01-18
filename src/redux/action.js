export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });

  export const search = (searchQuery) => {
    return async (dispatch) => {
      try {
        // Fetch data from API
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
              'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
            },
          }
        );
  
        if (response.ok) {
          let result = await response.json();
          let songs = result.data;
  
          dispatch(setSearchResults(songs));
        } else {
          console.log('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  };

export const setRandomArtist = (artist) => ({
    type: 'SET_RANDOM_ARTIST',
    payload: artist,
  });
  
  export const fetchRandomArtist = (artistName, domQuerySelector) => {
    return async (dispatch) => {
      try {
        // Fetch data from API
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
              'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
            },
          }
        );
  
        if (response.ok) {
          let result = await response.json();
          let songInfo = result.data[0];
  
          // Dispatch action to update state
          dispatch(setRandomArtist(songInfo));
        } else {
          console.log('Error fetching data for random artist');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  };
  
  