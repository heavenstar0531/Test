import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [value, setValue] = useState("home");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "Home") {
      navigate("/");
    } else {
      navigate(`/${newValue}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="flex justify-between items-center col-span-2">
          <img src="/logo.png" alt="logo" className=" h-[32px]" />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            style={{
              width: "550px",
              display: "flex",
              justifyContent: "center",
              background: "rgba(33, 46, 57, 0.25)",
              backdropFilter: "blur(22.5px)",
              borderRadius: "300px",
            }}
          >
            <Tab
              value="Home"
              label="Home"
              className={`${
                value === "Home" ? "!text-white" : "!text-gray-400"
              }`}
            />
            <Tab
              value="Games"
              label="Games"
              className={`${
                value === "Games" ? "!text-white" : "!text-gray-400"
              }`}
            />
            <Tab
              value="HowItWorks"
              label="How it works"
              className={`${
                value === "HowItWorks" ? "!text-white" : "!text-gray-400"
              }`}
            />
            <Tab
              value="Pricing"
              label="Pricing"
              className={`${
                value === "Pricing" ? "!text-white" : "!text-gray-400"
              }`}
            />
            <Tab
              value="FAQ"
              label="FAQ"
              className={`${
                value === "FAQ" ? "!text-white" : "!text-gray-400"
              }`}
            />
          </Tabs>
        </div>

        <div className="pl-[100px]">
          <button
            className=" px-[36px] py-[10.5px] rounded-[300px] text-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button className="bg-[#2C5DFE] px-[36px] py-[10.5px] rounded-[300px] text-white">
            Free Trial
          </button>
        </div>
      </div>
    </>
  );
}
