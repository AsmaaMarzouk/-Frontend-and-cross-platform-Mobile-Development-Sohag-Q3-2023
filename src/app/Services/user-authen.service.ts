import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
  // boolean
isLoggedUserBehSubject:BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedUserBehSubject=new BehaviorSubject<boolean>(this.userStatus);
  }

  login(userEmail:string, userPassword:string){

    // uid
    let userToken='321123';
    localStorage.setItem("token",userToken);
    this.isLoggedUserBehSubject.next(true);
  }

  logout(){
    localStorage.removeItem("token");
    this.isLoggedUserBehSubject.next(false);
  }
  get userStatus():boolean{
  return (localStorage.getItem('token'))?true:false;
  }


  userStatusChangeWithObs():Observable<boolean>{
    return this.isLoggedUserBehSubject.asObservable();
  }
}


