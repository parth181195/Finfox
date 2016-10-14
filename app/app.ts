import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/home/home';
import { OurStores } from './pages/ourStores/ourStores'
import { ProductsPage } from './pages/products/products'
import { MyCart } from './pages/myCart/myCart'
import { OrdersPage } from './pages/orders/orders'
import { ProductDetails } from './pages/productDetails/productDetails'
import { Modelspage } from './pages/models/models'
import { Params } from './services/params';
import { Util } from './services/util';

@Component({
  templateUrl: 'build/app.html',
})
export class MyApp {

  public rootPage: any;
  @ViewChild(Nav) nav: Nav;
  pages = null;
  constructor(private platform: Platform) {
    this.rootPage = HomePage;

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Our Stores', component: OurStores },
      { title: 'Orders', component: OrdersPage},
      { title: 'Modelspage', component: Modelspage},
      { title: 'ProductDetails', component: ProductDetails},
      { title: 'MyCart', component: MyCart},
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleLightContent();
    });
  }

  openPage(page){
    if(page["component"] != null){
      this.nav.setRoot(page["component"]);
    }
  }
}

ionicBootstrap(MyApp, [Params, Util]);
