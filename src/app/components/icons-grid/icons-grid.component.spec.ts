import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGridComponent } from './icons-grid.component';

describe('IconsGridComponent', () => {
  let component: IconsGridComponent;
  let fixture: ComponentFixture<IconsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
