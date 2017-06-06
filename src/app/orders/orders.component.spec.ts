import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { FormsModule } from '@angular/forms';
// import { Order } from '../models/order.model';
import {NgsRevealModule} from 'ng2-scrollreveal';
import { FormPosterService } from '../form-poster.service'
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';


describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgsRevealModule.forRoot() ],
      declarations: [ OrdersComponent ],
      providers: [FormPosterService, Http, ConnectionBackend, RequestOptions],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
