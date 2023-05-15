import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOfRoutesComponent } from './group-of-routes.component';

describe('GroupOfRoutesComponent', () => {
  let component: GroupOfRoutesComponent;
  let fixture: ComponentFixture<GroupOfRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOfRoutesComponent]
    });
    fixture = TestBed.createComponent(GroupOfRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
