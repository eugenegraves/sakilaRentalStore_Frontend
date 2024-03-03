import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import '../FilmsSearchPage.css';

function FilmSearchPage() {
    return (
        <div className="base-container">
            <Navbar />
            <Search />
        </div>
    );
};

export default FilmSearchPage;