import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitajComponent } from './witaj.component';

describe('WitajComponent', () => {
  let component: WitajComponent;
  let fixture: ComponentFixture<WitajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
