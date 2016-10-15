import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {PayPal, PayPalPayment, PayPalConfiguration} from "ionic-native";
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { Util } from '../../providers/util';
import { Device } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { OurStores } from '../our-stores/our-stores';


@Component({
  templateUrl: 'billing-page.html',
  providers : [HttpModule]
})

export class BillingPage{
  cartService = null;
  toastCtrl = null;
  billing = null;
  lineItems = null;
  http = null;
  util = null;
  alertCtrl = null;

  constructor(public navCtrl: NavController, toastCtrl: ToastController, navParams : NavParams, http: Http, util: Util, alertCtrl : AlertController){
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.billing = {};
    this.http = http;
    this.util = util;
    this.alertCtrl = alertCtrl;
    this.lineItems = navParams.get("lineItems");
  }

  checkout(){
    if(this.billing.firstName == null){
      this.createToast("First Name cannot be left blank", 2000);
    }
    else if(this.billing.lastName == null){
      this.createToast("Last Name cannot be left blank", 2000);
    }
    else if(this.billing.Address1 == null){
      this.createToast("Address cannot be left blank", 2000);
    }
    else if(this.billing.postalCode == null){
      this.createToast("Post Code cannot be left blank", 2000);
    }
    else{
      // AecS9a7a31JKUa_NK_lb-_CVhpqWhUnMW27-VpTyX6vqt7wehO3T7NxGsZg7ygnuIGgP7Dd4Q9jWV3pb
      // let paymentdata = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
      let total = 0
      for(let i = 0; i<this.lineItems.length; i++){
        total += (parseFloat(this.lineItems[i].price) * parseFloat(this.lineItems[i].quantity))
      }
      PayPal.init({
  "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
  "PayPalEnvironmentSandbox": "AecS9a7a31JKUa_NK_lb-_CVhpqWhUnMW27-VpTyX6vqt7wehO3T7NxGsZg7ygnuIGgP7Dd4Q9jWV3pb"
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  PayPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment(total.toString(), 'USD', 'NSB checkout', 'sale');
    PayPal.renderSinglePaymentUI(payment).then(() => {
      // Successfully paid
        console.log("Successfully paid")
        let uuid = Device.device.uuid;
        let params = {
          "payment_method" : "paypal",
          "billing" : {
            "first_name": this.billing.firstName,
            "last_name": this.billing.lastName,
            "address_1": this.billing.Address1,
            "address_2": this.billing.Address2,
            "postcode": this.billing.postalCode,
          },
          "line_Items" : this.lineItems,
          "uuid" : uuid
        }
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers : headers});

        this.http.post(this.util.host + '/api/orders', JSON.stringify(params), options)
          .subscribe((data) => {
          let alert = this.alertCtrl.create({
              title: 'Payment Successful!',
              subTitle: 'We have recived your paymen thanks for shopping with us!',
              buttons: [
                 {
                   "text" : 'OK',
                   "handler" : data => {
                     this.navCtrl.setRoot(OurStores)
                   }
                 }
              ]
            });
            alert.present();
        });

      // Example sandbox response
      //
      // {
      //   "client": {
      //     "environment": "sandbox",
      //     "product_name": "PayPal iOS SDK",
      //     "paypal_sdk_version": "2.16.0",
      //     "platform": "iOS"
      //   },
      //   "response_type": "payment",
      //   "response": {
      //     "id": "PAY-1AB23456CD789012EF34GHIJ",
      //     "state": "approved",
      //     "create_time": "2016-10-03T13:33:33Z",
      //     "intent": "sale"
      //   }
      // }
    }, () => {
      // Error or render dialog closed without being successful
      console.log("Successfully paid")
    });
  }, () => {
    // Error in configuration
    console.log("Successfully paid")
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
  console.log("Successfully paid")
});





    }

  }

  createToast(message, duration){
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
