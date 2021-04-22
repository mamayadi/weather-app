import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  url = environment.productUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${product.id}`);
  }
}
