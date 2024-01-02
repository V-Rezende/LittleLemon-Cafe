
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Reservation from './Components/Reservation';
import Order from './Components/Order';
import Login from './Components/Login';
import { useReducer } from 'react';
//import { fetchAPI, submitAPI } from './Components/apiUtils'; // Correct the path as needed

//Reducer function to update availableTimes based on the selected date
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      //for now, return the same available times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
}

//Function to update availableTimes based on the selected date
const updateTimes = (dispatch, selectedDate) => {
  dispatch({type: "UPDATE_TIMES", payload: {selectedDate}});
}

//Function to create the initial state for availableTimes
const initializeTimes = () => [
  "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00"
];

function App() {

  //Move availableTimes state to App component
    // const [availableTimes, setAvailableTimes] = useState([
    // "6:00",
    // "7:00",
    // "8:00",
    // "9:00",
    // "10:00",
    // "11:00",
    // "12:00"
//]);

  //Changing availableTimes to a reducer using useReducer function and provide the two previous functions as parameters.
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);


  //Function to handle form submission logic in App component
  const handleFormSubmit = () => {
    //Handle for submission logic here...
    console.log("Form Submitted!");
  }

  return (
    <div className="App">
          <Nav/>
          <Header/>
            <div>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                  path="/reservation"
                  element={
                  <Reservation
                    availableTimes={availableTimes}
                    updateTimes={(selectedDate) => updateTimes(dispatch, selectedDate)}
                    dispatch={dispatch} //Passing dispatch function as a prop
                    onFormSubmit={handleFormSubmit} //Pass the callback function as a prop
                    /> }
                  />
                <Route path="/order-online" element={<Order />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          <Footer/>
    </div>
  )
}

export default App;
