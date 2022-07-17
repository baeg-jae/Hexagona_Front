import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MobileFrame from "components/Common/MobileFrame";
import Routing from "components/Routings/Routing";
import styled from "@emotion/styled";
import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Fullscreen className="App" id={theme}>
        {/* <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}
        <Wrap>
          <MobileFrame>
            <Routing />
          </MobileFrame>
        </Wrap>
      </Fullscreen>
    </ThemeContext.Provider>
  );
}

export default App;

const Fullscreen = styled.div`
  margin: auto;
  /* margin-bottom: 30px; */
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 540px) {
    justify-content: center;
    overflow: hidden auto;
  }
  @media (max-width: 1579px) and (min-width: 541px) {
    justify-content: flex-end;
    overflow: hidden auto;
  }
  @media (min-width: 1580px) {
    overflow: hidden auto;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-height: 100%;
  height: auto;
  -webkit-overflow-scrolling: touch;
`;
