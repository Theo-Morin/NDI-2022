import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/core/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq: any = [];
  n: number = 6;
  constructor(
    private faqService: FaqService,
  ) { }

  ngOnInit(): void {
    this.faqService.getCategories().subscribe((categories) => {
      for(let cat in categories) {
        this.faqService.get(cat).subscribe((questions) => {
          this.faq = questions;
        });
      }
    });
  }

  readMore() {
    this.n += 6;
  }

  readLess() {
    if(this.n > 6) {
      this.n -= 6;
    }
  }

}
