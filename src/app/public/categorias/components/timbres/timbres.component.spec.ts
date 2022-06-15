import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimbresComponent } from './timbres.component';

describe('TimbresComponent', () => {
  let component: TimbresComponent;
  let fixture: ComponentFixture<TimbresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimbresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
