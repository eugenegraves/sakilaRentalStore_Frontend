import React from "react";

const Search = () => {
    return (
        <div className="search-section">
            <input className="search-bar" type="text"></input>
            <div className="filters">
                <input type="radio" value="film" /> Film
                <input type="radio" value="actor" /> Actor
                <input type="radio" value="genre" /> Genre
            </div>
        </div>
    );
};

export default Search;