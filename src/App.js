
import './App.css';
import React from "react";
import { Route, Switch } from 'react-router';
// import AOS from 'aos';
// import "aos/dist/aos.css";
import Home from './Page/Home/index';
import Blog from './Page/Blog';



function App() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <div className="App" >
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/blog" component={Blog} exact/>
      </Switch>
    </div>
  );
}

export default App;
