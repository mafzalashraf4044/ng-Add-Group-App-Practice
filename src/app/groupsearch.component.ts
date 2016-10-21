import {Component} from "@angular/core";

@Component({
  selector: 'search-group',
  template: `
    <div id="searchPanel">
      <div id="searchBox">
        <div id="searchIcon"><i class="fa fa-search"></i></div>
        <div class="form-group">
          <input type="text" class="form-control" name="search" id="search" placeholder="Search">
        </div>        
        <div class="dropdown pull-right">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Every One
          <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Every One</a></li>
            <li><a href="#">Online</a></li>
            <li><a href="#">Offline</a></li>
          </ul>
        </div>

        

      </div>
      <div id="resultBox">
        <table class="table table-striped">
            <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Last Modified</th>
            </tr>

            <tr *ngFor="let group of groupsInfo">
                <td>{{group.name}}</td>
                <td>{{group.team}}</td>
                <td>{{group.date}}</td>
            </tr>
        </table>      
      </div>
    </div>      

  `,
  styles: [`
    #searchPanel{box-shadow: 0 0 2px 1px #bfc0c1;
                 background-color: white;
                 height: 77vh;}

     #searchPane::-webkit-scrollbar {
        width: 0.5em;
     }
    
     #searchPane::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
     }
    
     #searchPane::-webkit-scrollbar-thumb {
       background-color: darkgrey;
       outline: 1px solid slategrey;
     }


    #searchBox>*{display: inline-block;}
    #searchBox{border-bottom: 1px solid lightgrey;
               padding: 0.5em;}

    #searchIcon{font-size: 2em; padding: 0.4em; color: #6a6a6a;}

    input#search, input#search:focus{border: none;
                                     outline: none;
                                     font-size: 1.2em;
                                     box-shadow: none;}
    
    button.btn.btn-primary.dropdown-toggle{border-radius: 0px;
                                           color: #BDBDBD;
                                           font-size: 1.2em;
                                           background-color: transparent;
                                           border: none;
                                           margin: 15px auto;
                                           border-bottom: 1px solid #BDBDBD;
    }

    .dropdown-menu{position: absolute;
                   top: 10px;}

    #searchResult{padding: 2em;}

    table{font-size: 0.95em;}

    table th, table td{color: #6CCDF9;
                       text-align: center;}

  `]   
})

export class GroupSearch {

    groupsInfo = [
      {name: 'ng2Group', team: 'Afzal', date: '20-Sep-2016'},
      {name: 'React', team: 'Umair', date: '20-Sep-2016'},
      {name: 'JavaScriptChamps', team: 'Ahmed', date: '25-June-2016'},
      {name: 'Web Designers', team: 'Mudassir', date: '12-Jan-2016'},
      {name: 'Java Programmers', team: 'Afzal', date: '10-Feb-2016'},
      {name: 'ng1Group', team: 'Salik', date: '29-Dec-2015'},
    
    ];


    constructor(){

    }
   
}