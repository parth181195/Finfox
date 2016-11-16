import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Util } from '../../providers/util';
import { ProductsPage2 } from '../products2/products2';

/*ßß
  Generated class for the products2 page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-categories',
  templateUrl: 'product-categories.html'
})
export class ProductCategories {

  public stores:Array<Object> = null;
  params: NavParams;
  util: Util;
  categories: any;
  constructor(public navCtrl: NavController, params: NavParams, util: Util) {
    this.navCtrl = navCtrl;
    this.params = params;
    this.util = util;
  }

  ionViewDidLoad() {
    this.categories = this.util.storeCategories[this.params.get("store_name")]
  }

  switchCategory(title){
    this.navCtrl.push(ProductsPage2, {"selected_category" : title}, {animate : true, direction : 'forward'})
  }

}
