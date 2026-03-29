import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

products: Product[] = []; 

  constructor(private _ProductsService: ProductsService) { }

 // ---  Hooks --
  ngOnInit(): void {
    
    this.products = this._ProductsService.products;


  }

}
