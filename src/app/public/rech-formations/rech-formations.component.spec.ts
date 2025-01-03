import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechFormationsComponent } from './rech-formations.component';

describe('RechFormationsComponent', () => {
  let component: RechFormationsComponent;
  let fixture: ComponentFixture<RechFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechFormationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
