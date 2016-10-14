import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

export class CartItem{
  id : number;
  productId : number;
  productName : string;
  productImage : string;
  quantity : string;

  constructor(productId, productName, productImage, quantity){
    this.productId = productId
    this.productName = productName
    this.productImage = productImage
    this.quantity = quantity
  }
}

@Injectable()
export class CartService {
  storage: Storage = null;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, productId number, productName text, productImage text, quantity number)');
  }

  public getCart(){
    return this.storage.query("select * from cart");
  }

  public getCartItemByProductId(productId){
    return this.storage.query("select * from cart where productId=" + productId);
  }

  public saveItem(cartItem : CartItem){
    let sql = 'INSERT INTO CART (productId, productName, productImage, quantity) VALUES (?,?,?,?)';
    return this.storage.query(sql, [cartItem.productId, cartItem.productName, cartItem.productImage, cartItem.quantity]);
  }

  public updateQuantiy(quantity, id){
    let sql = 'UPDATE CART SET quantity=' + quantity + 'WHERE id=' + id;
    return this.storage.query(sql);
  }

  public deleteItem(id){
    let sql = "DELETE FROM CART WHERE id=" + id;
    return this.storage.query(sql);
  }
}
