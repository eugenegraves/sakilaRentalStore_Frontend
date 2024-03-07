import React, { useState } from "react";
import RentButton from "./RentButton";
import axios from 'axios';

const RentalForm = ({ isActive, closeForm, title }) => {
    const [isAvailable, setIsAvailable] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const baseURL = "http://127.0.0.1:5000";

    const handleFormSubmission = async (event) => {
        event.preventDefault();

        try {
            const url = `${baseURL}/check_availability?title=${title}`;
            axios.post(url)
                .then(response => {
                    const available = response.data.available;
                    const message = response.data.message;
                    console.log(response);
                    console.log(available);
                    console.log(message);

                    setIsAvailable(available >= 0);
                    setErrorMessage(message);

                if (available >= 0) {
                    console.log('Film is available, proceed with rental')
                } 
            })
            .catch(error => {
                console.error(error);
                setErrorMessage("An error occurred, please try again later");
            }); 
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred, please try again later");
        }
    };
    
    return(
        isActive && (
            <div className="formOverlay">
                <div className="form" style={{ width: '400px', height: '550px' }}>
                    <div className="formContent">
                    <span className="close-popup" onClick={closeForm}>&times;</span>
                        <form onSubmit={handleFormSubmission}>
                            <fieldset>
                                <label>Customer Name: <input></input></label><br />
                                <label>Customer Email: <input></input></label>
                            </fieldset>
                            <fieldset>
                                <label>Film Title: <input value={title} readOnly /></label>
                                {isAvailable !== null && (
                                    <p className={isAvailable ? "available" : "not-available"}>
                                        {isAvailable ? "Film is available" : "Film is not available"}
                                    </p>
                                )}
                            </fieldset>
                            <fieldset>
                                <label>Rental Date: <input></input></label><br />
                                <label>Return Date: <input></input></label>
                            </fieldset>
                            <button className="availability-check" type="submit">Check Availability</button>
                            <RentButton isAvailable={isAvailable} />
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default RentalForm;