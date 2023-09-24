import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit{ // "ngOnInit" Angular içinde bir bileşenin görünümü ve alt görünümleri yüklendikten sonra çalışan bir yaşam döngüsü metodudur. 
  //Bu metod bileşenin ilk oluşturulduğunda çağrılır. 
  constructor(private service:SharedService){ }


  MediaList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  MediaIdFilter:string="";
  MediaAdFilter:string="";
  MediaListWithoutFilter:any=[];


  ngOnInit(): void{
    this.refreshDepList(); //component çağrıldığında çalışır.
  }
  addClick(){
    this.dep={
      MediaId:0,
      MediaAd:""
    }
   
    this.ActivateAddEditDepComp=true;
  }
  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Media Düzenle"
    this.ActivateAddEditDepComp=true;
  }
  deleteClick(item:{MediaId:any;}){
    if(confirm('Emin Misin?')){
      this.service.deleteMedia(item.MediaId).subscribe(data=>{
        alert(data.toString());
      this.refreshDepList();
      })    
    }  
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }
  refreshDepList(){ //Güncel listeyi getircek
    this.service.getDeplist().subscribe(data=>{
      this.MediaList=data;
      this.MediaListWithoutFilter=data; //verileri gncelletip gösteriyor
    });
  }
}
    

