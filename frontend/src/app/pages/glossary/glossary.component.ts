import { Component, OnInit } from '@angular/core';
import { GlossaryService } from "../../core/services/glossary.service";

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {

  glossary: any[] = []

  constructor(private glossaryService: GlossaryService) { }

  ngOnInit(): void {
    this.glossaryService.get().subscribe((glossary) => {
      for(let g in glossary) {
        this.glossary.push({ letter: g, content: glossary[g] });
      }
    })
  }
}
