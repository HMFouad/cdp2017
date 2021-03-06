import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectsComponent } from './listProjects.component';

describe('ListProjectsComponent', () => {
  let component: ListProjectsComponent;
  let fixture: ComponentFixture<ListProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
