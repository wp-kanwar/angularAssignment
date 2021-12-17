import { ProductSelector } from './Store/product.selector';
import { ProductModel } from './Products/product.model';
import { getProducts } from './Store/product.actions';
import { ProductServiceService } from './Products/product-service.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'AngularAssignment - Kartik Kanwar';
}
