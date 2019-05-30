import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBakeComponent } from './edit-bake.component';

describe('EditBakeComponent', () => {
  let component: EditBakeComponent;
  let fixture: ComponentFixture<EditBakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
