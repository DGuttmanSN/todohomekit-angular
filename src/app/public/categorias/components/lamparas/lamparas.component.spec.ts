import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamparasComponent } from './lamparas.component';

describe('LamparasComponent', () => {
  let component: LamparasComponent;
  let fixture: ComponentFixture<LamparasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamparasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamparasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
