import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Params } from '../../services/params';
import { Util } from '../../services/util';
import { ProductDetails } from './../productDetails/productDetails';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http';
import 'rxjs/Rx';


@Component({
  templateUrl: 'build/pages/Products/products.html',
  providers : [HTTP_PROVIDERS]
})

export class ProductsPage {

  storeIdentifier = null;
  http = null;
  loadingCtrl = null;
  @Input() public products:Array<any> = [];
  util = null;
  currentPage = null;

  constructor(public navCtrl: NavController, paramsService : Params, http : Http, util : Util, loadingCtrl: LoadingController) {
    this.navCtrl = navCtrl;
    this.http = http;
    this.util = util;
    this.loadingCtrl = loadingCtrl;
    this.currentPage = 1;
    let storeIdentifier = ['LY', 'WD'];
    this.storeIdentifier = storeIdentifier[paramsService.params["storeId"]];
  }

  ngOnInit(){
    this.fetchProducts();
  }

  viewDetails(product){
    console.log(product);
    this.navCtrl.push(ProductDetails, {"product" : product});
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  doInfinite(infiniteScroll) {
    this.fetchProducts(infiniteScroll)
  }

  fetchProducts(infiniteScroll = null){
      if(this.currentPage == 1){
        this.presentLoading()
      }

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
  }



}
