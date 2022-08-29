
import './App.css';

import Explore from './components/explore';
import AddHotels from './components/homepage';
import ResetPassword from './components/resetPassword';
import Services from './components/services';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Map from './components/map';
import Bookings from './components/bookings';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React,{useState, useEffect} from 'react';
import DisplayBookings from './components/displayBookings';
import DisplayHotels from './components/displayPreveiw';
import {collection, getDoc} from 'firebase/firestore';
import AllHotels from './components/displaySearch';




function App() {

  

  const [Preview, setPreview] = useState([]);
  useEffect(()=>{
    console.log(Preview);
  },[Preview])

  const addPreview = ((_hotels)=>{
    setPreview((hotels)=>[...hotels,
      _hotels
    ])
  })

  const hotelArray = [{
    //Cape Town
    HotelName:'Constantia',
    Place:'Cape Town',
    Rating:'5 star',
    Service:'Excellent',
    Price:'R1600',
    image:''
  },
{
  HotelName:'The Fountains Hotel',
    Place:'Cape Town',
    Rating:'5 star',
    Service:'Excellent',
    Price:'R1600'
},
{
  HotelName:'Table Bay Hotel',
    Place:'Cape Town',
    Rating:'5 star',
    Service:'Excellent',
    Price:'R1600'
}]
  

  const [Payment, setPayment] = useState([]);


  const addBookings = ((names, checkIn, checkOut, numberOfDays, roomNumber, rooms, roomPrice, totalAmount)=>{
    
    setPayment((bookings)=>[...bookings,{
      names: names,
      checkIn: checkIn,
      checkOut: checkOut,
      numberOfDays: numberOfDays,
      roomNumber: roomNumber,
      rooms: rooms,
      roomPrice: roomPrice,
      totalAmount:totalAmount
      

    }])
    console.log(Payment);

  })
  // const Search = ((LocationName, Rating, price, picture))=>{


  // }


  return (
    <Router basename='myHotelApp'>
      <Switch>
        
        <Route exact path="/" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/homepage" component={AddHotels}></Route>

        <Route path="/explore">
          <Explore DisplayPreview={addPreview} />
          <DisplayHotels list={Preview}/>
        </Route>

        <Route path="/services" component={Services}></Route>
        <Route path="/resetPassword" component={ResetPassword}></Route>

        <Route path="/bookings">
          <Bookings book={addBookings} />
          <DisplayBookings list={Payment} />
          <AllHotels />
        </Route>

      </Switch>
    </Router>
  
  );
}

export default App;
