import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'sendax-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  model = new Order();

  // constructor() { }

  ngOnInit() {
  }

  submit(form){
    //form.markAsTouched()
    console.log('submited');
  }

}
