import React from 'react'
import { Route, Switch } from "react-router-dom"
import Homepage from './Homepage.js'
import UserPage from './UserPage.js'
import { useState } from 'react'
import './App.css'

function App() {
  console.log("App component rendered");
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/user/:id" component={UserPage} />
    </Switch>
  );
}

export default App
