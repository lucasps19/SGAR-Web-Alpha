import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRiscoComponent } from './editar-risco.component';

describe('EditarRiscoComponent', () => {
  let component: EditarRiscoComponent;
  let fixture: ComponentFixture<EditarRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
