import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgalleryComponent } from './productgallery.component';

describe('ProductgalleryComponent', () => {
  let component: ProductgalleryComponent;
  let fixture: ComponentFixture<ProductgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductgalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
