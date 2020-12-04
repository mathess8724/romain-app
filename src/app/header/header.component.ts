import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  Prismic = require('prismic-javascript');
  PrismicData = 'test';

  changeTest(){
    this.PrismicData = 'changed!';
  }

  getPrismic(){

  let   Prismic = require('prismic-javascript');
   let  apiEndpoint = "https://sunrise-app.cdn.prismic.io/api/v2";
    Prismic.default.getApi(apiEndpoint, ).then(function(api : any) {
      return api.query(""); // An empty query will return all the documents
    }).then(function(response : any) {
      //console.log("Documents: ", response.results);
      return response.results

    }, function(err : any) {
      console.log("Something went wrong: ", err);
    });
  }

  constructor() {
    
   }

  ngOnInit(): void {

    //this.PrismicData = this.getPrismic();
    console.log(this.PrismicData)

  }

}

/* var Prismic = require('prismic-javascript');

var apiEndpoint = "https://your-repository-name.cdn.prismic.io/api/v2";

Prismic.getApi(apiEndpoint, { req: req }).then(function(api) {
  return api.query(""); // An empty query will return all the documents
}).then(function(response) {
  console.log("Documents: ", response.results);
}, function(err) {
  console.log("Something went wrong: ", err);
}); */
