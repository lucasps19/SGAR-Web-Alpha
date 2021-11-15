import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApreciacoesComponent } from './editar-apreciacoes.component';

describe('EditarApreciacoesComponent', () => {
  let component: EditarApreciacoesComponent;
  let fixture: ComponentFixture<EditarApreciacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarApreciacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarApreciacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
