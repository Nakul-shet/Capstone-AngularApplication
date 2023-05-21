import { Component } from '@angular/core';
import { MedicineServiceService } from '../services/medicine-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {

  constructor(private _medicineService : MedicineServiceService , private _router : Router){}

  itemToadd : any = {
    medicineName : "",
    medicinePrice : "",
    medicineImage : "",
    medicineDescription : "",
    medicineSeller : "",
    medicineCategory : ""
  }

  addItem(){

    this._medicineService.addMedicine({
      "medicineId" : 0,
      "medicineName" : this.itemToadd.medicineName,
      "medicinePrice" : this.itemToadd.medicinePrice,
      "medicineImage" : this.itemToadd.medicineImage,
      "medicineDescription" : this.itemToadd.medicineDescription,
      "seller" : this.itemToadd.medicineSeller,
      "categoryId" : this.itemToadd.medicineCategory
    }).subscribe((result) => {
      console.log(result);
      alert("Medicine Added by the admin ")
      this._router.navigate(['/AdminDashboard'])
    })
  }

}
