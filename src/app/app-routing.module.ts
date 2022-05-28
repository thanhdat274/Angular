import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutClientComponent } from './client/about-client/about-client.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { ProductsComponent } from './client/products/products.component';
import { UserComponent } from './user/user.component';

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
    children:[
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
