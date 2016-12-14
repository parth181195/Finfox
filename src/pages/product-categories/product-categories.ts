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
  color: string;
  constructor(public navCtrl: NavController, params: NavParams, util: Util) {
    this.navCtrl = navCtrl;
    this.params = params;
    this.util = util;
    this.stores = [
       {
        "store_name" : "WEED & DURYEA",
        "linkColor" : "#562421",
        "color" : "weed_duryea"
      }, 
       {
        "store_name" : "LUMBER YARD",
        "linkColor" : " #213d34",
        "color" : "green_color"
      },
       {
        "store_name" : "KITCHEN CENTER",
        "linkColor" : " #c7c4b7",
        "color" : "kitchen_center"
      },
       {
        "store_name" : "PAINT CENTER",
        "linkColor" : " #a67733",
        "color" : "cornwall_lumber"
      },
       {
        "store_name" : "WINDOWS & DOORS",
        "linkColor" : " #47759a",
        "color" : "ABC"
      }
    ]

    this.color = this.stores[this.params.get("id") - 1]["color"];

  }

  ionViewDidLoad() {
    this.categories = this.util.storeCategories[this.stores[this.params.get("id") - 1]["store_name"]]
  }

  switchCategory(title){
    this.navCtrl.push(ProductsPage2, {"selected_category" : title, "store_name" : this.stores[this.params.get("id") - 1]["store_name"]}, {animate : true, direction : 'forward'})
  }

}
