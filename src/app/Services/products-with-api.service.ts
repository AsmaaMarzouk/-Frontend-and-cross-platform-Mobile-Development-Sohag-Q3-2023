import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {
  // Day5
  constructor(private httpclient: HttpClient) {}
  getAllProducts(): Observable<Iproduct[]> {
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/products')
    return this.httpclient.get<Iproduct[]>(`${environment.APIURL}/products`);
  }

  // getproductById
  getPrdByID(prdID: number): Observable<Iproduct> {
    return this.httpclient.get<Iproduct>(
      `${environment.APIURL}/products/${prdID}`
    );
    // .pipe(retry(2),catchError((err)=>{
    //   return throwError(()=>{
    //     return new Error("Error occurred while get product by id");
    //   });
    // }));
  }

  // querystring
  searchByPrdMaterial(mat: string): Observable<Iproduct[]> {
    return this.httpclient
      .get<Iproduct[]>(`${environment.APIURL}/products?Material=${mat}`)
      .pipe(
        retry(2),
        catchError((err) => {
          return throwError(() => {
            return new Error('Error occurred while searching');
          });
        })
      );
  }
}
