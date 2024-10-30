import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaQuestionCircle } from "react-icons/fa";
import { RiHome6Line } from "react-icons/ri";
import { MdFormatListBulleted, MdOutlinePayments } from 'react-icons/md';
import { BsPersonFillCheck } from 'react-icons/bs';
import { PiBuildingApartmentThin } from "react-icons/pi";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import dashboard from "../../assets/dashboard/homeIcon.svg";
import booking from "../../assets/dashboard/bookingIcon.svg";
import agent from "../../assets/dashboard/agentIcon.svg";
import payout from "../../assets/dashboard/payoutIcon.svg";
import list from "../../assets/dashboard/listIcon.svg";

type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

const AdminSidebar = (props: Props) => {
  const url = useLocation();
  const { pathname } = url;
  const pathnames = pathname.split("/").filter((x) => x);
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
       <aside
      className={`${
        props.DrawerOpen ? "" : "rounded-[20px]"
      } relative  w-[300px] z-[100]  bg-white border-r border-[#ECEDEF] h-full`}
    >
      <div className="flex border-b items-center justify-between px-2 md:px-4">
        
        <div></div>
        <div className="flex justify-center  mx-[14.5px] py-4">
        <NavLink to="/" className="">
          <img src="/images/logo2.svg" alt="location" className="md:w-[60%] w-[40%]" />
        </NavLink>
        </div>

        <button
          onClick={() => {
            // setShowInfoTag(false)
            props.toggle();
          }}
          className=""
        >
          {props.DrawerOpen ? (
            <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold " />
          ) : (
            <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6  font-bold hidden " />
          )}
        </button>
      </div>

      <h1 className=" text-md pt-12 pl-12 text-[#B0B0B0] font-semibold">MAIN MENU</h1>
 
      <div className="mt-7">
        <div className="">
          <div>
            <Link to="/dashboard/home" className="relative gap-1  ">
              {/* {['dashboard', 'home'].every(ai => pathnames.includes(ai)) && <div className="absolute top-0 left-0 h-full rounded-r-[10px] border-[3px] border-primary"></div>} */}
              <div
                className={`${
                  ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                    ? "bg-[#EBF2FF] text-[#000000]"
                    : "bg-white text-[#958F8F]"
                } gap-x-1 pl-12  flex  items-center  rounded-[15px] py-[10px] `}
              >
                <img
                  src={
                    ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                      ? dashboard
                      : dashboard
                  }
                  alt="Logo"
                  className=""
                />

                <h5 className="text-[20px] font-[500]   ">Dashboard</h5>
              </div>
            </Link>
          </div>
        </div>

    
        <div className="mt-3">
          <div>
            <Link to="/dashboard/booking" className="relative gap-1 ">
              {/* {['dashboard', 'home'].every(ai => pathnames.includes(ai)) && <div className="absolute top-0 left-0 h-full rounded-r-[10px] border-[3px] border-primary"></div>} */}
              <div
                className={`${
                  ["dashboard", "booking"].every((ai) =>
                    pathnames.includes(ai)
                  )
                  ? "bg-[#EBF2FF] text-[#000000]"
                  : "bg-white text-[#958F8F]"
              } gap-x-1 pl-12  flex  items-center  rounded-[15px] py-[10px] `}
              >
                <img
                  src={
                    ["dashboard", "booking"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? booking
                      : booking
                  }
                  alt="Logo"
                  className=""
                />

                <h5 className="text-[20px] font-[500]   ">Booking</h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <Link to="/dashboard/agent" className="relative gap-1 ">
              {/* {['dashboard', 'home'].every(ai => pathnames.includes(ai)) && <div className="absolute top-0 left-0 h-full rounded-r-[10px] border-[3px] border-primary"></div>} */}
              <div
                className={`${
                  ["dashboard", "agent"].every((ai) =>
                    pathnames.includes(ai)
                  )
                  ? "bg-[#EBF2FF] text-[#000000]"
                  : "bg-white text-[#958F8F]"
              } gap-x-1 pl-12  flex  items-center  rounded-[15px] py-[10px] `}
              >
                <img
                  src={
                    ["dashboard", "agent"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? agent
                      : agent
                  }
                  alt="Logo"
                  className=""
                />

                <h5 className="text-[20px] font-[500]   ">
                  {" "}
                Agent
                </h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <Link to="/dashboard/payout" className="relative gap-1 ">
              {/* {['dashboard', 'home'].every(ai => pathnames.includes(ai)) && <div className="absolute top-0 left-0 h-full rounded-r-[10px] border-[3px] border-primary"></div>} */}
              <div
                className={`${
                  ["dashboard", "payout"].every((ai) =>
                    pathnames.includes(ai)
                  )
                  ? "bg-[#EBF2FF] text-[#000000]"
                  : "bg-white text-[#958F8F]"
              } gap-x-1 pl-12  flex  items-center  rounded-[15px] py-[10px] `}
              >
                <img
                  src={
                    ["dashboard", "payout"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? payout
                      : payout
                  }
                  alt="Logo"
                  className=""
                />

                <h5 className="text-[20px] font-[500]   ">
                  {" "}
           Payout
                </h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <Link to="/dashboard/list-of-apartment" className="relative gap-1 ">
              {/* {['dashboard', 'home'].every(ai => pathnames.includes(ai)) && <div className="absolute top-0 left-0 h-full rounded-r-[10px] border-[3px] border-primary"></div>} */}
              <div
                className={`${
                  ["dashboard", "list-of-apartment"].every((ai) =>
                    pathnames.includes(ai)
                  )
                  ? "bg-[#EBF2FF] text-[#000000]"
                  : "bg-white text-[#958F8F]"
              } gap-x-1 pl-12  flex  items-center  rounded-[15px] py-[10px] `}
              >
                <img
                  src={
                    ["dashboard", "list-of-apartment"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? list
                      : list
                  }
                  alt="Logo"
                  className=""
                />

                <h5 className="text-[20px] font-[500]   ">
                  {" "}
                  List Of Apartment
                </h5>
              </div>
            </Link>
          </div>
        </div>

  
      </div>
    </aside>
 
    <div className='p-3'>
    <nav className="bg-white m-3 rounded-2xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl  flex flex-wrap items-center justify-between relative md:w-[300px] z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer  opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-[#000000] m-2 py-3 px-6")}
        >
          <b className="fas fa-bars"> ≡ </b>
        </button>
        {/* Brand */}
        {/* <Link
          className="md:mt-10 md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          to="/"
        >
          <img src="/images/Dashboard/logo.svg" alt="hero" />
        </Link> */}
        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            {/* <NotificationDropdown /> */}
          </li>
          <li className="inline-block relative">
            {/* <UserDropdown /> */}
          </li>
        </ul>
        {/* Collapse */}
        <div
          className={
            "bg-white md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className=" md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">

              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer  opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <b className="fas fa-times"> X </b>
                </button>
              </div>
            </div>
          </div>
          {/* Form */}



          <div className=" py-2">
            {/* <div>
              <img src="/images/Dashboard/Userpic1.svg" alt="hero" />
            </div> */}
            <div>
            <NavLink to="/" className="">
          <img src="/images/logo2.svg" alt="location" className="md:w-[60%] w-[40%]" />
        </NavLink>
              {/* <p className="text-white text-xs">ige@gmail.com</p> */}

            </div>
            <h1 className=" text-md pt-12 text-[#B0B0B0] font-semibold">MAIN MENU</h1>

            {/* <div>
              <h3 className="text-white text-sm">{userLoginData?.name}</h3>
              <p className="text-white text-xs">{userLoginData?.email}</p>
              
            </div> */}
          </div>


          {/* Heading */}

          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mt-6 mt-6">
          <li className="items-center">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#EBF2FF', paddingLeft: "12px", borderRadius: "12px", fontSize: "18px", fontWeight: '800' } : { color: '#000000', fontSize: "18px", fontWeight: '400' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex gap-2  items-center" +
                  (window.location.href.indexOf("/admin-dashboard") !== -1
                    ? "text-[#000000] hover:text-lightBlue-600"
                    : "text-[#000000] hover:text-blueGray-500")
                }
                to="/admin-dashboard"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="black" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg> */}
                <RiHome6Line />
                <p>Dashboard</p>
              </NavLink>
            </li> 

               <li className="items-center mt-3">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#EBF2FF', paddingLeft: "12px", borderRadius: "12px",fontSize: "18px", fontWeight: '800' } : { color: '#000000', fontSize: "18px", fontWeight: '400' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex gap-2 items-center" +
                  (window.location.href.indexOf("/admin/booking") !== -1
                    ? "text-[#000000] hover:text-lightBlue-600"
                    : "text-[#000000] hover:text-blueGray-500")
                }
                to="/admin/booking"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="black" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg> */}
                <MdFormatListBulleted />
                <p>Booking</p>
              </NavLink>
            </li> 

            <li className="items-center mt-3">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#EBF2FF', paddingLeft: "12px", borderRadius: "12px",fontSize: "18px", fontWeight: '800' } : { color: '#000000', fontSize: "18px", fontWeight: '400' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex gap-2 items-center" +
                  (window.location.href.indexOf("/admin/agent") !== -1
                    ? "text-[#000000] hover:text-lightBlue-600"
                    : "text-[#000000] hover:text-blueGray-500")
                }
                to="/admin/agent"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="black" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg> */}
                <BsPersonFillCheck />
                <p>Agent</p>
              </NavLink>
            </li> 

            <li className="items-center mt-3">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#EBF2FF', paddingLeft: "12px", borderRadius: "12px",fontSize: "18px", fontWeight: '800' } : { color: '#000000', fontSize: "18px", fontWeight: '400' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex gap-2 items-center" +
                  (window.location.href.indexOf("/admin/payout") !== -1
                    ? "text-[#000000] hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin/payout"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="black" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg> */}
                <MdOutlinePayments />
                <p>Payout</p>
              </NavLink>
            </li> 

            <li className="items-center mt-3">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#EBF2FF', paddingLeft: "12px", borderRadius: "12px",fontSize: "18px", fontWeight: '800' } : { color: '#000000', fontSize: "18px", fontWeight: '400' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex gap-2 items-center" +
                  (window.location.href.indexOf("/admin/list-of-apartment") !== -1
                    ? "text-[#000000] hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin/list-of-apartment"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="black" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg> */}
                <PiBuildingApartmentThin />
                <p>List of Apartment</p>
              </NavLink>
            </li> 
           
            {/* <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/users") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/users"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>

                Users
              </NavLink>
            </li> 

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/agents") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/agents"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>

                Agents
              </NavLink>
            </li> 


            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/masters-program-list") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/masters-program-list"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>

                Masters Reg.
              </NavLink>
            </li>


            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/winter-program") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/winter-program"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>

               Winter Students
              </NavLink>
            </li>
            

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/sub-admins") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/sub-admins"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path id="eosIconsAdmin0" fill="white" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3Zm0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08Z"/></svg>

                Sub Admins
              </NavLink>
            </li>
            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/cohorts") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/cohorts"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 256 256"><path fill="white" d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.73 7.73 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.27 67.27 0 0 0-21 14.31a67.27 67.27 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2ZM176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm123 157.51a40 40 0 1 0-53.94 0a67.27 67.27 0 0 0-21 14.31a67.27 67.27 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.73 7.73 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51ZM80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24Z"/></svg>
                
                {" "}
                Cohorts
              </NavLink>
            </li>

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/wallet") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/Payments"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" /></svg>{" "}
                Users Payment
              </NavLink>
            </li>

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/registered-users") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/registered-users"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>{" "}
                Registration
              </NavLink>
            </li>

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/cook-program") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/cook-program"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>{" "}
                Cook Program
              </NavLink>
            </li>
            
            

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/message") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 9h12v2H6m8 3H6v-2h8m4-4H6V6h12" /></svg>{" "}
                Message
              </NavLink>
            </li>

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/notification") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/notification"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                Notification
              </NavLink>
            </li>

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/blog-list") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/blog-list"
              >
                <svg width="24" height="24" className="mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 2.5C14.212 2.5 14.9318 3.1799 14.9954 4.04228L15 4.16667V8.33333H16.25C16.8997 8.33333 17.4337 8.82909 17.4943 9.46295L17.5 9.58333V15.8333C17.5 17.1648 16.4593 18.2531 15.1469 18.3291L15 18.3333H4.16667C3.28803 18.3333 2.5682 17.6535 2.50457 16.7911L2.5 16.6667V4.16667C2.5 3.28803 3.1799 2.5682 4.04228 2.50457L4.16667 2.5H13.3333ZM15.8333 10H15V16.6667C15.4602 16.6667 15.8333 16.2936 15.8333 15.8333V10ZM13.3333 4.16667H4.16667V16.6667H13.3333V4.16667ZM9.16667 10.8333C9.62692 10.8333 10 11.2064 10 11.6667C10 12.094 9.67831 12.4463 9.26385 12.4944L9.16667 12.5H6.66667C6.20643 12.5 5.83333 12.1269 5.83333 11.6667C5.83333 11.2393 6.15504 10.8871 6.56948 10.8389L6.66667 10.8333H9.16667ZM10.8333 6.66667C11.2936 6.66667 11.6667 7.03977 11.6667 7.5C11.6667 7.96023 11.2936 8.33333 10.8333 8.33333H6.66667C6.20643 8.33333 5.83333 7.96023 5.83333 7.5C5.83333 7.03977 6.20643 6.66667 6.66667 6.66667H10.8333Z" fill="white" />
                </svg>
                Blog
              </NavLink>
            </li>

            <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/partner-schools") !== -1
                    ? "text-white hover:text-[lightBlue-600]"
                    : "text-white hover:text-blueGray-500")
                }
                to="/partner-schools"
              >
                <svg width="24" height="24" className="mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 2.5C14.212 2.5 14.9318 3.1799 14.9954 4.04228L15 4.16667V8.33333H16.25C16.8997 8.33333 17.4337 8.82909 17.4943 9.46295L17.5 9.58333V15.8333C17.5 17.1648 16.4593 18.2531 15.1469 18.3291L15 18.3333H4.16667C3.28803 18.3333 2.5682 17.6535 2.50457 16.7911L2.5 16.6667V4.16667C2.5 3.28803 3.1799 2.5682 4.04228 2.50457L4.16667 2.5H13.3333ZM15.8333 10H15V16.6667C15.4602 16.6667 15.8333 16.2936 15.8333 15.8333V10ZM13.3333 4.16667H4.16667V16.6667H13.3333V4.16667ZM9.16667 10.8333C9.62692 10.8333 10 11.2064 10 11.6667C10 12.094 9.67831 12.4463 9.26385 12.4944L9.16667 12.5H6.66667C6.20643 12.5 5.83333 12.1269 5.83333 11.6667C5.83333 11.2393 6.15504 10.8871 6.56948 10.8389L6.66667 10.8333H9.16667ZM10.8333 6.66667C11.2936 6.66667 11.6667 7.03977 11.6667 7.5C11.6667 7.96023 11.2936 8.33333 10.8333 8.33333H6.66667C6.20643 8.33333 5.83333 7.96023 5.83333 7.5C5.83333 7.03977 6.20643 6.66667 6.66667 6.66667H10.8333Z" fill="white" />
                </svg>
                Partner School
              </NavLink>
            </li> */}


            {/* onClick={logOut} */}
            <li className="flex justify-start py-10" style={{ cursor: 'pointer' }} 
            // onClick={logOut}
            >

              <svg width="20" className="mr-2" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3337 11.3334V9.66675H5.83366V7.16675L1.66699 10.5001L5.83366 13.8334V11.3334H13.3337Z" fill="white" />
                <path d="M16.6667 3H9.16667C8.2475 3 7.5 3.7475 7.5 4.66667V8H9.16667V4.66667H16.6667V16.3333H9.16667V13H7.5V16.3333C7.5 17.2525 8.2475 18 9.16667 18H16.6667C17.5858 18 18.3333 17.2525 18.3333 16.3333V4.66667C18.3333 3.7475 17.5858 3 16.6667 3Z" fill="white" />
              </svg>

              <span className=" ">Logout</span>

            </li>
          </ul>











        </div>
      </div>
    </nav>
  </div>
  </>
  )
}

export default AdminSidebar