import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNivelComponent } from './add-nivel.component';

describe('AddNivelComponent', () => {
  let component: AddNivelComponent;
  let fixture: ComponentFixture<AddNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNivelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
