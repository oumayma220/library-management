import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtestComponent } from './ltest.component';

describe('LtestComponent', () => {
  let component: LtestComponent;
  let fixture: ComponentFixture<LtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
