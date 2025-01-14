import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoCompraComponent } from './resumo-compra.component';

describe('ResumoCompraComponent', () => {
  let component: ResumoCompraComponent;
  let fixture: ComponentFixture<ResumoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
