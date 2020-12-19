import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory/lib/fragmentMatcher';
import fragmentTypes from '../graphql/fragmentTypes.json';
import query from 'src/app/graphql/query'; // this is a query function who query graphql db with the url param
let InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
let ApolloClient = require("apollo-client").ApolloClient;
let gql = require("graphql-tag");
let PrismicLink = require("apollo-link-prismic").PrismicLink;

// initialize the fragmentMatcher for querys
// !! the fragmentTypes json file is a scheman who is created with 'schemaQuery.js' file, don't forget 
// to use 'npm run build-fragment' if the schema query change on prismic
// or you get an heuristic apollo error !!
// the 'schemaQuery.js will fetch the prismic graphql possibilities and write it in the 
// fragmentTypes.json file
const fragmentMatcher = new IntrospectionFragmentMatcher(
  { introspectionQueryResultData: fragmentTypes },
);
//-----------------------------------------------------------------

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() ngSwitch: any;

  title = 'sunrise-prismic';
  PrismicData: any;
  test: any = [];
  // prismic data array
  prismicData:any = [];
  //---------------------

  loading = true;
  error: any;
  url: string = '';
  notFound = false;
  // prismic data temp variable (used in the prismic graphql query)
  cardsGroupSmall: any;
  cardsGroupMedium: any;
  countdown = [];
  //-------------------------
  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      console.log('Page loaded => ' + params.pageName);
      // check the page url and put it in variable
      this.url = `/${params.pageName}`;
      //--------------------------------
    });
  }
  // initialize apollo client for graphql querys with the schema(fragmentTypes) created by schemaQuery.js file
  client = new ApolloClient({
    link: PrismicLink({
      uri: "https://sunrise-app.prismic.io/graphql"
    }),
    cache: new InMemoryCache({ fragmentMatcher })
  });
  //--------------------------------------------------------

  ngOnInit(): void {
    // query prismic using possibilities wrote in the schema file (fragmentTypes.json)
    this.client.query({
      query: query(this.url, "en-us")
    }).then((response: any) => {  
      console.log(response)    
      // if the url page don't match with the url from prismic page document, then error 404 not found
      if(response.data.page.url === this.url === false){
        this.notFound = true      
        return;
      }
      // map of the response and push in prismicData array
      response.data.page.body.map((slice:any,index:number) => (

        this.prismicData.push(slice)
      ));
    // if error =>        
    }).catch((error: any) => {
      console.error(error);
    });
   //--------------------------------------------------------------------------------


  }

  
}
