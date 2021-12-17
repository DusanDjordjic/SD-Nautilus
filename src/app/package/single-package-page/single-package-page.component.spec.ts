import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePackagePageComponent } from './single-package-page.component';

describe('SinglePackagePageComponent', () => {
  let component: SinglePackagePageComponent;
  let fixture: ComponentFixture<SinglePackagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePackagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePackagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
