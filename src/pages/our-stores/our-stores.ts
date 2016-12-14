import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreDets } from '../store-dets/store-dets';
import { MyCart } from '../my-cart/my-cart';

/*ßß
  Generated class for the OurStores page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-our-stores',
  templateUrl: 'our-stores.html'
})
export class OurStores {

  public stores:Array<Object> = null;

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    this.stores = [
      {"title"  :"HOME CENTER \n PAINT LUMBER YARD", "logoUrl" : "images/store1.png", "backgroundUrl" : "images/back1.jpg", "id" : 1, "hasStore" : true},
      {"title"  :"LUMBER YARD \n BUILDING MATERIALS", "logoUrl" : "images/store2.png", "backgroundUrl" : "images/back2.jpg", "id" : 2, "hasStore" : true},
      {"title"  :"LUMBER YARD \n BUILDING MATERIALS", "logoUrl" : "images/store3.png", "backgroundUrl" : "images/back3.jpg", "id" : 3, "hasStore" : false},
      {"title"  :"LUMBER YARD \n BUILDING MATERIALS", "logoUrl" : "images/store4.png", "backgroundUrl" : "images/back4.jpg", "id" : 4, "hasStore" : false},
      {"title"  :"LUMBER YARD \n BUILDING MATERIALS", "logoUrl" : "images/store5.png", "backgroundUrl" : "images/back5.jpg", "id" : 5, "hasStore" : false},
    ];
  }

  ionViewDidLoad() {
    console.log('Hello OurStores Page');
  }

  openStoreInfo(store){
    this.navCtrl.push(StoreDets, store);
  }

  openCart(){
    this.navCtrl.setRoot(MyCart, {}, {animate : true, direction : 'forward'})
  }

}
