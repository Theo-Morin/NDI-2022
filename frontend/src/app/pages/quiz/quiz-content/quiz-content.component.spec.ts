import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { QuizContentComponent } from './quiz-content.component';

describe('QuizContentComponent', () => {
  let component: QuizContentComponent;
  let fixture: ComponentFixture<QuizContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizContentComponent ],
      imports: [HttpClientModule, RouterTestingModule]
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
