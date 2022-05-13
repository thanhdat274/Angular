import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
