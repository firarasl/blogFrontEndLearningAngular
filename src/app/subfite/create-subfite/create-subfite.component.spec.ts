import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubfiteComponent } from './create-subfite.component';
 
describe('CreateSubfiteComponent', () => {
  let component: CreateSubfiteComponent;
  let fixture: ComponentFixture<CreateSubfiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubfiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubfiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
