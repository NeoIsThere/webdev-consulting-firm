import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsAnimComponent } from './arrows-anim.component';

describe('ArrowsAnimComponent', () => {
  let component: ArrowsAnimComponent;
  let fixture: ComponentFixture<ArrowsAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowsAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
