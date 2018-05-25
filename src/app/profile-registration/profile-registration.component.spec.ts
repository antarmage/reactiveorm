import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRegistrationComponent } from './profile-registration.component';

describe('ProfileRegistrationComponent', () => {
  let component: ProfileRegistrationComponent;
  let fixture: ComponentFixture<ProfileRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
