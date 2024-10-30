import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import person from "../../assets/Mask group.svg"


const Header = () => {

    const divRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const [values, setValues] = useState({
    showLogOut: false,
  });

  const handleCancel = (e: any) => {
    e.preventDefault();
    setDisplay(false);
    setValues({
      showLogOut: false,
    });
  };

  const handleLogoutModal = (e: any) => {
    e.preventDefault();
    // setItemData(itemData);
    setDisplay(true);
    setValues({
      ...values,
      showLogOut: true,
    });
  };

  const showDefaultConnectors = () => {
    // return <>{values.showLogOut && <LogOutModal />}</>;
  };
 

  return (
    <div className="bg-white rounded-[12px] w-full px-3">
    <div className="flex  justify-between items-center  gap-7">
      {/* <Search /> */}
      <div className="relative w-auto md:w-[200px] lg:w-[500px] w-9/12]">
                                    <input type="text" 
                                    // defaultValue={search}
                                    //  onChange={e => setSearch(e.target.value)} 
                                     id="search-dropdown"
                                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                                      placeholder="Type Keyword here..." 
                                      />
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg border border-blue-200" style={{ backgroundColor: '#2196F3' }}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
      {/* <button
      className="rounded-[15px]  px-4 h-[50px] py-[2px] bg-primary text-white text-sm  flex gap-2.5 items-center mr-2"
      type="button"
      ref={divRef}
      onClick={(e: any) => {
        e.preventDefault();
        setShowMoveMoney(!showMoveMoney);
      }}
    >
      <img src={header} alt="" className="w-[50px] h-[40px]" />
    </button> */}
      {/* <img src={bell} alt="" className="" /> */}

      {/* <div className="flex items-center gap-2">
        <div className=" relative rounded-full bg-primary h-[40px] w-[40px] flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            // className="flex items-center border p-2 rounded-md"
          >
            {namePart && (
              <h5 className="text-white text-[20px] font-[600]">
                {nameAdmin
                  ? nameAdmin[0].toUpperCase()
                  : namePart[0].toUpperCase()}
              </h5>
            )}
            <div
              className={`${
                open
                  ? " max-h-fit py-2.5 px-2.5 top-[45px]"
                  : " max-h-0 overflow-hidden top-0 "
              } transition-[top] duration-200 ease-in-out absolute  w-[136px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col gap-2.5 bg-white  z-10`}
              // onClick={handleLogout}
            >
              <Link to="/dashboard/profile">Profile</Link>
              <button onClick={handleLogout}>Log out</button>
            </div>
          </button>
        </div>
        <div className="rounded-full flex w-full gap-2 items-center">
        <h5 className="text-[#000] text-[20px] font-[600] ">
            {regionManager ? regionManager : namePart}
          </h5>
        </div>
      </div> */}
      <img src={person} alt="" className="" />
    </div>

    <div
      className={`${
        display && "w-full h-full bg-[#747380D1] opacity-[82%] z-[1000]"
      } fixed top-0 left-0`}
      onClick={(e) => handleCancel(e)}
    ></div>

    {display && (
      <div className="fixed top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white  z-[200] rounded-[10px] overflow-hidden h-fit">
        {/* {showDefaultConnectors()} */}
      </div>
    )}
  </div>
  )
}

export default Header