import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterGlossaryComponent } from './letter-glossary.component';

describe('ArticleComponent', () => {
  let component: LetterGlossaryComponent;
  let fixture: ComponentFixture<LetterGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterGlossaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
