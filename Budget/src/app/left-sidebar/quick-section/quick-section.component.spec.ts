import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSectionComponent } from './quick-section.component';

describe('QuickSectionComponent', () => {
  let component: QuickSectionComponent;
  let fixture: ComponentFixture<QuickSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
