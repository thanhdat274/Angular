import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { DameComponent } from './dame/dame.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ValidetComponent } from './validet/validet.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { UserFormComponent } from './user/form/form.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './client/home/home.component';
import { ProductsComponent } from './client/products/products.component';
import { AboutClientComponent } from './client/about-client/about-client.component';
import { HeaderClientComponent } from './client/layouts/header-client/header-client.component';
import { FooterClientComponent } from './client/layouts/footer-client/footer-client.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductListComponent } from './admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './admin/admin-product/admin-product-detail/admin-product-detail.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { DashboadAdminComponent } from './admin/dashboad-admin/dashboad-admin.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    DameComponent,
    TableAvatarComponent,
    FormComponent,
    ValidetComponent,
    UserComponent,
    ListComponent,
    UserFormComponent,
    ClientComponent,
    AdminComponent,
    HomeComponent,
    ProductsComponent,
    AboutClientComponent,
    HeaderClientComponent,
    FooterClientComponent,
    AdminProductComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    NavAdminComponent,
    DashboadAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
