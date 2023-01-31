import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesMapComponent } from './acces-map.component';

describe('AccesMapComponent', () => {
  let component: AccesMapComponent;
  let fixture: ComponentFixture<AccesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
