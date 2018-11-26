import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { Locations } from './mock-location';
import { FormsModule} from '@angular/forms';
import { ClsSearchVehicle} from './cls-search-vehicle' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  locations = Locations;
  userModel = new ClsSearchVehicle('10/12/2018',2,3);
  ngOnInit() {
  }

}
