import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoutiquierComponent } from './add-boutiquier.component';

describe('AddBoutiquierComponent', () => {
  let component: AddBoutiquierComponent;
  let fixture: ComponentFixture<AddBoutiquierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBoutiquierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoutiquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
