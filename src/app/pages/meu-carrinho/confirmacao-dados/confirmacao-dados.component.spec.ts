import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoDadosComponent } from './confirmacao-dados.component';

describe('ConfirmacaoIdentificacaoComponent', () => {
  let component: ConfirmacaoDadosComponent;
  let fixture: ComponentFixture<ConfirmacaoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
