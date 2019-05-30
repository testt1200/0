import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBakeComponent } from './add-bake.component';

describe('AddBakeComponent', () => {
  let component: AddBakeComponent;
  let fixture: ComponentFixture<AddBakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
