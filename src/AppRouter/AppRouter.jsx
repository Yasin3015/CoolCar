import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
//import { HomePage } from "../features/Home";
// import { NotFoundPage } from "../features/NotFound";
import RootLayout from "../features/Layout/Pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "../features/Home/Pages/Home";



const AppRouter = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} /> 
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </>
  )
)

export default AppRouter;
