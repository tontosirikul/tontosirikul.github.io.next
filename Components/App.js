import NavBar from "./NavBar";
import { useState } from "react";
function App({ children }) {
  const [navtoggle, setNavtoggle] = useState(false);
  const navClick = () => {
    setNavtoggle(!navtoggle);
  };
  return (
    <div className="App">
      <div className={`sidebar ${navtoggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default App;
