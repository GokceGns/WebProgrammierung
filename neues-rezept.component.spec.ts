import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuesRezeptComponent } from './neues-rezept.component';

describe('NeuesRezeptComponent', () => {
  let component: NeuesRezeptComponent;
  let fixture: ComponentFixture<NeuesRezeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuesRezeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuesRezeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
