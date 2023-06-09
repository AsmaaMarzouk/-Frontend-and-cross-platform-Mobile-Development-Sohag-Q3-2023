import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit,OnChanges {
  // array of objects
  // productsList: Iproduct[];
  userName: string = 'hello value';
  showImage: boolean = true;

  // date
  todayDate:Date=new Date();

  // filter
  private _listFilter: string = '';
  filteredProducts: Iproduct[] = [];
  // get => convert to property //set => set property
  // Day3
 @Input() get listFilterInChild(): string {
    return this._listFilter;
  }
  set listFilterInChild(value: string) {
    this._listFilter = value;
    console.log('In setter', value);

    // console.log(this.performFilter(value));
    // this.filteredProducts = this.performFilter(value)

    // Day3
    this.filteredProducts = this.prdService.performFilter(value);
  }



  // Day3
 @Output() newProductEvent:EventEmitter<Iproduct[]>=new EventEmitter<Iproduct[]>();
//  Day3 => inject on constructor
// Day4 => inject router service
  constructor(private prdService:ProductsService,private router:Router,private prdApiService:ProductsWithApiService) {
    // intialize
    // 1 => tables , 2 => chairs , 3 => tv units
    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Wilma 6-Seater Glass Dining Table',
    //     price: 21500,
    //     quantity: 2,
    //     Material: 'Glass',
    //     categoryID: 1,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/162104521-162104521-HC171219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Top Dining Table',
    //     price: 30000,
    //     quantity: 8,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 0,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 17,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 4,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 36999,
    //     quantity: 3,
    //     prdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //   },
    // ];
  }
  ngOnChanges(): void {
    this.listFilterInChild;
  }
  ngOnInit(): void {
    // this.filteredProducts = this.productsList;
    // Day3 => use service

    // this.filteredProducts=this.prdService.getAllProds();

    // Day5

    this.prdApiService.getAllProducts().subscribe({
      next:(data)=>{

        this.filteredProducts=data;

      },
      error:(err)=>{
        console.log();

      }
    })


  }

  toggleImage() {
    this.showImage = !this.showImage;
    console.log(this.showImage);
  }

  // performFilter(filterBy: string): Iproduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.productsList.filter((product: Iproduct) =>
  //     product.name.toLocaleLowerCase().includes(filterBy)
  //   );
  // }

  sortPrd(){
    // let sortedProducts = this.productsList.sort((a,b)=>{
    //   if(a.name<b.name){
    //     return -1;
    //   }
    //   if(a.name>b.name){
    //     return 1;
    //   }
    //   return 0;
    // });
    // console.log(sortedProducts);
  // fire event

  // this.newProductEvent.emit(sortedProducts);

  }

  prdDetails(prdID:number){

    this.router.navigate(['/prd',prdID]);
  }


}
