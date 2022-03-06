import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespGalleryComponent } from './resp-gallery.component';

describe('RespGalleryComponent', () => {
  let component: RespGalleryComponent;
  let fixture: ComponentFixture<RespGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
