/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HasError, FetchCart, AddCartProduct, UpdateCartProduct, DeleteCartProduct, DeleteAllCartProduct } from '../reducer/Cart';

export const addProduct = (prams: any, cartList: any) => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        dispatch(FetchCart());
        const index = cartList?.findIndex((row: any) => row.id === prams.id)
        try {
            if (index !== -1) {
                const newList = [...cartList];
                newList.splice(index, 1, { ...cartList[index], quantity: cartList[index].quantity + prams.quantity })
                dispatch(UpdateCartProduct(newList));
                resolve(newList);
            } else {
                dispatch(AddCartProduct(prams));
                resolve(prams);
            }
        } catch (error) {
            console.log('error: ', error);
            dispatch(HasError('error'));
            reject();
        }
    });

export const DeleteCart = (cartData: any, cartList: any[]) => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        const index = cartList.findIndex((row: any) => row.id === cartData.id)
        dispatch(FetchCart());
        try {
            if (index !== -1) {
                const newArray = cartList.filter((data) => data.id !== cartData.id)
                dispatch(DeleteCartProduct(newArray));
                resolve(newArray);
            }
        } catch (error) {
            console.log('error: ', error);
            dispatch(HasError('error'));
            reject();
        }
    });


export const DeleteAllProduct = () => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        try {
            dispatch(DeleteAllCartProduct());
            resolve();
        } catch (error) {
            console.log('error: ', error);
            dispatch(HasError('error'));
            reject();
        }
    });