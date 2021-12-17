import { getProducts } from './product.actions';
import { ProductModel } from './../Products/product.model';
import { createReducer, on } from "@ngrx/store";



export const initialState: ProductModel[]=[];

const _productReducer = createReducer(
initialState,
on(getProducts, (state,{allProducts}) => {
    return [...allProducts];
}));

export function productReducer(state:any , actions:any){
    return _productReducer(state,actions);
}