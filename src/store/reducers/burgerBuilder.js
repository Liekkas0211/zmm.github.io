import * as actionTypes from '../actions/actionTypes';
const updateObject = (oldObject, updatedProperties) =>{
    return {
        ...oldObject,
        ...updatedProperties
    }
}


const initialState = {
    ingredients:{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice:0,
    purchaseable:false,
    sumprice:{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state,action)=>{
    const updatedIng = {[action.ingredientName]:state.ingredients[action.ingredientName] + 1};
    const updatedIngs = updateObject(state.ingredients,updatedIng );//备份
    const updatesumprice={
        [action.ingredientName]:updatedIngs[action.ingredientName] *  INGREDIENT_PRICES[action.ingredientName]}
    const updatesumprices = updateObject(state.sumprice,updatesumprice);//备份
    const updatedState = {
        purchaseable:true,
        ingredients : updatedIngs,
        sumprice:updatesumprices,
        totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state,updatedState);
}

const removeIngredient = (state,action)=>{
    const updatedIng = {[action.ingredientName]:state.ingredients[action.ingredientName] - 1};
    const updatedIngs = updateObject(state.ingredients,updatedIng);
    const updatesumprice={
        [action.ingredientName]:updatedIngs[action.ingredientName] *  INGREDIENT_PRICES[action.ingredientName]}
    const updatesumprices = updateObject(state.sumprice,updatesumprice);    
    const updatedState = {
        purchaseable:true,
        ingredients : updatedIngs,
        sumprice:updatesumprices,
        totalPrice : state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state,updatedState);
}

const small=(state)=>{
    const smallIng = {
        salad:1,
        bacon: 1,
        cheese: 1,
        meat: 1,
    };
    const updatedIngs = updateObject(state.ingredients,smallIng  );
    const updatesumprice={
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
       }
    const updatesumprices = updateObject(state.sumprice,updatesumprice);    
    const updatedState = {
        purchaseable:true,
        ingredients : updatedIngs,
        sumprice:updatesumprices,
        totalPrice : 2.9
    };

    return updateObject(state,updatedState);
}

const meat=(state)=>{
    const Ing = {
        salad:1, bacon: 1,
        cheese: 1,meat: 2,
    };
    const updatedIngs = updateObject(state.ingredients,Ing  );
    const updatesumprice={
        salad: 0.5,cheese: 0.4,
        bacon: 0.7, meat: 2.6,
       }
    const updatesumprices = updateObject(state.sumprice,updatesumprice);    
    const updatedState = {
        purchaseable:true,
        ingredients : updatedIngs,
        sumprice:updatesumprices,
        totalPrice : 4.2
    
        
    };return updateObject(state,updatedState);}

const big=(state)=>{
        const Ing = {
            salad:2,bacon: 2,
            cheese: 2, meat: 2,
        };
        const updatedIngs = updateObject(state.ingredients,Ing  );
        const updatesumprice={
            salad: 1.0,  cheese: 0.8,
            meat: 2.6, bacon: 1.4
           }
        const updatesumprices = updateObject(state.sumprice,updatesumprice);    
        const updatedState = {
            purchaseable:true,
            ingredients : updatedIngs,
            sumprice:updatesumprices,
            totalPrice : 5.8
        };
    
        return updateObject(state,updatedState);
    }
    


const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: return addIngredient(state,action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state,action);
        case actionTypes.SMALL :return small(state);
        case actionTypes.MEAT :return meat(state);
        case actionTypes.BIG:return big(state);
        default: return state;
    }
}

export default reducer;