import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-add-property-preview',
  templateUrl: './add-property-preview.component.html',
  styleUrls: ['./add-property-preview.component.css']
})
export class AddPropertyPreviewComponent implements OnInit {

  @Input() property: Property;
  @Input() hideIcons: boolean;

  constructor() { }

  ngOnInit() {
  }

}
