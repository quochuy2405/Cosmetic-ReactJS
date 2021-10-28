
import './App.css';
import React from "react";
import { Route, Switch } from 'react-router';
// import AOS from 'aos';
// import "aos/dist/aos.css";
import Home from './Page/Home/index';
import Blog from './Page/Blog';
import BodyCare from './Page/BodyCare';
import Cart from './Page/Cart/index';
import Contact from './Page/Contact';
import HairCare from './Page/HairCare/index';
import Makeup from './Page/MakeUp/index';
import SkinCare from './Page/SkinCare/index';
import NotFound from './Page/404/index';



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
        <Route path="/bodycare" component={BodyCare} exact/>
        <Route path="/cart" component={Cart} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/haircare" component={HairCare} exact/>
        <Route path="/makeup" component={Makeup} exact/>
        <Route path="/skincare" component={SkinCare} exact/>
        <Route path="/:id" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
