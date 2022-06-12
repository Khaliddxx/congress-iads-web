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
import VisaRequirements from "./Pages/VisaRequirements/VisaRequirements";
import Program from "./Pages/Program/Program";
import Transportation from "./Pages/Transportation/Transportation";
import About from "./Pages/About/About";
import Dental from "./Pages/Landing/Dental/Dental";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Registration /> },
    { path: "/form", element: <RegistrationForm /> },
    { path: "/visa", element: <VisaRequirements /> },
    { path: "/program", element: <Program /> },
    { path: "/transportation", element: <Transportation /> },
    { path: "/about", element: <About /> },
    { path: "/landing/dental", element: <Dental /> },
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
