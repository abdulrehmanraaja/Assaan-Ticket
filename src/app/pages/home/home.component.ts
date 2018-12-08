import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { Locations } from './mock-location';
import { Validators, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ClsSearchVehicle} from './cls-search-vehicle' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private SearchVehicle: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  locations = Locations;
 
  ngOnInit() {
    this.SearchVehicle = this.formBuilder.group({
      bookingDate: ['', [Validators.required]],
      pickupLoc: ['', [Validators.required]],
      dropoffLoc: ['', [Validators.required]],
      
  });
  }
  GetVehicles()
  {
  
console.log(this.SearchVehicle.value)
  }
}
