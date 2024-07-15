import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJuegoComponent } from './edit-juego.component';

describe('EditJuegoComponent', () => {
  let component: EditJuegoComponent;
  let fixture: ComponentFixture<EditJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
