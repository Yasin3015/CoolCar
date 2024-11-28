import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";

const App = () => {
  return (
    <RouterProvider router={AppRouter} />
  );
};

export default App;
