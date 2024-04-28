import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import TrendingTabs from "./TrendingTab";
import TrendingTab from "./TrendingTabs";

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6">
        <Box
          sx={{
            maxWidth: { xs: 320, sm: 640, lg: 1024, xl: 1280, xxl: 1536 },
            bgcolor: "background.paper",
          }}
        >
          <TabList
            TabIndicatorProps={{ style: { background: "none" } }}
            sx={{
              ".Mui-selected": {
                color: `black`,
                padding: `0`,
              },
            }}
            className="mx-12 md:mx-0"
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911] hover:underline ">
                  {" "}
                  Sandals
                </span>
              }
              value="1"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911] hover:underline ">
                  {" "}
                  Slippers
                </span>
              }
              value="2"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911]  hover:underline ">
                  {" "}
                  Chappals
                </span>
              }
              value="3"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911] hover:underline ">
                  {" "}
                  Sandals
                </span>
              }
              value="4"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911] hover:underline ">
                  {" "}
                  Slippers
                </span>
              }
              value="5"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911]  hover:underline ">
                  {" "}
                  Chappals
                </span>
              }
              value="6"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911]  hover:underline ">
                  {" "}
                  Sandals
                </span>
              }
              value="7"
            />
            <Tab
              label={
                <span className="text-black capitalize font-serif text-[16px] md:text-xl flex justify-center hover:text-[#ff0911]  hover:underline ">
                  {" "}
                  Sandals
                </span>
              }
              value="8"
            />
          </TabList>
        </Box>
      </div>
      <TabPanel value="1">
        {" "}
        <TrendingTabs />
      </TabPanel>
      <TabPanel value="2">
        {" "}
        <TrendingTab />
      </TabPanel>
      <TabPanel value="3">
        {" "}
        <TrendingTabs />
      </TabPanel>
      <TabPanel value="4">
        {" "}
        <TrendingTab />
      </TabPanel>
      <TabPanel value="5">
        {" "}
        <TrendingTabs />
      </TabPanel>
      <TabPanel value="6">
        {" "}
        <TrendingTab />
      </TabPanel>
      <TabPanel value="7">
        {" "}
        <TrendingTabs />
      </TabPanel>
      <TabPanel value="8">
        {" "}
        <TrendingTab />
      </TabPanel>
    </TabContext>
  );
}
