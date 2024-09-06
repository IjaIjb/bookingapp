import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import EditModal from "./EditModal";
import EditAddress from "./EditAddress";

const PersonalInfo = () => {
  const [display, setDisplay] = useState(false);

  const [values, setValues] = useState({
    edit: false,
    address: false,
  });

  const handleCancel = (e: any) => {
    e.preventDefault();
    setDisplay(false);
    setValues({
    address: false,
    edit: false,
    });
  };

  const handleModal = () => {
    // e.preventDefault();
    // setItemData(itemData);
    setDisplay(true);
    setValues({
      ...values,
      edit: true,
    address: false,
    });
  };

  const handleAddressModal = () => {
    // e.preventDefault();
    // setItemData(itemData);
    setDisplay(true);
    setValues({
      ...values,
      edit: false,
    address: true,
    });
  };

  const showDefaultConnectors = () => {
    return (
      <>
      {values.edit && <EditModal handleCancel={handleCancel} />}
      {values.address && <EditAddress handleCancel={handleCancel} />}
      
      </>
    );
  };

  return (
    <div>
      <div className="max-w-screen-xl px-3 lg:px-10  mx-auto lg:gap-8 xl:gap-12 ">
        <div className=" pt-[40px]">
          <div className="flex  gap-4 items-center">
            <Link
              to="/profile"
              // className="text-primary text-lg  font-bold  hover:underline"
            >
              <img
                src="/images/Frame 67.svg"
                alt=""
                className="w-[35px] h-[35px] "
              />
            </Link>

            <h4 className="text-[#002221] text-[20px]">Personal Info</h4>
          </div>
          <div className="pt-10 pb-16">
            <div className="flex items-center md:pl-5 md:pr-8 px-3 justify-between border-b-[3px] pb-2">
              <div className="flex flex-col ">
                <h4 className="text-[#000000] md:text-[24px] text-[18px] font-[500]">
                  Legal name
                </h4>
                <h4 className="text-[#000000] md:text-[20px] text-[16px] ">
                  Ali Ademola
                </h4>
              </div>
              <div
                className="text-[#000000] text-[18px] font-[500] cursor-pointer underline"
                onClick={handleModal}
              >
                Edit
              </div>
            </div>

            <div className="flex items-center pt-2 md:pt-4 md:pl-5 md:pr-8 px-3 justify-between border-b-[3px] pb-2">
              <div className="flex flex-col ">
                <h4 className="text-[#000000] md:text-[24px] text-[18px] font-[500]">
                 Preferred name
                </h4>
                <h4 className="text-[#000000] md:text-[20px] text-[16px] ">
                 KingDemo
                </h4>
              </div>
             <div
                className="text-[#000000] text-[18px] font-[500] cursor-pointer underline"
                // onClick={handleModal}
              >
                Edit
              </div>
            </div>

            <div className="flex items-center pt-2 md:pt-4 md:pl-5 md:pr-8 px-3 justify-between border-b-[3px] pb-2">
              <div className="flex flex-col ">
                <h4 className="text-[#000000] md:text-[24px] text-[18px] font-[500]">
                 Email address
                </h4>
                <h4 className="text-[#000000] md:text-[20px] text-[16px] ">
                 aliademola@gmail.com
                </h4>
              </div>
             <div
                className="text-[#000000] text-[18px] font-[500] cursor-pointer underline"
                // onClick={handleModal}
              >
                Edit
              </div>
            </div>

            <div className="flex items-center pt-2 md:pt-4 md:pl-5 md:pr-8 px-3 justify-between border-b-[3px] pb-2">
              <div className="flex flex-col ">
                <h4 className="text-[#000000] md:text-[24px] text-[18px] font-[500]">
                 Phone Number
                </h4>
                <h4 className="text-[#000000] md:text-[20px] text-[16px] ">
                 0900373849930
                </h4>
              </div>
             <div
                className="text-[#000000] text-[18px] font-[500] cursor-pointer underline"
                // onClick={handleModal}
              >
                Edit
              </div>
            </div>

            <div className="flex items-center pt-2 md:pt-4 md:pl-5 md:pr-8 px-3 justify-between border-b-[3px] pb-2">
              <div className="flex flex-col ">
                <h4 className="text-[#000000] md:text-[24px] text-[18px] font-[500]">
                Address
                </h4>
                <h4 className="text-[#000000] md:text-[20px] text-[16px] ">
                12 Olu street, Sangoitedo, Lagos 
                </h4>
              </div>
             <div
                className="text-[#000000] text-[18px] font-[500] cursor-pointer underline"
                onClick={handleAddressModal}
              >
                Edit
              </div>
            </div>

          
          </div>
        </div>
        <div
        className={`${
          display && "w-full h-full bg-[#747380D1] opacity-[82%] z-[150]"
        } fixed top-0 left-0`}
        onClick={(e) => handleCancel(e)}
      ></div>

      {display && (
        <div className="w-full md:w-[600px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white  z-[200] rounded-[10px] overflow-hidden h-fit ">
          {showDefaultConnectors()}
        </div>
      )}
      </div>
    </div>
  );
};

export default PersonalInfo;
