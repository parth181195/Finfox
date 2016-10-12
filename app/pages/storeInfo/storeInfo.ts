import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CORE_DIRECTIVES} from '@angular/common';
import { ProductsPage } from './../products/products';

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
  ionViewLoaded(){
  this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    this.logo = 'images/store1.png';
    this.description = 'For over 65 years, Northeast Building Supply in Bridgeport, CT (Formerly known as Bridgeport Lumber), has been dedicated to serving the needs of the professional building industry with a full range of building materials';
    this.showMap = false;
  }

  openProductPage(){
    this.navCtrl.setRoot(ProductsPage, {}, {animate: true, direction: 'forward'});
  }
}
