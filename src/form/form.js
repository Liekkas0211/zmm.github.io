import { Input,DatePicker,Select,Form ,Result, Button, Spin} from 'antd';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router,withRouter} from 'react-router-dom';
import Burger from '../Components/Burger/Burger';
import classes from './form.module.css';
import axios from "axios"; 

 const { TextArea } = Input;
class Info extends Component{
  state = {
      USER_ADDRESS:"" ,
      ORDER_REMARK:"",
      USER_NAME: "",
      USER_PHONE: "",
       confirmDirty: false,
     autoCompleteResult: [],
  
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  submit=()=>{

      console.log(this.state)
      let order = {
        "MCH_ID": "41708307",
        "ORDER_BACON": this.props.igrds.bacon,
        "ORDER_CHEESE": this.props.igrds.cheese,
        "ORDER_MEAT":this.props.igrds.meat,
        "ORDER_REMARK":this.state.ORDER_REMARK,
        "ORDER_SALAD":this.props.igrds.salad,
        "TOTAL_FEE": this.props.price,
        "USER_ADDRESS": this.state.USER_ADDRESS,
        "USER_NAME": this.state.USER_NAME,
        "USER_PHONE": this.state.USER_PHONE,
      }
        console.log(order)
        axios.post("https://ivftjreo9c.execute-api.cn-northwest-1.amazonaws.com.cn/prod/order", order)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);  
      })
    
      this.props.history.push("/order");
      this.props.history.go();
 
    }
  handlename = (event)=>{
    if(event && event.target && event.target.value){
      let value = event.target.value;
      this.setState(()=>({USER_NAME:value }))
    }
  }

  handleaddress = (event)=>{
    if(event && event.target && event.target.value){
      let value = event.target.value;
      this.setState(()=>({USER_ADDRESS:value }))
    }
  }

  handlephone = (event)=>{
    if(event && event.target && event.target.value){
      let value = event.target.value;
      this.setState(()=>({USER_PHONE:value }))
    }
  }
  handleremark = (event)=>{
    if(event && event.target && event.target.value){
      let value = event.target.value;
      this.setState(()=>({ORDER_REMARK:value }))
    }
  }

  checkEmail(rule, value, callback) {
    if(!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value))){
        callback("The Email is wrong");
    }else{
        callback()
    }
};
  checkname(rule, value, callback) {
    var re = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    if(!re.test(value)){
        callback("Please input Chinese character or letter")
    }
    else callback()
  };
   
  checkPhone(rule, value, callback) {
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))){
        callback("The mobile phone number is wrong");
    }else{
        callback()
    }
  };

render(){
  const { getFieldDecorator } = this.props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },sm: { span: 16 },
    },
  };
    let buttons=(
    <div className={classes.butn}>
      <button className={classes.confirm}
      onClick={()=>{
        document.getElementById("info").scrollIntoView();
      }}>确定
      </button>
      <button className={classes.close}
      onClick={()=>{
        this.props.history.push( "/");
        this.props.history.go();
    }}
      >取消</button>
    </div>)

  

  const { Option } = Select;
  let forms=
    <div className={classes.form}>
      <h2><strong>请输入你的联系信息</strong></h2>
      <Form {...formItemLayout} >
          <Form.Item label="name👩/👨" >
                    {getFieldDecorator('name', {
                    rules: [
                    {
                      validator: this.checkname,
                      required: true,
                  }
                  ],
                })(<Input placeholder=" Chinese character or letter"
                   style={{ width: 300 }}
                onChange ={event => this.handlename(event)}/>)}
          </Form.Item>
          <Form.Item label="Street 🏠">
          {getFieldDecorator('Street', {
                    rules: [
                    {required: true,
                  }
                  ],
                })(
              <Input placeholder="Your current address." style={{ width: 300 }}
              onChange ={event => this.handleaddress(event)} />)}
          </Form.Item>

          <Form.Item label="Phone Number 📞">
                {getFieldDecorator('phone', {
                  rules: [ { 
                    validator: this.checkPhone,
                    required: true, }],
                  },
                )(<Input placeholder="11-digit phone number"
                   style={{ width: 300 }}
                  onChange ={event => this.handlephone(event)}
                />)}
          </Form.Item>
          <Form.Item label="E-mail 📫">
                {getFieldDecorator('EMAIL', {
                  rules: [
                    {
                      validator: this.checkEmail,
                      required:true,
                    }],
                })(<Input placeholder='aaa@bbb.ccc'  style={{ width: 300 }}/>)}
          </Form.Item>
          
          <Form.Item label="remark 🖊">
                 {getFieldDecorator('email', {
                  rules: [
                    { 
                      required: true,
                    }
                  ],
                })( <TextArea
                    rows={3} placeholder="For example, don't pepper." 
                    style={{ width: 300 }} 
                onChange ={event => this.handleremark(event)}/>
                )}
         
          </Form.Item>
          <Select defaultValue="fastest" style={{ width: 400 }} onChange={this.handleChange}>
          <Option value="lowest">lowest</Option>
          <Option value="middlest">fastest</Option>
          </Select><br/><p></p>
          <DatePicker style={{ width: 400 }}  /><br/>
        </Form>    
        <button className={classes.order} onClick={this.submit} 
         >下单</button>
        </div>
    let mainburger=null
    if(this.props.igrds){
      mainburger= (
              <Burger ingredients = {this.props.igrds}/>)}
  return(
   <div>
     <h1 className={classes.hope} ><strong> We hope is tastes well 💁‍♀️</strong></h1>
     {mainburger}<br/>
    <h2  className={classes.hope1}> totalprice:<strong>
      💰{Math.round(this.props.price*100)/100}</strong></h2>
    {buttons}
    <div id="info"></div>
     {forms}
     <br/>
     <p></p>
    </div>)
  }
}

const mapStateToProps = state => {
console.log(state.burgerBuilder.totalPrice)
console.log(state.burgerBuilder.ingredients)
  return {
    igrds:state.burgerBuilder.ingredients,
    price:state.burgerBuilder.totalPrice
  };
}

const mapDispatchToProps = dispatch =>{
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form.create()(Info)));