import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Transition } from "@headlessui/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
        
        <div className="relative h-screen ">
        <div className="  pb-20 object-cover h-full w-full ">
          <img
            src="/images/bg.svg"
            alt=""
            className="object-cover absolute w-full h-full"
          />
          <div className="max-w-screen-xl px-5 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
          <div className="flex justify-between md:justify-between items-center pt-10  px-4 mx-auto lg:px-5">
          {/* <div className="flex justify-between"> */}
          <NavLink to="/" className="z-10">
            <img src="/images/logo.svg" alt="location" className="" />
          </NavLink>
          <div className="  z-10 pl-44 md:pl-1  ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg md:hidden  hover:bg-gray-100"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              {!isOpen ? (
                <MdMenu className="w-7 h-7 text-amber-400 " />
              ) : (
                // <svg
                //   className="text-amber-400 "
                //   xmlns="http://www.w3.org/2000/svg"
                //   width="24"
                //   height="24"
                //   viewBox="0 0 24 24"
                // >
                //   <path
                //     fill="#1db459"
                //     d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
                //   />
                // </svg>
                <IoMdClose className="w-7 h-7 text-amber-400 " />
              )}
            </button>
          </div>

          <div
            className="items-center justify-between gap-10 hidden w-full md:flex md:w-auto "
            id="navbar-sticky"
          >
            <div className="flex flex-col mt-5 font-medium md:flex-row lg:space-x-3 items-center  ml-[80px]">
              {/* <NavLink
                to="/"
                className="block py-2 pl-4 pr-4  text-sm tracking-wider font-normal hover:font-semibold leading-5  lg:pb-5 "
                style={({ isActive }) =>
                  isActive
                    ? { color: "#777777", fontWeight: "600" }
                    : { color: "#777777" }
                }
              >
                The Spaces
              </NavLink> */}

              <NavLink
                to="/amenities"
                className=" flex space-x-2 z-10 py-2 pr-4  text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3f71a8] lg:pb-5 "
                style={({ isActive }) =>
                  isActive
                    ? { color: "#FFFFFF", fontWeight: "600" }
                    : { color: "#FFFFFF" }
                }
              >
                About
              </NavLink>
              <NavLink
                to="/dashboard/home"
                className=" flex space-x-2 z-10 py-2 pr-4 text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3f71a8] lg:pb-5 "
                style={({ isActive }) =>
                  isActive
                    ? { color: "#777777", fontWeight: "600" }
                    : { color: "#FFFFFF" }
                }
              >
                Contact&nbsp;Us
              </NavLink>
              <NavLink
                to="/manage-booking"
                className=" flex space-x-2 z-10 py-2 pr-4 text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:pb-5 "
                style={({ isActive }) =>
                  isActive
                    ? { color: "#777777", fontWeight: "600" }
                    : { color: "#FFFFFF" }
                }
              >
                Manage&nbsp;Booking
              </NavLink>
            
              <div className="z-10 relative text-white rounded-[10px] bg-white h-[30px] w-[150px] flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              // className="flex items-center border p-2 rounded-md"
            >
            
                <h5 className="text-black z-10 text-[20px] font-[600]">
              Login
                </h5>
            <div
  className={`${
    open
      ? " max-h-fit py-2.5 z-10 px-2.5 top-[45px]"
      : " max-h-0 z-10 overflow-hidden top-0 "
  } transition-[top] cursor-pointer duration-200 absolute ease-in-out  w-[200px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col gap-4 bg-white  z-20`}
>
  {/* <div> */}
  <NavLink className=' text-black text-[16px] w-full z-30' to="/become-agent"><h5 className='w-full'>Become an Agent</h5></ NavLink>
  <NavLink className=' text-black text-[16px] z-30' to="/agent-login">Login as an Agent</NavLink>
  {/* </div> */}
</div>

            </button>
          </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute top-20 right-0 mt-20 mr-4 w-[200px]"
        >
          {(ref) => (
            <div className="lg:hidden z-20   bg-amber-400   mt-3" id="mobile-menu">
              <div ref={ref} className=" pt-6 pb-3 space-y-1">
                {/* <NavLink
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161]spl-3 font-bold hover:bg-gray-100"
                >
                  The Spaces
                </NavLink>
                <hr className="pb-3" /> */}

                <NavLink
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] pl-3 font-medium hover:bg-gray-100"
                >
                  About
                </NavLink>

                <hr className="pb-3" />

                <NavLink
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] pl-3  font-medium hover:bg-gray-100"
                >
                  Contact Us
                </NavLink>
                <hr className="pb-3" />

                <NavLink
                  to="/manage-booking"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161]  pl-3  font-medium hover:bg-gray-100"
                >
                 Manage Booking
                </NavLink>

                <hr className="pb-3" />


                <NavLink
                  onClick={() => setToggle((prev) => !prev)}
                  className="lg:pb-5 p-3 text-[#616161] py-3 font-medium  "
                  // onMouseOut={() => setToggle((prev) => (!prev))}
                >
                  <div className="flex pl-3 justify-between pb-3 pt-2">
                    <span> Login</span>
                    <span className="pr-10">
                      {toggle ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </NavLink>

                <div className={`${toggle ? "flex " : "hidden"} pl-6`}>
                  <div className=" font-poppins flex flex-col justify-center flex-1">
                    <NavLink
                      to={"/become-agent"}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setToggle(false);
                      }}
                      className="block font-normal text-[12px] cursor-pointer text-black hover:text-gray-900 hover:font-semibold mb-4"
                    >
                     Become an Agent
                    </NavLink>
                    <NavLink
                      to={"/agent-login"}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setToggle(false);
                      }}
                      className=" block text-[12px] font-normal cursor-pointer text-black hover:text-gray-900 hover:font-semibold mb-3"
                    >
                     Agent Login
                    </NavLink>
                  </div>
                </div>
                <hr className="pb-2" />
              </div>
            </div>
          )}
        </Transition>
            <div className="flex flex-col gap-2  h-full text-white">
              <h4 className="text-white pt-[150px] leading-[50px] md:leading-[90px] z-10 text-[60px] md:text-[110px] font-[600] md:font-[700]">
                Explore <br />
                your space
              </h4>
              {/* <div className="bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]"></div> */}
            {/* <div className="z-10">
                
                </div> */}
                <div className="pt-20 z-10">
                <Link
                  to="/view-properties"
                  className="bg-[#D0AB41] rounded-[5px] md:rounded-[10px] md:px-8 px-5 md:py-3 py-2"
                >
                 View properties
                </Link>
              </div>
            </div>
           

            {/* {activeText === "welcome" ? (
              <div className="flex gap-3  pt-8">
                <div
                  onClick={() => setActiveText("welcome")}
                  className="bg-amber-400 rounded-full  z-10 h-[4px] cursor-pointer w-[100px] md:w-[150px]"
                ></div>
                <div
                  onClick={() => setActiveText("another")}
                  className="border border-amber-400 rounded-full cursor-pointer z-10 h-[4px] w-[100px] md:w-[150px]"
                ></div>
              </div>
            ) : (
              <div className="flex gap-3 pt-8">
                <div
                  onClick={() => setActiveText("welcome")}
                  className="border border-amber-400 rounded-full cursor-pointer z-10 h-[4px] w-[100px] md:w-[150px]"
                ></div>
                <div
                  onClick={() => setActiveText("another")}
                  className="bg-amber-400 rounded-full  z-10 h-[4px] cursor-pointer w-[100px] md:w-[150px]"
                ></div>
              </div>
            )} */}

            
          </div>
          <div className="overlay  absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>
    </div>
  )
}

export default Home