import "./App.scss";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Registration from "./Pages/Registration/Registration";
import Sponsers from "./Components/Sponsers/Sponsers";
import Footer from "./Components/Footer/Footer";

import { useLocation } from 'react-router-dom';
import RegistrationForm from "./Pages/RegistrationForm/RegistrationForm";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Registration /> },
    { path: "/form", element: <RegistrationForm /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <Header />

      <div>
        <AppRoutes />

      </div>

      <Sponsers   />
      <Footer id="footer" />
    </Router>
  );
};

export default App;
