import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  product: any
constructor(private http: HttpClient) {
this.http.get('https://dummyjson.com/products/1').subscribe(data => {
this.product = data
})
}

}
