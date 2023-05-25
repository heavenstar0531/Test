import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Layout/Footer";

const OwnLayout = ({ children }) => {
  return (
    <div className="bg-[#090D1B] lg:px-[140px] px-[100px] py-[30px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default OwnLayout;
