import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWrapperComponent } from './movies-wrapper.component';

describe('MoviesWrapperComponent', () => {
  let component: MoviesWrapperComponent;
  let fixture: ComponentFixture<MoviesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
