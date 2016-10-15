import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { OurStores } from '../pages/our-stores/our-stores';
import { ProductsPage } from '../pages/products/products';
import { MyCart } from '../pages/my-cart/my-cart';
import { HomePage } from '../pages/home/home';

@Component({
  selector : 'app',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  pages = []
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Our Stores', component: OurStores },
      { title: 'My Cart', component: MyCart},
    ]
  }
  openPage(page){
    if(page["component"] != null){
      this.nav.setRoot(page["component"]);
    }
  }

}
