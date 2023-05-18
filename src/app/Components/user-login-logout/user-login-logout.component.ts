import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-user-login-logout',
  templateUrl: './user-login-logout.component.html',
  styleUrls: ['./user-login-logout.component.scss']
})
export class UserLoginLogoutComponent implements OnInit {

  user:boolean=false;
  constructor(private userAuthser:UserAuthenService){}
  ngOnInit(): void {
    this.user=this.userAuthser.userStatus;

  }

  loginFunc(){

    this.userAuthser.login("test@gmail.com","8888");

    this.user=this.userAuthser.userStatus;
  }

  logOutFunc(){
    this.userAuthser.logout();
    this.user=this.userAuthser.userStatus;

  }
}
