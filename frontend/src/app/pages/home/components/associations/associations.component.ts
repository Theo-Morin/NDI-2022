import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/core/services/organizations.service';
@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss']
})
export class AssociationsComponent implements OnInit {
  assoc: any[] = [];
  constructor(
    private organizationsService: OrganizationService
  ) {
  }

  ngOnInit(): void {
    this.organizationsService.get().subscribe((data) => {
      console.log(data);
      this.assoc = data;
    });
  }

}
