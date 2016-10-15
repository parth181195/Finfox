import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, HttpModule, Response, RequestOptions, Headers} from '@angular/http';
import { Util } from '../../providers/util';
import { Device } from 'ionic-native';
import { BillingPage } from '../billing-page/billing-page'



@Component({
  templateUrl: 'my-cart.html',
  selector : 'my-cart',
  providers : [HttpModule]
})
export class MyCart {
   hasItemsInCart:boolean = null;
   http = null;
   util = null;
   uuid = null;
   @Input() cartItems:Array<any> = [];
  constructor(public navCtrl: NavController, util: Util, http: Http) {
    this.navCtrl = navCtrl;
    this.hasItemsInCart = false;
    this.http = http;
    this.util = util;
    this.uuid = Device.device.uuid;
    console.log(util);
    this.http.get(this.util.host + '/api/cart/' + this.uuid)
      .map((res: Response) => res.json()["response"])
      .subscribe(
        data => {
          this.cartItems = data
          console.log(data);
        }
      )
    // this.cartService.getCart().then(data => {
    //   console.log(data)
    //   if(data.res.rows.length > 0){
    //     this.hasItemsInCart = true;
    //     // this.cartItems = data.res.rows;
    //     console.log(this.cartItems)
    //     for(let i=0; i < data.res.rows.length; i++){
    //       this.cartItems.push(data.res.rows[i]);
    //     }
    //   }
    // })
  }

  increment(cartItem){
    console.log(cartItem);
    cartItem.quantity += 1;
    this.quantityChange(cartItem.quantity, cartItem.productId);
  }

  decrement(cartItem){
    if(cartItem.quantity > 1){
      cartItem.quantity -= 1;
      this.quantityChange(cartItem.quantity, cartItem.productId)
    }
  }

  quantityChange(newValue, id){
    console.log(newValue)
    console.log(id)
    if(newValue > 0){
      // this.cartService.updateQuantiy(newValue, id)
      let params = {
        "productId" : id,
        "uuid" : this.uuid,
        "quantity" : newValue,
      }

      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers : headers});
      this.http.post(this.util.host + '/api/updateQuantity', JSON.stringify(params), options)
        .subscribe((data) => {
          console.log(data);
        })
    }
  }

  removeItem(id, index){
    this.cartItems.splice(index, 1)
    // this.cartService.deleteItem(id);
  }

  checkout(){
    let lineItems = []
    for(let i=0;i<this.cartItems.length;i++){
      let cartItem = this.cartItems[i];
      lineItems.push({"product_id" : cartItem.productId, "quantity" : cartItem.quantity, "price" : cartItem.price});
    }
    this.navCtrl.push(BillingPage, {"lineItems" : lineItems});
  }

}
