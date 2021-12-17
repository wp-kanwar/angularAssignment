import { getProductsbyEffects } from './../Store/product.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductServiceService } from '../Products/product-service.service';
import { ProductModel } from '../Products/product.model';
import { getProducts } from '../Store/product.actions';
import { ProductSelector } from '../Store/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // allProd: any;
  coffee = this.store.pipe(select(ProductSelector));
  page:Number=1;
  p:any;
  allProd:any[]=[];
  constructor(private ps: ProductServiceService, private store: Store<{ products: ProductModel[] }>) { }

  ngOnInit(): void {
    //code to use service to get data from api
    // this.ps.loadProducts().subscribe(
    //   (data) => {
    //     this.allProd = this.store.dispatch(getProducts({ allProducts: data as ProductModel[] }))
    //   }
    // )

     //code to use Effects to get data from service api
    this.store.dispatch(getProductsbyEffects());
     this.coffee.subscribe((data )=> this.allProd=data)
  }

  

}
