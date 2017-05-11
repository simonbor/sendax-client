import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Order } from './models/order.model';
import { environment } from '../environments/environment'

@Injectable()
export class FormPosterService {

  constructor(private http: Http) { }
  
  public postOrderForm(order: Order){
    console.log('order: ${order}');

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    this.http.post(environment.serverUrl + '/mail', order, options)
      .toPromise()
      .then(res=>res.json())
      .then(order => console.log(order))
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.error('eRROR hAS oCURRED!', error);
    return Promise.reject(error.message || error);
  };

}
