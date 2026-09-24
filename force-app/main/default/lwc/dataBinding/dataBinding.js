import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

   userName = 'Tanisha';
   currentTime = new Date();
   subscriberScore = 9 ;
   totalLessonsWatched = 10 * 5 ;

   memberStatus ;

   updateMemberStatus(event){
       console.log('Event received is :' + event.target);
       console.log('Event received is :' + typeof (event.target));
       console.log('Event received is :' + event.target.value);
       console.log('Event detail received is :' + JSON.stringify(event.detail));
       this.memberStatus = event.target.value;
       
   }
}