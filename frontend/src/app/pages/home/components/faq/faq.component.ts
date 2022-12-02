import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/core/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq: any = [];
  constructor(
    private faqService: FaqService,
  ) { }

  ngOnInit(): void {
    this.faqService.getCategories().subscribe((categories) => {
      // this.faqService.get()
    });
  }

}
