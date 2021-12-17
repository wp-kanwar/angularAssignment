import { ProductServiceService } from './../Products/product-service.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from 'rxjs/operators';


@Injectable()

export class ProductsEffects{

    constructor(private $actions:Actions, private ps:ProductServiceService){};

    $loadProducts = createEffect(()=> this.$actions.pipe(
        ofType('[Product Effect Api] EffectApi Success'), mergeMap(()=> this.ps.loadProducts().pipe(
            map((data)=> ({type: '[Product Api] Api Success',allProducts:data }))
        ))
    ))
}