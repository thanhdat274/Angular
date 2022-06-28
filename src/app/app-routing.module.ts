import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductDetailComponent } from './admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminComponent } from './admin/admin.component';
import { DashboadAdminComponent } from './admin/dashboad-admin/dashboad-admin.component';
import { AboutClientComponent } from './client/about-client/about-client.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { ProductsComponent } from './client/products/products.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './auth/login/login.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path:'about',
        component: AboutClientComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [CanAccessAdminGuard],
    children:[
      {
        path: '',
        component: DashboadAdminComponent
      },
      {
        path:'products',
        component: AdminProductComponent,
        children:[
          {
            path:'',
            component: AdminProductListComponent
          },
          {
            path:'add',
            component: AdminProductFormComponent
          },
          {
            path:'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path:':id',
            component: AdminProductDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'auth',
    children:[
      {
        path:'signin',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
