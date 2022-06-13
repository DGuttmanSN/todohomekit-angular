import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderArticlesComponent } from './older-articles.component';

describe('OlderArticlesComponent', () => {
  let component: OlderArticlesComponent;
  let fixture: ComponentFixture<OlderArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlderArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlderArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
