import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OurStores } from '../pages/our-stores/our-stores';
import { StoreDets } from '../pages/store-dets/store-dets';
import { ProductsPage } from '../pages/products/products'
import { Params } from '../providers/params';
import { Util } from '../providers/util';
import { ProductDetails } from '../pages/product-details/product-details';
import { MyCart } from '../pages/my-cart/my-cart';
import { BillingPage } from '../pages/billing-page/billing-page'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OurStores, StoreDets, ProductsPage,
    ProductDetails,
    MyCart,
    BillingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OurStores,
    StoreDets,ProductsPage,
    ProductDetails,
    MyCart,
    BillingPage
  ],
  providers: [Params, Util]
})
export class AppModule {}
