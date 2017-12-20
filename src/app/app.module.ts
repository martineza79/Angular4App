import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    //components
    AppComponent,
    UserComponent
  ],
  imports: [
    //modules
    BrowserModule,
    FormsModule
  ],
  //services
  providers: [],
  //root component
  bootstrap: [AppComponent]
})
export class AppModule { }
