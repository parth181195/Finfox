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
  color;
  constructor(public navCtrl: NavController, params: NavParams, util: Util) {
    this.navCtrl = navCtrl;
    this.params = params;
    this.util = util;
    let colors = {
     "WEED & DURYEA" : { 
        "linkColor" : "#562421",
        "color" : "weed_duryea"
      },
     "LUMBER YARD" : { 
        "linkColor" : " #a67733",
        "color" : "cornwall_lumber"
      },
     "KITCHEN CENTER" : { 
        "linkColor" : " #c7c4b7",
        "color" : "kitchen_center"
      },
     "PAINT CENTER" : { 
        "linkColor" : " #a67733",
        "color" : "cornwall_lumber"
      },
     "WINDOWS & DOORS" : { 
        "linkColor" : " #47759a",
        "color" : "ABC"
      }       
    }    

    this.color = colors[this.params.get("store_name")].color;    
    console.log(this.color);
    
  }

  ionViewDidLoad() {
    this.products = this.util.products[this.params.get("selected_category")]
  }

}
