import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from "app/orders/orders.component";
import { ContactComponent } from "app/contact/contact.component";

const routes: Routes = [
  // { path: '', children: [] },
  { path: '', component: ContactComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
