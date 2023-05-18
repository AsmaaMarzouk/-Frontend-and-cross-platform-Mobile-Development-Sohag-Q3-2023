import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveFormComponent } from './user-reactive-form.component';

describe('UserReactiveFormComponent', () => {
  let component: UserReactiveFormComponent;
  let fixture: ComponentFixture<UserReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReactiveFormComponent]
    });
    fixture = TestBed.createComponent(UserReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
