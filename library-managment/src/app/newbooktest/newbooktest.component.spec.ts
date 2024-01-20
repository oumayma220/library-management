import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbooktestComponent } from './newbooktest.component';

describe('NewbooktestComponent', () => {
  let component: NewbooktestComponent;
  let fixture: ComponentFixture<NewbooktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbooktestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbooktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
