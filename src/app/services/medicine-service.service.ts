import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { IMedicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {

  constructor(private _http : HttpClient) { }

  getAllMedicine() : Observable<IMedicine[]>{
      return this._http.get<IMedicine[]>("http://localhost:5170/api/Medicine/GetMedicines")
  }

  getMedicineById(medicineId : number) : Observable<IMedicine>{
    return this._http.get<IMedicine>(`http://localhost:5170/api/Medicine/GetMedicineById?Id=${medicineId}`)
  }

  getMedicineByCategoryId(medicineId : number){
    return this._http.get(`http://localhost:5170/api/Medicine/GetMedicineByCategoryId?id=${medicineId}`)
  }

  updateMedicine(id : number ,medicine : any){
    return this._http.put(`http://localhost:5170/api/Medicine/UpdateMedicineById?Id=${id}` , medicine)
  }

  addMedicine(medicine : IMedicine) : Observable<IMedicine>{
    return this._http.post<IMedicine>("http://localhost:5170/api/Medicine/AddMedicine" , medicine)
  }

  removeMedicine(id : any){
    return this._http.delete(`http://localhost:5170/api/Medicine/DeleteMediceById?Id=${id}`)
  }

}
