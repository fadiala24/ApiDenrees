import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoutiquierComponent } from './update-boutiquier.component';

describe('UpdateBoutiquierComponent', () => {
  let component: UpdateBoutiquierComponent;
  let fixture: ComponentFixture<UpdateBoutiquierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBoutiquierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBoutiquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
