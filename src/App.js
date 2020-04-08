import React, { Component} from 'react';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import Header from './Components/UI/Header/Header'
import Info from './form/form'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Preorders from './Orders/order';

  
class App extends Component {

  render() {
    return (<div>
     <Router>
     <Header/>
     <Route  path="/info" children={<Info/>}/> 
     <Route  path="/order" children={<Preorders/>}/> 
     <Route   exact path="/" children={<BurgerBuilder/>}/> 
     </Router>
     
       </div>
    );
  }
}
export default App;
