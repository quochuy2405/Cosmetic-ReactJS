
import './App.css';
import React from "react";
import { Route, Switch } from 'react-router';
// import AOS from 'aos';
// import "aos/dist/aos.css";
import Home from './Page/Home/index';



function App() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <div className="App" >
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
