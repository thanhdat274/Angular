import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signin: FormGroup;
  constructor(
    private authService:AuthService,
    private router: Router
  ) {
    this.signin = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.signin.value).subscribe(data => {
      // 2. Lưu thông tin user vào localStorage: setItem(tên key lưu vào ls, dữ liệu string)
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      // localStorage.getItem('loggedInUser');
      // 3. di chuyển về màn admin/products
      this.router.navigateByUrl('/admin/products');
    });
  }
}
