import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UselessComponent } from './useless.component';

describe('UselessComponent', () => {
  let component: UselessComponent;
  let fixture: ComponentFixture<UselessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UselessComponent]
    });
    fixture = TestBed.createComponent(UselessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
