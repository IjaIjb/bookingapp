import MaterialTable from "material-table";
import React, { useEffect, useRef, useState } from "react";
import { Paper } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@mui/material";

const AgentTable = () => {

    const [display, setDisplay] = useState(false);
    const [item, setItem] = useState<any>([]);
  
    const [values, setValues] = useState({
      idCardDetails: false,
      passport: false,
    });

    const handleCancel = (e: any) => {
        e.preventDefault();
        setDisplay(false);
        setValues({
          idCardDetails: false,
          passport: false,
        });
      };
    
      const handleIdCardModal = (e: any, itemData: any) => {
        e.preventDefault();
        setItem(itemData);
        setDisplay(true);
        setValues({
          ...values,
          idCardDetails: true,
          passport: false,
        });
      };
    
      const handlePassportModal = (e: any, itemData: any) => {
        e.preventDefault();
        setItem(itemData);
        setDisplay(true);
        setValues({
          ...values,
          idCardDetails: false,
          passport: true,
        });
      };

      const showDefaultConnectors = () => {
        return (
          <>
            {/* {values.idCardDetails && 
            <IdCardModal item={item} />}
    
            {values.passport && 
            <PassportModal item={item} />} */}
          </>
        );
      };
    const data = [
        {
          account: "John Doe",
          email: "johndoe@example.com",
          profit: "Profit",
          id_card: "See Upload",
          passport: "See Upload",
          address: "See Upload",
        },
        {
          account: "Jack Rose",
          email: "Joserose123@gamil.com",
          profit: "Profit",
          id_card: "See Upload",
          passport: "See Upload",
          address: "See Upload",
        },
        {
          account: "Evelyn Melody",
          email: "Evelynmelody@gmail.com",
          profit: "Profit",
          id_card: "See Upload",
          passport: "See Upload",
          address: "See Upload",
        },
        {
          account: "Ifeoma Nnadi",
          email: "ifynnadi@gmail.com",
          profit: "Profit",
          id_card: "See Upload",
          account_type: "See Upload",
          passport: "See Upload",
          address: "See Upload",
        },
      ];

    const COLUMNS = [
        {
          title: "Account",
          field: "account",
          cellStyle: { paddingLeft: "2%" },
          render: (rowData: any) => (
            <div
            >
              {rowData.account}
            </div>
          ),
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
              {/* {rowData.shopperData !== null ? (
                <input
                  type="checkbox"
                  checked={true} // You can use a dynamic variable or state here if needed
                  className={`focus:outline-none mr-2 ${
                    true ? "bg-primary text-white" : ""
                  }`}
                />
              ) : (
                <input
                  type="checkbox"
                  checked={false} // You can use a dynamic variable or state here if needed
                  className={`focus:outline-none mr-2 ${
                    true ? "bg-primary text-white" : ""
                  }`}
                />
              )} */}
            </div>
          ),
        },
        {
          title: "Id Card",
          field: "front_id",
          cellStyle: { minWidth: "140px" },
          render: (rowData: any) => (
            <div className="flex text-sm gap-2 items-center">
          
                <>
                  <div
                    onClick={(e) => handleIdCardModal(e, rowData)}
                    className=" cursor-pointer"
                  >
                    See Upload
                  </div>
                  {/* {rowData?.front_id_status ? ( */}
                    <input
                    //   checked={true}
                      type="checkbox"
                    //   onChange={() =>
                    //     handleApproveChange(
                    //       rowData.id,
                    //       rowData.notificationID,
                    //       "front_id_status",
                    //       "front_id",
                    //       false
                    //     )
                    //   }
                      value=""
                      className="w-4 h-4 text-white checked:bg-primary bg-gray-100 border-gray-300 rounded focus:ring-primary  "
                    />
                  {/* ) : (
                  <input
                      checked={false}
                      type="checkbox"
                      onChange={() =>
                        handleApproveChange(
                          rowData.id,
                          rowData.userData?.notificationID,
                          "front_id_status",
                          "front_id",
                          true
                        )
                      }
                      value=""
                      className="w-4 h-4 text-white bg-gray-100 checked:bg-primary border-gray-300 rounded focus:ring-primary focus:ring-2 "
                    />
                  )} */}
                </>
            </div>
          ),
        },
        {
          title: "Passport",
          field: "back_id",
          cellStyle: { minWidth: "140px" },
          render: (rowData: any) => (
            <div className="flex text-sm gap-2 items-center">
              {/* {rowData.uploadStatus}  */}
           
                <>
                  {/* {rowData?.back_id_status ? (
                    <div className="flex text-sm gap-2 items-center">
                      <div
                        onClick={(e) => handlePassportModal(e, rowData)}
                        className=" cursor-pointer"
                      >
                        See Upload
                      </div>
                      <input
                        checked={true}
                        type="checkbox"
                        onChange={() =>
                          handleApproveChange(
                            rowData.id,
                            rowData.userData?.notificationID,
                            "back_id_status",
                            "back_id",
                            false
                          )
                        }
                        value=""
                        className="w-4 h-4 text-white checked:bg-primary bg-gray-100 border-gray-300 rounded focus:ring-primary  "
                      />
                    </div>
                  ) : ( */}
                    <div className="flex text-sm gap-2 items-center">
                      <div
                        onClick={(e) => handlePassportModal(e, rowData)}
                        className=" cursor-pointer"
                      >
                        See Upload
                      </div>
                      <input
                        // checked={false}
                        type="checkbox"
                        // onChange={() =>
                        //   handleApproveChange(
                        //     rowData.id,
                        //     rowData.userData?.notificationID,
                        //     "back_id_status",
                        //     "back_id",
                        //     true
                        //   )
                        // }
                        value=""
                        className="w-4 h-4 text-white bg-gray-100 checked:bg-primary border-gray-300 rounded focus:ring-primary focus:ring-2 "
                      />
                    </div>
                  {/* )} */}
                </>
            </div>
          ),
        },
        {
            title: "Profit",
            field: "profit",
            cellStyle: { minWidth: "140px" },
            render: (rowData: any) => (
              <div className="flex text-sm gap-2 items-center">
                {/* {rowData.uploadStatus}  */}
             
                  <>
                    {/* {rowData?.back_id_status ? (
                      <div className="flex text-sm gap-2 items-center">
                        <div
                          onClick={(e) => handlePassportModal(e, rowData)}
                          className=" cursor-pointer"
                        >
                          See Upload
                        </div>
                        <input
                          checked={true}
                          type="checkbox"
                          onChange={() =>
                            handleApproveChange(
                              rowData.id,
                              rowData.userData?.notificationID,
                              "back_id_status",
                              "back_id",
                              false
                            )
                          }
                          value=""
                          className="w-4 h-4 text-white checked:bg-primary bg-gray-100 border-gray-300 rounded focus:ring-primary  "
                        />
                      </div>
                    ) : ( */}
                      <div className="flex text-sm gap-2 items-center">
                        <div
                        //   onClick={(e) => handlePassportModal(e, rowData)}
                        //   className=" cursor-pointer"
                        >
                        {rowData.profit}
                        </div>
                        <input
                        //   checked={false}
                          type="checkbox"
                          // onChange={() =>
                          //   handleApproveChange(
                          //     rowData.id,
                          //     rowData.userData?.notificationID,
                          //     "back_id_status",
                          //     "back_id",
                          //     true
                          //   )
                          // }
                          value=""
                          className="w-4 h-4 text-white bg-gray-100 checked:bg-primary border-gray-300 rounded focus:ring-primary focus:ring-2 "
                        />
                      </div>
                    {/* )} */}
                  </>
              </div>
            ),
          },
        // {
        //   title: "Profit",
        //   field: "percentageProfit",
        //   cellStyle: { minWidth: "110px" },
        //   render: (rowData: any) => {
        //     // Calculate the remaining percentage
        //     const remainingPercentage = 100 - (rowData.regionData.profit + rowData.percentageProfit);
          
        //     return (
        //       <div className="flex text-sm ">
        //         <input
        //           ref={inputRef}
        //           type="number"
        //           value={rowData?.percentageProfit}
        //           className="border-[1px] max-w-[50px] border-gray-400 pl-2 pr-1 py-[2px] rounded-md"
        //           onChange={(e: any) => {
        //             const inputPercentage = parseFloat(e.target.value);
        //             // Check if the input percentage + existing profit exceeds 100%
        //             if (inputPercentage + rowData.regionData.profit <= 100) {
        //               handleApproveChange(
        //                 rowData.id,
        //                 rowData.userData?.notificationID,
        //                 "percentageProfit",
        //                 "percentage Profit",
        //                 inputPercentage
        //               );
        //             } else {
        //               // If the input exceeds 100%, set it to the remaining percentage
        //               handleApproveChange(
        //                 rowData.id,
        //                 rowData.userData?.notificationID,
        //                 "percentageProfit",
        //                 "percentage Profit",
        //                 remainingPercentage
        //               );
        //             }
        //           }}
        //         />
        //         <span className="ml-2 text-gray-500">{`Remaining: ${remainingPercentage}%`}</span>
        //       </div>
        //     );
        //   }
          
        // },
    
        {
          title: "Verify",
          field: "verify",
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
      ];

      const defaultMaterialTheme = createTheme({
        palette: {
          mode: "light",
        },
      });
  return (
    <div className="overflow-hidden    ">
            <div className=" py-[10px]">
        <h4 className="text-[20px] text-[#958F8F] ">Agent Request</h4>
      </div>
    <ThemeProvider theme={defaultMaterialTheme}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="w-full border rounded-bl-none p-3 rounded-[15px]">
        <MaterialTable
          components={{
            Container: (props) => <Paper {...props} elevation={0} />,
          }}
          columns={COLUMNS}
          data={data}
          // onRowClick={(e, rowData) => { navigate(`/dashboard/customers/${rowData?.id}`) }}
          title="h"
          options={{
            // paging: !['dashboard', 'home'].every(ai => pathnames.includes(ai)) ? true : false,
            // pageSizeOptions: [10, 20, 30],
            search: false,
            showTitle: false,
            toolbar: false,
            //   paging:false,

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
              backgroundColor: "#F7F7F7",
              // backgroundColor: theme === "dark" ? "#1E1E1E" : "white",
              border: 0,

              // borderBottom: "1px solid #E8E9ED",
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
            // exportButton: true,
            paging: false,
            minBodyHeight: "400px",
          }}
        />
      </div>
    </ThemeProvider>

    <div
      className={`${
        display && "w-full h-full bg-[#747380D1] opacity-[82%] z-[150]"
      } fixed top-0 left-0`}
      onClick={(e) => handleCancel(e)}
    ></div>

    {display && (
      <div className="w-[450px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white z-[200] rounded-[10px] overflow-hidden h-fit ">
        {showDefaultConnectors()}
      </div>
    )}
  </div>
  )
}

export default AgentTable