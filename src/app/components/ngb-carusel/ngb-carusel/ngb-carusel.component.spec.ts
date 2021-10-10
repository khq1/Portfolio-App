import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCaruselComponent } from './ngb-carusel.component';

describe('NgbCaruselComponent', () => {
  let component: NgbCaruselComponent;
  let fixture: ComponentFixture<NgbCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
