import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueZutatComponent } from './neue-zutat.component';

describe('NeueZutatComponent', () => {
  let component: NeueZutatComponent;
  let fixture: ComponentFixture<NeueZutatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeueZutatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeueZutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
