import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginformComponent } from './user-loginform.component';

describe('UserLoginformComponent', () => {
  let component: UserLoginformComponent;
  let fixture: ComponentFixture<UserLoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoginformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
