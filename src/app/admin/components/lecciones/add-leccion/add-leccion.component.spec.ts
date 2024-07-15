import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeccionComponent } from './add-leccion.component';

describe('AddLeccionComponent', () => {
  let component: AddLeccionComponent;
  let fixture: ComponentFixture<AddLeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLeccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
