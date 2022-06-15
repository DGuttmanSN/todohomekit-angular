import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchufesComponent } from './enchufes.component';

describe('EnchufesComponent', () => {
  let component: EnchufesComponent;
  let fixture: ComponentFixture<EnchufesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchufesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchufesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
