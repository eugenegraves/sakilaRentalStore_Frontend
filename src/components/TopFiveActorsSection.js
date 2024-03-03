import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActorPopup from './ActorPopup';

function Card({ id, title, rentals, openPopup}) {
    return (
        <div className='card' key={id}>
            <h2 className='card-title'>{title}</h2>
            <div className='pseudo-picture'>
                <button className='details-button' onClick={openPopup}>View Details</button>
            </div>
            <p className='card-rentals'>Rented {rentals} Times</p>
        </div>
    );
}

const TopFiveActorsSection = () => {
    const [data, setData] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [actorDetails, setActorDetails] = useState({});
    const baseURL = "http://127.0.0.1:5000";
    
    useEffect(() => {
        fetchTopFiveActors();
    }, []);

    const fetchTopFiveActors = async () => {
        try {
            const response = await axios.get(baseURL + '/top_five_actors');
            setData(response.data);
            //console.log(response.data);
            //console.log(response.data[1][1]);
        } catch (error) {
            //console.error('Error fetching data: ', error);
        }
    };

    const openPopup = async(actor) => {
        const baseURL = "http://127.0.0.1:5000";
        console.log(actor);
        //const encodedTitle = encodeURIComponent(title);
        const url = `${baseURL}/actor_details?f_name=${actor[0]}&l_name=${actor[1]}`;
        const response = await axios.get(url);
        console.log(response.data);
        setActorDetails(response.data);
        setPopupActive(true);
    }

    const closeActorPopup = () => {
        setPopupActive(false);
    };

    return (
        <div className='cardSection-container'>
            <h1 className='topFive-header'>Top 5 All-Time Rented Actors</h1>
            <div className='card-container'>
            {data.map((item, index) => (
                    <Card key={index} title={item[0] + " " + item[1]} rentals={item[2]} openPopup={() => openPopup(item)} />
                ))}
            </div>
            <ActorPopup isActive={popupActive} closePopup={closeActorPopup} details={actorDetails["0"]}/>
        </div>

    );
};

export default TopFiveActorsSection;