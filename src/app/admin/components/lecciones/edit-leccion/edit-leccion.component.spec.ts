import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeccionComponent } from './edit-leccion.component';

describe('EditLeccionComponent', () => {
  let component: EditLeccionComponent;
  let fixture: ComponentFixture<EditLeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditLeccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
