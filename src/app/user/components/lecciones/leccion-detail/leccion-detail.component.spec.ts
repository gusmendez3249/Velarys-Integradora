import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionDetailComponent } from './leccion-detail.component';

describe('LeccionDetailComponent', () => {
  let component: LeccionDetailComponent;
  let fixture: ComponentFixture<LeccionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeccionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeccionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
