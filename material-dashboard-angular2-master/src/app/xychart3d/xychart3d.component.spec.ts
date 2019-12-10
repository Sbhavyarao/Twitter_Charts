import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XYchart3dComponent } from './xychart3d.component';

describe('XYchart3dComponent', () => {
  let component: XYchart3dComponent;
  let fixture: ComponentFixture<XYchart3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XYchart3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XYchart3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
