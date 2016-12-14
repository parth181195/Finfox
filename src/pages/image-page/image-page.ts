import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageGallery } from '../image-gallery/image-gallery'

@Component({
  templateUrl: './image-page.html',
  selector : 'image-page'
})
export class ImagePage {
    image;
    constructor(private navCtrl: NavController,private navParams: NavParams){
    this.navCtrl = navCtrl;
    this.image = navParams.get("image");
  }
}