import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ConteggioPageComponent } from './conteggio-page/conteggio-page.component';
import { MainComponent } from './main/main.component';
import { TabellaRubricaComponent } from './tabella-rubrica/tabella-rubrica.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    SearchPageComponent,
    ConteggioPageComponent,
    MainComponent,
    TabellaRubricaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
