import {Component} from "@angular/core";

//Serivce
import {GroupList} from './grouplist.service';


declare var firebase: any;
@Component({
  selector: 'join-group',
  templateUrl: './joingroup.component.html',
  styles: [`
    #mainPanel{box-shadow: 0 0 2px 1px #bfc0c1;
               background-color: white;
               height: 77vh;
               overflow-y: scroll;}
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

    #searchIcon{font-size: 2em; padding: 0.4em; color: #6a6a6a;}

    input#search, input#search:focus{border: none;
                                     outline: none;
                                     font-size: 1.8em;
                                     box-shadow: none;}

    #searchBox>*{display: inline-block;}

    #searchBox{border-bottom: 1px solid lightgrey;
               padding: 0.5em;
               text-align: center;}
}    
  `]
})

export class JoinGroup {

  allGroups: any[];

  constructor(private groupList: GroupList){
    this.allGroups = groupList.getGroups("allGroups");

        firebase.database().ref('/').on('child_changed', (snapshot) => { 
            this.allGroups = [];
            
            firebase.database().ref('/').on('child_added', (snapshot) => {
                this.allGroups.push(snapshot.val());
                
            });

            });


  }

}