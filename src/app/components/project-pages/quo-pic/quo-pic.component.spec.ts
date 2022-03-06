import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoPicComponent } from './quo-pic.component';

describe('QuoPicComponent', () => {
  let component: QuoPicComponent;
  let fixture: ComponentFixture<QuoPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
