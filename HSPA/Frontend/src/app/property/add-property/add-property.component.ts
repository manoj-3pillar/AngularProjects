import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm?: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  SellRent = '1';
  currentTabId = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form Submitted');
    console.log(this.addPropertyForm);
  }

  selectPrevTab() {
    this.currentTabId = this.currentTabId - 1;
    if (this.formTabs?.tabs[this.currentTabId]) {
      this.formTabs.tabs[this.currentTabId].active = true;
    }
  }
  selectNextTab() {
    this.currentTabId = this.currentTabId + 1;
    if (this.formTabs?.tabs[this.currentTabId]) {
      this.formTabs.tabs[this.currentTabId].active = true;
    }
  }

  selectTab(tabId: number) {
    console.log(tabId);
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
      this.currentTabId = tabId;
    }
  }
}
