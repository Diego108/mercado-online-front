import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLancamentoComponent } from './cadastrar-lancamento.component';

describe('CadastrarLancamentoComponent', () => {
  let component: CadastrarLancamentoComponent;
  let fixture: ComponentFixture<CadastrarLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
