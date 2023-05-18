import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginLogoutComponent } from './user-login-logout.component';

describe('UserLoginLogoutComponent', () => {
  let component: UserLoginLogoutComponent;
  let fixture: ComponentFixture<UserLoginLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginLogoutComponent]
    });
    fixture = TestBed.createComponent(UserLoginLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
