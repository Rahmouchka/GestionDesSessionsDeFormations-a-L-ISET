import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidatsComponent } from './liste-candidats.component';

describe('ListeCandidatsComponent', () => {
  let component: ListeCandidatsComponent;
  let fixture: ComponentFixture<ListeCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeCandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
