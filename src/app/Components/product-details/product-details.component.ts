import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0;
  // product!:Iproduct;//! => non null assertion operator => 12
  // product:Iproduct = {} as Iproduct;
  product: Iproduct | undefined = undefined;
  // product:Iproduct | null = null;

  // product ids
  productIDSArr: number[] = [];

  //
  returnedCurrentIndex: number = 0;

  // Day5
  // prdsResult after search
  prdsResultAfterSearch: Iproduct[] = [];
  constructor(
    private prdService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productapiService: ProductsWithApiService,
    private location: Location
  ) {}
  ngOnInit(): void {
    // convert string to number => parseInt() ,Number(), + , property as number
    //    this.prdID= (this.activatedRoute.snapshot.paramMap.get('productID'))?Number(this.activatedRoute.snapshot.paramMap.get('productID')):0;
    //   //  console.log(this.prdID);
    //  let resultOfFoundedPrd = this.prdService.getProductByID(this.prdID);
    //     if (resultOfFoundedPrd) {
    //       this.product = resultOfFoundedPrd;
    //     } else {
    //       alert('Product not found');
    //     }

    //  console.log(this.product);

    this.productIDSArr = this.prdService.getIDSOfProducts();
    console.log(this.productIDSArr);

    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = params.get('productID')
        ? Number(params.get('productID'))
        : 0;

      // let resultOfFoundedPrd = this.prdService.getProductByID(this.prdID);

      // if (resultOfFoundedPrd) {
      //   this.product = resultOfFoundedPrd;
      // } else {
      //   alert('Product not found');
      // }

      // day5
      this.productapiService.getPrdByID(this.prdID).subscribe((data) => {
        this.product = data;
        // console.log(this.product);
      });
    });
  }

  BackToHome() {
    this.router.navigate(['Products']);

    // Day5
    // this.location.back();
  }

  prevFunc() {
    this.returnedCurrentIndex = this.productIDSArr.indexOf(this.prdID);
    // this.returnedCurrentIndex= this.productIDSArr.findIndex(prd=>prd==this.prdID);
    // console.log(this.returnedCurrentIndex);
    this.router.navigate([
      '/prd',
      this.productIDSArr[--this.returnedCurrentIndex],
    ]);
  }
  nextFunc() {
    this.returnedCurrentIndex = this.productIDSArr.indexOf(this.prdID);
    this.router.navigate([
      '/prd',
      this.productIDSArr[++this.returnedCurrentIndex],
    ]);
  }

  // Day5
  searchWithMaterail(searchVal: any) {
    this.productapiService.searchByPrdMaterial(searchVal).subscribe((data) => {
      this.prdsResultAfterSearch = data;
    });
  }
}
