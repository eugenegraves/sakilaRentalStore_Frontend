import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmPopup from './FilmPopup';

function Card({ id, title, rentals, openPopup}) {
    return (
        <div className='card' key={id}>
            <h2 className='card-title'>{title}</h2>
            <div className='pseudo-picture'>
                <button className='details-button' onClick={openPopup}>View Details</button>
            </div>
            <p className='card-rentals'>Rented {rentals} Times</p>
            <p className='card-id'>Movie ID: {id}</p>
        </div>
    );
}

const TopFiveFilmsSection = () => {
    const [data, setData] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [filmDetails, setFilmDetails] = useState({});
    const baseURL = "http://127.0.0.1:5000";
    
    useEffect(() => {
        fetchTopFiveFilms();
    }, []);

    const fetchTopFiveFilms = async () => {
        try {
            const response = await axios.get(baseURL + '/top_five_films');
            setData(response.data);
            //console.log(response.data[1][1]);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const openPopup = async(title) => {
        const baseURL = "http://127.0.0.1:5000";
        console.log(title);
        //const encodedTitle = encodeURIComponent(title);
        const url = `${baseURL}/film_details?title=${title[1]}`;
        const response = await axios.get(url);
        console.log(response.data);
        setFilmDetails(response.data["0"]);
        setPopupActive(true);
    }

    const closeFilmPopup = () => {
        setPopupActive(false);
    };

    return (
        <div className='cardSection-container'>
            <h1 className='topFive-header'>Top 5 All-Time Rented Films</h1>
            <div className='card-container'>
                {data.map((item, index) => (
                    <Card key={index} id={item[0]} title={item[1]} rentals={item[2]} openPopup={() => openPopup(item)} />
                ))}
                
            </div>
            <FilmPopup isActive={popupActive} closePopup={closeFilmPopup} details={filmDetails}/>
        </div>

    );
};

export default TopFiveFilmsSection;