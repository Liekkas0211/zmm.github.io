import * as actionTypes from './actionTypes';

export const addIngredient = (ingName) => {
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:ingName

    };
};

export const removeIngredient = (ingName) => {
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:ingName

    };

};
export const small = () => {
    return{
        type:actionTypes.SMALL,
    };

};


export const meat = () => {
    return{
        type:actionTypes.MEAT,
    };

};


export const big = () => {
    return{
        type:actionTypes.BIG,
    };

};



