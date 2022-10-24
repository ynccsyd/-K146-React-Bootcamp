import { useContext } from "react" 
import "./darkMode.css"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import { ThemeContext } from "../../context"
import profile from "../../image/stars.jpg";


const DarkModeComponent = () => {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode;
  const handleClick=() =>{
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    
    <div className="toggle">
      <BsFillSunFill color="#FDB813" className="toggle-icon" />
      <BsMoonFill color="#1b1e23" className="toggle-icon" />
      <div style={{ left: dark ? "0px" : "50px" }} 
      className="toggle-button" onClick={handleClick}/><div />

      </div>
  );
};

export default DarkModeComponent;