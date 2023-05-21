import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http : HttpClient) { }

  getAllCategory(){
    return this._http.get('http://localhost:5170/api/Category/GetAllCetegory')
  }

  getCategoryById(id : number) : Observable<ICategory>{
    return this._http.get<ICategory>(`http://localhost:5170/api/Category/GetCategoryById?id=${id}`)
  }

  addNewCategory(category : ICategory) : Observable<ICategory> {
    return this._http.post<ICategory>("http://localhost:5170/api/Category/AddNewCategory" , category)
  }

  updateCategory(id : number , category : any){
    return this._http.put(`http://localhost:5170/api/Category/UpdateCategoryById?id=${id}` , category)
  }

  deleteCategory(id : number){
    return this._http.delete(`http://localhost:5170/api/Category/DeleteCategoryById?id=${id}`)
  }
}
