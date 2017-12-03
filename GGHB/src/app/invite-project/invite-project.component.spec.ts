import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteProjectComponent } from './invite-project.component';

describe('InviteProjectComponent', () => {
  let component: InviteProjectComponent;
  let fixture: ComponentFixture<InviteProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
