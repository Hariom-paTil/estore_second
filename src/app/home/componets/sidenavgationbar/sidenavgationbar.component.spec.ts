import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavgationbarComponent } from './sidenavgationbar.component';

describe('SidenavgationbarComponent', () => {
  let component: SidenavgationbarComponent;
  let fixture: ComponentFixture<SidenavgationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavgationbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavgationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
