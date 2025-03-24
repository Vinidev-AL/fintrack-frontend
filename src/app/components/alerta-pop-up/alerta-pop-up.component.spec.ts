import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaPopUpComponent } from './alerta-pop-up.component';

describe('AlertaPopUpComponent', () => {
  let component: AlertaPopUpComponent;
  let fixture: ComponentFixture<AlertaPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertaPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
