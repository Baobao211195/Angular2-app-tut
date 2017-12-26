import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuidInDirectiveComponent } from './buid-in-directive.component';

describe('BuidInDirectiveComponent', () => {
  let component: BuidInDirectiveComponent;
  let fixture: ComponentFixture<BuidInDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuidInDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuidInDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
