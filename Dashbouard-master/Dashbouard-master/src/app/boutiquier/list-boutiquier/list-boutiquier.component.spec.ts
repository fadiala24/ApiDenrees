import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoutiquierComponent } from './list-boutiquier.component';

describe('ListBoutiquierComponent', () => {
  let component: ListBoutiquierComponent;
  let fixture: ComponentFixture<ListBoutiquierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoutiquierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoutiquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
