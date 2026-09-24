import { LightningElement, api, track } from 'lwc';

export default class VariableUnderstanding extends LightningElement {
     
    //private varibales
    memberName = 'harshit';
    myListofBooks = [];

    // decorators
    @track myPersonality = {
        name: 'Vinod',
        age: 35,
        rank: 9,
        language: 'French'  
    };
    @api tryingTHIS = 'tried now';

    
    //public varibales
    @api myFavTeam = 'Kolkata Knight riders';
} 