import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductCart } from 'src/app/type/products';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  _id: string
  product: Product;
  cartValue: number
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService

  ) {
    this._id = '';
    this.product ={
      _id: 0,
      name: '',
      price: 0,
      quantity: 0,
      short_desc: '',
      desc: '',
      img: '',
      categoryId: 0
    }
    this.cartValue= 1;
  }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params["id"];
    console.log(this._id);
    this.productService.getProduct(this._id).subscribe((data) => {
      this.product = data;
      console.log(data);
    })
  }
  onChangeCartValue(event: any){
    this.cartValue = event.target.value
  }
  onToCart(){
    const addItem = {
      ...this.product,
      value: +this.cartValue
    }
    const cartItem =JSON.parse(localStorage.getItem('cart') || '[]')
    const existItem = cartItem.find((item: ProductCart)=>
      item._id === addItem._id
    )
    if(!existItem){
      cartItem.push(addItem);
    }else{
      existItem.value += addItem.value;
    }
    localStorage.setItem('cart',JSON.stringify(cartItem));
    this.cartValue=1
  }
}
