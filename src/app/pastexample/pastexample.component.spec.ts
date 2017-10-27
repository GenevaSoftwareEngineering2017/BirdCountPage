import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastexampleComponent } from './pastexample.component';

describe('PastexampleComponent', () => {
  let component: PastexampleComponent;
  let fixture: ComponentFixture<PastexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
