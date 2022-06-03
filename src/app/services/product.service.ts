import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductAdd } from '../type/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.products)
  }
  getProduct(_id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${_id}`)
  }
  deleteProduct(_id: string|number): Observable<any>{
    return this.http.delete(`${environment.products}/${_id}`)
  }
  addProducts(data: ProductAdd):Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }
  updateProduct(_id: string | number, data: ProductAdd):Observable<Product>{
    return this.http.put<Product>(`${environment.products}/${_id}`, data)
  }
}
