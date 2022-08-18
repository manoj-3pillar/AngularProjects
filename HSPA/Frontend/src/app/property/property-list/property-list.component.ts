
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  PropertyList: IProperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means we are on rent-property url else we are on base url
    }
   this.housingService.getAllPropertyList(this.SellRent).subscribe(
      data => {
        this.PropertyList = data,
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      }, error => console.log(error)
    );
  }

}
