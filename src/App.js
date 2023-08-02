import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MiddleSide from "./components/MiddleSide/MiddleSide";
import Login from "./components/LeftSide/Login/Login";
import DashBoard from "./components/LeftSide/DashBoard/DashBoard";
import SuggestedAccounts from "./components/LeftSide/SuggestedAccounts/SuggestedAccounts";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar />
          <div className="sideIt">
            <div className="leftSidebar_top">
            <Login />
            <DashBoard />
            <SuggestedAccounts />
            </div>
            <Routes className="middleSide">
              <Route path="/" element={<MiddleSide />} />
            </Routes>
          <RightSide/>
          </div>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
