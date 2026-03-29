import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
// --- Products Data Source ---
  products: Product[] = [
    { id: 1111, name: 'iPhone', price: 6767, used: false },
    { id: 2222, name: 'Tv', price: 6767, used: false },
    { id: 3333, name: 'KM', price: 6767, used: false },
    { id: 4444, name: 'KM', price: 6767, used: false },
  ];
}
