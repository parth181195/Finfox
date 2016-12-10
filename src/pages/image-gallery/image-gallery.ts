import { Component, Input } from '@angular/core';


@Component({
  templateUrl: './image-gallery.html',
  selector : 'image-gallery'
})
export class ImageGallery {
  images: Array<string>;
  constructor(){
    this.images = [
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-bedfordpostrichardgere__DSC1655-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-bedfordpostrichardgere__DSC1665-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-bedfordpostrichardgere__DSC1673-682x1024-682x1024.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-divito__DSC1812-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-divito__DSC1833-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-divito__DSC1834-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-frick__DSC1516-682x1024-682x1024.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-frick__DSC1526-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-frick__DSC1535-682x1024-682x1024.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-semler__DSC1853-682x1024-682x1024.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-semler__DSC1864-1024x682-1024x682.jpg",
      "http://www.nbslumber.com/architectural-building-components/wp-content/uploads/2016/10/abc-semler__DSC1877-1024x682-1024x682.jpg",
    ]
  }

}