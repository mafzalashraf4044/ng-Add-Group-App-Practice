import {Component} from "@angular/core";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   
})

export class AppComponent {

  groupIconsHidden: boolean = true;
  


  constructor(){
  }

  toggle(){

    if(this.groupIconsHidden){
      $("#nav-list a:not(.last-child)").fadeIn(300);
        
      this.groupIconsHidden =false;
    }else{
      $("#nav-list a:not(.last-child)").fadeOut(300);
      this.groupIconsHidden = true;        
    }

  }
   
}