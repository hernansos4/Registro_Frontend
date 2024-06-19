import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClasesPageComponent } from './registro-clases-page.component';

describe('RegistroClasesPageComponent', () => {
  let component: RegistroClasesPageComponent;
  let fixture: ComponentFixture<RegistroClasesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroClasesPageComponent]
    });
    fixture = TestBed.createComponent(RegistroClasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
