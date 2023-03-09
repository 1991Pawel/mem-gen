import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import { UserContextProvider, useUserContext } from "./context/UserContext";
import { useEffect } from "react";
import { Header } from "./components/Header";

function App() {
  const { user, setUser } = useUserContext();

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} exact path="/dashboard" />
          </Route>
          <Route element={<LoginPage />} path="/" />
          {/* <Route element={<Dashboard />} path="/dashboard" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
