import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSearchResults, fetchRandomArtists } from '../redux/actions';

const MainPage = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    dispatch(fetchRandomArtists('rock', '#rockSection'));
    dispatch(fetchRandomArtists('pop', '#popSection'));
    dispatch(fetchRandomArtists('hiphop', '#hipHopSection'));
  }, [dispatch]);

  const handleSearch = () => {   
    const searchQuery = document.querySelector('#searchField').value;
    if (searchQuery.length > 2) {
      dispatch(fetchSearchResults(searchQuery));
    }
  };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <NavLink to="#">TRENDING</NavLink>
          <NavLink to="#">PODCAST</NavLink>
          <NavLink to="#">MOODS AND GENRES</NavLink>
          <NavLink to="#">NEW RELEASES</NavLink>
          <NavLink to="#">DISCOVER</NavLink>
        </div>
        <div className="col-12 col-md-8">
          <div className="search-container">
            <input
              type="text"
              id="searchField"
              placeholder="Search for music..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainPage;
