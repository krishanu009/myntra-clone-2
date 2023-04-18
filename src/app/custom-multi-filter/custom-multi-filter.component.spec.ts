import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultiFilterComponent } from './custom-multi-filter.component';

describe('CustomMultiFilterComponent', () => {
  let component: CustomMultiFilterComponent;
  let fixture: ComponentFixture<CustomMultiFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMultiFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMultiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
