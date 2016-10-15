import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

import 'rxjs/add/operator/map';

/*
  Generated class for the Cart provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class CartItem{
  id : number;
  productId : number;
  productName : string;
  productImage : string;
  quantity : string;
  price : number;

  constructor(productId, productName, productImage, quantity, price){
    this.productId = productId;
    this.productName = productName;
    this.productImage = productImage;
    this.quantity = quantity;
    this.price = price;
  }
}


@Injectable()
export class CartService {
  db = null;
  DB_CONFIG = null;
  constructor() {
    this.db = new SQLite();
    this.DB_CONFIG = {
      name: 'data.db',
      location: 'default' // the location field is required
    }
    this.db.openDatabase(this.DB_CONFIG).then(() => {
        this.db.executeSql('CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, productId number, productName text, productImage text, quantity number, price number)', {}).then(() => {
      });
    });
  }

  public getCart(){
    return this.db.executeSql('select * from cart')
  }

  public getCartItemByProductId(productId){
      console.log("productId" + productId)
      this.db.executeSql('select * from cart where productId=' + productId, []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
  }

  public saveItem(cartItem: CartItem){
      this.db.executeSql('INSERT INTO CART (productId, productName, productImage, quantity, price) VALUES (?,?,?,?,?)', [cartItem.productId, cartItem.productName, cartItem.productImage, cartItem.quantity, cartItem.price]).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });;
  }

  public updateQuantiy(quantity, id){
      this.db.executeSql('UPDATE CART SET quantity=' + quantity + ' WHERE id=' + id).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });;
  }

  public deleteItem(id){
          this.db.executeSql("DELETE FROM CART WHERE id=" + id).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
  }

  public emptyCart(){
      this.db.executeSql("DELETE FROM CART").then((data) => {
          console.log("INSERTED: " + JSON.stringify(data));
      }, (error) => {
          console.log("ERROR: " + JSON.stringify(error.err));
      });
  }

}
