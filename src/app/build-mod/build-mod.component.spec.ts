import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildModComponent } from './build-mod.component';

describe('BuildModComponent', () => {
  let component: BuildModComponent;
  let fixture: ComponentFixture<BuildModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildModComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
