import { Component } from '@angular/core';
import  * as moment from 'moment';
import { promise } from 'protractor';
import { Plugins } from 'protractor/built/plugins';

interface demo {
  key: string;
  value: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

PrismicData :any  ;
test : any=[];

endpointPrismic(){
  const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://sunrise-app.cdn.prismic.io/api/v2')
  .then(function (response:any) {
    // handle success
    console.log(response);
  })
  .catch(function (error:any) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}



createDemo(mydemo: any): Array<demo> {
  const tempdemo: Array<demo> = [];

  // Caution: use "of" and not "in"
  for (const key of Object.keys(mydemo)) {
      tempdemo.push(
          { key: key, value: mydemo[key]}
      );
  }

  return tempdemo;
}


changeData(data:any){
//console.log(this.createDemo(data))
let t = data
    t.map((entri:any,index:any) =>(
      console.log(entri.id)
    ))
}

 async getPrismic(){
   const datareturn =(data:any)=>{
    console.log(Object.entries(data))
    //return JSON.stringify(data)

    }
    let   Prismic = require('prismic-javascript');
   let  apiEndpoint = "https://sunrise-app.cdn.prismic.io/api/v2";
   Prismic.default.getApi("https://sunrise-app.cdn.prismic.io/api/v2", ).then(function(api:any) {
       return api.query(
    Prismic.default.Predicates.at('document.type', 'card-my-sunrise'),
    { orderings : '[card-my-sunrise.date ]' }
  );
}).then(function(response : any) {
      //console.log( response.results);
      //console.log(Prismic)
      datareturn(response.results)
    }, function(err : any) {
      console.log("Something went wrong: ", err);
    });
  }




  plus(){
    this.PrismicData = this.getPrismic();
    //console.log(this.getPrismic())
    this.getPrismic
  }


  ngOnInit(): void {
    //this.PrismicData = Object.entries(this.getPrismic());
    this.getPrismic();


  }



  counter(){

  }

  title = 'romain-app';
  /* counter = moment().format('dddd'); */
}
