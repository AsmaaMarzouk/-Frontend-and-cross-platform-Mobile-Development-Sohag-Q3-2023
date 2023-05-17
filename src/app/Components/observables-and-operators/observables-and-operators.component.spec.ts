import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAndOperatorsComponent } from './observables-and-operators.component';

describe('ObservablesAndOperatorsComponent', () => {
  let component: ObservablesAndOperatorsComponent;
  let fixture: ComponentFixture<ObservablesAndOperatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablesAndOperatorsComponent]
    });
    fixture = TestBed.createComponent(ObservablesAndOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
