import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NordschleifeComponent } from './nordschleife.component';

describe('NordschleifeComponent', () => {
  let component: NordschleifeComponent;
  let fixture: ComponentFixture<NordschleifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NordschleifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NordschleifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
