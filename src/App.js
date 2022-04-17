import './App.scss';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from './Components/Header/Header';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    // ...
  ]);
  return routes;
};

const App = () => {
  return (
    
    <Router>
        <Header />

      <AppRoutes/>
    </Router>
  );
};

export default App;
