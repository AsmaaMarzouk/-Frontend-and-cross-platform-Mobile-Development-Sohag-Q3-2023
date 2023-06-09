import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: Iproduct[];

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Wilma 6-Seater Glass Dining Table',
        price: 21500,
        quantity: 2,
        Material: 'Glass',
        categoryID: 1,
        details:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',

        prdImgURL:
          'https://media.homecentre.com/i/homecentre/162104521-162104521-HC171219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 8,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 0,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
        details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ea error similique. Molestiae aut asperiores nesciunt tenetur vel nihil cumque, consequatur, sint laudantium minus aliquam dolore voluptatibus quisquam error impedit.',
      },
    ];
  }

  getAllProds(): Iproduct[] {
    return this.productsList;
  }
  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsList.filter((product: Iproduct) =>
      product.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  // get product by id
  getProductByID(prodId: number): Iproduct | undefined {
    return this.productsList.find((prd) => prd.id == prodId);
  }

  // return array of ids

  getIDSOfProducts():number[]{
    return this.productsList.map(prd => prd.id);
  }
}
