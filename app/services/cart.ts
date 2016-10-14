import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

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
  storage: Storage = null;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, productId number, productName text, productImage text, quantity number, price number)');
  }

  public getCart(){
    return this.storage.query("select * from cart");
  }

  public getCartItemByProductId(productId){
    return this.storage.query("select * from cart where productId=" + productId);
  }

  public saveItem(cartItem : CartItem){
    let sql = 'INSERT INTO CART (productId, productName, productImage, quantity, price) VALUES (?,?,?,?,?)';
    return this.storage.query(sql, [cartItem.productId, cartItem.productName, cartItem.productImage, cartItem.quantity, cartItem.price]);
  }

  public updateQuantiy(quantity, id){
    let sql = 'UPDATE CART SET quantity=' + quantity + ' WHERE id=' + id;
    return this.storage.query(sql);
  }

  public deleteItem(id){
    let sql = "DELETE FROM CART WHERE id=" + id;
    return this.storage.query(sql);
  }

  public emptyCart(){
    let sql = "DELETE FROM CART";
    return this.storage.query(sql);
  }
}
