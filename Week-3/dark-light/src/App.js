
import { useContext } from 'react';
import './App.css';
import {DarkModeComponent} from "./components/index";
import { ThemeContext } from './context';
import { Hero } from "./sections/index";

function App() {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode;
  return (
    <div style={{backgroundColor: dark ? "#000000" : "#ffffff",
    color: dark ? "#ffffff" : "#000000"}} className="App">
      <DarkModeComponent/>
      <Hero />
      <div>
        <p className="prgf">
          Yıldızları <br/> görebilmek<br/> için <br/>karanlığa<br/> katlanmalısın.
        
        </p>
      </div>
      
      
    </div>
  );
}

export default App;
