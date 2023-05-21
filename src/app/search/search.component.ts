import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineServiceService } from '../services/medicine-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  medicines : any[] = []
  searchItem : any = "";
  searchResult : any[] = []
  noneMessage : any = "";

  constructor(private _router : Router , private _medicineService : MedicineServiceService){}

  ngOnInit(){

    this._medicineService.getAllMedicine().subscribe((result) => {
      this.medicines = result
    })
  }

  handleSearch(){
    this.noneMessage = ""
    this.searchResult = []
    if(this.searchItem != ""){
      
      this.medicines.map((item) => {
        if(item.medicineName.includes(this.searchItem)){
          this.searchResult.push(item)
        } 
      })
    }else{
      this.noneMessage = "Please enter the food name"
      return
    }

    if(this.searchResult.length === 0){
      this.noneMessage = "Sorry , Your Search is Unavailable"
    }
  }

}
