import React from "react";

const RentButton = ({ isAvailable }) => {
    return (
        isAvailable && (
            <div>
                <button className="rentButton" type="submit">Rent</button>
            </div>
        )
    );
}

export default RentButton;