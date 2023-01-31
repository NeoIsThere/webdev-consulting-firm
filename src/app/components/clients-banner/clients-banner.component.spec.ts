import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsBannerComponent } from './clients-banner.component';

describe('ClientsBannerComponent', () => {
  let component: ClientsBannerComponent;
  let fixture: ComponentFixture<ClientsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
