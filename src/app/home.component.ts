import {Component} from "@angular/core";

declare var firebase: any;
//Service
import {GroupList} from './grouplist.service';

@Component({
  selector: 'home',
  template: `
    <div class="container" style="padding: 0px;">

        <div class="row">
            <div class="col-md-7">
                <search-group></search-group>
            </div>
                
            <div class="col-md-5 groupArea" [ngClass]="{overflow: groupsOfCurrentUser.length>4}">             
              <h3 [ngClass]="{decreasePadding: groupsOfCurrentUser.length>4, increasePadding: groupsOfCurrentUser.length<=4}">My Groups</h3>
              <group [groups]="groupsOfCurrentUser"></group>
            </div>
        </div>
    </div>  
  `,
  styles: [`
    .groupArea{height: 77vh;
     }

     .overflow{overflow-y: scroll;}

     .groupArea::-webkit-scrollbar {
        width: 0.5em;
     }
    
     .groupArea::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
     }
    
     .groupArea::-webkit-scrollbar-thumb {
       background-color: darkgrey;
       outline: 1px solid slategrey;
     }

     .groupArea > h3{color: #C8C8C8; font-weight: bold; margin-top: 0px;}
     .decreasePadding{padding-left: 16px;}
     .increasePadding{padding-left: 25px;}

  `]
})

export class Home {
  groupsOfCurrentUser: any[] = [];
  index = 0;
  
  constructor(private groupList: GroupList) {
    this.groupsOfCurrentUser = groupList.getGroups("groupOfCurrentUser");

        firebase.database().ref('/').on('child_changed', (snapshot) => { 
            this.groupsOfCurrentUser = [];
            
            firebase.database().ref('/').on('child_added', (snapshot) => {
                this.groupsOfCurrentUser.push(snapshot.val());
                
            });

            });


  }


}