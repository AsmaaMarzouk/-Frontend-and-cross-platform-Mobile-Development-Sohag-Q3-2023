import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss']
})
export class ProductParentComponent {
  listFilter:string = '';
  prds:Iproduct[]=[];

  sortProducts(allPrdsAfterSort:any):void{

    this.prds.push(allPrdsAfterSort);
  }
}
