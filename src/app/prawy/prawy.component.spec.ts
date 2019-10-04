import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrawyComponent } from './prawy.component';

describe('PrawyComponent', () => {
  let component: PrawyComponent;
  let fixture: ComponentFixture<PrawyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrawyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrawyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
