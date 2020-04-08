import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index'
      //Array.map() 方法返回一个新数组，
      //数组中的元素为原始数组元素调用函数处理后的值，同时不会改变原来的数组。
         //bind()方法主要就是将函数绑定到某个对象，bind()会创建一个函数，
         //函数体内的this对象的值会被绑定到传入bind()第一个参数的值，
         //例如，f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
        //IngredientAdded是buildControls定义的
const controls = [
  {label : '🥗Salad  ', type: 'salad'},
  {label : '🥓Bacon  ', type: 'bacon'},
  {label : '🧀Cheese ', type: 'cheese'},
  {label : '🥩Meat   ', type: 'meat'},
]
const buildControls = (props) => (
  <div className={classes.BuildControls}>
     <div className={classes.lessmore}>
          <h1>Current Price: <strong>💰{props.totalPrice.toFixed(2)}</strong> </h1>
          {controls.map(control => {
              return <BuildControl
              key={control.label} 
              label={control.label} 
              add={() => props.IngredientAdded(control.type)}
              remove={() => props.RemoveIngredient(control.type)}
              disabled={props.disabled[control.type]}
              />
          })}
          <br/>
           <p>
        <button onClick={props.click} className={classes.OrderButton1}
         disabled={!props.prsable}>ORDER NOW</button> 
        </p> 
      </div>
     <div className={classes.auto}  >
        <h2> <strong>Fear of choice? Try ordering with one click 👇</strong></h2>
        <p className={classes.Label}> Small 🥗1 🥩1 🧀1 🥓1   &nbsp;
        <a onClick={props.small}className={classes.OrderButton}> Small</a></p><br/>

        <p className={classes.Label}> Double meat 🥗1 🥩2 🧀1 🥓1 &nbsp;
        <a onClick={props.meat}className={classes.OrderButton}> Double Meat</a></p><br/>

        <p className={classes.Label}> BigDouble 🥗2 🥩2 🧀2 🥓2 &nbsp;
        <a onClick={props.big}className={classes.OrderButton}>Burger king</a></p><br/>
        <p><a  href="javascript:location.reload();" className={classes.OrderButton}> Restart</a></p>
       
  </div> 
  </div>
  
)

const mapStateToProps = state => {
  return {
    igrds: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    sum: state.burgerBuilder.sumprice
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    small:()=>dispatch(actions.small()),
    meat:()=>dispatch(actions.meat()),
    big:()=>dispatch(actions.big()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(buildControls);