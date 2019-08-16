import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarquiaCategoriaComponent } from './hierarquia-categoria.component';

describe('HierarquiaCategoriaComponent', () => {
  let component: HierarquiaCategoriaComponent;
  let fixture: ComponentFixture<HierarquiaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarquiaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarquiaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
