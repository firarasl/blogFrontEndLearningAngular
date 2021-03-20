import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { ListSubfitesComponent } from './list-subfites.component';

describe('ListSubfitesComponent', () => {
  let component: ListSubfitesComponent;
  let fixture: ComponentFixture<ListSubfitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubfitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubfitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
