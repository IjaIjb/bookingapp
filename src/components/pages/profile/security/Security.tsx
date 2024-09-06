import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../..//../UI/Button";

const Security = () => {
    const navigate = useNavigate();

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
    <div className='max-w-screen-xl px-3 lg:px-10  mx-auto lg:gap-8 xl:gap-12'>
         <div className="md:px-[50px]  pt-[40px]">
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

      <h4 className="text-[#002221] text-[20px]">Login & Security</h4>
    </div>
    <div className="">
      <div className="">
        <div className="pt-[10px] flex flex-col">
          <h4 className="text-[#000000] pt-8 text-[30px]">
Change Password

          </h4>

          <Formik
            initialValues={initialData}
            validationSchema={validation}
            onSubmit={onSubmit}
          >
            {({ errors, values, setFieldValue }) => (
              <Form className="  mb-6 ">
               <div className="grid md:grid-cols-2 md:gap-14 w-full items-center">

            
                <div className="mb-5 w-full">
                 
                  <div className="w-full relative mb-6">
                    <Field
                      className=" block w-full h-14 text-center border  pl-3 rounded-[15px] focus:outline-none border-[#002221] "
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                    
                  <label htmlFor="password" className="text-[#3F3F3F] pt-2 text-sm">
Input New Password
                  </label>
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="password" />
                    </p>
                  </div>

                  <div className="w-full relative mb-3">
                    <Field
                      className=" block w-full h-14 text-center border  pl-3 rounded-[15px] focus:outline-none border-[#002221] "
                      name="confirm_password"
                      type="password"
                      id="confirm_password"
                      placeholder=""
                    />
                    
                  <label htmlFor="confirm_password" className="text-[#3F3F3F] pt-2 text-sm">
Confirm New Password
                  </label>
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="confirm_password" />
                    </p>
                  </div>
                </div>
              
                <div className=" hidden md:block ">
        <img src="/images/Group 1853.svg" alt="" className=" " />
      </div>
      </div>
      <div className="flex mt-10 justify-center">
      <Button
              text={"Update Password"}
            //   fitWidth
            width="w-[200px]"
              
              type="submit"
            />
      </div>
    
              </Form>
            )}
          </Formik>
        </div>
      </div>
     
    </div>
  </div>
    </div>
  )
}

export default Security