import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.scss'],
})
export class UserTemplateFormComponent {
  user: Iuser = {} as Iuser;
  constructor(private userSer: UserService, private router: Router) {}
  addUser() {
    // static data
    // let user:Iuser={
    //   id:2,
    //   firstName:"Test",
    //   lastName:"asd",
    //   email:"test@gamil.com"
    // };
    // this.user.signUpUser(user).subscribe({
    //   next:(user1)=>{
    //     this.router.navigate(['/Products']);
    //     console.log(user1);

    //   },
    //   error:(error)=>{
    //     console.log(error);

    //   }
    // })

    this.userSer.signUpUser(this.user).subscribe({
      next: (user1) => {
        this.router.navigate(['/ProductsParent']);
        console.log(user1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
