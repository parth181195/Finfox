import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartItem, CartService } from '../../services/cart';

@Component({
  templateUrl: 'build/pages/myCart/myCart.html',
  providers : [CartService]
})
export class MyCart {
  cartService = null;
  hasItemsInCart:boolean = null;
  cartItems:Array<any> = null;
  constructor(public navCtrl: NavController, cartService: CartService) {
    this.navCtrl = navCtrl;
    this.cartService = cartService;
    this.hasItemsInCart = false;
    this.cartService.getCart().then(data => {
      if(data.res.length > 0){
        this.hasItemsInCart = true;
        this.cartItems = data.res;
      }
    })
  }

  quantityChange(newValue, id){
    if(newValue > 0){
      this.cartService.updateQuantiy(newValue, id)
    }
  }

  removeItem(id, index){
    this.cartService.deleteItem(id);
  }

}
