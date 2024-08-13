import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ViewProperties from './components/pages/viewProperties/ViewProperties';
import BookNow from './components/pages/bookNow/BookNow';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/view-properties" element={<ViewProperties/>}/>
    <Route  path="/book-apartment" element={<BookNow/>}/>
    {/* <Route  path="/banking-page" element={<BankPage/>}/>
    <Route  path="/sign-in" element={<Login/>}/>
    <Route  path="/terms" element={<TermsAndCon/>}/>
    <Route  path="/sign-up" element={<Register/>}/>
    <Route  path="/forgot-password" element={<ForgotPword/>}/> 
    <Route  path="/email-verify" element={<EmailVerify/>}/> */}
    

</Routes>
</div>
  );
}

export default App;
