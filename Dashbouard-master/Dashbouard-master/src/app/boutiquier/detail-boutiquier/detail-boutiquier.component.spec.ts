import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoutiquierComponent } from './detail-boutiquier.component';

describe('DetailBoutiquierComponent', () => {
  let component: DetailBoutiquierComponent;
  let fixture: ComponentFixture<DetailBoutiquierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBoutiquierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoutiquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
