import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarApreciacoesComponent } from './listar-apreciacoes.component';

describe('ListarApreciacoesComponent', () => {
  let component: ListarApreciacoesComponent;
  let fixture: ComponentFixture<ListarApreciacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarApreciacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarApreciacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
