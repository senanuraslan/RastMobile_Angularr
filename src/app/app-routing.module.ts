import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DepartmanComponent } from './media/departman.component'; //(TS-TYPESCRIPT)PERSONEL/DEPARTMAN KOMPONENTLERİNİ IMPORT ETTİM

const routes: Routes = [
  {path:'Departman',component:DepartmanComponent}  //(TS-TYPESCRIPT)PERSONEL/DEPARTMAN KOMPONENTLERİNİ IMPORT ETTİM
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
