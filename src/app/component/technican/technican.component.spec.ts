import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicanComponent } from './technican.component';

describe('TechnicanComponent', () => {
  let component: TechnicanComponent;
  let fixture: ComponentFixture<TechnicanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
