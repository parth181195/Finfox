import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreInfo } from './../storeInfo/storeInfo';


@Component({
  templateUrl: 'build/pages/ourStores/ourStores.html'
})
export class OurStores {

  public stores:Array<Object> = null;

  openStoreInfo(store){
    this.navCtrl.push(StoreInfo, store);
  }

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    this.stores = [
      {"title"  :"WEED & DURYEA", "logoUrl" : "images/store1.png", "backgroundUrl" : "images/back1.jpg", "id" : 1, "hasStore" : true},
      {"title"  :"LUMBER YARD", "logoUrl" : "images/store2.png", "backgroundUrl" : "images/back2.jpg", "id" : 2, "hasStore" : true},
      {"title"  :"KITCHEN CENTER", "logoUrl" : "images/store3.png", "backgroundUrl" : "images/back3.jpg", "id" : 3, "hasStore" : false},
      {"title"  :"PAINT CENTER", "logoUrl" : "images/store4.png", "backgroundUrl" : "images/back4.jpg", "id" : 4, "hasStore" : false},
      {"title"  :"WINDOWS & DOORS", "logoUrl" : "images/store5.png", "backgroundUrl" : "images/back5.jpg", "id" : 5, "hasStore" : false},
    ];
  }
}
