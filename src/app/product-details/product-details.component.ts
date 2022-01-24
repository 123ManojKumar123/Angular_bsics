import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product|undefined;
  constructor(
    private route:ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdfromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product=> product.id === productIdfromRoute)
  }

  addToCart(product:Product): void {
    this.cartService.addToCart(product);
    window.alert('your product has been added to cart!')
  }
}
