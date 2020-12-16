import { Component, Input, OnInit } from '@angular/core';
import  moment from 'moment';
import timer from '../../app/countdown/timer';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit { 
  // input variables
  @Input() public finishdate: string = '';
  @Input() public icoUrl: string = '';
  
  countdown: any = {
    'days': null,
    'hours': null,
    'minutes': null,
    'seconds': null
  };
  
  
  constructor() { }
    
  

  startCountdown = () =>{
    setInterval(() => { this.finishdate != '' ? this.countdown = timer(this.finishdate) 
     : console.log('error: you must put a valid date for use the countdownn')},
    1000);
  }

  ngOnInit(): void {
  
   this.startCountdown();
    
  }
}
