import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <nav className="bg-[#ffffff] fixed py-4 w-full z-20 top-0 left-0 shadow-md px-2 md:px-4  body-font font-poppins ">
      <div className="flex justify-between md:justify-between items-center  px-4 mx-auto lg:px-5">
        {/* <div className="flex justify-between"> */}
        <NavLink to="/" className="">
          <img src="/images/logo2.svg" alt="location" className="" />
        </NavLink>
        <div className=" md:order-2 pl-44 md:pl-1  ">
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
          <div className="flex flex-col mt-5 font-medium md:flex-row lg:space-x-3 lg:mt-3 ml-[80px]">
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
              className=" flex space-x-2 py-2 pr-4  text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3f71a8] lg:pb-5 "
              style={({ isActive }) =>
                isActive
                  ? { color: "#777777", fontWeight: "600" }
                  : { color: "#777777" }
              }
            >
              Amenities
            </NavLink>
            <NavLink
              to="/contact"
              className=" flex space-x-2 py-2 pr-4 text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3f71a8] lg:pb-5 "
              style={({ isActive }) =>
                isActive
                  ? { color: "#777777", fontWeight: "600" }
                  : { color: "#777777" }
              }
            >
              Contact&nbsp;Us
            </NavLink>
            <NavLink
              to="/book-now"
              className=" flex space-x-2 py-2 pr-4 text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:pb-5 "
              style={({ isActive }) =>
                isActive
                  ? { color: "#777777", fontWeight: "600" }
                  : { color: "#777777" }
              }
            >
              Book&nbsp;Now
            </NavLink>
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
          <div className="lg:hidden    bg-amber-400   mt-3" id="mobile-menu">
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
                to="/amenities"
                onClick={() => setIsOpen(!isOpen)}
                className="block text-[#616161] pl-3 font-medium hover:bg-gray-100"
              >
                Amenities
              </NavLink>

              <hr className="pb-3" />

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(!isOpen)}
                className="block text-[#616161] pl-3  font-medium hover:bg-gray-100"
              >
                Contact Us
              </NavLink>
              <hr className="pb-3" />

              <NavLink
                to="/book-now"
                onClick={() => setIsOpen(!isOpen)}
                className="block text-[#616161]  pl-3  font-medium hover:bg-gray-100"
              >
                Book Now
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  </div>
  )
}

export default Navbar