import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;

    handleOption1= false ;
    handleOption2= false ;
    handleOption3= false ;

    handleClick1(event){

        this.handleOption1 = true;
        this.handleOption2 = false;
        this.handleOption3 = false;

    }

    handleClick2(event){

        this.handleOption1 = false;
        this.handleOption2 = true;
        this.handleOption3 = false;

    }

    handleClick3(event){
        
        this.handleOption1 = false;
        this.handleOption2 = false;
        this.handleOption3 = true;

    }

    

    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] = !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}