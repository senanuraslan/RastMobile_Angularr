import { Component, OnInit, Input } from '@angular/core'; //OnInit, Input ekledim
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep', //bu bir şablon
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  constructor(private service:SharedService){}
  @Input() dep:any;
  MediaLink!:string;
  MediaAd!:string;
  Modell!:string;
  ActivateAddEditDepComp:boolean=false;
  MediaListWithoutFilter:any=[];
  MediaList:any=[];


  ngOnInit(): void {
    this.MediaLink=this.dep.MediaLink;
    this.MediaAd=this.dep.MediaAd;
    this.Modell=this.dep.Modell;
  }
  addMedia(){
    var val={MediaLink:this.MediaLink,
             MediaAd:this.MediaAd,
            Modell:this.Modell};
            this.service.addMedia(val).subscribe(res=>{
            alert(res.toString());
            });
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
