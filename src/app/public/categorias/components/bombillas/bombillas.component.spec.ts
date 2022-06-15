import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombillasComponent } from './bombillas.component';

describe('BombillasComponent', () => {
  let component: BombillasComponent;
  let fixture: ComponentFixture<BombillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BombillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
