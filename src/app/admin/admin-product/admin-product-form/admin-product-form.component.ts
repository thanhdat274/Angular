import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      // price: new FormControl(0),
      // quantity: new FormControl(0),
      // short_desc: new FormControl(''),
      // desc: new FormControl(''),
      // img: new FormControl(''),
      // categoryId: new FormControl(0)
    })
    this.productId ='0';
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.productForm.patchValue({
          name: data.name
        });
      });
    }
  }

  onValidateNameProduct(control: AbstractControl):ValidationErrors | null {
    const {value} = control; // value = control.value;
    if (!value.includes('product')) {
      return {hasProductError: true};
    }
    return null;
  }
  onSubmit() {

    console.log(this.productForm.value);
    const submitData = this.productForm.value;


    if (this.productId !== '0' || this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }else{
       return this.productService.addProducts(submitData).subscribe(data=>{
      this.router.navigateByUrl('/admin/products')
    })
    }

  }

}
