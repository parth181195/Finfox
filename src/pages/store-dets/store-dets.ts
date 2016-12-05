import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Params } from '../../providers/params';
import { ProductsPage } from '../products/products';
import { ProductCategories } from '../product-categories/product-categories'
import { MyCart } from '../my-cart/my-cart'
// declare var google;
/*
  Generated class for the Models page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'store-dets',
  templateUrl: 'store-dets.html'
})
export class StoreDets {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  logo = null;
  description = null;
  showMap = null;
  stores: Array<any> = null;
  hasStore = false;
  latLng = null;
  storeId = null;
  email = null;
  address = null;
  phoneNo = null;
  title;
  color;
  linkColor;
  constructor(public navCtrl: NavController, params : NavParams, paramsService : Params) {

    this.navCtrl = navCtrl;
    this.stores = [
      { 
        "title": "WEED & DURYEA", 
        "address" : "21 Grove StreetNew Canaan, CT 06820", 
        "email" : "contact@northeastbuildingsupply.com", 
        "phoneNo" : "(203)966-2673","logoUrl": "images/store1.png", 
        "backgroundUrl": "images/back1.jpg", 
        "id": 1, 
        "hasStore": true, 
        "description": "Weed & Duryea of New Canaan has been serving lumber and building supply professionals, as well as homeowners, since 1868 at its convenient location in the heart of New Canaan.",
        "linkColor" : "#562421",
        "color" : "weed_duryea"
      },
      { "title": "LUMBER YARD", "address" : "1460 Barnum AveBridgeport, CT 06610", "email" : "contact@northeastbuildingsupply.com", "phoneNo" : "(203) 366-4757","logoUrl": "images/store2.png", "backgroundUrl": "images/back2.jpg", "id": 2, "hasStore": true, "description": "For over 65 years, Northeast Building Supply in Bridgeport, CT (Formerly known as Bridgeport Lumber), has been dedicated to serving the needs of the professional building industry with a full range of building materials",
      "linkColor" : " #213D34",
      "color" : "green_color"
      },
      { "title": "KITCHEN CENTER", "address" : "1470 Barnum Ave, Bridgeport, CT 06610", "email" : "contact@northeastbuildingsupply.com", "phoneNo" : "(203)-576-8696","logoUrl": "images/store3.png", "backgroundUrl": "images/back3.jpg", "id": 3, "hasStore": false, "description": "Located right next door to the Bridgeport Lumberyard is the Kitchen Centers of CT showroom. This is a dynamic and fast-growing solution for architects, designers, builders, and homeowners who need skilled and experienced professionals to provide design and installation solutions for new and remodeled kitchens.",
      "linkColor" : " #c7c4b7",
      "color" : "kitchen_center"      
      },
      { "title": "PAINT CENTER", "address" : "CT-4 & Kent Rd S, Cornwall Bridge, CT 06754", "email" : "contact@northeastbuildingsupply.com", "phoneNo" : "(860) 672-40","logoUrl": "images/store4.png", "backgroundUrl": "images/back4.jpg", "id": 4, "hasStore": false, "description": "Discover Weed & Duryea of Cornwall Bridge (a division of Northeast Building Supply), featuring a complete selection of tools to suit any job and a wide selection of houseware items.",
      "linkColor" : " #a67733",
      "color" : "cornwall_lumber"
      },
      { "title": "WINDOWS & DOORS", "address" : "700 Joline Ave, Long Branch, NJ 07740", "email" : "contact@northeastbuildingsupply.com", "phoneNo" : "(732) 443-4695","logoUrl": "images/store5.png", "backgroundUrl": "images/back5.jpg", "id": 5, "hasStore": false, "description": "Distribution of premium-quality custom windows and doors, professional architectural resources, design showroom",
      "linkColor" : " #47759a",
      "color" : "ABC"        
      },
    ];


    let storeId = parseInt(params.get("id")) - 1;
    let store = this.stores[storeId];
    this.logo = store["logoUrl"];
    this.description = store["description"];
    // this.hasStore = store["hasStore"];
    this.hasStore = true;
    this.latLng = store["geoLocation"];
    this.address = store["address"];
    this.email = store["email"];
    this.phoneNo = store["phoneNo"];
    this.title = store["title"];
    this.linkColor = store["linkColor"];
    this.color = store["color"];
    paramsService.params = {"storeId" : storeId};
  }



  loadMap() {
    // let mapOptions = {
    //   center: this.latLng,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // setTimeout(() => this.refresh(), 600);
  }
  refresh() {
    // google.maps.event.trigger(this.map, 'resize');
  }

  openProductPage() {
    this.navCtrl.push(ProductCategories, {"store_name" : this.title}, { animate: true, direction: 'forward' });
  }


  ionViewDidLoad() {
    console.log('Hello StoreDets');
    setTimeout(600);
    this.loadMap()
  }

  openCart(){
    this.navCtrl.setRoot(MyCart, {}, {animate : true, direction : 'forward'})
  }

}
