import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleForComponentComponent } from './style-for-component.component';

describe('StyleForComponentComponent', () => {
  let component: StyleForComponentComponent;
  let fixture: ComponentFixture<StyleForComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleForComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleForComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
