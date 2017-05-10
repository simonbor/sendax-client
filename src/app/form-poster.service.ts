import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Order } from './models/order.model';

@Injectable()
export class FormPosterService {

  constructor(private http:Http) { }
  
  public postOrderForm(order: Order){
    console.log(order);
  }

}
