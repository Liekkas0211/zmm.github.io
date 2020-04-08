import React, { Component, Fragment } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/OrderSummary/BuildControls';
import Modal from '../../Components/UI/Model/Msgbox';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {
    state = {
        visible:false,
    }
changeModal =()=>{
        this.setState({
            visible:false
        })
    }
showModal = () => {
        this.setState({
            visible: true,
        });
}
isBurgerPurchasable(ingredients) {
    const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey];
                    })
                    .reduce((sum,el)=>{
                        return sum + el;
                    },0);

    return sum>0;
}

handleConfirm = () => {
    this.setState({
        visible: false
    })
    this.changeModal(); 
    return (
        <Burger/>)
    
}
render(){
    
 
    
    let mainburger=null;
    const disableInfo = {
        ...this.props.igrds
   }
   for(let key in disableInfo){
      disableInfo[key] = (disableInfo[key] <= 0) ? true : false;
   }
    if(this.props.igrds){
        mainburger= (
           <Fragment>
                <Burger ingredients = {this.props.igrds}/>
                <BuildControls
                totalPrice={this.props.price}
                IngredientAdded={this.props.onIngredientAdded}
                RemoveIngredient={this.props.onIngredientRemoved}
                disabled={disableInfo}
                prsable={this.isBurgerPurchasable(this.props.igrds)}
                click={this.showModal}/>
           </Fragment>
        );}
        let modal=null;
       if(this.state.visible){
           modal=(<Modal
           visible={this.state.visible}
           title='your order ✔'
           change={this.changeModal}
           handleConfirm={this.handleConfirm}
           >
          <ul>Current Price: 💰{this.props.price.toFixed(2)} </ul>
           <ul>🥗salad:{this.props.igrds.salad} price:£{this.props.sum.salad.toFixed(2)}</ul>
           <ul>🥓bacon:{this.props.igrds.bacon} price:£{this.props.sum.bacon.toFixed(2)}</ul>
           <ul>🧀cheese:{this.props.igrds.cheese} price:£{this.props.sum.cheese.toFixed(2)} </ul>
           <ul>🥩meat:{this.props.igrds.meat} price:£{this.props.sum.meat.toFixed(2)}</ul>
           </Modal>)
       }
       
        return (
            console.log(this.props.igrds),
        <Fragment>
                {mainburger},
                {modal}
               
         </Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log( state.burgerBuilder.ingredients)
    return {
        igrds: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        sum: state.burgerBuilder.sumprice
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIngredientAdded: (ing) => dispatch(actions.addIngredient(ing)),
        onIngredientRemoved: (ing) => dispatch(actions.removeIngredient(ing)),
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);