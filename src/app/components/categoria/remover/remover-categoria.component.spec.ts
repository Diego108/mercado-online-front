import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverCategoriaComponent } from './remover-categoria.component';

describe('RemoverCategoriaComponent', () => {
  let component: RemoverCategoriaComponent;
  let fixture: ComponentFixture<RemoverCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
