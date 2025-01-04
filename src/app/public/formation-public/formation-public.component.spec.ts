import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPublicComponent } from './formation-public.component';

describe('FormationPublicComponent', () => {
  let component: FormationPublicComponent;
  let fixture: ComponentFixture<FormationPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationPublicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
