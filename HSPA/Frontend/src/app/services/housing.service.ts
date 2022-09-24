import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Property } from '../model/property';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getPropertyById(id: number) {
    return this.getAllPropertyList().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getAllPropertyList(SellRent?: number):Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp') || '');

        if(localProperties){
          for(const id in localProperties) {
            if(SellRent){
              if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent == SellRent){
                propertiesArray.push(localProperties[id]);
              }
            }
            else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for(const id in data) {
          if(SellRent){
            if(data.hasOwnProperty(id) && data[id].SellRent == SellRent){
              propertiesArray.push(data[id]);
            }
          }
          else{
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  addProperty(property: Property){
    let newProp = [property];

    // add new property in array if newProp already exist in the local storage
    if(localStorage.getItem('newProp')){
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp') || '')]
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  getNewPropertyId(){
    if(localStorage.getItem('PID')){
      let pid = +(localStorage.getItem('PID') || '') + 1;
      localStorage.setItem('PID', String(pid));
      return pid;
    }
    else{
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
