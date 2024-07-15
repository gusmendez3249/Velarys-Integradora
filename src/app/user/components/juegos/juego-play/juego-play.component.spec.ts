import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPlayComponent } from './juego-play.component';

describe('JuegoPlayComponent', () => {
  let component: JuegoPlayComponent;
  let fixture: ComponentFixture<JuegoPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
