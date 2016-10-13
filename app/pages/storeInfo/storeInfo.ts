import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CORE_DIRECTIVES} from '@angular/common';
import { ProductsPage } from './../products/products';
import { Params } from '../../services/params';


declare var google;

@Component({
  templateUrl: 'build/pages/storeInfo/storeInfo.html'
})


export class StoreInfo {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  logo = null;
  description = null;
  showMap = null;
  stores: Array<any> = null;
  hasStore = false;
  latLng = null;
  storeId = null;
  ionViewLoaded() {
    setTimeout(() =>      this.map.invalidateSize(), 600);
    this.loadMap()
  }

  loadMap() {
    let mapOptions = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    setTimeout(() => this.refresh(), 600);

  }

  refresh() {
    google.maps.event.trigger(this.map, 'resize');
  }

  constructor(public navCtrl: NavController, params: NavParams, private paramsService : Params) {
    this.navCtrl = navCtrl;
    this.stores = [
      { "title": "WEED & DURYEA", "logoUrl": "images/store1.png", "backgroundUrl": "images/back1.jpg", "id": 1, "hasStore": true, "description": "Weed & Duryea of New Canaan has been serving lumber and building supply professionals, as well as homeowners, since 1868 at its convenient location in the heart of New Canaan.", "geoLocation": new google.maps.LatLng(41.143675, -73.49318) },
      { "title": "LUMBER YARD", "logoUrl": "images/store2.png", "backgroundUrl": "images/back2.jpg", "id": 2, "hasStore": true, "description": "For over 65 years, Northeast Building Supply in Bridgeport, CT (Formerly known as Bridgeport Lumber), has been dedicated to serving the needs of the professional building industry with a full range of building materials", "geoLocation": new google.maps.LatLng(41.186324, -73.162829) },
      { "title": "KITCHEN CENTER", "logoUrl": "images/store3.png", "backgroundUrl": "images/back3.jpg", "id": 3, "hasStore": false, "description": "Located right next door to the Bridgeport Lumberyard is the Kitchen Centers of CT showroom. This is a dynamic and fast-growing solution for architects, designers, builders, and homeowners who need skilled and experienced professionals to provide design and installation solutions for new and remodeled kitchens.", "geoLocation": new google.maps.LatLng(41.179018, -73.175652) },
      { "title": "PAINT CENTER", "logoUrl": "images/store4.png", "backgroundUrl": "images/back4.jpg", "id": 4, "hasStore": false, "description": "Discover Weed & Duryea of Cornwall Bridge (a division of Northeast Building Supply), featuring a complete selection of tools to suit any job and a wide selection of houseware items.", "geoLocation": new google.maps.LatLng(41.809209, -73.366825) },
      { "title": "WINDOWS & DOORS", "logoUrl": "images/store5.png", "backgroundUrl": "images/back5.jpg", "id": 5, "hasStore": false, "description": "Distribution of premium-quality custom windows and doors, professional architectural resources, design showroom", "geoLocation": new google.maps.LatLng(40.303872, -74.010291) },
    ];

    let storeId = parseInt(params.get("id")) - 1;
    let store = this.stores[storeId];
    this.storeId = storeId;
    this.logo = store["logoUrl"];
    this.description = store["description"];
    this.hasStore = store["hasStore"];
    this.latLng = store["geoLocation"];
    paramsService.params = {"storeId" : storeId};    
  }

  openProductPage() {

    this.navCtrl.setRoot(ProductsPage, { animate: true, direction: 'forward' });
  }
}
