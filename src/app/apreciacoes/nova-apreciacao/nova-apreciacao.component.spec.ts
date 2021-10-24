import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaApreciacaoComponent } from './nova-apreciacao.component';

describe('NovaApreciacaoComponent', () => {
  let component: NovaApreciacaoComponent;
  let fixture: ComponentFixture<NovaApreciacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaApreciacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaApreciacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
