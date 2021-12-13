import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  // {path: 'products', component: ProductListComponent}
  { path: '', component: AppComponent,
  children: [
     { path: '', component: ProductListComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
