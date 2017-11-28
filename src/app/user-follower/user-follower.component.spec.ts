import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowerComponent } from './user-follower.component';

describe('UserFollowerComponent', () => {
  let component: UserFollowerComponent;
  let fixture: ComponentFixture<UserFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
