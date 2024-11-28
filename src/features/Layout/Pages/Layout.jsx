import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;