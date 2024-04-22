import React, { useState } from "react";
import Productbanner from "../Components/productbanner";
import Header from "../Components/Header/index";
import ProductDescription from "../Components/productDescription.js";
import TrendingTab from "../Components/TrendingTabs.js";
import Footer from "../Components/Footer.js";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Description from "../Components/Description.js";
import Contact from "../Components/contact.js";
// import Related from "../Components/Related.js";

const Shop = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container float mx-auto">
      <Header />
      <div className="">
        <div className="  bg-[#f6f6f8] ">
          <Productbanner />
        </div>

        <ProductDescription />
        <div className="footer ">
          <TabContext value={value} textColor="secondary">
            <div className="flex flex-row mt-10 items-center  justify-center space-x-0  lg:space-x-14">
              <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <TabList
                  sx={{
                    "&.Mui-selected": {
                      color: "ff0911 !important",
                    },
                    ".MuiTab-root": { color: `black  !important` },
                  }}
                  className="flex flex-col justify-center items-center space-x-4 mx-12"
                  TabIndicatorProps={{
                    style: { background: "red", color: "red" },
                  }}
                  value={value}
                  onChange={handleChange}
                  allowScrollButtonsMobile
                  // variant="scrollable"
                  scrollButtons={true}
                  centered
                >
                  <Tab
                    label={
                      <span className=" capitalize font-serif text-xl flex justify-center hover:text-[#ff0911]   ">
                        {" "}
                        Description
                      </span>
                    }
                    value="1"
                  />
                  <Tab
                    label={
                      <span className=" capitalize font-serif text-xl flex justify-center hover:text-[#ff0911]  ">
                        {" "}
                        Additional Information
                      </span>
                    }
                    value="2"
                  />
                  <Tab
                    label={
                      <span className=" capitalize font-serif text-xl flex justify-center hover:text-[#ff0911] ">
                        {" "}
                        Reviews [5]
                      </span>
                    }
                    value="3"
                  />
                </TabList>
              </Box>
            </div>
            <TabPanel value="1">
              {" "}
              <Description />
            </TabPanel>
            <TabPanel value="2">
              <Description />
            </TabPanel>
            <TabPanel value="3">
              <Contact />{" "}
            </TabPanel>
          </TabContext>
          {/* <p className="descrip">Description</p>
            <p className="descrip1">Additional Information</p>
            <p className="descrip1">Reviews [5]</p> */}

          <div className="footer">
            <h3 className="flex justify-center  mt-10 lg:mt-2">
              <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
              <span className="font-serif text-[20px] md:text-2xl font-semibold uppercase">
                Related Products
              </span>
              <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
            </h3>
            <p className=" !text-center text-black !text-[15px]  mt-2 mx-8 sm:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mx-0  lg:mx-24 xl:mx-40">
              <TrendingTab />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
