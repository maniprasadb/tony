import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JioComponent } from './jio.component';

describe('JioComponent', () => {
  let component: JioComponent;
  let fixture: ComponentFixture<JioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
