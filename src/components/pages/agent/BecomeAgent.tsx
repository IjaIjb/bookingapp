import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../UI/Button";
import BecomeAgentModal from "./BecomeAgentModal";

const BecomeAgent = () => {
  const navigate = useNavigate();

  const [display, setDisplay] = useState(false);
  const [itemData, setItemData] = useState<any>([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e:any) => {
    setSelectedOption(e.target.value);
  };
  const [values, setValues] = useState({
    agent: false,
  });

  const handleCancel = (e: any) => {
    e.preventDefault();
    setDisplay(false);
    setValues({
      agent: false,
    });
  };

  const handleModal = () => {
    // e.preventDefault();
    // setItemData(itemData);
    setDisplay(true);
    setValues({
      ...values,
      agent: true,
    });
  };

  const showDefaultConnectors = () => {
    return (
      <>{values.agent && <BecomeAgentModal handleCancel={handleCancel} />}</>
    );
  };
  // Initial form data
  const initialData = {
    email:
      localStorage.getItem("remember") === "true"
        ? localStorage.getItem("username")
        : "",

    password: "",
    remember: localStorage.getItem("remember") === "true" ? true : false,
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be minimum of 6 characters")
      .required("Required"),
  });

  const onSubmit = () => {
    navigate("/add-property");
  };
  return (
    <>
      <>
        <div className="grid md:grid-cols-12">
          <div className="col-span-5">
            <div className="md:pl-[50px] pl-[20px] pt-[40px] pr-[20px] flex flex-col">
              <div className="flex gap-4">
                <Link
                  to="/agent-all-property"
                  // className="text-primary text-lg  font-bold  hover:underline"
                >
                  <img
                    src="/images/Frame 67.svg"
                    alt=""
                    className="w-[35px] h-[35px] "
                  />
                </Link>
                <h4 className="text-[#002221] text-[20px]">Become Agent</h4>
              </div>

              <Formik
                initialValues={initialData}
                validationSchema={validation}
                onSubmit={onSubmit}
              >
                {({ errors, values, setFieldValue }) => (
                  <Form className="w-full  mt-10 lg:mt-5 mb-6 flex flex-col justify-between">
                    <div className="mb-5">
                      <div className="mb-3">
                        <Field
                          className=" block w-full h-[45px]  border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Name"
                        />
                        <p className="text-red-700 text-xs mt-1 ">
                          <ErrorMessage name="name" />
                        </p>
                      </div>

                      <div className="flex gap-4 w-full relative mb-3">
                        <div className="w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="phone"
                            type="number"
                            id="phone"
                            placeholder="Phone Number"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="phone" />
                          </p>
                        </div>
                        <div className="w-full relative ">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Email"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="email" />
                          </p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Field
                          className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                          name="address"
                          type="text"
                          id="address"
                          placeholder="Address"
                        />
                        <p className="text-red-700 text-xs mt-1 ">
                          <ErrorMessage name="address" />
                        </p>
                      </div>

                      <div className="flex gap-4 relative mb-3">
                        <div className="w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="gender"
                            type="text"
                            id="gender"
                            placeholder="Gender"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="gender" />
                          </p>
                        </div>
                        <div className=" relative w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="status"
                            type="text"
                            id="status"
                            placeholder="Status"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="status" />
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 relative mb-3">
                        <div className="w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="bank_name"
                            type="text"
                            id="bank_name"
                            placeholder="Bank Name"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="bank_name" />
                          </p>
                        </div>
                        <div className=" relative w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="account_name"
                            type="text"
                            id="account_name"
                            placeholder="Account Name"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="account_name" />
                          </p>
                        </div>
                      </div>
                      <div className=" relative mb-3">
                        <Field
                          className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                          name="account_number"
                          type="text"
                          id="account_number"
                          placeholder="Account Number"
                        />
                        <p className="text-red-700 text-xs mt-1 ">
                          <ErrorMessage name="account_number" />
                        </p>
                      </div>

                      <div className="flex gap-2 w-full items-center relative mb-3">
                        <h6 className="text-[#8A8787] text-[14px]">
                          https://homeyhost.ng/
                        </h6>
                        <div className=" relative">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="personal_url"
                            type="text"
                            id="personal_url"
                            placeholder="Personal URL"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="personal_url" />
                          </p>
                        </div>
                      </div>

                      <div className="h-[3px] mb-3 w-full bg-black"></div>

                      <div className=" relative mb-3">
                        <Field
                          className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                          name="next_of_kin"
                          type="text"
                          id="next_of_kin"
                          placeholder="Next of Kin"
                        />
                        <p className="text-red-700 text-xs mt-1 ">
                          <ErrorMessage name="next_of_kin" />
                        </p>
                      </div>

                      <div className="flex gap-4 w-full relative mb-3">
                        <div className="w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="kin_phone"
                            type="number"
                            id="kin_phone"
                            placeholder="Kin Phone Number"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="kin_phone" />
                          </p>
                        </div>
                        <div className="w-full relative ">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="kin_email"
                            type="email"
                            id="kin_email"
                            placeholder="Email"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="kin_email" />
                          </p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Field
                          className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                          name="kin_address"
                          type="text"
                          id="kin_address"
                          placeholder="Address"
                        />
                        <p className="text-red-700 text-xs mt-1 ">
                          <ErrorMessage name="kin_address" />
                        </p>
                      </div>

                      <div className="flex gap-4 w-full relative mb-3">
                        <div className="w-full">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="kin_occupation"
                            type="text"
                            id="kin_occupation"
                            placeholder="Occupation"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="kin_occupation" />
                          </p>
                        </div>
                        <div className="w-full relative ">
                          <Field
                            className=" block w-full h-[45px] border  pl-3 rounded-[15px] focus:outline-none border-[#8A8787] "
                            name="kin_status"
                            type="text"
                            id="kin_status"
                            placeholder="Status"
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="kin_status" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      text={"Submit"}
                      // disabled={loading}
                      action={handleModal}
                      type="submit"
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className=" hidden md:block col-span-7">
            <img src="/images/Frame 38.svg" alt="" className=" w-full h-full" />
          </div>
        </div>

        <div
        className={`${
          display && "w-full h-full bg-[#747380D1] opacity-[82%] z-[150]"
        } fixed top-0 left-0`}
        onClick={(e) => handleCancel(e)}
      ></div>

      {display && (
        <div className="w-full md:w-[500px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white  z-[200] rounded-[10px] overflow-hidden h-fit ">
          {showDefaultConnectors()}
        </div>
      )}
      </>
    </>
  );
};

export default BecomeAgent;
