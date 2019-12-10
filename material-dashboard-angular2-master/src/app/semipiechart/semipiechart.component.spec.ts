import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemipiechartComponent } from './semipiechart.component';

describe('SemipiechartComponent', () => {
  let component: SemipiechartComponent;
  let fixture: ComponentFixture<SemipiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemipiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemipiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
