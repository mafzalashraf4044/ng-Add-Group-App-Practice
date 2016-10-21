import {Component} from "@angular/core";

//Service
import {GroupList} from './grouplist.service';

@Component({
  selector: 'group',
  template: `
    <div class="container-fluid">

        <div class="row">

            <div *ngFor="let group of groups">
              <div class="groupCard"> 
                <img src="https://s3-us-west-2.amazonaws.com/defaultimgs/teamofteams.png">

                <h3>{{group.name}}</h3>
                <h5><i class="fa fa-map-marker"></i> {{group.address}}</h5>

                <div class="container-fluid">
                  <div class="row groupBottom">
                    <div class="col-md-4">
                      <a href="#" id="profile"><i class="fa fa-user"></i></a>
                    </div>
                    
                    <div class="col-md-8">
                      <h5>{{group.cell}}</h5>
                    </div>
                  </div>
                
                </div>              
              </div>
            </div>      
        </div>
    </div>    


  `,
  styles: [`
    .row{text-align: center;}
    .row > *{display: inline-block;}

    .groupCard{box-shadow: 0 0 2px 1px #bfc0c1;
               background-color: white;
               width: 99%;
               color: #6CCDF9;
               width: 200px;
               display: inline-block;
               margin: 0px 10px 15px 10px}

    .groupCard > h5, .groupCard > h3{text-align: center;}

    .groupBottom{border-top: 2px solid #bfc0c1;}

    .groupBottom > .col-md-4{border-right: 2px solid #bfc0c1;}


    img{display: block;
        margin: 0 auto;
        width: 130px;
        height: 130px;}

    #profile{display: inline-block;
             border-radius: 100%;
             background-color: #f0efef;
             padding: 10px;
             margin: 5px;}


    
  
  `],
  inputs: ['groups'],
})

export class Group {
  groups: any[];
  
   
}