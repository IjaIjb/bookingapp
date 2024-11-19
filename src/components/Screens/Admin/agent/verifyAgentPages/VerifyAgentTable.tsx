import React from 'react'
import { Paper } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@mui/material";
import MaterialTable, { MTableToolbar } from "material-table";
import { Link, useLocation } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

const VerifyAgentTable = () => {
    const url = useLocation();
    const { pathname } = url;
    const pathnames = pathname.split("/").filter((x) => x);
    const data = [
        {
          personal_url: "http.//.homey host.ng/Janet.com",
          account: "Janet Olu",
          email: "janeu27@gmail.com",
          apartment_managed: "2"
        },
        {
            personal_url: "http.//.homey host.ng/Mary.com",
            account: "Mary",
          email: "Mary@gmail.com",
          apartment_managed: "2"
          }
      ];

    const COLUMNS = [
        {
            title: "Personal URL",
            field: "personal_url",
            cellStyle: { paddingLeft: "2%" },
            render: (rowData: any) => 
              // <Link
              //   to={`/dashboard/payment-billing/sub/${rowData.id}`}
              //   state={rowData}
              // >
              //   {rowData.id}
              // </Link>
             <div className='w-full whitespace-nowrap'>{rowData.personal_url}</div>,
            
          },
        {
          title: "Account",
          field: "account",
          cellStyle: { paddingLeft: "2%" },
          render: (rowData: any) => 
            // <Link
            //   to={`/dashboard/payment-billing/sub/${rowData.id}`}
            //   state={rowData}
            // >
            //   {rowData.id}
            // </Link>
           <div className=''>{rowData.account}</div>,
          
        },
        {
            title: "Email",
            field: "email",
            // cellStyle: { paddingLeft: "2%" },
            render: (rowData: any) => (
              <div className="flex">
                <div
                >
                  {rowData.email}
                </div>
             
              </div>
            ),
          },
     
          {
            title: "Apartment Managed",
            field: "apartment_managed",
            cellStyle: {},
            render: (rowData: any) => 
              <div className='w-full whitespace-nowrap'>{rowData.apartment_managed}</div>,
  
          },
         
          {
            title: "Deatctivate Agent",
            field: "deactivate_agent",
            cellStyle: { borderBottom: 0, paddingLeft: "2%" },
            render: (rowData: any) => (
              <div>
                {/* {rowData?.approved ? ( */}
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                      //   checked={true}
                      //   onChange={() =>
                      //     handleSwitchChange(
                      //       rowData.id,
                      //       rowData.userData?.notificationID,
                      //       false
                      //     )
                      //   }
                        className="hidden"
                      />
                      <div className="toggle__line w-12 h-6 bg-[#02B718] rounded-full shadow-inner"></div>
                      <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-6"></div>
                    </div>
                  </label>
                {/* ) : (
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={false}
                        onChange={() =>
                          handleSwitchChange(rowData.id, rowData.userData?.notificationID, true)
                        }
                        className="hidden"
                      />
                      <div className="toggle__line w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                      <div className="toggle__dot absolute w-6 h-6 bg-gray-100 rounded-full shadow inset-y-0 left-0"></div>
                    </div>
                  </label>
                )} */}
              </div>
            ),
          },
        // {
        //   title: "Description",
        //   field: "description",
        //   cellStyle: { paddingLeft: "2%" },
        //   render: (rowData: any) => (
        //     <Link
        //       to={`/dashboard/payment-billing/sub/${rowData.ref_no}`}
        //       state={rowData}
        //     >
        //       {rowData.description}
        //     </Link>
        //   ),
        // },
    

      ];
    
      const defaultMaterialTheme = createTheme({
        palette: {
          // mode: "light",
        },
      });
  return (
    <div>
    <div className=" py-[20px]">
      <h4 className="text-[20px] text-[#958F8F] ">Agent Request</h4>
    </div>

    <div>
      <div className="flex w-full items-center  justify-center ">
        <div className="w-full">
          {/* <div className="flex gap-4  pb-5 items-center">
  <Link
    to="/manage-booking"
    // className="text-primary text-lg  font-bold  hover:underline"
  >
    <img
      src="/images/Frame 67.svg"
      alt=""
      className="w-[35px] h-[35px] "
    />
  </Link>

  <h4 className="text-[#002221] text-[20px]">View Booking</h4>
</div> */}
          <ThemeProvider theme={defaultMaterialTheme}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

            <div className="w-full overflow-scroll ">
              <MaterialTable
                components={{
                  Container: (props) => <Paper {...props} elevation={0} />,
                }}
                columns={COLUMNS}
                data={data}
                // onRowClick={(e, rowData) => { navigate(`/dashboard/customers/${rowData?.id}`) }}
                title=""
                options={{
                  paging: !["dashboard", "home"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? true
                    : false,
                  // pageSizeOptions: [10, 20, 30],
                  search: true,
                  rowStyle: {
                    color: "#474E70",
                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontSize: "16px",
                    padding: "5px",
                  },
                  headerStyle: {
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "16px",
                    backgroundColor: "transparent",
                    // backgroundColor: theme === "dark" ? "#1E1E1E" : "white",
                    border: 0,
                    borderBottom: "1px solid #E8E9ED",
                    paddingLeft: "2%",
                  },
                  searchFieldStyle: {
                    border: "0px",
                    borderRadius: "0px",
                    borderBottom: "1px solid #E8E9ED",
                    width: "192px",
                    height: "36px",
                    backgroundColor: "transparent",
                  },
                  searchFieldVariant: "standard",
                  actionsColumnIndex: -1,
                  actionsCellStyle: {
                    border: "0",
                    paddingLeft: "2%",
                  },
                  exportButton: true,
                  // paging: false,
                  minBodyHeight: "400px",
                }}
              />

              {/* <div
  className={`${
    display && "w-full h-full bg-[#747380D1] opacity-[82%] z-[150]"
  } fixed top-0 left-0`}
  onClick={(e) => handleCancel(e)}
></div>

{display && (
  <div className="w-full md:w-[500px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white  z-[200] rounded-[10px] overflow-hidden h-fit ">
    {showDefaultConnectors()}
  </div>
)} */}
            </div>
          </ThemeProvider>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VerifyAgentTable