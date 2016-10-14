import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartItem, CartService } from '../../services/cart';
import { BillingPage } from '../billingPage/billingPage';

@Component({
  templateUrl: 'build/pages/myCart/myCart.html',
  providers : [CartService]
})
export class MyCart {
   cartService = null;
   hasItemsInCart:boolean = null;
   @Input() cartItems:Array<any> = [];
  constructor(public navCtrl: NavController, cartService: CartService) {
    this.navCtrl = navCtrl;
    this.cartService = cartService;
    this.hasItemsInCart = false;
    this.cartService.getCart().then(data => {
      console.log(data)
      if(data.res.rows.length > 0){
        this.hasItemsInCart = true;
        // this.cartItems = data.res.rows;
        console.log(this.cartItems)
        for(let i=0; i < data.res.rows.length; i++){
          this.cartItems.push(data.res.rows[i]);
        }
      }
    })
  }

  increment(cartItem){
    console.log(cartItem);
    cartItem.quantity += 1;
    this.quantityChange(cartItem.quantity, cartItem.id);
  }

  decrement(cartItem){
    if(cartItem.quantity > 1){
      cartItem.quantity -= 1;
      this.quantityChange(cartItem.quantity, cartItem.id)
    }
  }

  quantityChange(newValue, id){
    if(newValue > 0){
      this.cartService.updateQuantiy(newValue, id)
    }
  }

  removeItem(id, index){
    this.cartService.deleteItem(id);
    this.cartItems.splice(index, 1)
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
