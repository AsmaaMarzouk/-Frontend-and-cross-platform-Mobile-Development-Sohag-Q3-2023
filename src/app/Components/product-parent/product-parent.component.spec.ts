import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParentComponent } from './product-parent.component';

describe('ProductParentComponent', () => {
  let component: ProductParentComponent;
  let fixture: ComponentFixture<ProductParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductParentComponent]
    });
    fixture = TestBed.createComponent(ProductParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
