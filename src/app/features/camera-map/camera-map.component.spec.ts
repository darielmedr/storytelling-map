import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraMapComponent } from './camera-map.component';

describe('CameraMapComponent', () => {
  let component: CameraMapComponent;
  let fixture: ComponentFixture<CameraMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
