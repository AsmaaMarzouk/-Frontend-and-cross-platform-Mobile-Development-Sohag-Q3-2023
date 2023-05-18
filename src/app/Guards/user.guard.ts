import {
  CanActivateFn,
  Router,

} from '@angular/router';
import { UserAuthenService } from '../Services/user-authen.service';
import { inject } from '@angular/core';




export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthenService);
  const router = inject(Router);

  if(authService.userStatus){
    return true;
  }
  else{
    alert('Please Login First');
    router.navigate(['/login']);
    return false;
  }

};

