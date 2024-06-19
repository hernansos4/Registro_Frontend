import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenClasesPageComponent } from './resumen-clases-page.component';

describe('ResumenClasesPageComponent', () => {
  let component: ResumenClasesPageComponent;
  let fixture: ComponentFixture<ResumenClasesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenClasesPageComponent]
    });
    fixture = TestBed.createComponent(ResumenClasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
