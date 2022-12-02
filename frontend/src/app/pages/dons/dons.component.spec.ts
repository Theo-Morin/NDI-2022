import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsComponent } from './dons.component';

describe('DonsComponent', () => {
  let component: DonsComponent;
  let fixture: ComponentFixture<DonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
