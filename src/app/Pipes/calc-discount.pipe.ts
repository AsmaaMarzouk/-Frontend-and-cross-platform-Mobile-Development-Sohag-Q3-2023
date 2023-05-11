import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountNum:number=20 ): number {
    // discountNum=50 //value = 100
    let disResNum=discountNum/100; // 50/100 = .5
    let mulOriginalPriceByDisRes=value*disResNum;// 100 * .5=50
    let sub=value-mulOriginalPriceByDisRes;//100-50=50
    return sub;
  }

}
