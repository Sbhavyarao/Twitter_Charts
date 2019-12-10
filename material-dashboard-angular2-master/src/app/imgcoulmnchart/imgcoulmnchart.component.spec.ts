import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcoulmnchartComponent } from './imgcoulmnchart.component';

describe('ImgcoulmnchartComponent', () => {
  let component: ImgcoulmnchartComponent;
  let fixture: ComponentFixture<ImgcoulmnchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcoulmnchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcoulmnchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
