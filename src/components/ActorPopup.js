import React from "react";

const FilmPopup = ({ isActive, closePopup, details }) => {
    console.log(details);
    console.log(details);
    return (
        isActive && (
            <div className="popup-overlay">
                <div className="popup" style={{ width: '400px', height: '550px' }}>
                    <div className="popup-content">
                        <span className="close-popup" onClick={closePopup}>&times;</span>
                        <h1>Actor Details</h1>
                        <br />
                        <h2>{details[0] + " " + details[1]}</h2>
                        <br />
                        <p>Average Movie Rating: {details[2]}</p>
                        <br />
                        <p>Appears In: {details[3]}</p>
                    </div>
                </div>
            </div>
        )
    );
};

export default FilmPopup;