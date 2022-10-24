import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import React, { useState } from "react";
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Navigation from './components/header';
import Alert from "./components/Alert";
import Notfound from "./components/notfound";

function App() {
  const [mode, setmode] = useState("light"); //State about dark-mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#000000"; //'#042743'
      showAlert("Enjoy Dark Mode ", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enjoy Light Mode ", "success");
    }
  };
  return (
    <div className="App">
      <Router>
        
        <Navigation title="MyPage"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}/>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about"><About mode={mode} /></Route>
          <Route path="/contact"><Contact mode={mode} /></Route>
          <Route path="/404" component={Notfound} />
          <Redirect to="/404" />
        </Switch>
      <Alert alert={alert} />  
      </Router>
      
    </div>
  );
}

export default App;
