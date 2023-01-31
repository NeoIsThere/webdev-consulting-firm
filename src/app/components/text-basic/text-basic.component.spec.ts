import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBasicComponent } from './text-basic.component';

describe('TextBasicComponent', () => {
  let component: TextBasicComponent;
  let fixture: ComponentFixture<TextBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
