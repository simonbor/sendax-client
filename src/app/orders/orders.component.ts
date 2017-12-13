import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { FormPosterService } from '../form-poster.service'
import { NgForm } from '@angular/forms'
import { environment } from '../../environments/environment'

@Component({
  selector: 'sendax-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  constructor(private formPosterService: FormPosterService) { }
  ngOnInit() { }

  errorMessage: String;
  model = new Order();
  patternEmail = environment.patternEmail;  

  submitForm(form: NgForm) : void {
    this.formPosterService.postOrderForm(this.model)
    .then(res => {
      console.log(res);
      form.resetForm();
    },
    error => {
      this.errorMessage = <any>error;
      console.log(this.errorMessage);
    });
  }
}
