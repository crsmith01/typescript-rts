import React from 'react';
import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch'
import EventComponent from './events/EventComponent';

function App() {
  return (

    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  ) 
}

export default App;
