import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlocaliteComponent } from './addlocalite.component';

describe('AddlocaliteComponent', () => {
  let component: AddlocaliteComponent;
  let fixture: ComponentFixture<AddlocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlocaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
