import React from "react";
import Reservations from "./Reservation";

function Reserve (props) {
    return(
        <Reservations availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/> 
    )
}

export default Reserve;