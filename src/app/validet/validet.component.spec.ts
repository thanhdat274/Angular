import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidetComponent } from './validet.component';

describe('ValidetComponent', () => {
  let component: ValidetComponent;
  let fixture: ComponentFixture<ValidetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
