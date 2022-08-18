import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(Form: NgForm){
    console.log("Congrats, you property added!");
    console.log(Form);
  }

}
