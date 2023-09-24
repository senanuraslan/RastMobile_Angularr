import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmanComponent } from './media/departman.component';
import { ShowDepComponent} from './media/show-dep/show-dep.component';
import { AddEditDepComponent } from './media/add-edit-dep/add-edit-dep.component';
import { SharedService } from './shared.service'; //SRC-APP-APP.MODULE.TS’DE SHAREDSERVİCE DÜZENLEMESİ YAPTIM
//	GEREKLİ SERVİS MODÜLLERİNİ DE APP.MODULE.TS IMPORT ETTİM
import{HttpClientModule} from '@angular/common/http'; //modül import ettim
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //modül import ettim
import { DxDataGridModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    DepartmanComponent,
    ShowDepComponent,
    AddEditDepComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//ekleme yaptım
    FormsModule,//ekleme yaptım
    ReactiveFormsModule,//ekleme yaptım
    DxDataGridModule

  ],
  providers: [SharedService], //içini doldurdum. servis sağlayıcı
  bootstrap: [AppComponent]
})
export class AppModule { }
