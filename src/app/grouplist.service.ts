declare var firebase: any;

export class GroupList{    
    groups = [];
    nodeKeys = [];
    groupsOfCurrentUser = [];

    constructor(){
    }

    addGroup(group){
        //Firebase: getting data from realtime database
        firebase.database().ref('/').push(group);        
    }

    getGroups(type){
        this.groups = [];
        this.nodeKeys = [];
        this.groupsOfCurrentUser = [];

        //Firebase: adding data to realtime database
        firebase.database().ref('/').on('child_added', (snapshot) => {
           this.groups.push(snapshot.val());
            this.nodeKeys.push(snapshot.key);


            if(snapshot.val()['username'] == "afzal"){
                this.groupsOfCurrentUser.push(snapshot.val());    
            }

            
        });

        if(type == "allGroups"){
            return this.groups;
        }
        else if(type == "dltGroups"){
            return [this.groups, this.nodeKeys];
        }
        else if(type == "groupOfCurrentUser"){
            return this.groupsOfCurrentUser;
        }
    }


    getGroupsOfCurrentUser(){
        return this.groupsOfCurrentUser;
    }

    updateCurrentUserGroupList(){
        this.groupsOfCurrentUser = [];
        for(let i = 0; i<this.groups.length; i++){

        if(this.groups[i].username == 'afzal'){
            this.groupsOfCurrentUser.push(this.groups[i]);
        }
        }
        
    }
    
    deleteGroup(key){
        firebase.database().ref(key).remove();

    }

    childRemoved(index){

        firebase.database().ref('/').on('child_removed', (snapshot) => {
                this.nodeKeys.splice(index, 1);
  
        });
        
    }

}
   