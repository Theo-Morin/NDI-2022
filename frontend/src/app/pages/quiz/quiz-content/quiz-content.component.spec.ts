import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizContentComponent } from './quiz-content.component';

describe('QuizContentComponent', () => {
  let component: QuizContentComponent;
  let fixture: ComponentFixture<QuizContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
