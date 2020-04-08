import React, { Component } from 'react';
import axios from "axios";
import classes from "./order.module.css";
import { Table, Divider } from 'antd';
// import classes from'./Header.module.css';
const columns = [
  {
    title: 'Name',
    dataIndex: 'USER_NAME',
    key: 'USER_NAME',
    render: text => <a>{text}</a>,
  },
  {
    title: 'ID',
    dataIndex: 'MCH_ID',
    key: 'MCH_ID',
  },
  {
    title: 'Address 🏠',
    dataIndex: 'USER_ADDRESS',
    key: 'USER_ADDRESS',
  },
  {
    title: 'bacon 🥓',
    dataIndex: 'ORDER_BACON',
    key: 'ORDER_BACON',
    className:'bacon',
     render: text => <h3 className={classes.bacon}>{text}</h3>,
 
  },
  {
    title: 'salad 🥗',
    dataIndex: 'ORDER_SALAD',
    key: 'ORDER_SALAD',
    render: text => <h3 className={classes.salad}>{text}</h3>,
  },
  {
    title: 'cheese 🧀',
    dataIndex: 'ORDER_CHEESE',
    key: 'ORDER_CHEESE',
    render: text => <h3 className={classes.cheese}>{text}</h3>,
  },
  {
    title: 'meat 🥩',
    dataIndex: 'ORDER_MEAT',
    key: 'ORDER_MEAT',
    render: text => <h3 className={classes.meat}>{text}</h3>,
  },
  {
    title: 'totalprice 💰',
    dataIndex: 'TOTAL_FEE',
    key: 'TOTAL_FEE',
    render: text => <h2 > £{Math.round(text*1000)/1000}</h2>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a >Delete</a>
      </span>
    ),
  },
];

class Preorders extends Component{
    constructor(props) {
        super(props);
        this.state = {
           order:[
                {MCH_ID:0,
                ORDER_BACON :0,
                ORDER_CHEESE :0,
                ORDER_MEAT :0,
                ORDER_REMARK :0,
                ORDER_SALAD :0,
                TOTAL_FEE :0,
                USER_ADDRESS:"" ,
                USER_NAME :"",
                USER_PHONE :"",},
        
           ]
            }
            
        }
      componentDidMount(){
        axios.get("https://ivftjreo9c.execute-api.cn-northwest-1.amazonaws.com.cn/prod/order", { params: { MCH_ID: "41708307" }})
          .then(res => {
            console.log(res);
            this.setState({
                order:res.data.msg,
            })
            
        
          })
          .catch(err => {
            console.log(err);  
          })}
 render(){


  return( <div  ><br/>
   <h2 className={classes.hope1}> ALL your orders</h2><br/>
<div className={classes.content} > 

    <Table columns={columns} dataSource={this.state.order} />
</div> 
     
     </div>
 )}
}
export default Preorders;