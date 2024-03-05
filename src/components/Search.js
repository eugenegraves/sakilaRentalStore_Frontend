import React, { useState, useEffect } from "react";
import axios from 'axios';

function Card({ id, title}) {
    return (
        <div className='card' key={id}>
            <h2 className='card-title'>{title}</h2>
            <div className='pseudo-picture'>
                <button className='details-button' /*onClick={openPopup}*/>View Details</button>
            </div>
        </div>
    );
}

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('Film'); //Sets the default filter to be by film.
    const [filteredData, setFilteredData] = useState([]);
    const baseURL = "http://127.0.0.1:5000";

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const fetchData = async () => {
        try {
            const url = `${baseURL}/film_search_default`;
            const response = await axios.get(url);
            setFilteredData(response.data);
        } catch (error) {
            console.error(error);
          // Handle errors appropriately
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData2 = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const url = `${baseURL}/film_search/${filter}?q=${searchTerm}`;
            const response = await axios.get(url);
            console.log(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error(error);
          // Handle errors appropriately
        }
    };

    return (
        <div>
            <div className="search-section">
                <input className="search-bar" type="text" value={searchTerm} onChange={handleSearchChange}></input>
                <div className="filters-and-searchButton">
                    <div className="filters">
                        <label className="filter-label"><input className="filter" type="radio" value="film" checked={filter === 'film'} onChange={handleFilterChange} /> Film</label>
                        <label className="filter-label"><input className="filter" type="radio" value="actor" checked={filter === 'actor'} onChange={handleFilterChange}  /> Actor</label>
                        <label className="filter-label"><input className="filter" type="radio" value="genre" checked={filter === 'genre'} onChange={handleFilterChange}  /> Genre</label>
                    </div>
                    <div className="searchButton-container">
                        <button className="searchButton" onClick={fetchData2}>Search</button>
                    </div>
                </div>
            </div>
            <div className="results-section">
                <div className='cardSection-container'>
                    <h1 className='topFive-header'>Results</h1>
                    <div className='card-container'>
                        {filteredData.map((item, index) => (
                            <Card key={index} id={index} title={item[0]} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;