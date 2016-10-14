import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartItem, CartService } from '../../services/cart';
import { ToastController } from 'ionic-angular';
import {PayPal, PayPalPayment, PayPalConfiguration, PayPalConfigurationOptions} from 'ionic-native';




@Component({
  templateUrl: 'build/pages/billingPage/billingPage.html',
  providers : [CartService]
})






export class BillingPage{
  cartService = null;
  toastCtrl = null;
  billing = null;
  lineItems = null;

  constructor(public navCtrl: NavController, cartService: CartService, toastCtrl: ToastController, navParams : NavParams){
    this.navCtrl = navCtrl;
    this.cartService = cartService;
    this.toastCtrl = toastCtrl;
    this.billing = {};
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
      let paymentdata = new PayPalPayment('3.33', 'USD', 'Description', 'sale');

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
