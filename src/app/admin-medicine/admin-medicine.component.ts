import { Component } from '@angular/core';
import { MedicineServiceService } from '../services/medicine-service.service';

import { IMedicine } from '../models/medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-medicine',
  templateUrl: './admin-medicine.component.html',
  styleUrls: ['./admin-medicine.component.css']
})
export class AdminMedicineComponent {

  medicines : IMedicine[] = [];

  constructor(private _medicineService : MedicineServiceService , private _router : Router){}

  ngOnInit(){

    this._medicineService.getAllMedicine().subscribe((result)=> {
      console.log(result)
      this.medicines = result
    } , (err) => {
      console.log(err)
    })
  }

  //Remove an Item
  removeItem(id : number){

    this._medicineService.removeMedicine(id).subscribe((result) => {
      console.log(result)

      alert("Item Deleted")

      window.location.reload()
    })
  }


}
