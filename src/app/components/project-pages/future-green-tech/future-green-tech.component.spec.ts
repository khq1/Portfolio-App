import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureGreenTechComponent } from './future-green-tech.component';

describe('FutureGreenTechComponent', () => {
  let component: FutureGreenTechComponent;
  let fixture: ComponentFixture<FutureGreenTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureGreenTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureGreenTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
