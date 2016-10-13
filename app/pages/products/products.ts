import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Params } from '../../services/params';
import { Http, HTTP_PROVIDERS } from '@angular/http';


@Component({
  templateUrl: 'build/pages/Products/products.html',
  providers : [HTTP_PROVIDERS]
})
export class ProductsPage {

  storeIdentifier = null;
  http = null;
  constructor(public navCtrl: NavController, paramsService : Params, http : Http) {
    this.navCtrl = navCtrl;
    this.http = http;
    let storeIdentifier = ['LY', 'WD'];
    this.storeIdentifier = storeIdentifier[paramsService.params["storeId"]];
  }

  fetchProducts(page = 1){

  }



}
