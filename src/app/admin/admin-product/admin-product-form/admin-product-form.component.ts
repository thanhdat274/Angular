import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup
  constructor() {
    this.productForm  = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl(0),
      quantity: new FormControl(0),
      short_desc: new FormControl(''),
      desc: new FormControl(''),
      img: new FormControl(''),
      categoryId: new FormControl(0)
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
console.log(this.productForm.value);

  }

}
