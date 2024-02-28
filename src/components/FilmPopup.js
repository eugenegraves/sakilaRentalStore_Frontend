import React from "react";

const FilmPopup = ({ isActive, closePopup, details }) => {
    console.log(details);
    return (
        isActive && (
            <div className="popup-overlay">
                <div className="popup" style={{ width: '400px', height: '550px' }}>
                    <div className="popup-content">
                        <span className="close-popup" onClick={closePopup}>&times;</span>
                        <h1>Film Details</h1>
                        <h2>{details[1]}</h2>
                        <p>Description: {details[2]}</p>
                        <p>Year Released: {details[3]}</p>
                        <p>Language ID: {details[4]}</p>
                        <p>Original Language ID: {details[5]}</p>
                        <p>Rental Duration: {details[6]}</p>
                        <p>Rental Rate: {details[7]}/day</p>
                        <p>Length: {details[8]} Minutes</p>
                        <p>Replacement Cost: ${details[9]}</p>
                        <p>Rating: {details[10]}</p>
                        <p>Special Features: {details[11]}</p>
                        <p>Last Update: {details[12]}</p>
                    </div>
                </div>
            </div>
        )
    );
};

export default FilmPopup;