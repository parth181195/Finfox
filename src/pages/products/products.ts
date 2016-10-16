import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/Rx';
import { Params } from '../../providers/params';
import { Util } from '../../providers/util';
import { ProductDetails } from '../product-details/product-details';
import { MyCart } from '../my-cart/my-cart';


@Component({
  templateUrl: 'products.html',
  selector : 'products-page',
  providers : [HttpModule]
})
export class ProductsPage {
  http: Http;
  storeIdentifier = null;
  currentPage = 1;
  loadingCtrl = null;
  util = null;

  @Input() products = []
  constructor(public navCtrl: NavController, http: Http, paramsService: Params, loadingCtrl: LoadingController, util : Util) {
    this.navCtrl = navCtrl;
    this.http = http;
    this.loadingCtrl = loadingCtrl;
    let storeIdentifier = ['LY', 'WD'];
    this.storeIdentifier = storeIdentifier[paramsService.params["storeId"]];
    this.util = util;
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
  }

  doInfinite(infiniteScroll) {
    this.fetchProducts(infiniteScroll)
  }


  ngOnInit(){
    this.fetchProducts()
  }

  viewDetails(product){
    console.log(product);
    this.navCtrl.push(ProductDetails, {"product" : product});
  }


  fetchProducts(infiniteScroll = null){
    console.log(this.currentPage)
    this.http.get(this.util.host + '/api/products?page=' + this.currentPage + '&store=' + this.storeIdentifier)
      .map((res:Response) => res.json()["response"])
      .subscribe(
        data => {
          this.products = this.products.concat(data);
          console.log(this.products);
          this.currentPage += 1;
          if(infiniteScroll != null){
            infiniteScroll.complete();
          }
        },
        err => { console.log(err); },
        () => console.log("done")
      )
      if(this.currentPage == 1){
        this.presentLoading()
      }
  }
  openCart(){
    this.navCtrl.setRoot(MyCart, {}, {animate : true, direction : 'forward'})
  }
}
