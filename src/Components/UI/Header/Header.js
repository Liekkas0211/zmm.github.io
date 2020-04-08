import React, { Component } from 'react';
import classes from'./Header.module.css';
import { BrowserRouter as Router,withRouter} from 'react-router-dom';
  import { Drawer, Button } from 'antd';

class Header extends Component{
 
     state = { visible: false };
   
     showDrawer = () => {
       this.setState({
         visible: true,
       });
     };
   
     onClose = () => {
       this.setState({
         visible: false,
       });
     };
   
 render(){
    let drawer1=null;
    drawer1=( 
         <div style={{margin:"left"}}>
           <a type="primary" onClick={this.showDrawer}>
             More🍔
           </a>
           <Drawer
             title="HUNBURGER OF ZMM"
             placement="left"
             closable={false}
             onClose={this.onClose}
             visible={this.state.visible}
           >
             <a>Store address 🚗</a><p/>
             <a onClick={()=>{
             this.props.history.push("/order");
            this.props.history.go();
             }}> Orders 🍖</a><p/>
             <a>About 👩</a>
           </Drawer>
         </div>)
       
     
     return (
        <Router>
         <div className={classes.header}> 
        {drawer1}
        <a className={classes.label1}  onClick={()=>{
           this.props.history.push("/");
           this.props.history.go();
        }}>Burger Builders 😁 </a>
         <a className={classes.label2} onClick={()=>{
           this.props.history.push("/order");
           this.props.history.go();
        }}> 
           Orders 🌈</a>
           </div>
        </Router>
    )
 }
}
export default withRouter(Header);