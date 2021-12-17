import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private http:HttpClient) { }

  loadProducts(){
    return this.http.get("https://random-data-api.com/api/coffee/random_coffee?size=50")
    .pipe(map((data) => data || []));
  }
}
