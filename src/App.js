import './App.scss';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

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
      <AppRoutes/>
    </Router>
  );
};

export default App;
