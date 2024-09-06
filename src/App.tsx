import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ViewProperties from './components/pages/viewProperties/ViewProperties';
import BookNow from './components/pages/bookNow/BookNow';
import ManageBooking from './components/pages/manageBooking/ManageBooking';
import ViewBooking from './components/pages/viewBooking.tsx/ViewBooking';
import DownloadReceipt from './components/pages/viewBooking.tsx/DownloadReceipt';
import LoginAgent from './components/pages/agent/LoginAgent';
import AddProperty from './components/pages/agent/AddProperty';
import AllProperty from './components/pages/agent/AllProperty';
import ViewAgentProperty from './components/pages/agent/ViewAgentProperty';
import BecomeAgent from './components/pages/agent/BecomeAgent';
import Profile from './components/pages/profile/Profile';
import PersonalInfo from './components/pages/profile/PersonalInfo';
import Security from './components/pages/profile/security/Security';
import Earnings from './components/pages/profile/earnings/Earnings';
import EarningsReport from './components/pages/profile/earnings/EarningsReport';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/view-properties" element={<ViewProperties/>}/>
    <Route  path="/book-apartment" element={<BookNow/>}/>
    <Route  path="/manage-booking" element={<ManageBooking/>}/>
    <Route  path="/view-booking" element={<ViewBooking/>}/>
    <Route  path="/download-receipt" element={<DownloadReceipt/>}/>
    <Route  path="/agent-login" element={<LoginAgent/>}/>
    <Route  path="/add-property" element={<AddProperty/>}/>
    <Route  path="/agent-all-property" element={<AllProperty/>}/>
    <Route  path="/agent-view-property" element={<ViewAgentProperty/>}/>
    <Route  path="/become-agent" element={<BecomeAgent/>}/>
    <Route  path="/profile" element={<Profile/>}/>
    <Route  path="/personal-info" element={<PersonalInfo/>}/>
    <Route  path="/security" element={<Security/>}/>
    <Route  path="/earnings" element={<Earnings/>}/>
    <Route  path="/earnings-report" element={<EarningsReport/>}/>
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
