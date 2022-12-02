import { Component, OnInit } from '@angular/core';
import { ButtonSize } from 'src/app/components/button/button.component';
import { TestimonyService } from 'src/app/core/services/testimony.service';

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageComponent implements OnInit {
  formActive: boolean = false;
  author: string = '';
  content: string = '';
  buttonSize = ButtonSize;
  testimonies: any = [];
  selectedTestimony: any = null;
  constructor(
    private testimonyService: TestimonyService,
  ) { }

  ngOnInit(): void {
    this.testimonyService.get().subscribe((testimonies) => {
      this.testimonies = testimonies;
      this.selectedTestimony = this.testimonies[0];
    });
  }

  sendTestimony() {
    if(this.formActive) {
      if(this.author = '') {
        this.author = 'Anonyme';
      }
      this.testimonyService.create(this.author, this.author, this.content).subscribe(() => {
        this.formActive = false;
        this.testimonies.push({
          id: this.testimonies.length,
          author: this.author,
          content: this.content
        });
      });
    }
    else {
      this.formActive = true;
    }
  }

  goNextTestimony() {
    let index = this.testimonies.indexOf(this.selectedTestimony);
    if(index < this.testimonies.length - 1) {
      this.selectedTestimony = this.testimonies[index + 1];
    }
    else {
      this.selectedTestimony = this.testimonies[0];
    }
  }

  goPreviousTestimony() {
    let index = this.testimonies.indexOf(this.selectedTestimony);
    if(index > 0) {
      this.selectedTestimony = this.testimonies[index - 1];
    }
    else {
      this.selectedTestimony = this.testimonies[this.testimonies.length - 1];
    }
  }

}
