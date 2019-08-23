import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Online Store</h1>
        <h6 class="text-center"><a [routerLink]="['/cart']">Cart: {{(cart | async).length}}</a></h6>
        <hr />
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private store: Store<any>) {}

  cart: Observable<Array<any>>

  ngOnInit() {
    this.cart = this.store.select('cart');
  }
}
