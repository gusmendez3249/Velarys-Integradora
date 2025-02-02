import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursoComponent } from './add-curso.component';

describe('AddCursoComponent', () => {
  let component: AddCursoComponent;
  let fixture: ComponentFixture<AddCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
