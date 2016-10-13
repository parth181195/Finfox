import {Injectable} from '@angular/core';

@Injectable()
export class Params{
    params = {};
    constructor(){
        console.log("Params()");
        this.params={};
    }
}
