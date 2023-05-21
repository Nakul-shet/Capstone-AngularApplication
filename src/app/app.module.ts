import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicineComponent } from './medicine/medicine.component';
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { CategoryMedicineComponent } from './category-medicine/category-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { LandingComponent } from './landing/landing.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { SuccessfullComponent } from './successfull/successfull.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    MainComponent,
    MedicineComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    SummaryComponent,
    AdminMedicineComponent,
    AdminCategoryComponent,
    AddMedicineComponent,
    PageNotFoundComponent,
    CategoriesComponent,
    SearchComponent,
    CategoryMedicineComponent,
    UpdateMedicineComponent,
    LandingComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    SuccessfullComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
