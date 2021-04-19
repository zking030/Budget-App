import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyCardComponent } from './zippy-card.component';

describe('ZippyCardComponent', () => {
  let component: ZippyCardComponent;
  let fixture: ComponentFixture<ZippyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
