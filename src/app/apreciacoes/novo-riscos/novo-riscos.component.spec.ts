import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoRiscosComponent } from './novo-riscos.component';

describe('RiscosComponent', () => {
  let component: NovoRiscosComponent;
  let fixture: ComponentFixture<NovoRiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoRiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
