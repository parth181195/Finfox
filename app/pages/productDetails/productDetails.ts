import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CartItem, CartService } from '../../services/cart';

@Component({
  templateUrl: 'build/pages/productDetails/productDetails.html',
  providers : [CartService]
})
export class ProductDetails {

  @Input() product = null;
  toastCtrl = null;
  isInCart = null;
  cartService = null;
  constructor(public navCtrl: NavController, params: NavParams, toastCtrl: ToastController, cartService: CartService) {
    this.navCtrl = navCtrl;
    this.cartService = cartService;
    this.product = params.get("product");
    this.toastCtrl = toastCtrl;
    this.isInCart = false;
    this.cartService.getCartItemByProductId(this.product.id).then(data => {
      console.log(data)
      if(data.res.rows.length > 0){
        this.isInCart = true
        console.log("yesss");
      }
    });
    console.log(this.product);
  }

  addToCart(){
    let cartItem = new CartItem(this.product.id, this.product.slug, this.product.images[0].src, 1);
    this.cartService.saveItem(cartItem);
    this.createToast("Added To Cart", 2000);
  }

  openCart(){
    // open cart page when done
  }

  createToast(message, duration){
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }


}
