import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLifeComponent } from './programming-life.component';

describe('ProgrammingLifeComponent', () => {
  let component: ProgrammingLifeComponent;
  let fixture: ComponentFixture<ProgrammingLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammingLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
