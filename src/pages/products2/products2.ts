import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Util } from '../../providers/util';

/*ßß
  Generated class for the Product2 page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product2',
  templateUrl: 'products2.html'
})
export class ProductsPage2 {

  public stores:Array<Object> = null;
  params: NavParams;
  util: Util;
  products: any;
  constructor(public navCtrl: NavController, params: NavParams, util: Util) {
    this.navCtrl = navCtrl;
    this.params = params;
    this.util = util;
  }

  ionViewDidLoad() {
    this.products = this.util.products[this.params.get("selected_category")]
  }

}
