import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteggioPageComponent } from './conteggio-page/conteggio-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path:"home", component: MainComponent},
  {path:"login", component: LoginComponent},
  {path:"error", component: ErrorPageComponent},
  {path:"conteggio", component: ConteggioPageComponent},
  {path:"cerca", component:SearchPageComponent },
  {path:"",redirectTo:"/home", pathMatch:"full"},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
