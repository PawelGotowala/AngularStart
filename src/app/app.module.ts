import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WitajComponent } from './witaj/witaj.component';
import { MenuComponent } from './menu/menu.component';
import { PrawyComponent } from './prawy/prawy.component';
import { ItemComponent } from './item/item.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    WitajComponent,
    MenuComponent,
    PrawyComponent,
    ItemComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
