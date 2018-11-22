import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailarMadeComponent } from './tailar-made.component';

describe('TailarMadeComponent', () => {
  let component: TailarMadeComponent;
  let fixture: ComponentFixture<TailarMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailarMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailarMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
