import {Component} from "@angular/core";

//Serivce
import {GroupList} from './grouplist.service';

@Component({
  selector: 'home',
  templateUrl: './addgroup.component.html',
  styles: [`
    #mainPanel{box-shadow: 0 0 2px 1px #bfc0c1;
               background-color: white;
               height: 77vh;
               overflow-y: scroll;
               padding-bottom: 20px;}

     #mainPanel h1{color: #C8C8C8;}  

     #mainPanel::-webkit-scrollbar {
        width: 0.5em;
     }
    
     #mainPanel::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
     }
    
     #mainPanel::-webkit-scrollbar-thumb {
       background-color: darkgrey;
       outline: 1px solid slategrey;
     }

    div.form-group{width: 100%;}
  
    .form-group > div{display: inline-block; width: 100%;}

    .input{border: none;
           outline: none;
           box-shadow: none;
           border-radius: 0px;
           border-bottom: 1px solid #bfc0c1;
           margin-bottom: 30px;
           padding-top: 15px;}

    .input-block{display: block;
                 width: 100%;}
                  
    .input:focus{border-bottom: 2px solid blue;}

    div.alert.alert-danger{padding: 6px;}
    div.alert.alert-success{padding: 6px;
                            margin-top: 15px;}

    -webkit-autofill{background-color: white;}
    
  `]
})

export class AddGroup {
  groupAdded: boolean = false;
  user: string = "afzal";
  groupId = 4;

  constructor(private groupList: GroupList){
    this.groupId++;
  }
  
  onSubmit(value){
    this.groupList.addGroup(value);
    this.groupAdded = true;
  }   
}