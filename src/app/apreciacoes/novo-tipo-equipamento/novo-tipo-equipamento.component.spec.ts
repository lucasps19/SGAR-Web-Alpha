import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTipoEquipamentoComponent } from './novo-tipo-equipamento.component';

describe('NovoTipoEquipamentoComponent', () => {
  let component: NovoTipoEquipamentoComponent;
  let fixture: ComponentFixture<NovoTipoEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTipoEquipamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTipoEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
