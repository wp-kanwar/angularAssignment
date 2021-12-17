import { ProductServiceService } from './Products/product-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComp } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './Store/poducts.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { ProductsEffects } from './Store/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    routingComp,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
