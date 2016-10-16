import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartItem, CartService } from '../../providers/cart';
import { ToastController } from 'ionic-angular';
import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';
import { Util } from '../../providers/util';
import 'rxjs/Rx';
import { Device } from 'ionic-native';
import { Params } from '../../providers/params';
import { MyCart } from '../my-cart/my-cart';


@Component({
  selector : 'product-details',
  templateUrl : 'product-details.html',
  providers : [HttpModule]
})


export class ProductDetails{
  @Input() product = null;
  toastCtrl = null;
  isInCart = null;
  http = null;
  util = null;
  uuid = null;
  paramsService = null;
  storeIdentifier = null;

  constructor(public navCtrl: NavController, params: NavParams, toastCtrl: ToastController, http : Http, util : Util, paramsService: Params){
    this.navCtrl = navCtrl;
    this.product = params.get("product");
    this.toastCtrl = toastCtrl;
    this.isInCart = false;
    this.http = http;
    this.util = util;
    this.uuid = Device.device.uuid;
    this.paramsService = paramsService;
    let storeIdentifier = ['LY', 'WD'];
    this.storeIdentifier = storeIdentifier[paramsService.params["storeId"]];
  }

  addToCart(){
    let params = {
      "uuid" : this.uuid,
      "productId" : this.product.id,
      "productName" : this.product.slug,
      "productImage" : this.product.images[0].src,
      "productPrice" : this.product.price,
      "store" : this.storeIdentifier,
      "quantity" : 1
    }
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers : headers});
    this.http.post(this.util.host + '/api/addItem', JSON.stringify(params), options)
      .subscribe((data) => {
          data = data.json()
          if(data["response"] == "success"){
            this.isInCart = true;
            this.createToast("Item added to cart", 2000);
          }
      });
    }

  checkIfItemExists(){
    this.http.get(this.util.host + '/api/checkIfExist/' + this.uuid + '/' + this.product.id)
      .subscribe((res: Response) => {
        let data = res.json()
        console.log(data)
        if(data["response"]){
          this.isInCart = true;
        }
      })
  }

  createToast(message, duration){
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  openCart(){
    this.navCtrl.setRoot(MyCart, {}, {animate : true, direction : 'forward'})
  }

  ionViewDidLoad(){
    console.log("tess")
    this.checkIfItemExists();
  }

}
