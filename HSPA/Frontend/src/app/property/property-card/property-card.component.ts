import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: Property;
  @Input() hideIcons: boolean;

  constructor() { }

  ngOnInit() {
  }

}
