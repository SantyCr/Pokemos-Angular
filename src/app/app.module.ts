import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemosComponent } from './src/app/component/pokemos/pokemos.component';
import { ModalComponent } from './src/app/component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemosComponent,
    ModalComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
