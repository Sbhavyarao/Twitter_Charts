import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgbarchartComponent } from './imgbarchart.component';

describe('ImgbarchartComponent', () => {
  let component: ImgbarchartComponent;
  let fixture: ComponentFixture<ImgbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
