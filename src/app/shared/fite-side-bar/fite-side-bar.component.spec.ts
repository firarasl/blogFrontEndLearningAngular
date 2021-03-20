import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiteSideBarComponent } from './fite-side-bar.component';

describe('FiteSideBarComponent', () => {
  let component: FiteSideBarComponent;
  let fixture: ComponentFixture<FiteSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiteSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiteSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
