import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Params provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Params{
    params = {};
    constructor(){
        console.log("Params()");
        this.params={};
    }
}
