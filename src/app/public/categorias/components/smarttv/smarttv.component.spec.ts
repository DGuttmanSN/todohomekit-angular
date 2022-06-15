import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarttvComponent } from './smarttv.component';

describe('SmarttvComponent', () => {
  let component: SmarttvComponent;
  let fixture: ComponentFixture<SmarttvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmarttvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmarttvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
