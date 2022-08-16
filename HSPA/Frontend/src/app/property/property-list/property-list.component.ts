
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertyList: Array<IProperty>;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
   this.housingService.getAllPropertyList().subscribe(
      data => {
        this.PropertyList = data,
        console.log(data);
      }, error => console.log(error)
    );
  }

}
