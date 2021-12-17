import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../Products/product.model";


export const getProducts = createAction(
    '[Product Api] Api Success',
    props<{ allProducts: ProductModel[] }>()
);

export const getProductsbyEffects = createAction(
    '[Product Effect Api] EffectApi Success',
);