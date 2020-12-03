import { Component } from '@angular/core';
import  * as moment from 'moment';
import { promise } from 'protractor';
import { Plugins } from 'protractor/built/plugins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  end : any


  plus(){

  }


  ngOnInit(): void {


    setTimeout(function(){; }, 3000);

  }



  counter(){

  }

  title = 'romain-app';
  /* counter = moment().format('dddd'); */
}
